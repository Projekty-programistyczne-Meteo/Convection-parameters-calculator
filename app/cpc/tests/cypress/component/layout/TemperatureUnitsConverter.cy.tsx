/// <reference types="cypress" />
/// <reference path="../support/component.ts" />

import Temperature from '../../../../src/components/layout/Converters/TemperatureUnitsConverter';

describe('Temperature', () => {
    it('renders fields, submit and table', () => {
        cy.mount(<Temperature />);
    });
});

export {};
