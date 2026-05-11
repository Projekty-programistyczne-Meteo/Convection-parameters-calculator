/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import TemperatureUnitsConverter from '../../../../src/components/layout/Converters/TemperatureUnitsConverter';

describe('TemperatureUnitsConverter', () => {
  it('renders fields, submit and table', () => {
    cy.mount(<TemperatureUnitsConverter />);

    cy.contains('1) Temperature Units Converter').should('be.visible');
    cy.contains('Temperature value:').should('be.visible');
    cy.contains('Temperature unit:').should('be.visible');
    cy.contains('Temperature Units').should('be.visible');
    cy.contains('Converted Values').should('be.visible');
    cy.contains('Celsius').should('be.visible');
    cy.contains('Kelvin').should('be.visible');
  });

  it('converts Celsius into other temperature units', () => {
    cy.mount(<TemperatureUnitsConverter />);

    cy.get('#temperatureValue').type('0');
    cy.contains('button', 'Convert').click();

    cy.contains('273.15').should('be.visible');
    cy.contains('32.00').should('be.visible');
  });
});

export {};
