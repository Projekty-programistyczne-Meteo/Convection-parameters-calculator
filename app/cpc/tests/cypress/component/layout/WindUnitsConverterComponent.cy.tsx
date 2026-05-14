/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import WindUnitsConverter from '../../../../src/components/layout/Converters/WindUnitsConverter';

describe('WindUnitsConverter Component', () => {
  it('renders converter form with all input fields', () => {
    cy.mount(<WindUnitsConverter />);
    
    cy.contains('Wind Units Converter').should('be.visible');
    cy.contains('Wind speed value:').should('be.visible');
    cy.contains('Wind speed unit:').should('be.visible');

    cy.get('#windValue').should('be.visible');
    cy.get('select').should('be.visible');
  });

  it('renders convert button', () => {
    cy.mount(<WindUnitsConverter />);

    cy.contains('button', 'Convert').should('be.visible');
  });

  it('renders results table', () => {
    cy.mount(<WindUnitsConverter />);

    cy.contains('Converted Values').should('be.visible');
    cy.contains('Meters per second').should('be.visible');
    cy.contains('Kilometers per hour').should('be.visible');
  });
});

export {};

export {};
