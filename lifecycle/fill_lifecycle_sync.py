from execution.models import FillRecord, Position
from lifecycle.state import StateStore

class FillLifecycleSync:
    def __init__(self, store: StateStore | None = None):
        self.store = store or StateStore()

    def sync(self, fills: list[FillRecord]):
        positions = self.store.load_positions()
        processed = self.store.load_processed_fill_ids()

        for f in fills:
            key = f.idempotency_key
            if key in processed:
                continue

            if f.side == "BUY":
                self._handle_buy(f, positions)
            else:
                self._handle_sell(f, positions)

            processed.add(key)

        self.store.save_positions(positions)
        self.store.save_processed_fill_ids(processed)
        return positions

    def _handle_buy(self, f, positions):
        for p in positions:
            if p.symbol == f.symbol and p.side == "LONG" and p.status == "OPEN":
                total = p.quantity + f.quantity
                p.avg_entry_price = ((p.avg_entry_price * p.quantity) + (f.fill_price * f.quantity)) / total
                p.quantity = total
                p.updated_at = f.filled_at
                p.source_order_ids.append(f.order_id)
                p.fill_ids.append(f.idempotency_key)
                return
        positions.append(Position.open_long_from_fill(f))

    def _handle_sell(self, f, positions):
        for p in positions:
            if p.symbol == f.symbol and p.side == "LONG" and p.status == "OPEN":
                if f.quantity >= p.quantity:
                    pnl = (f.fill_price - p.avg_entry_price) * p.quantity
                    p.realized_pnl += pnl
                    p.quantity = 0
                    p.status = "CLOSED"
                else:
                    pnl = (f.fill_price - p.avg_entry_price) * f.quantity
                    p.realized_pnl += pnl
                    p.quantity -= f.quantity
                p.updated_at = f.filled_at
                return
