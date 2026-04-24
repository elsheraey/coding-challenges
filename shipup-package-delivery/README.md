# Package Delivery

> **Stack:** Python 3
> **Origin:** Live coding interview with [**Shipup**](https://www.shipup.co), 2023.
> **Format:** Live interview, solved against the clock.
> **Outcome:** Passed the problem-solving and culture-fit interviews. Fell short on the system-design follow-up; they were looking for someone more senior. No offer extended.

**Python live-coding interview with Shipup, 2023. A three-level delivery-date modelling problem with ascending complexity (carrier promises, non-working days, oversea distance delays) solved against the clock.**

A three-level delivery-date modelling problem solved live during a Shipup coding interview. The companion take-home from the same interview process is [`shipup-shipments-api`](../shipup-shipments-api) in this repo.

See [`original-README.md`](./original-README.md) for the README I wrote alongside the original repo.

## The problem

Model the expected delivery date for online orders shipped through various shipping carriers. The challenge is structured as three levels of ascending complexity. You iterate from the simplest case to the most complex, building on each level's solution.

### Level 1: Carrier promises

Each shipping carrier has specific delivery promises in days. The online retailer assigns a shipping date and a carrier to each order. Compute the expected delivery date for each package.

### Level 2: Non-working days

- Carriers do not work on Sundays.
- Some carriers work on Saturdays, others do not.
- When a carrier isn't working, package deliveries do not progress, so delivery is postponed by one day.

Adapt the expected-delivery computation to account for these rules.

### Level 3: Oversea delays

Shipping overseas takes longer. Delay varies by carrier and by distance (simplified to country-to-country).

- Carriers add one day to their delivery promise for every *[oversea delay]* km between origin and delivery country.
- Oversea-delay threshold varies by carrier.

Example: Colissimo ships in 3 business days normally, but a package from France to Japan takes 6 business days (Japan is 9,500 km from France; Colissimo's oversea-delay threshold is 3,000 km).

Compute the new expected deliveries with extended delays. Weekends still apply. Include the oversea-delay length (days) in the output.

## Format

- Each level lives in its own folder.
- For each level: read `data/input.json`, produce `data/output.json`, compare against `data/expected_output.json`.
- One commit per level.

## My approach (under time pressure)

- **Language:** Python 3, chosen for clarity and iteration speed over the default Ruby.
- **Progressive refactoring across levels.** Level 1 was written as the simplest thing that could work; level 2 introduced a working-days abstraction; level 3 generalised the carrier model to support thresholds and distance tables.
- **Separation of concerns.** Carrier rules, calendar logic, and distance tables each ended up in their own module by the end of level 3, so each rule type could be extended independently.
- **Data-driven verification.** The provided `expected_output.json` at each level was both the specification and the test fixture, an effective check under interview time constraints.

## What the follow-up exposed

The coding portion went well; I passed it along with the culture-fit interview. The system-design follow-up asked me to extend the model from a batch job into a distributed service (sharding, eventual consistency across carrier updates, backpressure, and so on), and my answers there weren't strong enough for the seniority bar Shipup was targeting at the time. Honest outcome, clearly communicated by the team.

## Running it

```bash
cd level1         # or level2, level3
python3 main.py
```

Outputs `data/output.json`. Compare against `data/expected_output.json` to verify correctness.
