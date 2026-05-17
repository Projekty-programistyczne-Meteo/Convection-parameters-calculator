import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  /**
   * Visit the home route.
   */
  visitHome() {
    return this.visit('/');
  }

  /**
   * Verify home page hero content is visible.
   */
  shouldShowHeroContent() {
    cy.showHeroContent();
    return this;
  }

  /**
   * Click on a specific calculator link.
   */
  clickCalculatorLink(calculatorName: string) {
    cy.contains('a', calculatorName).click();
    return this;
  }

  /**
   * Click on a specific converter link.
   */
  clickConverterLink(converterName: string) {
    cy.contains('a', converterName).click();
    return this;
  }

  /**
   * Verify all navigation buttons are clickable.
   */
  shouldHaveNavigationButtons() {
    cy.shouldShowTexts(['Home', 'Calculators', 'Converters', 'About Us', 'Support']);
    return this;
  }

  /**
   * Verify featured content sections are visible.
   */
  shouldShowFeaturedSections(sectionNames: string[]) {
    cy.shouldShowTexts(sectionNames);
    return this;
  }
}
