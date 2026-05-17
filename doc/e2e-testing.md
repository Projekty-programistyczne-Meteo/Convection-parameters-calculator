# E2E Testing

End-to-end tests verify the application from the user's point of view: routing, navigation, page content, calculator results, converter results, responsiveness, and key links.

## Location

E2E tests are stored in:

```text
app/cpc/tests/cypress/e2e
```

Page Object Model helpers are stored in:

```text
app/cpc/tests/cypress/pages
```

The Cypress configuration is:

```text
app/cpc/tests/cypress.config.ts
```

## Current Test Suites

- `navigation.e2e.cy.ts` checks desktop navigation, mobile menu navigation, hash routes, and direct URL access.
- `calculators.e2e.cy.ts` checks calculator workflows and expected numeric results.
- `converters.e2e.cy.ts` checks temperature and wind unit conversions against known values.
- `pages.e2e.cy.ts` checks page content, links, responsive views, and basic page loading.

## What E2E Tests Should Cover

Use E2E tests for behavior that needs the real app flow:

- Moving between Home, Calculators, Converters, About Us, and Support pages.
- Clicking navbar buttons and mobile menu buttons.
- Filling calculator and converter forms.
- Verifying calculation and conversion output.
- Checking page-level content and important links.
- Checking responsive behavior with Cypress viewports.

Avoid using E2E tests for simple component rendering checks. Those belong in component tests.

## Page Object Model

The E2E tests use page objects from `app/cpc/tests/cypress/pages` to keep selectors and repeated actions in one place.

Examples:

- `HomePage.ts` contains home page visit and content assertions.
- `CalculatorsPage.ts` contains calculator page navigation, calculate button helpers, and result assertions.
- `ConvertersPage.ts` contains converter selection, input, and result assertions.
- `BasePage.ts` contains shared navigation and text assertion methods.

When the UI changes, update selectors in page objects first instead of duplicating selector fixes across many test files.

## Useful Custom Commands

Shared Cypress commands are defined in:

```text
app/cpc/tests/cypress/support/commands.ts
```

Common helpers include:

- `cy.shouldShowTexts([...])`
- `cy.fillInputBySelector(selector, value)`
- `cy.clickVisibleNavButton(buttonText)`
- `cy.clickMainButton(buttonText, index)`
- `cy.openMobileMenu()`
- `cy.shouldBeOnHashRoute(expectedRoute)`
- `cy.setDesktopViewport()`
- `cy.setMobileViewport()`

## Running E2E Tests

From `app/cpc`, start the Vite app:

```bash
npm run dev
```

In another terminal, run Cypress with the test config:

```bash
npx cypress run --config-file tests/cypress.config.ts --e2e
```

To run only one E2E spec:

```bash
npx cypress run --config-file tests/cypress.config.ts --e2e --spec "tests/cypress/e2e/navigation.e2e.cy.ts"
```

For interactive mode:

```bash
npx cypress open --config-file tests/cypress.config.ts --e2e
```

## Configuration Notes

The E2E config uses:

- `baseUrl: http://localhost:5173/Convection-parameters-calculator/`
- desktop viewport: `1920x1080`
- video recording disabled
- one retry in run mode and open mode
- `testIsolation: false`

Because E2E tests depend on the running app, make sure the Vite dev server is available before running them. The app runs at `http://localhost:5173/Convection-parameters-calculator/` and that is the base URL configured for E2E tests.

## Adding New E2E Tests

1. Add repeated selectors or workflows to the appropriate page object.
2. Add the scenario to an existing E2E spec when it belongs to that area.
3. Create a new `*.e2e.cy.ts` file only for a new feature area.
4. Prefer user-visible assertions such as text, route hash, form values, and result output.
5. Keep calculation and conversion tests based on known input/output examples.
