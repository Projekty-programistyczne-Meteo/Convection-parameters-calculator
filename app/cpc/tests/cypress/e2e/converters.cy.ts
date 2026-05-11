import { ConvertersPage } from '../pages/ConvertersPage';

const convertersPage = new ConvertersPage();

describe('Converters page E2E', () => {
  it('shows converter sections and explanatory content', () => {
    convertersPage.visitConverters().shouldShowHeroContent();

    cy.contains('1) Temperature Units Converter').should('be.visible');
    cy.contains('2) Wind Units Converter').should('be.visible');
    cy.contains('Temperature Units').should('be.visible');
    cy.contains('Wind Speed Units').should('be.visible');
    cy.contains(
      'Explanation step by step of how to convert temperature units',
    ).should('be.visible');
  });

  it('converts temperature and wind values', () => {
    convertersPage.visitConverters();

    cy.get('#temperatureValue').type('0');
    cy.contains('1) Temperature Units Converter')
      .parents('section')
      .within(() => {
        cy.contains('button', 'Convert').click();
        cy.contains('273.15').should('be.visible');
        cy.contains('32.00').should('be.visible');
      });

    cy.get('#windValue').type('10');
    cy.contains('2) Wind Units Converter')
      .parents('section')
      .within(() => {
        cy.contains('button', 'Convert').click();
        cy.contains('36.00').should('be.visible');
        cy.contains('19.43').should('be.visible');
      });
  });
});

export {};
