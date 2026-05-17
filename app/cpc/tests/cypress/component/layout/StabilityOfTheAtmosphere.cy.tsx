/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import StabilityOfTheAtmosphere from '../../../../src/components/layout/Calculators/StabilityOfTheAtmosphere';

describe('StabilityOfTheAtmosphere Component', () => {
  it('renders calculator form with all input fields', () => {
    cy.mount(<StabilityOfTheAtmosphere />);
    
    cy.contains('Stability of the atmosphere').should('be.visible');
    cy.contains('Ambient temperature').should('be.visible');
    cy.contains('Air parcel temperature').should('be.visible');

    cy.get('#ambientTemperature').should('be.visible');
    cy.get('#parcelTemperature').should('be.visible');
  });

  it('renders calculate button', () => {
    cy.mount(<StabilityOfTheAtmosphere />);

    cy.contains('button', 'Calculate').should('be.visible');
  });

  it('renders result display area', () => {
    cy.mount(<StabilityOfTheAtmosphere />);

    cy.contains('LI = T(500 mb envir) - T(500 mb parcel)').should('be.visible');
    
  });
});

export {};
