/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import AllToolsPage from '../../../../src/components/pages/AllToolsPage/AllToolsPage';

describe('AllToolsPage', () => {
  it('renders All Tools page', () => {
    cy.mount(<AllToolsPage />);
  });
});

export {};
