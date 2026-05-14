/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import EnergyHelicityIndex from '../../../../src/components/layout/Calculators/EnergyHelicityIndex';

describe('EnergyHelicityIndex Component', () => {
  it('renders calculator form with all input fields', () => {
    cy.mount(<EnergyHelicityIndex />);
    
    cy.contains('Energy Helicity Index').should('be.visible');
    cy.contains('CAPE (J/kg)').should('be.visible');
    cy.contains('Storm-relative helicity').should('be.visible');

    cy.get('#cape').should('be.visible');
    cy.get('#srh').should('be.visible');
  });

  it('renders calculate button', () => {
    cy.mount(<EnergyHelicityIndex />);

    cy.contains('button', 'Calculate').should('be.visible');
  });

  it('renders result display area', () => {
    cy.mount(<EnergyHelicityIndex />);

    cy.contains('EHI = (CAPE × SRH) / 1.6 × 10⁵').should('be.visible');
  });
});

export {};
