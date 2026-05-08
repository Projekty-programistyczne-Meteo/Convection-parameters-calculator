/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import MainPage from '../../../../src/components/pages/MainPage';

describe('MainPage', () => {
  it('renders Main page', () => {
    cy.mount(<MainPage />);
  });
});

export {};
