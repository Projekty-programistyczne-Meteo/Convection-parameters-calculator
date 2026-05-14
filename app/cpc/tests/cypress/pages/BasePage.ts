export class BasePage {
  visit(path: string) {
    cy.visit(path);
    return this;
  }

  /**
   * Navigate to a specific page by clicking the navbar button
   */
  navigateViaNavbar(buttonText: string) {
    cy.contains('button', buttonText).click();
    return this;
  }

  /**
   * Get the current active hash route
   */
  getCurrentRoute(): Cypress.Chainable<string> {
    return cy.window().then((win) => win.location.hash);
  }

  /**
   * Verify that a specific route is active
   */
  shouldBeOnRoute(expectedRoute: string) {
    this.getCurrentRoute().should('equal', expectedRoute);
    return this;
  }

  /**
   * Verify hero content is visible
   */
  shouldShowHeroContent() {
    cy.showHeroContent();
    return this;
  }

  /**
   * Verify footer content is visible
   */
  shouldShowFooterContent() {
    cy.contains('Website Designers:').should('be.visible');
    cy.contains('Website Developer:').should('be.visible');
    cy.contains('Content creators:').should('be.visible');
    cy.contains('cpc.jpfs.support@gmail.com').should('be.visible');
    return this;
  }

  /**
   * Verify navbar is visible
   */
  shouldShowNavbar() {
    cy.get('img[alt="CPC Logo"]').should('be.visible');
    cy.contains('button', 'Home').should('be.visible');
    cy.contains('button', 'Calculators').should('be.visible');
    cy.contains('button', 'Converters').should('be.visible');
    cy.contains('button', 'About Us').should('be.visible');
    cy.contains('button', 'Support').should('be.visible');
    return this;
  }

  /**
   * Check if element with text is visible
   */
  shouldContainText(text: string) {
    cy.contains(text).should('be.visible');
    return this;
  }

  /**
   * Check if all text items in array are visible
   */
  shouldContainAllText(texts: string[]) {
    texts.forEach((text) => {
      cy.contains(text).should('be.visible');
    });
    return this;
  }
}
