/// <reference types="cypress" />

import ResultsTable from '../../../../src/components/ui/ResultsTable';

describe('ResultsTable', () => {
  it('renders headers and rows', () => {
    cy.mount(
      <ResultsTable
        leftHeader="Units"
        rightHeader="Values"
        rows={[
          { id: 'celsius', label: 'Celsius', value: '20' },
          { id: 'kelvin', label: 'Kelvin', value: '293.15' },
        ]}
      />,
    );

    cy.contains('Units').should('be.visible');
    cy.contains('Values').should('be.visible');
    cy.contains('Celsius').should('be.visible');
    cy.contains('20').should('be.visible');
    cy.contains('Kelvin').should('be.visible');
    cy.contains('293.15').should('be.visible');
  });
});

export {};
