/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import StabilityOfTheAtmosphere from '../../../../src/components/layout/Calculators/StabilityOfTheAtmosphere';

describe('StabilityOfTheAtmosphere', () => {
  it('renders fields, submit and calculated result', () => {
    cy.mount(<StabilityOfTheAtmosphere />);

    cy.contains('Stability of the atmosphere').should('be.visible');
    cy.contains('Ambient temperature').should('be.visible');
    cy.contains('Air parcel temperature').should('be.visible');

    cy.get('#ambientTemperature').type('-10');
    cy.get('#parcelTemperature').type('-5');
    cy.contains('button', 'Calculate').click();

    cy.contains('= -5.00').should('be.visible');
  });
});

export {};
