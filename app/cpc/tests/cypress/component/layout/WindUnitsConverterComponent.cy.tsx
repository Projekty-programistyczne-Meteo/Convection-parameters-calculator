/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import WindUnitsConverter from '../../../../src/components/layout/Converters/WindUnitsConverter';

describe('WindUnitsConverter Component', () => {
  it('renders converter form with all input fields', () => {
    cy.mount(<WindUnitsConverter />);
    
    cy.shouldShowTexts([
      'Wind Units Converter',
      'Wind speed value:',
      'Wind speed unit:',
    ]);

    cy.get('#windValue').should('be.visible');
    cy.get('select').should('be.visible');
  });

  it('renders convert button', () => {
    cy.mount(<WindUnitsConverter />);

    cy.contains('button', 'Convert').should('be.visible');
  });

  it('renders results table', () => {
    cy.mount(<WindUnitsConverter />);

    cy.shouldShowTexts([
      'Converted Values',
      'Meters per second',
      'Kilometers per hour',
    ]);
  });
});

export {};
