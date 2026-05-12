import { SupportPage } from '../pages/SupportPage';

const supportPage = new SupportPage();

describe('Support page E2E', () => {
  it('shows support content and contact form fields without sending email', () => {
    supportPage.visitSupport().shouldShowHeroContent();

    cy.contains("We'd love to hear from you").should('be.visible');
    cy.contains(
      "Fill in the contact form and we'll get back to you as soon as possible.",
    ).should('be.visible');
    cy.get('input[name="firstName"]').should('be.visible').type('Test');
    cy.get('input[name="lastName"]').should('be.visible').type('User');
    cy.get('input[name="email"]')
      .should('be.visible')
      .type('test@example.com');
    cy.get('textarea[name="message"]')
      .should('be.visible')
      .type('This message is typed only to verify the form fields.');
    cy.get('input[name="privacyAccepted"]').check().should('be.checked');
    cy.contains('button', 'Send message').should('be.visible');
  });
});

export {};
