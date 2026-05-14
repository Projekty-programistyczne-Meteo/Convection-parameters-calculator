/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import Navbar from '../../../../src/components/layout/Navbar';

describe('Navbar Component', () => {
  it('renders logo and navigation buttons', () => {
    cy.mount(<Navbar activeHref="#" onNavigate={() => {}} />);

    cy.get('img[alt="CPC Logo"]').should('be.visible');
    cy.contains('button', 'Home').should('be.visible');
    cy.contains('button', 'Calculators').should('be.visible');
    cy.contains('button', 'Converters').should('be.visible');
    cy.contains('button', 'About Us').should('be.visible');
    cy.contains('button', 'Support').should('be.visible');
  });

  it('renders mobile menu button on small viewport', () => {
    cy.viewport(375, 667);
    cy.mount(<Navbar activeHref="#" onNavigate={() => {}} />);

    cy.get('button[aria-label="Open menu"]').should('be.visible');
  });

  it('shows all navigation items in mobile menu when opened', () => {
    cy.viewport(375, 667);
    cy.mount(<Navbar activeHref="#" onNavigate={() => {}} />);

    cy.get('button[aria-label="Open menu"]').click();
    cy.contains('button', 'Home').should('be.visible');
    cy.contains('button', 'Calculators').should('be.visible');
    cy.contains('button', 'Converters').should('be.visible');
    cy.contains('button', 'About Us').should('be.visible');
    cy.contains('button', 'Support').should('be.visible');
  });
});

export {};
