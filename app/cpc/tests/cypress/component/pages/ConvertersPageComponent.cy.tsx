/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import ConvertersPage from '../../../../src/components/pages/ConvertersPage';

describe('ConvertersPage', () => {
  it('renders Converters page', () => {
    cy.mount(<ConvertersPage />);
  });
});

export {};
