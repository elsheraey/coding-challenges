## Initial Thoughts

This showcases questions and thoughts I presented myself before tackling the problem.

- Since Mantine is new for me, I will start from [Usage with create-react-app](https://mantine.dev/guides/cra) and build incrementally from there.

- Will I need to use a tool for state management like Redux?

  - It might be useful if I want to complicate things...
  - Try to start without it and see how it goes.

- Will I need to do routing?

  - It would be cleaner to have separate pages... 
  - Just Don't forget to protect the routes that require authentication.

- Should I build a backend or just mock it up in the frontend?

  Build a backend since it will allow me to:
  - Mimic the real world more where both are separate.
  - Show API consumption using axios, etc.
  - Showcase backend skills.

- Should I use NextJS and build a full stack app? If not, what should I use for the backend and DB?
  
  No, Using a backend-targeted framework like NestJS would be a better choice to speed up dev since it's Eid. 
  
  Lets use:
    - NestJS to serve our APIs, 
    - PostgreSQL for the database, 
    - and Prisma as the ORM since it will allow me to quickly form the schema.

- Should I create a monorepo using [Nx](https://nx.dev) or [Turborepo](https://turbo.build)?

  Nah, as it will enable me to:
  - Easily deploy them separately to Vercel and Heroku/Render.
  - Avoid unnecessary configuration.

- What kind of authentication should we build?

  - Go with Firebase Auth or Auth0 for speed. 
  - Build a simple JWT-based auth.