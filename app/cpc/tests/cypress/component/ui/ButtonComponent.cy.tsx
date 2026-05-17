/// <reference types="cypress" />

import Button from '../../../../src/components/ui/Button';

describe('Button Component', () => {
  it('renders button with text content', () => {
    cy.mount(<Button onClick={() => {}}>Calculate</Button>);

    cy.contains('button', 'Calculate').should('be.visible');
  });

  it('renders button in disabled state', () => {
    cy.mount(
      <Button disabled onClick={() => {}}>
        Disabled
      </Button>,
    );

    cy.contains('button', 'Disabled').should('be.disabled');
  });
});

export {};
