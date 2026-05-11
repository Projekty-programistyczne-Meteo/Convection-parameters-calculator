/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import EnergyHelicityIndex from '../../../../src/components/layout/Calculators/EnergyHelicityIndex';

describe('EnergyHelicityIndex', () => {
  it('renders fields, submit and calculated result', () => {
    cy.mount(<EnergyHelicityIndex />);

    cy.contains('4) Energy Helicity Index').should('be.visible');
    cy.contains('CAPE (J/kg)').should('be.visible');
    cy.contains('Storm-relative helicity').should('be.visible');

    cy.get('#cape').type('2000');
    cy.get('#srh').type('160');
    cy.contains('button', 'Calculate').click();

    cy.contains('= 2.00').should('be.visible');
  });
});

export {};
