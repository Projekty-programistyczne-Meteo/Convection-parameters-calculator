/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import VerticalVelocity from '../../../../src/components/layout/Calculators/VerticalVelocity';

describe('VerticalVelocity', () => {
  it('renders fields, submit and calculated result', () => {
    cy.mount(<VerticalVelocity />);

    cy.contains('3) Vertical velocity').should('be.visible');
    cy.contains('CIN (J/kg)').should('be.visible');

    cy.get('#cin').type('200');
    cy.contains('button', 'Calculate').click();

    cy.contains('= 20.00').should('be.visible');
  });
});

export {};
