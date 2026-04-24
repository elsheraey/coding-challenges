# coding-challenges

**Interview take-homes, live coding exercises, and pre-screening briefs I've completed, from [Syntheia](https://syntheia.io), Femto, [Shipup](https://www.shipup.co), [Vorboss](https://www.vorboss.com) (UK), [Bending Spoons](https://bendingspoons.com), and [Optomatica](https://www.optomatica.com). Each folder carries the original problem statement, the company and person who gave it, my approach notes, and honest outcomes, including the ones that didn't land.**

A curated set of interview coding challenges I've completed: take-homes, live interviews, and pre-screening exercises. Preserved with the original problem statements, the companies and people behind them, and the approach I took.

Not tutorials. Not portfolio bait. The work as it was actually delivered, with honest context around each one.

Each folder is prefixed by the company name so the landscape is legible at a glance.

---

## Index

| Challenge | Stack | Company | Format | Given by | Year |
|---|---|---|---|---|---|
| [syntheia-search-box](./syntheia-search-box) | React + TypeScript | [Syntheia](https://syntheia.io) | Take-home | Syntheia engineering team | 2023 |
| [femto-personal-finance](./femto-personal-finance) | React + Mantine · NestJS + Prisma · TypeScript | Femto | Take-home | [Mostafa Hesham](https://www.linkedin.com/in/mostafahisham10), then CTO (now Engineering Manager at [Thndr](https://www.thndr.com)) | 2023 |
| [shipup-shipments-api](./shipup-shipments-api) | NestJS + TypeScript | [Shipup](https://www.shipup.co) | Take-home | Shipup engineering team | 2023 |
| [shipup-package-delivery](./shipup-package-delivery) | Python 3 | [Shipup](https://www.shipup.co) | Live interview | Shipup engineering team | 2023 |
| [vorboss-purrfect-creations](./vorboss-purrfect-creations) | NestJS · React · Airtable · Docker | [Vorboss](https://www.vorboss.com) (UK) | Take-home | [Ross Deane](https://www.linkedin.com/in/rossdeane/), Head of Software Engineering | 2023 |
| [bending-spoons-sports-paywall](./bending-spoons-sports-paywall) | HTML + CSS (vanilla) | [Bending Spoons](https://bendingspoons.com) | Automated pre-screening (emailed before any interview) | None | 2023 |
| [optomatica-ml](./optomatica-ml) | Python + Jupyter | [Optomatica](https://www.optomatica.com) | Take-home (internship) | [Aliaa Rassem](https://www.linkedin.com/in/aliaa-rassem-39566326), then Data Science Lead; [Amgad Naiem](https://www.linkedin.com/in/amgad-naiem-65012367), Director of Technology and Solutions | Pre-ChatGPT (original) / 2023 (redo) |

## Authored briefs

Interview briefs I **wrote**, rather than solved. Kept alongside the completed challenges because they're the same body of work viewed from the other side of the desk.

| Folder / Link | Stack | Company | Purpose |
|---|---|---|---|
| [Dytomic/ball-simulation](https://github.com/Dytomic/ball-simulation) (external) | HTML · CSS · JavaScript (vanilla DOM + CSS transforms) | Dytomic (gaming, Montreal) | Live technical interview starter for a game-developer role. A browser-based physics sandbox (1,000 balls, gravity, wall bounces, stubbed collision detection) that candidates extend under time pressure. Lives at the Dytomic org rather than here because it's a hiring artefact owned by the company. |
| [optomatica-basic-web-store](./optomatica-basic-web-store) | HTML · CSS · JavaScript · jQuery · Bootstrap · React (final phase) | [Optomatica](https://www.optomatica.com) | Junior-frontend take-home brief and mentoring track, structured as four ascending phases |

## Preparation

Tutorial walkthroughs and course exercises I completed as study material for specific interview processes. Not interview work themselves, kept here for completeness. See [`syntheia-prep/`](./syntheia-prep) for the full index.

| Folder | Source | Prepared for |
|---|---|---|
| [syntheia-prep/freecodecamp-micro-fes](./syntheia-prep/freecodecamp-micro-fes) | freeCodeCamp, Micro-Frontends Course (Jack Herrington) | [Syntheia](https://syntheia.io) frontend interview stage |
| [syntheia-prep/netninja-tailwind](./syntheia-prep/netninja-tailwind) | The Net Ninja, Tailwind CSS Tutorial | [Syntheia](https://syntheia.io) frontend interview stage |

## Conventions

Each challenge lives in its own folder with:

- **`README.md`**: the refined README with context (company, format, outcome), problem statement, my approach, and how to run it.
- **`original-README.md`**: the README I originally shipped alongside the source repo. Preserved as a record of the pre-ChatGPT-era writing, untouched.
- **A self-contained build.** No shared tooling at the root; each project is independent.
- **The original code as delivered.** Lightly documented but not retroactively rewritten.

## How to read these

The refined READMEs follow a consistent three-part structure:

1. **The problem**, preserved verbatim where the original was clear enough.
2. **My approach**, what I chose, why, and what I deliberately left out.
3. **Running it**, commands and prerequisites.

Each challenge also carries context that can't be inferred from the code alone: the **company**, the **format** (take-home, live, pre-screening), the **person** who gave it to me where named, and the **outcome**.

Authored briefs (see [above](#authored-briefs)) follow a different structure, since "approach" and "outcome" don't apply in the same way. Those READMEs explain the design choices in the brief itself.

## Context on outcomes

- **[Syntheia](./syntheia-search-box)**: I took the offer. I'm now Director of Engineering at Syntheia.
- **[Femto](./femto-personal-finance)**: given by [Mostafa Hesham](https://www.linkedin.com/in/mostafahisham10), then CTO at Femto, now Engineering Manager at [Thndr](https://www.thndr.com). Passed the process, declined the offer to join [Syntheia](https://syntheia.io) instead.
- **[Shipup](./shipup-package-delivery)**: two-part process with a live coding interview ([`shipup-package-delivery`](./shipup-package-delivery)) and a take-home ([`shipup-shipments-api`](./shipup-shipments-api)). Passed the coding and culture-fit interviews; fell short on the system-design follow-up. They wanted someone more senior. No offer.
- **[Vorboss](./vorboss-purrfect-creations)**: given by [Ross Deane](https://www.linkedin.com/in/rossdeane/). Offer extended, role fell through during relocation due to their internal restructuring. Vorboss reimbursed me €3,500 for incurred relocation expenses, a gesture worth naming, and [a lesson learnt](./vorboss-purrfect-creations).
- **[Bending Spoons](./bending-spoons-sports-paywall)**: passed this challenge; dropped at a later interview stage.
- **[Dytomic, authored](https://github.com/Dytomic/ball-simulation)**: as a co-founder at Dytomic I authored [`ball-simulation`](https://github.com/Dytomic/ball-simulation), a live technical interview starter for game-developer candidates. The repo lives at the Dytomic org (not here) because it's a hiring artefact owned by the company.
- **[Optomatica, authored](./optomatica-basic-web-store)**: while at Optomatica I authored [`optomatica-basic-web-store`](./optomatica-basic-web-store), a four-phase junior-frontend take-home that doubled as a mentoring track for a specific junior developer and a reusable screening artifact for the team.
- **[Optomatica](./optomatica-ml)**: given by [Aliaa Rassem](https://www.linkedin.com/in/aliaa-rassem-39566326) (then Data Science Lead, now Software Testing Lead) and [Amgad Naiem](https://www.linkedin.com/in/amgad-naiem-65012367) (now Director of Technology and Solutions). Passed the original (pre-ChatGPT) solution, got the internship, later turned full-time. The code in this repo is a later ChatGPT-assisted redo of the same assignment, kept as a marker of the moment AI tooling first entered my workflow.

