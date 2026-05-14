/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import DerechoCompositeParameter from '../../../../src/components/layout/Calculators/DerechoCompositeParameter';

describe('DerechoCompositeParameter Component', () => {
  it('renders calculator form with all input fields', () => {
    cy.mount(<DerechoCompositeParameter />);

    cy.contains('h2', 'Derecho Composite Parameter').should('be.visible');
    cy.contains('DCAPE (J/kg)').should('be.visible');
    cy.contains('MUCAPE (J/kg)').should('be.visible');
    cy.contains('0–6 km shear (kt)').should('be.visible');
    cy.contains('0–6 km mean wind (kt)').should('be.visible');

    cy.get('#dcape').should('be.visible');
    cy.get('#mucape').should('be.visible');
    cy.get('#shear06km').should('be.visible');
    cy.get('#meanWind06km').should('be.visible');
  });

  it('renders calculate button', () => {
    cy.mount(<DerechoCompositeParameter />);

    cy.contains('button', 'Calculate').should('be.visible');
  });

  it('renders result display area', () => {
    cy.mount(<DerechoCompositeParameter />);

    cy.contains('DCP = (DCAPE / 980) × (MUCAPE / 2000) × (0–6 km shear / 20) × (0–6 km mean wind / 16)').should('be.visible');
  });
});

export {};
