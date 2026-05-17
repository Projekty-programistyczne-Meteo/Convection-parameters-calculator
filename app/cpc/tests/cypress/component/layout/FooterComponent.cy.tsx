/// <reference types="cypress" />

import Footer from '../../../../src/components/layout/Footer';

describe('Footer', () => {
  it('renders credits, navigation links, and contact details', () => {
    cy.mount(<Footer />);

    cy.contains('Website Designers:').should('be.visible');
    cy.contains('Website Developer:').should('be.visible');
    cy.contains('Content creators:').should('be.visible');
    cy.contains('Back to top').should('be.visible');
    cy.contains('Menu').should('be.visible');
    cy.contains('Licence and agreement').should('be.visible');
    cy.contains('cpc.jpfs.support@gmail.com').should('be.visible');
    cy.contains('2026 CPC').should('be.visible');
  });
});

export {};
