/// <reference types="cypress" />

import NumberInput from '../../../../src/components/ui/NumberInput';

describe('NumberInput Component', () => {
  it('renders label and input field', () => {
    cy.mount(
      <NumberInput
        id="cape"
        label="CAPE"
        value=""
        placeholder="Enter CAPE"
        onChange={() => {}}
      />,
    );

    cy.contains('label', 'CAPE').should('be.visible');
    cy.get('#cape').should('be.visible');
    cy.get('#cape').should('have.attr', 'placeholder', 'Enter CAPE');
  });

  it('renders input with value', () => {
    cy.mount(
      <NumberInput
        id="cape"
        label="CAPE"
        value="1200"
        placeholder="Enter CAPE"
        onChange={() => {}}
      />,
    );

    cy.get('#cape').should('have.value', '1200');
  });
});

export {};
