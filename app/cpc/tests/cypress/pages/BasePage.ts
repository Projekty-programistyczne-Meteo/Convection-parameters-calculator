export class BasePage {
  /**
   * Visit an application route.
   */
  visit(path: string) {
    cy.visit(path);
    return this;
  }

  /**
   * Navigate to a specific page by clicking the visible navbar button.
   */
  navigateViaNavbar(buttonText: string) {
    cy.clickVisibleNavButton(buttonText);
    return this;
  }

  /**
   * Get the current active hash route.
   */
  getCurrentRoute(): Cypress.Chainable<string> {
    return cy.window().then((win) => win.location.hash);
  }

  /**
   * Verify that a specific route is active.
   */
  shouldBeOnRoute(expectedRoute: string) {
    cy.shouldBeOnHashRoute(expectedRoute);
    return this;
  }

  /**
   * Verify hero content is visible.
   */
  shouldShowHeroContent() {
    cy.showHeroContent();
    return this;
  }

  /**
   * Verify footer content is visible.
   */
  shouldShowFooterContent() {
    cy.shouldShowTexts([
      'Website Designers:',
      'Website Developer:',
      'Content creators:',
      'cpc.jpfs.support@gmail.com',
    ]);
    return this;
  }

  /**
   * Verify navbar is visible.
   */
  shouldShowNavbar() {
    cy.get('img[alt="CPC Logo"]').should('be.visible');
    cy.shouldShowTexts(['Home', 'Calculators', 'Converters', 'About Us', 'Support']);
    return this;
  }

  /**
   * Check if element with text is visible.
   */
  shouldContainText(text: string) {
    cy.contains(text).should('be.visible');
    return this;
  }

  /**
   * Check if all text items in array are visible.
   */
  shouldContainAllText(texts: string[]) {
    cy.shouldShowTexts(texts);
    return this;
  }
}
