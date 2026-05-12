/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import DewPointTemperature from '../../../../src/components/layout/Calculators/DewPointTemperature';

describe('DewPointTemperature', () => {
  it('renders fields, submit and calculated result', () => {
    cy.mount(<DewPointTemperature />);

    cy.contains('Td').should('be.visible');
    cy.contains('Temperature').should('be.visible');
    cy.contains('Relative humidity').should('be.visible');

    cy.get('#temperature').type('20');
    cy.get('#relativeHumidity').type('50');
    cy.contains('button', 'Calculate').click();

    cy.contains('= 10.00').should('be.visible');
  });
});

export {};
