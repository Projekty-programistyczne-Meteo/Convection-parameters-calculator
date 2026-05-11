/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import ConvertersPage from '../../../../src/components/pages/ConvertersPage';

describe('ConvertersPage', () => {
  it('renders Converters page', () => {
    cy.mount(<ConvertersPage />);

    cy.contains('Convection Parameters Calculator').should('be.visible');
    cy.contains('1) Temperature Units Converter').should('be.visible');
    cy.contains('2) Wind Units Converter').should('be.visible');
    cy.contains(
      'Explanation step by step of how to convert temperature units',
    ).should('be.visible');
    cy.get('img[alt="Diagram showing conversion from Fahrenheit to Celsius and then to Kelvin"]').should(
      'be.visible',
    );
  });
});

export {};
