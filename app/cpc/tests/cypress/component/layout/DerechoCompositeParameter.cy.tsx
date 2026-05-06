/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import DerechoCompositeParameter from '../../../../src/components/layout/Calculators/DerechoCompositeParameter';

describe('DerechoCompositeParameter', () => {
    it('renders fields, submit and result', () => {
        cy.mount(<DerechoCompositeParameter />);
    });
});

export {};
