/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import HomePage from '../../../../src/components/pages/HomePage';

describe('HomePage', () => {
  it('renders Home page', () => {
    cy.mount(<HomePage />);
  });

  it('displays documentation header', () => {
    cy.mount(<HomePage />);

    cy.contains('Docs and quick start').should('be.visible');
  });

  it('displays welcome section', () => {
    cy.mount(<HomePage />);

    cy.contains('Welcome to Convection Parameters Calculator').should(
      'be.visible',
    );
    cy.contains(
      'This website is an interactive tool designed for meteorologists, weather enthusiasts, and atmospheric science students',
    ).should('be.visible');
  });

  it('displays version information', () => {
    cy.mount(<HomePage />);

    cy.contains('Website Version').should('be.visible');
    cy.contains('alpha-0.1.0').should('be.visible');
    cy.contains(
      'currently being prepared for publication on public hosting',
    ).should('be.visible');
  });

  it('displays website sections', () => {
    cy.mount(<HomePage />);

    cy.contains('Website Sections').should('be.visible');

    // Calculators section
    cy.contains('📊 Calculators').should('be.visible');
    cy.contains('Derecho Composite Parameter').should('be.visible');
    cy.contains('Dew Point Temperature').should('be.visible');
    cy.contains('Energy Helicity Index (EHI)').should('be.visible');
    cy.contains('Lifting Condensation Level (LCL)').should('be.visible');
    cy.contains('Stability of the Atmosphere').should('be.visible');
    cy.contains('Updraft Strength').should('be.visible');

    // Converters section
    cy.contains('🔄 Converters').should('be.visible');
    cy.contains('Temperature Unit Converter').should('be.visible');
    cy.contains('Wind Unit Converter').should('be.visible');

    // About Us section
    cy.contains('ℹ️ About Us').should('be.visible');
    cy.contains(
      'Learn about the developers behind the Convection Parameters Calculator',
    ).should('be.visible');

    // Support section
    cy.contains('💬 Support').should('be.visible');
    cy.contains('Have questions, found a bug, or want to contribute?').should(
      'be.visible',
    );
  });

  it('displays how to use section', () => {
    cy.mount(<HomePage />);

    cy.contains('How to Use This Website').should('be.visible');
    cy.contains('Select a Tool:').should('be.visible');
    cy.contains('Input Your Data:').should('be.visible');
    cy.contains('Review Results:').should('be.visible');
    cy.contains('Explore Further:').should('be.visible');
  });

  it('displays technical information', () => {
    cy.mount(<HomePage />);

    cy.contains('Technical Information').should('be.visible');
    cy.contains(
      'All calculations are performed locally in your browser',
    ).should('be.visible');
    cy.contains('ensuring data privacy and quick results').should('be.visible');
  });
});

export {};
