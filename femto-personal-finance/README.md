# Personal Finance

> **Stack:** React + [Mantine](https://mantine.dev) (frontend) · [NestJS](https://nestjs.com) + PostgreSQL + [Prisma](https://www.prisma.io) (backend) · TypeScript end to end
> **Origin:** Interview process with **Femto**, 2023.
> **Given by:** [Mostafa Hesham](https://www.linkedin.com/in/mostafahisham10), then CTO at Femto (now Engineering Manager at [Thndr](https://www.thndr.com)).

**Full-stack take-home for Femto, 2023. A savings-goal calculator built with React, Mantine, NestJS, Prisma, and PostgreSQL, with JWT auth and refresh tokens, passed the process; declined the offer to join Syntheia.**

A full-stack savings-goal calculator with JWT auth, refresh tokens, and a live-recalculating UI. Originally delivered as two separate repos coordinated via git submodules, consolidated here as a single monorepo.

See [`original-README.md`](./original-README.md) for the README I wrote alongside the original repo.

## The problem

Build a personal finance web app where users enter a savings goal and a monthly deposit is calculated automatically.

**Required:**

- Frontend using [React](https://react.dev) + [Mantine](https://mantine.dev).
- Backend using a language and database of your choice.

**User flow:**

- Landing page with **Register** and **Login**. On login, redirect to home.
- Home page shows existing savings goals and a button to create a new one.
- Creating a goal collects two fields: total amount to save, and target date.
- The monthly deposit is **calculated and displayed** from these inputs.
- Changing either input recalculates and redisplays the monthly deposit in real time.

**Example:**

- Total amount = $30,000
- Target date = October 2025
- Current date = October 2023
- Monthly deposit = $1,250 for 24 months

Full requirements: [`requirements.md`](./requirements.md).

## My approach

Thought process captured verbatim in [`initial-thoughts.md`](./initial-thoughts.md); condensed here:

- **Mantine was new to me.** Started from the [CRA guide](https://mantine.dev/guides/cra) and stayed close to documented patterns rather than reaching for custom abstractions.
- **Backend from scratch**, not mocked. A real backend lets me demonstrate API consumption with axios, auth, and a database schema, which is more realistic than faking it in the frontend.
- **NestJS + PostgreSQL + Prisma.** NestJS for API ergonomics and structure, PostgreSQL for familiarity, Prisma for schema velocity.
- **Not Next.js, not a monorepo tool.** Kept frontend and backend as independent deployables: Vercel for frontend, Heroku/Render for backend. Less configuration, clearer separation of concerns.
- **JWT with refresh tokens**, fully implemented on the backend. The frontend axios client accepts the tokens but doesn't yet rotate them automatically (left as explicit follow-up).
- **Redux**, adopted mid-way rather than planned. Initial instinct was to start without it; the breadth of auth state + goal state + UI state justified it.

## What I'd change now

- Add an axios request interceptor to auto-refresh on 401 (the planned follow-up above).
- Pagination + list virtualisation on goals when count is non-trivial.
- E2E tests. React Testing Library covers components, but a Playwright suite would catch regressions across the full flow.
- Response caching on the read-heavy endpoints.

## Structure

```
backend/     NestJS + Prisma + PostgreSQL API with JWT auth
frontend/    React + Mantine + Redux SPA
```

## Running it

```bash
# Backend
cd backend
cp .env.example .env        # fill DATABASE_URL + JWT secrets
yarn install
yarn prisma migrate deploy
yarn start:dev

# Frontend (in another terminal)
cd frontend
cp .env.example .env        # point REACT_APP_API_URL at the backend
yarn install
yarn start
```

## Resources

- [Full requirements](./requirements.md): problem statement as delivered.
- [Initial thoughts](./initial-thoughts.md): the planning doc I wrote before coding.
- [Database schema](./backend/prisma/schema.prisma).
- [API collection](./backend/insomnia.json), importable to Insomnia.

> The codebase includes comments tagged `TODO`, `OPTIMIZATION`, `REFACTOR`, and `NOTE` highlighting specific decisions and potential improvements.
