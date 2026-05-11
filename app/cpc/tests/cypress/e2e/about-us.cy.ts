import { AboutUsPage } from '../pages/AboutUsPage';

const aboutUsPage = new AboutUsPage();

describe('About Us page E2E', () => {
  it('shows hero and about page content', () => {
    aboutUsPage.visitAboutUs().shouldShowHeroContent();

    cy.contains('Hello aboutUsPage!').should('be.visible');
  });
});

export {};
