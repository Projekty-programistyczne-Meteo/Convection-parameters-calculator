import { CalculatorsPage } from '../pages/CalculatorsPage';

const calculatorsPage = new CalculatorsPage();

describe('Calculators page E2E', () => {
  it('shows all calculator sections', () => {
    calculatorsPage.visitCalculators().shouldShowHeroContent();

    cy.contains('1) Stability of the atmosphere').should('be.visible');
    cy.contains('2) Updraft Strenght').should('be.visible');
    cy.contains('3) Vertical velocity').should('be.visible');
    cy.contains('4) Energy Helicity Index').should('be.visible');
    cy.contains('5) Derecho Composite Parameter').should('be.visible');
    cy.contains('6) Lifting Condensation Level').should('be.visible');
    cy.contains('7) Td').should('be.visible');
    cy.contains('8) UVV (Upward Vertical Velocity)').should('be.visible');
  });

  it('calculates selected meteorological values', () => {
    calculatorsPage.visitCalculators();

    cy.get('#ambientTemperature').type('-10');
    cy.get('#parcelTemperature').type('-5');
    cy.contains('button', 'Calculate').first().click();
    cy.contains('= -5.00').should('be.visible');

    cy.get('#cape').first().type('200');
    cy.contains('2) Updraft Strenght')
      .parents('section')
      .within(() => {
        cy.contains('button', 'Calculate').click();
        cy.contains('= 20.00').should('be.visible');
      });
  });
});

export {};
