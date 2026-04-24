# personal-finance-web-challenge

A simple personal finance web app where users enter a saving goal and a monthly deposit is calculated for them.

## Tech Stack

- **Frontend:** React + Mantine
- **Backend:** NestJS + PostgreSQL + Prisma ORM

## Structure

```
frontend/   React + Mantine frontend
backend/    NestJS + PostgreSQL + Prisma backend
```

## Getting Started

See [`frontend/getting-started.md`](./frontend/getting-started.md) and [`backend/getting-started.md`](./backend/getting-started.md) for setup instructions.

## Resources

- [Requirements](./requirements.md)
- [Initial Thoughts](./initial-thoughts.md)
- [Database Schema](./backend/prisma/schema.prisma)
- [API Collection](./backend/insomnia.json)

## Notes

- JWT authentication with refresh tokens is fully implemented in the backend. The frontend axios client still requires a request interceptor to use refresh tokens upon access token expiration.
- Redux is used for state management (over localStorage).
- Potential improvements: pagination, list virtualization, caching, E2E and visual tests.

**Searchable comment tags throughout the codebase:** `TODO`, `OPTIMIZATION`, `REFACTOR`, `NOTE`
