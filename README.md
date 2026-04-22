
AIXION SYSTEMS LANDING PAGE

Run:

1. redis-server
2. uvicorn api.server:app --reload
3. cd frontend && npm install && npm run dev

Notes:
- Frontend now renders the public-facing Aixion Systems landing page instead of the live feed debug screen.
- The FastAPI backend still exposes /health and /ws for existing event streaming.
