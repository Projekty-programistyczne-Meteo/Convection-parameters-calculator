/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import ConvertersPage from '../../../../src/components/pages/ConvertersPage';

describe('ConvertersPage', () => {
  it('renders Converters page', () => {
    cy.mount(<ConvertersPage />);
  });

  it('displays temperature conversion article', () => {
    cy.mount(<ConvertersPage />);

    cy.shouldShowTexts([
      'Explanation step by step of how to convert temperature units between each other.',
      'In order to convert units that are in different type than Celsius',
      'Fun fact: Kelvin is default unit of temperature in SI system.',
      'Kelvin',
      'Celsius',
      'Fahrenheit',
      'Rankine',
      'Delisle',
      'Newton',
      'Réaumur',
      'Rømer',
      'x[°C]=(x+273.15)[K]',
      'x[°C]=(x * 9/5+32)[°F]',
      'x[K]=(x - 273.15)[°C]',
      'x[°F]=(x - 32) * 5/9[°C]',
    ]);
  });

  it('displays wind conversion article', () => {
    cy.mount(<ConvertersPage />);

    cy.shouldShowTexts([
      'Explanation step by step of how to convert wind units between each other.',
      'To convert wind speeds between different units, the shared intermediate unit is meters per second (m/s).',
      'This method is especially useful for wind conversion because m/s is a standard meteorological base unit.',
      'Meters per second [m/s]',
      'Kilometers per hour [km/h]',
      'Knots [kt]',
      'Miles per hour [mph]',
      'x[m/s] = x × 3.6 [km/h]',
      'x[m/s] = x × 1.9426 [kt]',
      'x[m/s] = x × 2.237 [mph]',
      'x[km/h] = x × 0.27778 [m/s]',
      'x[kt] = x × 0.515 [m/s]',
      'x[mph] = x × 0.447 [m/s]',
    ]);
  });

  it('displays temperature conversion diagram', () => {
    cy.mount(<ConvertersPage />);

    cy.get(
      'img[alt="Diagram showing conversion from Fahrenheit to Celsius and then to Kelvin"]',
    ).should('be.visible');
  });

  it('displays wind conversion diagram', () => {
    cy.mount(<ConvertersPage />);

    cy.get(
      'img[alt="Diagram showing conversion from km/h to meters per second and then to knots"]',
    ).should('be.visible');
  });

  it('displays conversion reference links', () => {
    cy.mount(<ConvertersPage />);

    cy.contains(
      'https://en.wikipedia.org/wiki/Conversion_of_scales_of_temperature',
    ).should('be.visible');
  });
});

export {};
