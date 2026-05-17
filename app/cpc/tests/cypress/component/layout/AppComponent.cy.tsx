/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import App from '../../../../src/App';

describe('App', () => {
  it('renders the default page with navigation and footer', () => {
    cy.mount(<App />);

    cy.shouldShowTexts([
      'Convection Parameters Calculator',
      'Home',
      'Calculators',
      'Converters',
      'Support',
      'Website Designers:',
    ]);
  });

  it('switches visible page after navigation click', () => {
    cy.mount(<App />);

    cy.contains('button', 'Converters').click();

    cy.shouldShowTexts(['Temperature Units Converter', 'Wind Units Converter']);

    cy.contains('button', 'Calculators').click();
    cy.shouldShowTexts([
      'Stability of the atmosphere',
      'Updraft Strenght',
      'Vertical velocity',
      'Energy Helicity Index',
      'Derecho Composite Parameter',
      'Lifting Condensation Level',
      'Td',
    ]);
  });
});

export {};
