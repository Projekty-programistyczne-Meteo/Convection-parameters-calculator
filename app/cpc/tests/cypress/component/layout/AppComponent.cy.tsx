/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import App from '../../../../src/App';

describe('App', () => {
  it('renders the default page with navigation and footer', () => {
    cy.mount(<App />);

    cy.contains('Convection Parameters Calculator').should('be.visible');
    cy.contains('Home').should('be.visible');
    cy.contains('Calculators').should('be.visible');
    cy.contains('Converters').should('be.visible');
    cy.contains('Support').should('be.visible');
    cy.contains('Hello mainPage!').should('be.visible');
    cy.contains('Website Designers:').should('be.visible');
  });

  it('switches visible page after navigation click', () => {
    cy.mount(<App />);

    cy.contains('button', 'Converters').click();

    cy.contains('1) Temperature Units Converter').should('be.visible');
    cy.contains('2) Wind Units Converter').should('be.visible');
  });
});

export {};
