/// <reference types="cypress" />

import Button from '../../../../src/components/ui/Button';

describe('Button', () => {
  it('renders children and calls click handler', () => {
    const onClick = cy.stub().as('onClick');

    cy.mount(<Button onClick={onClick}>Calculate</Button>);

    cy.contains('button', 'Calculate').click();
    cy.get('@onClick').should('have.been.calledOnce');
  });

  it('supports disabled state', () => {
    const onClick = cy.stub().as('onClick');

    cy.mount(
      <Button disabled onClick={onClick}>
        Disabled
      </Button>,
    );

    cy.contains('button', 'Disabled').should('be.disabled');
    cy.get('@onClick').should('not.have.been.called');
  });
});

export {};
