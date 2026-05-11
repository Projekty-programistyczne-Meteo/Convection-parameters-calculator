/// <reference types="cypress" />

import NumberInput from '../../../../src/components/ui/NumberInput';

describe('NumberInput', () => {
  it('renders label, placeholder, and reports changes', () => {
    const onChange = cy.stub().as('onChange');

    cy.mount(
      <NumberInput
        id="cape"
        label="CAPE"
        value=""
        placeholder="Enter CAPE"
        onChange={onChange}
      />,
    );

    cy.contains('label', 'CAPE').should('have.attr', 'for', 'cape');
    cy.get('#cape').should('have.attr', 'placeholder', 'Enter CAPE');
    cy.get('#cape').type('1200');
    cy.get('@onChange').should('have.been.called');
  });
});

export {};
