# Local Dev

1. To install dependencies:

```sh
bun install
```

2. Copy `.env.example` to your own `.env` file and fill in variables

3. To setup database

```sh
bun run docker:up
bun run db:generate
bun run db:migrate
```

4. To run:

```sh
bun run dev
```

open http://localhost:3000
