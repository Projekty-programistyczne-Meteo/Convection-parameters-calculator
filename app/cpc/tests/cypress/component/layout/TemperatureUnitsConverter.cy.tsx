/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import TemperatureUnitsConverter from '../../../../src/components/layout/Converters/TemperatureUnitsConverter';

describe('TemperatureUnitsConverter Component', () => {
  it('renders converter form with all input fields', () => {
    cy.mount(<TemperatureUnitsConverter />);
    
    cy.contains('Temperature Units Converter').should('be.visible');
    cy.contains('Temperature value:').should('be.visible');
    cy.contains('Temperature unit:').should('be.visible');

    cy.get('#temperatureValue').should('be.visible');
    cy.get('select').should('be.visible');
  });

  it('renders convert button', () => {
    cy.mount(<TemperatureUnitsConverter />);

    cy.contains('button', 'Convert').should('be.visible');
  });

  it('renders results table', () => {
    cy.mount(<TemperatureUnitsConverter />);

    cy.contains('Converted Values').should('be.visible');
    cy.contains('Celsius').should('be.visible');
    cy.contains('Kelvin').should('be.visible');
  });
});

export {};
