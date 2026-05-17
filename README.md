# Branch description

This branch is used for developing purposes, CPC will provide different kind of releases, alpha, beta and full releases with Major, Minor updates and patches.

# Convection-parameters-calculator

The convection parameters calculator is an amateur project intended for storm hunters and enthusiasts of convective phenomena. Includes tools for converting wind and temperature units.

`CPC` is a single-page React application for convection and meteorological helper tools. The app currently contains:

- meteorological calculators for atmospheric stability, updraft speed, vertical velocity, EHI, DCP, LCL, dew point, and upward vertical velocity,
- unit converters for temperature and wind speed,
- informational pages and shared page layout,
- a contact form integrated with EmailJS provider,
- shared hooks and typed utilities that keep repeated calculator and converter behavior consistent.

# Instalation and start

## Published software

Software is currently being hosted on Github Pages. Navigate to _https://projekty-programistyczne-meteo.github.io/Convection-parameters-calculator/_. If you want release package, scroll down and navigate to **Client edition**.

## Developer edition

- Clone repo or download package
- Go to app/cpc and in command line type: _npm ci_
- Then type _npm run dev_, if you want to run in background, then type: _npm run dev -- --host 0.0.0.0 &_
- Open browser and provide url: _http://localhost:5173/Convection-parameters-calculator/_

## Client edition

- Go to `releases` section and download .zip file
- Extract .zip file, you will see folders and files like: _assets_, _diagrams_, _images_ e.t.c.
- In this root section open command line and type: _npx serve_
- Accept instalatlation of additional tools by typing 'y' and enter
- Open browser and navigate to _http://localhost:3000/_
