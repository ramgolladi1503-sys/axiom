# AIXION LABS Landing Page

Public-facing landing page for **AIXION LABS**.

The site now uses the Logo 3 forged-network identity direction:

- parent brand: **AIXION LABS**
- flagship product: **AIXION Control Tower**
- visual language: dark, minimal, forged-system identity
- brand story: layered effort, resilient architecture, trusted execution, and human oversight of AI/code actions

## Run

1. Start the backend if needed:

```bash
redis-server
uvicorn api.server:app --reload
```

2. Start the frontend:

```bash
cd frontend
npm install
npm run dev
```

## Notes

- Frontend renders the public AIXION LABS landing page.
- AIXION Control Tower is presented as the flagship product under the parent AIXION LABS brand.
- The FastAPI backend still exposes `/health` and `/ws` for existing event streaming.
