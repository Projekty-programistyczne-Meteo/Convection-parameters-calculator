/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import LiftingCondensationLevel from '../../../../src/components/layout/Calculators/LiftingCondensationLevel';

describe('LiftingCondensationLevel Component', () => {
  it('renders calculator form with all input fields', () => {
    cy.mount(<LiftingCondensationLevel />);
    
    cy.contains('Lifting Condensation Level').should('be.visible');
    cy.contains('Temperature').should('be.visible');
    cy.contains('Dew point temperature').should('be.visible');

    cy.get('#temperature').should('be.visible');
    cy.get('#dewPoint').should('be.visible');
  });

  it('renders calculate button', () => {
    cy.mount(<LiftingCondensationLevel />);

    cy.contains('button', 'Calculate').should('be.visible');
  });

  it('renders result display area', () => {
    cy.mount(<LiftingCondensationLevel />);

    cy.contains('LCL = 125 × (T - Td)').should('be.visible');
  });
});

export {};
