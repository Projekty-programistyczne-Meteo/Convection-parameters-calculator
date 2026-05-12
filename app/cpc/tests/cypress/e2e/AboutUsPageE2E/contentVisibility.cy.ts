import { AboutUsPage } from '../../pages/AboutUsPage.cy';

const aboutUsPage = new AboutUsPage();

describe('Static content', () => {
  it('Should see static hero content', async () => {
    aboutUsPage.visit();
    aboutUsPage.shouldShowHeroContent();
  });

  it('Should display developers section', () => {
    aboutUsPage.visit();
    cy.contains('Developers and content creators').should('be.visible');
  });

  it('Should display Jakub Początek information', () => {
    aboutUsPage.visit();
    cy.contains('Jakub Początek').should('be.visible');
    cy.contains(
      "I'm a software engineer with a passion for meteorology",
    ).should('be.visible');
    cy.contains('created the Convection Parameters Calculator').should(
      'be.visible',
    );
    cy.contains('https://github.com/Rorschach-IT').should('be.visible');
  });

  it('Should display Filip Szymanek information', () => {
    aboutUsPage.visit();
    cy.contains('Fiip Szymanek').should('be.visible');
    cy.contains('Template text about Filip Szymanek').should('be.visible');
  });

  it('Should display cooperation section', () => {
    aboutUsPage.visit();
    cy.contains('In cooperation with').should('be.visible');
  });

  it('Should display Poland storm hunters information', () => {
    aboutUsPage.visit();
    cy.contains('Poland storm hunters - Skywarn Poland').should('be.visible');
    cy.contains('Polscy Łowcy Burz – Skywarn Polska').should('be.visible');
    cy.contains(
      'is a Polish meteorological association dedicated to the study',
    ).should('be.visible');
    cy.contains(
      'monitoring, and forecasting of severe weather phenomena',
    ).should('be.visible');
    cy.contains(
      'particularly convective storms and extreme atmospheric events',
    ).should('be.visible');
    cy.contains('European Severe Weather Database').should('be.visible');
    cy.contains('https://lowcyburz.pl/ekipa/').should('be.visible');
  });

  it('Should display reference links', () => {
    aboutUsPage.visit();

    // Check GitHub link
    cy.contains('https://github.com/Rorschach-IT').should('be.visible');

    // Check Skywarn Poland link
    cy.contains('https://lowcyburz.pl/ekipa/').should('be.visible');
  });
});
