# freeCodeCamp Micro-Frontends Walkthrough

> **Type:** Course walkthrough (study material, not an interview challenge)
> **Source:** [Micro-Frontends Course, Beginner to Expert](http://www.youtube.com/watch?v=lKKsjpH09dU) (Jack Herrington, via freeCodeCamp)
> **Prepared for:** [Syntheia](https://syntheia.io) frontend interview stage, 2023.
> **Original reference implementation:** [jherr/micro-fes-beginner-to-expert](https://github.com/jherr/micro-fes-beginner-to-expert)

**Prep walkthrough of Jack Herrington's micro-frontends course on freeCodeCamp, completed ahead of the Syntheia frontend interview. Covers Webpack Module Federation, shared state across federated apps, and cross-app events.**

My step-by-step follow-along of the freeCodeCamp micro-frontends course. Kept here as part of the record of what I studied ahead of the Syntheia frontend interview, specifically to get fluent in module federation and the cross-app composition patterns that Syntheia's frontend architecture touches.

## Progress

Completed through the **"Sharing the Cart"** section. The stopping point was deliberate: it covered the components I needed (module federation basics, shared state across federated apps, cross-app events). Later sections of the course go deeper into build-time optimisation which wasn't relevant to the prep.

## Structure

```
home/      Host app
pdp/       Product Detail Page (federated remote)
cart/      Cart (federated remote)
server/    Shared mock API
architecture.dio   Draw.io diagram of the composition
```

[![Watch the course on YouTube](http://img.youtube.com/vi/lKKsjpH09dU/0.jpg)](http://www.youtube.com/watch?v=lKKsjpH09dU)
