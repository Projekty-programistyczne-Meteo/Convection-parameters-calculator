/// <reference types="cypress" />

import ContactForm from '../../../../src/components/layout/ContactForm';

describe('ContactForm', () => {
  it('renders contact fields and submit button', () => {
    cy.mount(<ContactForm />);

    cy.contains("We'd love to hear from you").should('be.visible');
    cy.get('input[name="firstName"]').should('be.visible');
    cy.get('input[name="lastName"]').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('textarea[name="message"]').should('be.visible');
    cy.get('input[name="privacyAccepted"]').should('exist');
    cy.contains('button', 'Send message').should('be.visible');
  });

  it('shows validation errors for required fields', () => {
    cy.mount(<ContactForm />);

    cy.contains('button', 'Send message').click();

    cy.contains('Please enter a valid email address.')
      .should('not.exist');
    cy.contains('Email is required.').should('be.visible');
    cy.contains('Message is required.').should('be.visible');
    cy.contains('You must accept the privacy policy before sending.').should(
      'be.visible',
    );
    cy.contains('Please correct the highlighted fields and try again.').should(
      'be.visible',
    );
  });

  it('updates controlled fields when the user types', () => {
    cy.mount(<ContactForm />);

    cy.get('input[name="firstName"]').type('Alex').should('have.value', 'Alex');
    cy.get('input[name="lastName"]').type('Storm').should('have.value', 'Storm');
    cy.get('input[name="email"]')
      .type('alex@example.com')
      .should('have.value', 'alex@example.com');
    cy.get('textarea[name="message"]')
      .type('This is a useful test message.')
      .should('have.value', 'This is a useful test message.');
    cy.get('input[name="privacyAccepted"]').check().should('be.checked');
  });
});

export {};
