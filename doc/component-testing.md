# Component Testing

Component tests verify isolated React components without driving the full application route flow. In this project they are focused on rendering, visible content, form fields, buttons, and component-level layout.

## Location

Component tests are stored in:

```text
app/cpc/tests/cypress/component
```

The component support file is:

```text
app/cpc/tests/cypress/support/component.ts
```

The Cypress configuration is:

```text
app/cpc/tests/cypress.config.ts
```

## Current Test Areas

Component tests are grouped by app area:

- `layout` tests calculator, converter, navbar, footer, hero, and app layout components.
- `pages` tests page components such as Main, Calculators, Converters, About Us, and Support.
- `ui` tests reusable UI components such as buttons, inputs, select fields, result boxes, and result tables.

## What Component Tests Should Cover

Use component tests for fast checks that a component renders correctly:

- Headings, labels, formulas, and static text are visible.
- Inputs, selects, buttons, and result areas are present.
- Basic component states render without crashing.
- Layout components such as navbar, footer, and hero show expected content.
- Reusable UI components receive props and display expected output.

Do not use component tests for full workflows such as:

- Calculator math correctness.
- Converter accuracy.
- Page navigation between routes.
- External links across the whole application.
- Contact form submission or API behavior.

Those belong in E2E tests or dedicated integration tests.

## Mounting Components

Component tests use Cypress React mounting through the custom `cy.mount` command:

```ts
cy.mount(<DewPointTemperature />);
```

The command is registered in:

```text
app/cpc/tests/cypress/support/component.ts
```

That file imports `mount` from `cypress/react` and adds it to Cypress commands.

## Example Pattern

A typical component test should:

1. Import the component from `app/cpc/src`.
2. Mount the component with `cy.mount`.
3. Assert visible text and controls.
4. Keep assertions local to the component.

Example:

```ts
import DewPointTemperature from '../../../../src/components/layout/Calculators/DewPointTemperature';

describe('DewPointTemperature Component', () => {
  it('renders calculator form with all input fields', () => {
    cy.mount(<DewPointTemperature />);

    cy.contains('Temperature').should('be.visible');
    cy.contains('Relative humidity').should('be.visible');
    cy.get('#temperature').should('be.visible');
    cy.get('#relativeHumidity').should('be.visible');
  });
});
```

## Running Component Tests

From `app/cpc`, run component tests headlessly:

```bash
npx cypress run --config-file tests/cypress.config.ts --component
```

To run only one component spec:

```bash
npx cypress run --config-file tests/cypress.config.ts --component --spec "tests/cypress/component/layout/DewPointTemperature.cy.tsx"
```

For interactive mode:

```bash
npx cypress open --config-file tests/cypress.config.ts --component
```

Unlike E2E tests, component tests use Cypress's component dev server configured with React and Vite, so a separate `npm run dev` server is not normally required.

## Configuration Notes

The component config uses:

- React component testing.
- Vite as the bundler.
- `app/cpc/vite.config.ts` as the Vite config source.
- `cypress/support/component-index.html` as the component test HTML file.
- `cypress/support/component.ts` as the support file.
- `cypress/component/**/*.cy.{ts,tsx}` as the spec pattern.

## Adding New Component Tests

1. Place the spec beside related tests in `layout`, `pages`, or `ui`.
2. Name it with the `*.cy.tsx` pattern.
3. Mount the component directly.
4. Assert visible output and controls.
5. Keep business logic checks in E2E tests unless the component itself owns that logic.
