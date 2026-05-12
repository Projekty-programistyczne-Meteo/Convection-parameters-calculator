# Application Documentation

This documentation describes the React application located in `app/cpc`. It focuses on technologies, source structure, components, calculation logic, converters, services, and supporting files.

## Documentation Map

- [Technology and Architecture](technology-and-architecture.md) - main technologies, application architecture, routing approach, and source folders.
- [Components](components.md) - page, layout, calculator, converter, and reusable UI components.
- [Logic](logic.md) - hooks, calculator formulas, converter flow, validation, and formatting utilities.
- [Extra Files and Integrations](extra-files-and-integrations.md) - assets, types, public files, contact form services, and tests.

## Application Summary

`app/cpc` is a single-page React application for convection and meteorological helper tools. The app currently contains:

- meteorological calculators for atmospheric stability, updraft speed, vertical velocity, EHI, DCP, LCL, dew point, and upward vertical velocity,
- unit converters for temperature and wind speed,
- informational pages and shared page layout,
- a contact form integrated with EmailJS and Cloudflare Turnstile,
- shared hooks and typed utilities that keep repeated calculator and converter behavior consistent.

The source code follows a practical React convention: route-level page components compose feature sections, feature components delegate repeated behavior to hooks, and pure formula/conversion logic lives in `utils`.
