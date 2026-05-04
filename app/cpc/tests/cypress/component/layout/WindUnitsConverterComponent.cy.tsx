/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import Wind from '../../../../src/components/layout/Converters/WindUnitsConverter';

describe('Wind', () => {
    it('renders fields, submit and table', () => {
        cy.mount(<Wind />);
    });
});

export {};
