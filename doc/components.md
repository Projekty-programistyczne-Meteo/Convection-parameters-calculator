# Components

## Root Component

`src/App.tsx` is the application shell. It:

- stores the active hash route,
- listens for browser hash changes,
- renders the matching page component,
- keeps `Navbar` and `Footer` visible around every page.

## Page Components

Page components live in `src/components/pages`.

- `HomePage.tsx` renders `Hero`, landing content, and handles privacy notification animation reset.
- `CalculatorsPage.tsx` renders all meteorological calculator sections.
- `ConvertersPage.tsx` renders the temperature and wind converters plus the supporting diagram.
- `AboutUsPage.tsx` contains the about page content.
- `SupportPage.tsx` renders `Hero` and the contact form section.

These components are focused on page composition. Detailed form and navigation logic belongs in feature components, hooks, or utilities.

## Layout Components

Layout components live in `src/components/layout`.

- `Navbar.tsx` displays app navigation and receives the active route from `App.tsx`.
- `Hero.tsx` provides the shared hero section used on pages.
- `Footer.tsx` provides the shared footer.
- `ContactForm.tsx` renders the support/contact form UI and delegates validation, Turnstile lifecycle, and submit behavior to `useContactForm`.

## Calculator Components

Calculator components live in `src/components/layout/Calculators`.

Each calculator component follows the same pattern:

- define string fields for user input,
- use `useCalculatorForm` for parsing and result state,
- call one calculator utility from `src/utils/Calculators`,
- render inputs using `NumberInput`,
- trigger calculation with `Button`,
- show the formula and result through `CalculationResultBox`.

Current calculator components:

- `StabilityOfTheAtmosphere.tsx` - Lifted Index from ambient and parcel temperature.
- `UpdraftStrenght.tsx` - theoretical maximum updraft speed from CAPE.
- `VerticalVelocity.tsx` - lifting velocity from CIN.
- `EnergyHelicityIndex.tsx` - Energy Helicity Index from CAPE and storm-relative helicity.
- `DerechoCompositeParameter.tsx` - DCP from DCAPE, MUCAPE, shear, and mean wind.
- `LiftingCondensationLevel.tsx` - estimated cloud-base height from temperature and dew point.
- `DewPointTemperature.tsx` - approximate dew point from temperature and relative humidity.
- `UpwardVerticalVelocity.tsx` - upward vertical velocity from CAPE.

## Converter Components

Converter components live in `src/components/layout/Converters`.

- `TemperatureUnitsConverter.tsx` converts one selected temperature value into all supported temperature scales.
- `WindUnitsConverter.tsx` converts one selected wind speed into all supported wind units.

Both components use `useUnitsConverter`, `NumberInput`, `SelectField`, `Button`, `ResultsTable`, and `formatNumericValue`.

## Shared UI Components

Shared UI components live in `src/components/ui`.

- `Button.tsx` centralizes button styling and keeps the default type as `button`.
- `NumberInput.tsx` provides a controlled numeric input with label and decimal input mode.
- `SelectField.tsx` provides a typed select field for converter units.
- `CalculationResultBox.tsx` displays a formula, optional calculated value, and description.
- `ResultsTable.tsx` displays two-column converter output rows.

These components are intentionally small. They receive prepared values and callbacks from feature components instead of owning domain logic.
