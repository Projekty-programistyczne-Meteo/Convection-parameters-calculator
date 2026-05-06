/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import EnergyHelicityIndex from '../../../../src/components/layout/Calculators/EnergyHelicityIndex';

describe('EnergyHelicityIndex', () => {
    it('renders fields, submit and result', () => {
        cy.mount(<EnergyHelicityIndex />);
    });
});

export {};
