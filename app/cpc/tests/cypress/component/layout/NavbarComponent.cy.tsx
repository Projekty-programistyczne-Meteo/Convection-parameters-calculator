/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import Navbar from '../../../../src/components/layout/Navbar';

describe('Navbar', () => {
  it('renders navigation links and calls onNavigate', () => {
    const onNavigate = cy.stub().as('onNavigate');

    cy.mount(<Navbar activeHref="#" onNavigate={onNavigate} />);

    cy.get('img[alt="CPC Logo"]').should('be.visible');
    cy.contains('button', 'Home').should('be.visible');
    cy.contains('button', 'Calculators').should('be.visible');
    cy.contains('button', 'Converters').should('be.visible');
    cy.contains('button', 'About Us').should('be.visible');
    cy.contains('button', 'Support').should('be.visible');

    cy.contains('button', 'Calculators').click();
    cy.get('@onNavigate').should('have.been.calledWith', '#calculators');
  });

  it('opens the mobile menu and closes it after navigation', () => {
    const onNavigate = cy.stub().as('onNavigate');

    cy.viewport(375, 667);
    cy.mount(<Navbar activeHref="#" onNavigate={onNavigate} />);

    cy.get('button[aria-label="Open menu"]').click();
    cy.get('button[aria-label="Open menu"]').should(
      'have.attr',
      'aria-expanded',
      'true',
    );
    cy.contains('button', 'Support').click();

    cy.get('@onNavigate').should('have.been.calledWith', '#support');
    cy.get('button[aria-label="Open menu"]').should(
      'have.attr',
      'aria-expanded',
      'false',
    );
  });
});

export {};
