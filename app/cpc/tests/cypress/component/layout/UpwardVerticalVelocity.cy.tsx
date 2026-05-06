/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import UpwardVerticalVelocity from '../../../../src/components/layout/Calculators/UpwardVerticalVelocity';

describe('UpwardVerticalVelocity', () => {
    it('renders fields, submit and result', () => {
        cy.mount(<UpwardVerticalVelocity />);
    });
});

export {};
