from __future__ import annotations

import json, os
from execution.models import Position

class StateStore:
    def __init__(self, path: str = "runtime/state.json"):
        self.path = path
        os.makedirs(os.path.dirname(self.path), exist_ok=True)

    def load(self):
        if not os.path.exists(self.path):
            return {"positions": [], "processed_fill_ids": []}
        return json.load(open(self.path))

    def save(self, state):
        json.dump(state, open(self.path, "w"), indent=2)

    def load_positions(self):
        return [Position.from_dict(p) for p in self.load().get("positions", [])]

    def save_positions(self, positions):
        s = self.load(); s["positions"] = [p.to_dict() for p in positions]; self.save(s)

    def load_processed_fill_ids(self):
        return set(self.load().get("processed_fill_ids", []))

    def save_processed_fill_ids(self, ids):
        s = self.load(); s["processed_fill_ids"] = list(ids); self.save(s)
