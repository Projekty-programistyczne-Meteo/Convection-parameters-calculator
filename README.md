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

## Requirements

- Node.js at least version: v22.20.0 ++, reference: _https://nodejs.org/en/download_.
- Operating system with command line.
- Access to browsers

## Developer edition

> 1. Go to app/cpc and in command line type: _npm ci_
> 2. Then type _npm run dev_, if you want to run in background, then type: _npm run dev -- --host 0.0.0.0 &_
> 3. Open browser and provide url: _http://localhost:5173/Convection-parameters-calculator/_

## Client edition

> 1. Go to `releases` section and download _CPC_client_alpha-0_1_0.zip_ file
> 2. Extract .zip file, you will see folders and files like: _assets_, _diagrams_, _images_ e.t.c.
> 3. In this root section open command line and type: _npx serve_
> 4. Accept instalatlation of additional tools by typing 'y' and enter
> 5. Open browser and navigate to _http://localhost:3000/_
