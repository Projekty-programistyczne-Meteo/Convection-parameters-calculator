import { BasePage } from './BasePage';

export class SupportPage extends BasePage {
  visitSupport() {
    return this.visit('/#support');
  }

  /**
   * Verify Support page content is visible
   */
  shouldShowSupportContent() {
    cy.contains('Support').should('be.visible');
    return this;
  }

  /**
   * Verify FAQ or help section is visible
   */
  shouldShowSection(sectionTitle: string) {
    cy.contains(sectionTitle).should('be.visible');
    return this;
  }

  /**
   * Verify contact information is visible
   */
  shouldShowContactInfo(email: string) {
    cy.contains(email).should('be.visible');
    return this;
  }

  /**
   * Verify all expected sections are visible
   */
  shouldShowAllSections(sections: string[]) {
    sections.forEach((section) => {
      cy.contains(section).should('be.visible');
    });
    return this;
  }
}
