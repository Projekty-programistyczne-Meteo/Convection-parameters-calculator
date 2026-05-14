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
    cy.contains('Website Designers:').should('be.visible');
  });

  it('switches visible page after navigation click', () => {
    cy.mount(<App />);

    cy.contains('button', 'Converters').click();

    cy.contains('Temperature Units Converter').should('be.visible');
    cy.contains('Wind Units Converter').should('be.visible');

    cy.contains('button', 'Calculators').click();
    cy.contains('Stability of the atmosphere').should('be.visible');
    cy.contains('Updraft Strenght').should('be.visible');
    cy.contains('Vertical velocity').should('be.visible');
    cy.contains('Energy Helicity Index').should('be.visible');
    cy.contains('Derecho Composite Parameter').should('be.visible');
    cy.contains('Lifting Condensation Level').should('be.visible');
    cy.contains('Td').should('be.visible');
  });
});

export {};
