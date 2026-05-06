/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import LiftingCondensationLevel from '../../../../src/components/layout/Calculators/LiftingCondensationLevel';

describe('LiftingCondensationLevel', () => {
    it('renders fields, submit and result', () => {
        cy.mount(<LiftingCondensationLevel />);
    });
});

export {};
