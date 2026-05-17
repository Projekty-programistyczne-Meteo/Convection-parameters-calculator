/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import DewPointTemperature from '../../../../src/components/layout/Calculators/DewPointTemperature';

describe('DewPointTemperature Component', () => {
  it('renders calculator form with all input fields', () => {
    cy.mount(<DewPointTemperature />);
    
    cy.contains('Td').should('be.visible');
    cy.contains('Temperature').should('be.visible');
    cy.contains('Relative humidity').should('be.visible');

    cy.get('#temperature').should('be.visible');
    cy.get('#relativeHumidity').should('be.visible');
  });

  it('renders calculate button', () => {
    cy.mount(<DewPointTemperature />);

    cy.contains('button', 'Calculate').should('be.visible');
  });

  it('renders result display area', () => {
    cy.mount(<DewPointTemperature />);

    cy.contains('Td = T - ((100 - RH) / 5)').should('be.visible');
  });
});

export {};
