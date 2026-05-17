# Technology and Architecture

## Core Technologies

The application is built with:

- React `19.2.5` for component-based UI.
- TypeScript `6.0.2` for typed props, utility inputs, and calculation results.
- Vite `8.0.10` with `@vitejs/plugin-react` for the frontend build pipeline.
- Tailwind CSS `4.2.4` through `@tailwindcss/vite` for utility-first styling.
- EmailJS `4.4.1` for sending contact form messages from the frontend.
- Cloudflare Turnstile loaded from the browser for contact form bot protection.
- ESLint `10.2.1` with React hooks and React refresh plugins for code quality.
- Cypress `15.14.1` is present for end-to-end style tests under `app/cpc/tests`.

## App Shape

The app is a client-side single-page application. `src/main.tsx` mounts React into the DOM, while `src/App.tsx` owns the visible page state.

Instead of a routing library, the app uses hash-based navigation:

- `#` shows the main page.
- `#calculators` shows all calculator sections.
- `#converters` shows the converter sections and explanatory content.
- `#about-us` shows the about page.
- `#support` shows the contact/support page.

`App.tsx` listens for `hashchange`, validates the hash against known routes, and passes the active route to `Navbar`.

## Source Folder Structure

`app/cpc/src` contains the application code:

- `main.tsx` - React entry point.
- `App.tsx` - root component and hash-route switch.
- `App.css` and `index.css` - global and app-level styles.
- `assets/` - bundled static assets such as local fonts.
- `components/` - React UI split into layout, pages, calculators, converters, and shared UI.
- `hooks/` - reusable state and event logic for calculators, converters, and the contact form.
- `services/` - browser integrations for EmailJS and Cloudflare Turnstile.
- `types/` - shared TypeScript contracts.
- `utils/` - pure calculation, conversion, formatting, and validation functions.
- `vite.config.ts` - Vite configuration, including a development CSP header plugin to support the Cloudflare Turnstile integration and local dev environment.

## Component Organization

The project follows a layered component style:

- Page components in `components/pages` are route-level aggregators.
- Layout components in `components/layout` are reusable page sections.
- Feature components in `components/layout/Calculators` and `components/layout/Converters` contain user-facing forms and result displays.
- UI components in `components/ui` are small reusable controls.
- Hooks and utilities keep business logic outside JSX-heavy components.

This is a common React documentation structure because it separates user-facing composition, reusable UI primitives, domain logic, and external integrations.
