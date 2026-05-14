/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import UpdraftStrenght from '../../../../src/components/layout/Calculators/UpdraftStrenght';

describe('UpdraftStrenght Component', () => {
  it('renders calculator form with all input fields', () => {
    cy.mount(<UpdraftStrenght />);
    
    cy.contains('Updraft Strenght').should('be.visible');
    cy.contains('CAPE (J/kg)').should('be.visible');

    cy.get('#cape').should('be.visible');
  });

  it('renders calculate button', () => {
    cy.mount(<UpdraftStrenght />);

    cy.contains('button', 'Calculate').should('be.visible');
  });

  it('renders result display area', () => {
    cy.mount(<UpdraftStrenght />);

    cy.contains('Wmax = √ 2 × CAPE ').should('be.visible');
  });
});

export {};
