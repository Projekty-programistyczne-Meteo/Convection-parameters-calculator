import { ConvertersPage } from '../../pages/ConvertersPage.cy';

const convertersPage = new ConvertersPage();

describe('Static content', () => {
  it('Should see basic content', async () => {
    convertersPage.visit();
    convertersPage.shouldShowHeroContent();
    cy.contains(
      'When a Celsius value is selected, conversions are calculated directly from degrees Celsius. When other units are selected, conversions first go through degrees Celsius (°C) and then to the target units.',
    );
    cy.contains(
      'All conversions use meters per second (m/s) as the base meteorological unit. When another unit is selected, values are first converted to m/s and then to the remaining units.',
    );
  });

  it('Should display temperature conversion article', () => {
    convertersPage.visit();

    // Check temperature conversion article header
    cy.contains(
      'Explanation step by step of how to convert temperature units between each other.',
    ).should('be.visible');

    // Check temperature conversion explanation
    cy.contains(
      'In order to convert units that are in different type than Celsius (°C), we need to count given unit to degrees Celsius',
    ).should('be.visible');
    cy.contains(
      'Fun fact: Kelvin is default unit of temperature in SI system.',
    ).should('be.visible');

    // Check temperature units list
    cy.contains('Kelvin').should('be.visible');
    cy.contains('Celsius').should('be.visible');
    cy.contains('Fahrenheit').should('be.visible');
    cy.contains('Rankine').should('be.visible');
    cy.contains('Delisle').should('be.visible');
    cy.contains('Newton').should('be.visible');
    cy.contains('Réaumur').should('be.visible');
    cy.contains('Rømer').should('be.visible');

    // Check temperature conversion formulas
    cy.contains('x[°C]=(x+273.15)[K]').should('be.visible');
    cy.contains('x[°C]=(x * 9/5+32)[°F]').should('be.visible');
    cy.contains('x[K]=(x - 273.15)[°C]').should('be.visible');
    cy.contains('x[°F]=(x - 32) * 5/9[°C]').should('be.visible');
  });

  it('Should display wind conversion article', () => {
    convertersPage.visit();

    // Check wind conversion article header
    cy.contains(
      'Explanation step by step of how to convert wind units between each other.',
    ).should('be.visible');

    // Check wind conversion explanation
    cy.contains(
      'To convert wind speeds between different units, the shared intermediate unit is meters per second (m/s).',
    ).should('be.visible');
    cy.contains(
      'This method is especially useful for wind conversion because m/s is a standard meteorological base unit.',
    ).should('be.visible');

    // Check wind units list
    cy.contains('Meters per second [m/s]').should('be.visible');
    cy.contains('Kilometers per hour [km/h]').should('be.visible');
    cy.contains('Knots [kt]').should('be.visible');
    cy.contains('Miles per hour [mph]').should('be.visible');

    // Check wind conversion formulas
    cy.contains('x[m/s] = x × 3.6 [km/h]').should('be.visible');
    cy.contains('x[m/s] = x × 1.9426 [kt]').should('be.visible');
    cy.contains('x[m/s] = x × 2.237 [mph]').should('be.visible');
    cy.contains('x[km/h] = x × 0.27778 [m/s]').should('be.visible');
    cy.contains('x[kt] = x × 0.515 [m/s]').should('be.visible');
    cy.contains('x[mph] = x × 0.447 [m/s]').should('be.visible');
  });

  it('Should display conversion diagrams', () => {
    convertersPage.visit();

    // Check temperature conversion diagram
    cy.get(
      'img[alt="Diagram showing conversion from Fahrenheit to Celsius and then to Kelvin"]',
    ).should('be.visible');

    // Check wind conversion diagram
    cy.get(
      'img[alt="Diagram showing conversion from km/h to meters per second and then to knots"]',
    ).should('be.visible');
  });

  it('Should display reference links', () => {
    convertersPage.visit();

    // Check Wikipedia link for temperature conversions
    cy.contains(
      'https://en.wikipedia.org/wiki/Conversion_of_scales_of_temperature',
    ).should('be.visible');
  });
});
