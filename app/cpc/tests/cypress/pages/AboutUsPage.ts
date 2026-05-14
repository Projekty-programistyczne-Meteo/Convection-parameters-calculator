import { BasePage } from './BasePage';

export class AboutUsPage extends BasePage {
  /**
   * Visit the About Us route.
   */
  visitAboutUs() {
    return this.visit('/#about-us');
  }

  /**
   * Verify About Us page content is visible.
   */
  shouldShowAboutUsContent() {
    cy.contains('About Us').should('be.visible');
    return this;
  }

  /**
   * Verify specific team member or section is visible.
   */
  shouldShowSection(sectionTitle: string) {
    cy.contains(sectionTitle).should('be.visible');
    return this;
  }

  /**
   * Verify all expected sections are visible.
   */
  shouldShowAllSections(sections: string[]) {
    cy.shouldShowTexts(sections);
    return this;
  }
}
