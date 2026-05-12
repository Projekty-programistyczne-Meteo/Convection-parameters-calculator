/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import WindUnitsConverter from '../../../../src/components/layout/Converters/WindUnitsConverter';

describe('WindUnitsConverter', () => {
  it('renders fields, submit and table', () => {
    cy.mount(<WindUnitsConverter />);

    cy.contains('Wind Units Converter').should('be.visible');
    cy.contains('Wind speed value:').should('be.visible');
    cy.contains('Wind speed unit:').should('be.visible');
    cy.contains('Wind Speed Units').should('be.visible');
    cy.contains('Converted Values').should('be.visible');
    cy.contains('Meters per second').should('be.visible');
    cy.contains('Kilometers per hour').should('be.visible');
  });

  it('converts meters per second into other wind units', () => {
    cy.mount(<WindUnitsConverter />);

    cy.get('#windValue').type('10');
    cy.contains('button', 'Convert').click();

    cy.contains('36.00').should('be.visible');
    cy.contains('19.43').should('be.visible');
    cy.contains('22.37').should('be.visible');
  });
});

export {};
