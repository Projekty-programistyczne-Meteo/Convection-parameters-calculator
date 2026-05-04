/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import Navbar from '../../../../src/components/layout/Navbar';

describe('Hero', () => {
  it('renders headline and description', () => {
    cy.mount(<Navbar activeHref="#" onNavigate={cy.stub().as('onNavigate')} />);
  });
});

export {};
