/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import Hero from '../../../../src/components/layout/Hero';

describe('Hero', () => {
  it('renders headline and description', () => {
    cy.mount(<Hero />);

    cy.contains('h1', 'Convection Parameters Calculator').should('be.visible');
    cy.contains('convert wind units and temperature').should('be.visible');
    cy.get('img[alt="Clouds and sky"]').should('be.visible');
  });
});

export {};
