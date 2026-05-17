type TextMatcher = string | RegExp;

/**
 * Assert that every provided text matcher is visible on the current page.
 */
Cypress.Commands.add('shouldShowTexts', (texts: TextMatcher[]) => {
  texts.forEach((text) => {
    cy.contains(text).should('be.visible');
  });
});

/**
 * Clear and type into a form input selected by CSS selector.
 */
Cypress.Commands.add('fillInputBySelector', (selector: string, value: string) => {
  cy.get(selector).clear().type(value);
});

/**
 * Click a visible navigation button from the currently rendered navbar.
 */
Cypress.Commands.add('clickVisibleNavButton', (buttonText: string) => {
  cy.get('header nav')
    .filter(':visible')
    .contains('button', buttonText)
    .click();
});

/**
 * Click a visible button by exact label and index.
 */
Cypress.Commands.add('clickMainButton', (buttonText: string, index = 0) => {
  const normalizedButtonText = buttonText.toLowerCase();

  cy.get('button')
    .filter(
      (_, element) =>
        element.innerText.trim().toLowerCase() === normalizedButtonText,
    )
    .eq(index)
    .click();
});

/**
 * Open the mobile navigation menu.
 */
Cypress.Commands.add('openMobileMenu', () => {
  cy.get('button[aria-label="Open menu"]').should('be.visible').click();
});

/**
 * Assert that the current browser hash equals the expected route.
 */
Cypress.Commands.add('shouldBeOnHashRoute', (expectedRoute: string) => {
  cy.window().its('location.hash').should('equal', expectedRoute);
});

/**
 * Switch Cypress to the project's desktop viewport.
 */
Cypress.Commands.add('setDesktopViewport', () => {
  cy.viewport(1920, 1080);
});

/**
 * Switch Cypress to the project's mobile viewport.
 */
Cypress.Commands.add('setMobileViewport', () => {
  cy.viewport(375, 667);
});

/**
 * Assert that the home hero content is visible.
 */
Cypress.Commands.add('showHeroContent', () => {
  cy.shouldShowTexts([
    'Convection Parameters Calculator',
    'The convection parameters calculator is a tool under the form of the structure of the pages in which you will convert parameters such as Cape, Li and other stuff, that is used for weather forecasts. In addition, it is possible to convert wind units and temperature.',
  ]);
  cy.get('img[alt="Clouds and sky"]').should('be.visible');
});

declare global {
  namespace Cypress {
    interface Chainable {
      shouldShowTexts(texts: TextMatcher[]): Chainable<void>;
      fillInputBySelector(selector: string, value: string): Chainable<void>;
      clickVisibleNavButton(buttonText: string): Chainable<void>;
      clickMainButton(buttonText: string, index?: number): Chainable<void>;
      openMobileMenu(): Chainable<void>;
      shouldBeOnHashRoute(expectedRoute: string): Chainable<void>;
      setDesktopViewport(): Chainable<void>;
      setMobileViewport(): Chainable<void>;
      showHeroContent(): Chainable<void>;
    }
  }
}

export {};
