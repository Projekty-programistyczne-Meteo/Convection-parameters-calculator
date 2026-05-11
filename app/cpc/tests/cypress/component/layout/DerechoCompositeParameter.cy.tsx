/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import DerechoCompositeParameter from '../../../../src/components/layout/Calculators/DerechoCompositeParameter';

describe('DerechoCompositeParameter', () => {
  it('renders fields, submit and calculated result', () => {
    cy.mount(<DerechoCompositeParameter />);

    cy.contains('5) Derecho Composite Parameter').should('be.visible');
    cy.contains('DCAPE (J/kg)').should('be.visible');
    cy.contains('MUCAPE (J/kg)').should('be.visible');
    cy.get('#dcape').should('be.visible');
    cy.get('#mucape').should('be.visible');
    cy.get('#shear06km').should('be.visible');
    cy.get('#meanWind06km').should('be.visible');

    cy.get('#dcape').type('980');
    cy.get('#mucape').type('2000');
    cy.get('#shear06km').type('20');
    cy.get('#meanWind06km').type('16');
    cy.contains('button', 'Calculate').click();

    cy.contains('= 1.00').should('be.visible');
  });
});

export {};
