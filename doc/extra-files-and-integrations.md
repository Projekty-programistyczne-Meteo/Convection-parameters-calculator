# Extra Files and Integrations

## Project Files

The `app/cpc` folder contains the React app and its project metadata.

- `index.html` is the HTML document used by Vite.
- `package.json` declares scripts, runtime dependencies, and development dependencies.
- `package-lock.json` locks dependency versions.
- `vite.config.ts` contains Vite integration details.
- `eslint.config.js` contains lint rules and plugin setup.
- `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json` contain TypeScript project settings.
- `README.md` contains intro documentation in main branch site.

This documentation intentionally does not duplicate configuration details or add a run/setup guide.

## Assets

Bundled assets live in `src/assets`.

Current assets include local font files:

- `Carter_One/CarterOne-Regular.ttf`
- `QuickSand/Quicksand-Medium.ttf`
- related Open Font License text files

`ConvertersPage.tsx` also references a public diagram through `import.meta.env.BASE_URL`:

- `diagrams/temperatureExample.svg`

## Services

Services live in `src/services`.

`formSender.service.ts` wraps EmailJS. It:

- builds display names from contact form data,
- prepares EmailJS template parameters,
- sends the message with service id, template id, and public key.

`turnstileWidget.service.ts` wraps Cloudflare Turnstile. It:

- loads the Turnstile script once,
- renders the widget explicitly,
- exposes reset and remove helpers,
- extends the `Window` type for `window.turnstile`.

`ContactForm.tsx` reads its service values from Vite environment variables and handles missing configuration through user-facing form errors.

## Styling

Most component styling is applied through Tailwind utility classes in JSX. Global styling lives in:

- `src/index.css`
- `src/App.css`

The UI uses repeated neutral backgrounds, stone text colors, blue action buttons, bordered form controls, and responsive Tailwind grid classes.

## Tests

There are untracked Cypress files under `app/cpc/tests`, including:

- `tests/cypress.json`
- `tests/cypress/integration/`
- `tests/cypress/plugins/`

These files indicate a Cypress test structure exists or is being introduced. They are separate from the current source documentation and were left untouched.
