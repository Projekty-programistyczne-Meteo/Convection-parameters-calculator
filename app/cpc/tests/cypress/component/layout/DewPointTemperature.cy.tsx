/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import DewPointTemperature from '../../../../src/components/layout/Calculators/DewPointTemperature';

describe('DewPointTemperature', () => {
    it('renders fields, submit and result', () => {
        cy.mount(<DewPointTemperature />);
    });
});

export {};
