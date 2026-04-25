from __future__ import annotations

from dataclasses import asdict, dataclass, field
from datetime import datetime, timezone
from typing import Any, Literal
from uuid import uuid4

OrderSide = Literal["BUY", "SELL"]
PositionSide = Literal["LONG", "SHORT"]
PositionStatus = Literal["OPEN", "CLOSED"]


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


@dataclass(frozen=True)
class FillRecord:
    """Actual broker execution record.

    This is the source of truth for lifecycle positions. Do not create positions
    from candidate quantity, requested quantity, or theoretical entry price.
    """

    order_id: str
    symbol: str
    side: OrderSide
    quantity: int
    fill_price: float
    fill_id: str | None = None
    exchange_order_id: str | None = None
    expected_price: float | None = None
    strategy: str | None = None
    candidate_id: str | None = None
    filled_at: str = field(default_factory=utc_now_iso)
    metadata: dict[str, Any] = field(default_factory=dict)

    def __post_init__(self) -> None:
        if not self.order_id:
            raise ValueError("FillRecord.order_id is required")
        if not self.symbol:
            raise ValueError("FillRecord.symbol is required")
        if self.side not in {"BUY", "SELL"}:
            raise ValueError(f"Invalid side: {self.side}")
        if int(self.quantity) <= 0:
            raise ValueError("FillRecord.quantity must be positive")
        if float(self.fill_price) <= 0:
            raise ValueError("FillRecord.fill_price must be positive")

    @property
    def idempotency_key(self) -> str:
        if self.fill_id:
            return f"fill:{self.fill_id}"
        if self.exchange_order_id:
            return f"exchange:{self.exchange_order_id}:{self.quantity}:{self.fill_price}"
        return f"order:{self.order_id}:{self.side}:{self.symbol}:{self.quantity}:{self.fill_price}:{self.filled_at}"

    @property
    def slippage_pct(self) -> float | None:
        if self.expected_price is None or self.expected_price <= 0:
            return None
        if self.side == "BUY":
            return ((self.fill_price - self.expected_price) / self.expected_price) * 100
        return ((self.expected_price - self.fill_price) / self.expected_price) * 100

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)

    @classmethod
    def from_dict(cls, data: dict[str, Any]) -> "FillRecord":
        return cls(**data)


@dataclass
class Position:
    position_id: str
    symbol: str
    side: PositionSide
    quantity: int
    avg_entry_price: float
    opened_at: str
    updated_at: str
    status: PositionStatus = "OPEN"
    strategy: str | None = None
    candidate_id: str | None = None
    realized_pnl: float = 0.0
    source_order_ids: list[str] = field(default_factory=list)
    fill_ids: list[str] = field(default_factory=list)
    metadata: dict[str, Any] = field(default_factory=dict)

    @classmethod
    def open_long_from_fill(cls, fill: FillRecord) -> "Position":
        now = utc_now_iso()
        return cls(
            position_id=f"pos_{uuid4().hex[:12]}",
            symbol=fill.symbol,
            side="LONG",
            quantity=int(fill.quantity),
            avg_entry_price=float(fill.fill_price),
            opened_at=fill.filled_at or now,
            updated_at=now,
            strategy=fill.strategy,
            candidate_id=fill.candidate_id,
            source_order_ids=[fill.order_id],
            fill_ids=[fill.idempotency_key],
            metadata={"created_from": "FillRecord", "last_slippage_pct": fill.slippage_pct},
        )

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)

    @classmethod
    def from_dict(cls, data: dict[str, Any]) -> "Position":
        return cls(**data)
