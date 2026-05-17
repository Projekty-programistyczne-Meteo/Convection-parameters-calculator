/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import TemperatureUnitsConverter from '../../../../src/components/layout/Converters/TemperatureUnitsConverter';

describe('TemperatureUnitsConverter Component', () => {
  it('renders converter form with all input fields', () => {
    cy.mount(<TemperatureUnitsConverter />);
    
    cy.shouldShowTexts([
      'Temperature Units Converter',
      'Temperature value:',
      'Temperature unit:',
    ]);

    cy.get('#temperatureValue').should('be.visible');
    cy.get('select').should('be.visible');
  });

  it('renders convert button', () => {
    cy.mount(<TemperatureUnitsConverter />);

    cy.contains('button', 'Convert').should('be.visible');
  });

  it('renders results table', () => {
    cy.mount(<TemperatureUnitsConverter />);

    cy.shouldShowTexts(['Converted Values', 'Celsius', 'Kelvin']);
  });
});

export {};
