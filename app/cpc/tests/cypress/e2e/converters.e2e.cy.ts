/// <reference types="cypress" />

describe('Converter E2E tests', () => {
  const visitConverters = () => {
    cy.visit('/#converters');
  };

  const clickConvertButton = (index: number) => {
    cy.get('main button').filter(':contains("Convert")').eq(index).click();
  };

  const expectValuesVisible = (values: string[]) => {
    values.forEach((value) => {
      cy.contains(value).should('be.visible');
    });
  };

  it('converts Celsius to other temperature units', () => {
    visitConverters();

    cy.get('#temperatureValue').clear().type('0');
    clickConvertButton(0);

    expectValuesVisible([
      '0.00',
      '273.15',
      '32.00',
      '491.67',
      '150.00',
      '7.50',
    ]);
  });

  it('converts Kelvin to other temperature units', () => {
    visitConverters();

    cy.get('#temperatureUnit').select('kelvin');
    cy.get('#temperatureValue').clear().type('300');
    clickConvertButton(0);

    expectValuesVisible([
      '26.85',
      '300.00',
      '80.33',
      '540.00',
      '109.72',
      '8.86',
      '21.48',
      '21.60',
    ]);
  });

  it('converts Fahrenheit to other temperature units', () => {
    visitConverters();

    cy.get('#temperatureUnit').select('fahrenheit');
    cy.get('#temperatureValue').clear().type('68');
    clickConvertButton(0);

    expectValuesVisible([
      '20.00',
      '293.15',
      '68.00',
      '527.67',
      '120.00',
      '6.60',
      '16.00',
      '18.00',
    ]);
  });

  it('converts Rankine to other temperature units', () => {
    visitConverters();

    cy.get('#temperatureUnit').select('rankine');
    cy.get('#temperatureValue').clear().type('540');
    clickConvertButton(0);

    expectValuesVisible([
      '26.85',
      '300.00',
      '80.33',
      '540.00',
      '109.73',
      '8.86',
      '21.48',
      '21.60',
    ]);
  });

  it('converts Delisle to other temperature units', () => {
    visitConverters();

    cy.get('#temperatureUnit').select('delisle');
    cy.get('#temperatureValue').clear().type('90');
    clickConvertButton(0);

    expectValuesVisible([
      '40.00',
      '313.15',
      '104.00',
      '563.67',
      '90.00',
      '13.20',
      '32.00',
      '28.50',
    ]);
  });

  it('converts Newton to other temperature units', () => {
    visitConverters();

    cy.get('#temperatureUnit').select('newton');
    cy.get('#temperatureValue').clear().type('33');
    clickConvertButton(0);

    expectValuesVisible([
      '100.00',
      '373.15',
      '212.00',
      '671.67',
      '0.00',
      '33.00',
      '80.00',
      '60.00',
    ]);
  });

  it('converts Reaumur to other temperature units', () => {
    visitConverters();

    cy.get('#temperatureUnit').select('reaumur');
    cy.get('#temperatureValue').clear().type('80');
    clickConvertButton(0);

    expectValuesVisible([
      '100.00',
      '373.15',
      '212.00',
      '671.67',
      '0.00',
      '33.00',
      '80.00',
      '60.00',
    ]);
  });

  it('converts Romer to other temperature units', () => {
    visitConverters();

    cy.get('#temperatureUnit').select('romer');
    cy.get('#temperatureValue').clear().type('60');
    clickConvertButton(0);

    expectValuesVisible([
      '100.00',
      '373.15',
      '212.00',
      '671.67',
      '0.00',
      '33.00',
      '80.00',
      '60.00',
    ]);
  });

  it('converts meters per second to other wind units', () => {
    visitConverters();

    cy.get('#windValue').clear().type('10');
    clickConvertButton(1);

    expectValuesVisible(['10.00', '36.00', '19.43', '22.37']);
  });

  it('converts kilometers per hour to other wind units', () => {
    visitConverters();

    cy.get('#windUnit').select('kmh');
    cy.get('#windValue').clear().type('72');
    clickConvertButton(1);

    expectValuesVisible(['20.00', '72.00', '38.85', '44.74']);
  });

  it('converts knots to other wind units', () => {
    visitConverters();

    cy.get('#windUnit').select('knot');
    cy.get('#windValue').clear().type('20');
    clickConvertButton(1);

    expectValuesVisible(['10.30', '37.08', '20.00', '23.04']);
  });

  it('converts miles per hour to other wind units', () => {
    visitConverters();

    cy.get('#windUnit').select('mph');
    cy.get('#windValue').clear().type('30');
    clickConvertButton(1);

    expectValuesVisible(['13.41', '48.28', '26.05', '30.00']);
  });
});

export {};
