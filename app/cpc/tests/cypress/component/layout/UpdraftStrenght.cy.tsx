/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import UpdraftStrenght from '../../../../src/components/layout/Calculators/UpdraftStrenght';

describe('UpdraftStrenght', () => {
  it('renders fields, submit and calculated result', () => {
    cy.mount(<UpdraftStrenght />);

    cy.contains('Updraft Strenght').should('be.visible');
    cy.contains('CAPE (J/kg)').should('be.visible');

    cy.get('#cape').type('200');
    cy.contains('button', 'Calculate').click();

    cy.contains('= 20.00').should('be.visible');
  });

  it('does not show a result for negative CAPE', () => {
    cy.mount(<UpdraftStrenght />);

    cy.get('#cape').type('-200');
    cy.contains('button', 'Calculate').click();

    cy.contains('= 20.00').should('not.exist');
  });
});

export {};
