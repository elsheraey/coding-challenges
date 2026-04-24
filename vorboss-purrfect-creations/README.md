# Purrfect Creations

> **Stack:** NestJS (API) · React + nginx (web) · Airtable (database, per requirement) · Docker
> **Origin:** Take-home for interview process with [**Vorboss**](https://www.vorboss.com) (UK), 2023.
> **Given by:** [Ross Deane](https://www.linkedin.com/in/rossdeane/), Head of Software Engineering.
> **Outcome:** Offer extended. The role ultimately fell through during relocation paperwork following internal restructuring on their side. Vorboss reimbursed me **€3,500** for the relocation expenses I had already incurred, a gesture on their part. By that point I had rejected other offers, paused my job hunt, tendered my notice at my then-employer, delegated responsibilities across several startups I was involved in, and started researching accommodation in the UK, all in anticipation of a move that then didn't happen. Lesson learned the hard way: treat "offer extended" and "paperwork signed" as different states, and don't collapse prior options until the second one is reached.

**Full-stack take-home for Vorboss UK, 2023. A containerized dashboard built with NestJS, React, nginx, and Docker, sourcing live business metrics from an Airtable-backed dataset.**

A containerized full-stack dashboard for a fictional small business ("Alice's Purrfect Creations", 3D-printed jewellery for cats), backed by an Airtable spreadsheet.

See [`original-README.md`](./original-README.md) for the README I wrote alongside the original repo.

## The problem

Alice runs a small business selling 3D-printed jewellery for cats. She tracks orders in an Airtable spreadsheet and wants a metrics dashboard she can glance at daily.

**Key figures required:**

- Total orders
- Total orders this month
- Number of orders in progress
- Revenue
- A list of the most recent orders
- Anything else judged useful

**Constraints:**

- Airtable stays the source of truth; Alice will continue to manage orders there.
- Internal tool, so no need to win design awards, but clean and maintainable code matters.
- Deployment must be containerized via Docker.

Full brief in [`Story.md`](./Story.md). Airtable API reference: https://airtable.com/app8wLQrrIMrnn673/api/docs.

## My approach

- **Thin NestJS API over Airtable.** Airtable's API is the actual database; the Nest layer adds request shaping, auth, and caching. This keeps the frontend decoupled from Airtable's SDK quirks and lets Alice keep using the spreadsheet as her source of truth.
- **React frontend served via nginx.** A static build, not SSR. The dashboard is internal, small, and doesn't need Next.js.
- **Dockerized end to end.** `docker-compose up` boots the API and web tiers together. The brief specifically called for containerization; I took it at face value rather than over-engineering a Kubernetes story.
- **Inline decision comments throughout**, searchable via `TODO`, `REVIEW`, and `NOTE` tags in the codebase.

## Running it

### Environment

Copy the provided `.env.example` files and fill credentials:

```bash
# API
cp api/.env.example api/.env          # set AIRTABLE_API_KEY
# Web
cp web/.env.example web/.env          # set REACT_APP_API_URL
```

The Airtable API key guide: https://support.airtable.com/docs/how-do-i-get-my-api-key

### Docker (recommended)

```bash
docker compose up
```

### Local (without Docker)

API and web can be run independently. Each has its own README:

- [`api/README.md`](./api/README.md) for the NestJS backend
- [`web/README.md`](./web/README.md) for the React frontend

## Structure

```
api/               NestJS + Airtable integration
web/               React dashboard (served via nginx in prod)
data/              Sample CSV / fixtures
docker-compose.yml Two-service compose for API + web
Story.md           Original problem brief from Vorboss
```
