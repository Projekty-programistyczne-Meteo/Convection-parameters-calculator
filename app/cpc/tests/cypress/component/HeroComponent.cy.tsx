/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import Hero from '../../../src/components/layout/Hero';

describe('Hero', () => {
  it('renders headline and description', () => {
    cy.mount(<Hero />);
  });
});

export {};
