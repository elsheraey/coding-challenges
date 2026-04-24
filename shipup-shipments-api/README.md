# Shipments API

> **Stack:** NestJS + TypeScript (against a pre-seeded PostgreSQL database, originally spec'd in Rails).
> **Origin:** Take-home for interview process with [**Shipup**](https://www.shipup.co), 2023.
> **Format:** Take-home. The companion live coding interview from the same process is [`shipup-package-delivery`](../shipup-package-delivery) in this repo.

**NestJS + TypeScript take-home for Shipup, 2023. Implement a `GET /api/v1/shipments` REST endpoint against a pre-seeded PostgreSQL database, with an iteratively-layered rspec test suite as the specification.**

A language-agnostic backend challenge: implement a REST API endpoint against a pre-seeded Postgres database, verified by an rspec test suite.

See [`original-README.md`](./original-README.md) for the README I wrote alongside the original repo.

## The problem

Given a PostgreSQL database with already seeded tables and data, build a web server that exposes:

```
GET /api/v1/shipments
```

The endpoint must return JSON matching the specification in `spec/api/v1/shipments_*_spec.rb`, a set of rspec tests that ping the URL with various parameters and examine the response.

**Language-agnostic by design.** Shipup's backend is Ruby on Rails, but the challenge accepts any web stack: Node + Express, Python + Django/Flask, Go, or anything else. The tests are rspec + Ruby purely because they're readable regardless of the candidate's stack.

**Iterative by design.** Four spec files, each exercising a different layer of complexity. Candidates are encouraged to commit one per spec file.

### Database

The seed data lives in a remote read-only Postgres:

| Field | Value |
|---|---|
| Host | `shipup-glexport.cfu73h8ke9p3.eu-west-1.rds.amazonaws.com` |
| Port | `5432` |
| Database | `shipup_test_db` |
| Username | `readonly_user` |
| Password | `readonly` |

Tables: `companies`, `shipments`, `products`, and one more (details in the original [`challenge/README.md`](./challenge/README.md)).

## My approach

- **Chose NestJS over Express or Rails.** Nest's module + controller + service layering matches the "multiple spec files each adding a layer" iteration model, so each increment drops into a clear place rather than mutating a single route file.
- **TypeORM over raw SQL.** The tables were small and relational; entity mapping made iterating on the spec evolution cleaner than hand-written queries.
- **One commit per spec file**, as the challenge recommended. Preserved in the solution folder's history.
- **No attempt to rewrite the test harness in TypeScript.** The rspec suite was the specification; the test-running side stayed Ruby (via Docker), and my job was to satisfy it.

## Structure

```
challenge/   Original challenge description + the rspec test harness
solution/    My NestJS implementation
```

## Running it

See [`solution/README.md`](./solution/README.md) for build + run instructions. The test harness in `challenge/` uses Docker if Ruby isn't installed locally.

```bash
# Run the rspec tests against your running server:
cd challenge
docker-compose run spec bundle exec rspec

# Or if ruby is installed locally:
bundle install
bundle exec rspec
```
