/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import App from '../../../../src/App';

describe('Load component', () => {
  it('Renders all components', () => {
    cy.mount(<App />);
    // cy.mount(<Navbar activeHref="#" onNavigate={cy.stub().as('onNavigate')} />);

    // cy.contains('All tools').click();
    // cy.get('@onNavigate').should('have.been.calledWith', '#all-tools');
  });
});

export {};
