/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import UpwardVerticalVelocity from '../../../../src/components/layout/Calculators/UpwardVerticalVelocity';

describe('UpwardVerticalVelocity', () => {
  it('renders fields, submit and calculated result', () => {
    cy.mount(<UpwardVerticalVelocity />);

    cy.contains('8) UVV (Upward Vertical Velocity)').should('be.visible');
    cy.contains('CAPE (J/kg)').should('be.visible');

    cy.get('#cape').type('200');
    cy.contains('button', 'Calculate').click();

    cy.contains('= 20.00').should('be.visible');
  });
});

export {};
