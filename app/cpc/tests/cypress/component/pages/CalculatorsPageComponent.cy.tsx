/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import CalculatorsPage from '../../../../src/components/pages/CalculatorsPage';

describe('CalculatorsPage', () => {
  it('renders Calculators page', () => {
    cy.mount(<CalculatorsPage />);

    cy.contains('Convection Parameters Calculator').should('be.visible');
    cy.contains('1) Stability of the atmosphere').should('be.visible');
    cy.contains('2) Updraft Strenght').should('be.visible');
    cy.contains('3) Vertical velocity').should('be.visible');
    cy.contains('4) Energy Helicity Index').should('be.visible');
    cy.contains('5) Derecho Composite Parameter').should('be.visible');
    cy.contains('6) Lifting Condensation Level').should('be.visible');
    cy.contains('7) Td').should('be.visible');
    cy.contains('8) UVV (Upward Vertical Velocity)').should('be.visible');
  });
});

export {};
