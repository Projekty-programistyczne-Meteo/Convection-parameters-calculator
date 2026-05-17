/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import VerticalVelocity from '../../../../src/components/layout/Calculators/VerticalVelocity';

describe('VerticalVelocity Component', () => {
  it('renders calculator form with all input fields', () => {
    cy.mount(<VerticalVelocity />);
    
    cy.contains('Vertical velocity').should('be.visible');
    cy.contains('CIN (J/kg)').should('be.visible');

    cy.get('#cin').should('be.visible');
  });

  it('renders calculate button', () => {
    cy.mount(<VerticalVelocity />);

    cy.contains('button', 'Calculate').should('be.visible');
  });

  it('renders result display area', () => {
    cy.mount(<VerticalVelocity />);

    cy.contains('Wlift = √ 2 × CIN ').should('be.visible');
  });
});

export {};
