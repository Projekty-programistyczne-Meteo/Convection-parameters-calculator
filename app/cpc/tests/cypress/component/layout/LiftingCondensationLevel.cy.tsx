/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import LiftingCondensationLevel from '../../../../src/components/layout/Calculators/LiftingCondensationLevel';

describe('LiftingCondensationLevel', () => {
  it('renders fields, submit and calculated result', () => {
    cy.mount(<LiftingCondensationLevel />);

    cy.contains('Lifting Condensation Level').should('be.visible');
    cy.contains('Temperature').should('be.visible');
    cy.contains('Dew point temperature').should('be.visible');

    cy.get('#temperature').type('20');
    cy.get('#dewPoint').type('12');
    cy.contains('button', 'Calculate').click();

    cy.contains('= 1000.00').should('be.visible');
  });
});

export {};
