# Running the App and Tests

This file describes the current scripts and test commands for `app/cpc`.

## Application commands

From `app/cpc`:

- Install dependencies:

```bash
npm install
```

- Run the development server:

```bash
npm run dev
```

- Build the app for production:

```bash
npm run build
```

- Run ESLint:

```bash
npm run lint
```

- Preview the production build locally:

```bash
npm run preview
```

## Cypress component tests

The component test configuration is in `tests/cypress.config.ts` under the `component` section.

- Open Cypress component test runner:

```bash
npx cypress open --config-file tests/cypress.config.ts --component
```

- Run component tests headlessly:

```bash
npx cypress run --config-file tests/cypress.config.ts --component
```

## Cypress E2E tests

The E2E configuration is in `tests/cypress.config.ts` under the `e2e` section.

- Open Cypress E2E runner:

```bash
npx cypress open --config-file tests/cypress.config.ts --e2e
```

- Run E2E tests headlessly:

```bash
npx cypress run --config-file tests/cypress.config.ts --e2e
```

### E2E notes

- The E2E tests use `baseUrl: http://localhost:5173/Convection-parameters-calculator/`.
- Start the Vite dev server with `npm run dev` before running E2E tests.
- The config enables `testIsolation: false`, `video: false`, and one retry for both run and open modes.
