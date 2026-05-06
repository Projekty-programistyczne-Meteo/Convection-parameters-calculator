/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import UpdraftStrenght from '../../../../src/components/layout/Calculators/UpdraftStrenght';

describe('UpdraftStrenght', () => {
    it('renders fields, submit and result', () => {
        cy.mount(<UpdraftStrenght />);
    });
});

export {};
