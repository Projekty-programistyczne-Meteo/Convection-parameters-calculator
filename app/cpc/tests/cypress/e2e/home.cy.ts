import { HomePage } from '../pages/HomePage';

const homePage = new HomePage();

describe('Home page E2E', () => {
  it('shows hero, landing content, and footer', () => {
    homePage.visitHome().shouldShowHeroContent().shouldShowFooterContent();

    cy.contains('Hello mainPage!').should('be.visible');
  });

  it('navigates to calculators from the top menu', () => {
    homePage.visitHome();

    cy.contains('button', 'Calculators').click();

    cy.location('hash').should('eq', '#calculators');
    cy.contains('1) Stability of the atmosphere').should('be.visible');
  });
});

export {};
