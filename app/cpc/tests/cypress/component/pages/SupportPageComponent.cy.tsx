/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import SupportPage from '../../../../src/components/pages/SupportPage';

describe('SupportPage', () => {
  it('renders Support page', () => {
    cy.mount(<SupportPage />);

    cy.contains('Convection Parameters Calculator').should('be.visible');
    cy.contains("We'd love to hear from you").should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('textarea[name="message"]').should('be.visible');
    cy.contains('button', 'Send message').should('be.visible');
  });
});

export {};
