/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import CalculatorsPage from '../../../../src/components/pages/CalculatorsPage';

describe('CalculatorsPage', () => {
  it('renders Calculators page', () => {
    cy.mount(<CalculatorsPage />);
  });

  it('displays all calculator components', () => {
    cy.mount(<CalculatorsPage />);

    cy.shouldShowTexts([
      'Stability of the atmosphere',
      'Updraft Strenght',
      'Vertical velocity',
      'Energy Helicity Index',
      'Derecho Composite Parameter',
      'Lifting Condensation Level',
      'Td',
      'UVV (Upward Vertical Velocity)',
    ]);
  });

  it('displays calculator descriptions', () => {
    cy.mount(<CalculatorsPage />);

    cy.shouldShowTexts([
      'Lifted Index (LI) calculated from the environmental and air parcel temperature at 500 mb pressure level',
      'Negative values indicate unstable conditions favorable for convection',
      'Maximum theoretical updraft speed calculated from CAPE value',
      'It approximates the vertical motion available to rising air parcels in unstable atmospheric conditions',
      'Vertical lifting velocity calculated from CIN value',
      'It estimates the strength of upward motion that a parcel needs to overcome inhibition',
      'Energy Helicity Index calculated from CAPE and storm-relative helicity values',
      'It helps assess the potential for rotating storms and severe storm development',
      'Derecho Composite Parameter calculated from DCAPE',
      'It is used to evaluate the potential for long-lived convective windstorms',
      'Lifting condensation level calculated from air temperature and dew point temperature',
      'It estimates the approximate altitude where rising air will become saturated',
      'Dew point temperature calculated from air temperature and relative humidity',
      'It indicates the temperature at which air becomes saturated and condensation begins',
      'Upward vertical velocity calculated from CAPE',
      'It gives an estimate of how fast air parcels can rise in a buoyant atmosphere',
    ]);
  });

  it('displays calculator input fields', () => {
    cy.mount(<CalculatorsPage />);

    cy.shouldShowTexts([
      'Ambient temperature',
      'Air parcel temperature',
      'CAPE (J/kg)',
      'Storm-relative helicity',
      'DCAPE (J/kg)',
      'MUCAPE (J/kg)',
      'Temperature',
      'Dew point temperature',
    ]);
  });
});

export {};
