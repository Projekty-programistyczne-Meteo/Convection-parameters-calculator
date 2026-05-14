import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  visitHome() {
    return this.visit('/');
  }

  /**
   * Verify home page hero content is visible
   */
  shouldShowHeroContent() {
    cy.showHeroContent();
    return this;
  }

  /**
   * Click on a specific calculator link
   */
  clickCalculatorLink(calculatorName: string) {
    cy.contains('a', calculatorName).click();
    return this;
  }

  /**
   * Click on a specific converter link
   */
  clickConverterLink(converterName: string) {
    cy.contains('a', converterName).click();
    return this;
  }

  /**
   * Verify all navigation buttons are clickable
   */
  shouldHaveNavigationButtons() {
    cy.contains('button', 'Home').should('be.visible');
    cy.contains('button', 'Calculators').should('be.visible');
    cy.contains('button', 'Converters').should('be.visible');
    cy.contains('button', 'About Us').should('be.visible');
    cy.contains('button', 'Support').should('be.visible');
    return this;
  }

  /**
   * Verify featured content sections are visible
   */
  shouldShowFeaturedSections(sectionNames: string[]) {
    sectionNames.forEach((name) => {
      cy.contains(name).should('be.visible');
    });
    return this;
  }
}
