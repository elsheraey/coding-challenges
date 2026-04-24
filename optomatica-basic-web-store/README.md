# Basic Web Store

> **Stack:** HTML, CSS, JavaScript (jQuery, Bootstrap), with a React migration as the final phase
> **Origin:** [**Optomatica**](https://www.optomatica.com), 2023-era junior-frontend take-home and mentoring artifact.
> **My relationship to this one:** **Authored, not solved.** I wrote this brief while at Optomatica, both as a guided mentoring track for a junior developer and as a reusable take-home template for junior-frontend candidates.

**Junior-frontend take-home brief I authored at Optomatica. A four-phase progressive exercise (jQuery + Bootstrap through React) designed to teach DRY, abstraction, and framework migration by having the candidate feel the pain before the fix.**

The other folders in this repo are challenges *I completed*. This one is the opposite: a challenge *I designed*. It's kept here because it belongs with the rest of the interview-adjacent work and doesn't sit well as a standalone repo.

See [`original-README.md`](./original-README.md) for the full brief as I wrote it, preserved verbatim.

## What's here

The full take-home brief, structured as four progressive phases. The first three have working reference code committed as subfolders; the fourth is a design target for the candidate with no reference implementation.

1. **Initial Phase** ([`1-initial-phase/`](./1-initial-phase)). Two static HTML pages (books, music albums) with jQuery + Bootstrap, using semantic class names. The "don't repeat yourself" lesson is set up by hand here, to be felt in the refactor of phase 2.
2. **Single Page** ([`2-single-page/`](./2-single-page)). The site refactored into an SPA with dynamic DOM updates via JavaScript objects and jQuery event handlers.
3. **Generalization** ([`3-generalization/`](./3-generalization)). Product types abstracted into a generic `products` object, so adding a third category (e.g. electronics) doesn't touch rendering logic.
4. **Final Phase** (no reference code). Search, add-product form, and full migration to React. Left as a candidate-implementation step rather than a reference implementation.

Each phase's code was originally on its own git branch in the source repo. The three code branches are preserved verbatim as subfolders here; each keeps the README it shipped with.

## Design choices in the brief

A few notes on why the brief is structured the way it is, since the authoring decisions are more interesting than the implementation:

- **Four ascending phases rather than a single spec.** Gives the candidate a guided path through the common frontend evolution (static markup, vanilla DOM manipulation, generic abstractions, framework migration). Makes it easier to evaluate *where* a junior gets stuck.
- **jQuery + Bootstrap as the starting stack.** Deliberately older tooling, chosen because in 2023 it was still common in Egyptian software shops and juniors were likely to have encountered it. Forces the candidate to confront the pain points (global state, DOM fragility, repetition) that motivate modern frameworks, before introducing React as the fix in the final phase.
- **DRY introduced through consequence, not edict.** Phase 1 has the candidate duplicate a whole page. Phase 2 then asks them to refactor out of it. Learning by hitting the pain.
- **Generic `products` object as the key abstraction test.** Phase 3's ask ("add electronics without changing any rendering code") is a single-sentence way to check whether the candidate really internalised abstraction, or just mechanically extracted shared functions.
- **React as the final phase, not the starting point.** Candidates who jump straight to React miss the reasoning behind its constraints. Making it the reward at the end rather than the default means the candidate has to understand *why* before they get to use *what*.

## Why it's here

Optomatica reused this brief for both mentoring one junior developer and as a reusable take-home template for junior-frontend hiring. Keeping the brief in version control with phase branches preserves the exact expected state at each checkpoint, which is what made it reusable.

I'm keeping it alongside the other interview artifacts in this repo because it's part of the same body of work (the interview-prep / take-home domain) and because a one-README repo didn't justify its own top-level listing.

## Running it

No code runs at the top level of this folder; it's primarily a brief. To see the expected state at a given phase, open the corresponding subfolder:

```bash
cd 1-initial-phase      # or 2-single-page, or 3-generalization
# then open index.html directly in a browser, or serve:
python3 -m http.server 8000
```

The first three phases use only browser-native tooling (no build step, no bundler). The fourth phase (React) has no reference code; a candidate's React migration starts from the state in `3-generalization/`.
