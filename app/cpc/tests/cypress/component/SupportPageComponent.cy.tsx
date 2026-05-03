/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import SupportPage from '../../../src/components/pages/SupportPage/SupportPage';

describe('SupportPage', () => {
  it('renders Support page', () => {
    cy.mount(<SupportPage />);
  });
});

export {};
