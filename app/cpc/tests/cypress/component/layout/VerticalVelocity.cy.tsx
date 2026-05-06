/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import VerticalVelocity from '../../../../src/components/layout/Calculators/VerticalVelocity';

describe('VerticalVelocity', () => {
    it('renders fields, submit and result', () => {
        cy.mount(<VerticalVelocity />);
    });
});

export {};
