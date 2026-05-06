/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import StabilityOfTheAtmosphere from '../../../../src/components/layout/Calculators/StabilityOfTheAtmosphere';

describe('StabilityOfTheAtmosphere', () => {
    it('renders fields, submit and result', () => {
        cy.mount(<StabilityOfTheAtmosphere />);
    });
});

export {};
