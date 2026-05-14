/// <reference types="cypress" />

describe('Calculator E2E tests', () => {
  const visitCalculators = () => {
    cy.visit('/#calculators');
  };

  const clickCalculateButton = (index: number) => {
    cy.get('button').filter(':contains("Calculate")').eq(index).click();
  };

  it('calculates Stability of the atmosphere', () => {
    visitCalculators();

    cy.get('#ambientTemperature').type('-10');
    cy.get('#parcelTemperature').type('-5');
    clickCalculateButton(0);

    cy.contains('= -5.00').should('be.visible');
  });

  it('calculates Updraft Strenght', () => {
    visitCalculators();

    cy.get('input[id="cape"]').eq(0).type('2000');
    clickCalculateButton(1);

    cy.contains('= 63.25').should('be.visible');
  });

  it('calculates Vertical velocity', () => {
    visitCalculators();

    cy.get('#cin').type('200');
    clickCalculateButton(2);

    cy.contains('= 20.00').should('be.visible');
  });

  it('calculates Energy Helicity Index', () => {
    visitCalculators();

    cy.get('input[id="cape"]').eq(1).type('2000');
    cy.get('#srh').type('160');
    clickCalculateButton(3);

    cy.contains('= 2.00').should('be.visible');
  });

  it('calculates Derecho Composite Parameter', () => {
    visitCalculators();

    cy.get('#dcape').type('980');
    cy.get('#mucape').type('2000');
    cy.get('#shear06km').type('20');
    cy.get('#meanWind06km').type('16');
    clickCalculateButton(4);

    cy.contains('= 1.00').should('be.visible');
  });

  it('calculates Lifting Condensation Level', () => {
    visitCalculators();

    cy.get('input[id="temperature"]').eq(0).type('20');
    cy.get('#dewPoint').type('12');
    clickCalculateButton(5);

    cy.contains('= 1000.00').should('be.visible');
  });

  it('calculates Dew Point Temperature', () => {
    visitCalculators();

    cy.get('input[id="temperature"]').eq(1).type('20');
    cy.get('#relativeHumidity').type('50');
    clickCalculateButton(6);

    cy.contains('= 10.00').should('be.visible');
  });

  it('calculates UVV', () => {
    visitCalculators();

    cy.get('input[id="cape"]').eq(2).type('2500');
    clickCalculateButton(7);

    cy.contains('= 70.71').should('be.visible');
  });
});

export {};
