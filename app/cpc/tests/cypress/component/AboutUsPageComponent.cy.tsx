/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import AboutUsPage from '../../../src/components/pages/AboutUsPage/AboutUsPage';

describe('AboutUsPage', () => {
  it('renders About Us page', () => {
    cy.mount(<AboutUsPage />);
  });
});

export {};
