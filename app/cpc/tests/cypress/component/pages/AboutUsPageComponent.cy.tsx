/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import AboutUsPage from '../../../../src/components/pages/AboutUsPage';

describe('AboutUsPage', () => {
  it('renders About Us page', () => {
    cy.mount(<AboutUsPage />);
  });

  it('displays developers section', () => {
    cy.mount(<AboutUsPage />);

    cy.contains('Developers and content creators').should('be.visible');
  });

  it('displays Jakub Początek information', () => {
    cy.mount(<AboutUsPage />);

    cy.contains('Jakub Początek').should('be.visible');
    cy.contains(
      "I'm a software engineer with a passion for meteorology",
    ).should('be.visible');
    cy.contains('created the Convection Parameters Calculator').should(
      'be.visible',
    );
    cy.contains('https://github.com/Rorschach-IT').should('be.visible');
  });

  it('displays Filip Szymanek information', () => {
    cy.mount(<AboutUsPage />);

    cy.contains('Fiip Szymanek').should('be.visible');
    cy.contains('Template text about Filip Szymanek').should('be.visible');
  });

  it('displays cooperation section', () => {
    cy.mount(<AboutUsPage />);

    cy.contains('In cooperation with').should('be.visible');
  });

  it('displays Poland storm hunters information', () => {
    cy.mount(<AboutUsPage />);

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

  it('displays reference links', () => {
    cy.mount(<AboutUsPage />);

    // Check GitHub link
    cy.contains('https://github.com/Rorschach-IT').should('be.visible');

    // Check Skywarn Poland link
    cy.contains('https://lowcyburz.pl/ekipa/').should('be.visible');
  });
});

export {};
