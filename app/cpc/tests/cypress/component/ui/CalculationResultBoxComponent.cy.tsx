/// <reference types="cypress" />

import CalculationResultBox from '../../../../src/components/ui/CalculationResultBox';

describe('CalculationResultBox', () => {
  it('renders formula, result, and description', () => {
    cy.mount(
      <CalculationResultBox
        formula="LI = T env - T parcel"
        result="-4"
        description="Negative values indicate unstable atmosphere."
      />,
    );

    cy.contains('LI = T env - T parcel').should('be.visible');
    cy.contains('= -4').should('be.visible');
    cy.contains('Negative values indicate unstable atmosphere.').should(
      'be.visible',
    );
  });

  it('omits the result text when result is empty', () => {
    cy.mount(
      <CalculationResultBox
        formula="EHI = CAPE * SRH / 160000"
        result=""
        description="Enter values to calculate EHI."
      />,
    );

    cy.contains('EHI = CAPE * SRH / 160000').should('be.visible');
  });
});

export {};
