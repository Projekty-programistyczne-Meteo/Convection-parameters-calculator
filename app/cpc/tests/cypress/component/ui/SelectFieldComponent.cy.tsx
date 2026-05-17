/// <reference types="cypress" />

import SelectField from '../../../../src/components/ui/SelectField';

type TestUnit = 'celsius' | 'kelvin';

describe('SelectField Component', () => {
  it('renders label and select options', () => {
    cy.mount(
      <SelectField<TestUnit>
        id="temperatureUnit"
        label="Temperature unit"
        value="celsius"
        options={[
          { id: 'celsius', label: 'Celsius' },
          { id: 'kelvin', label: 'Kelvin' },
        ]}
        onChange={() => {}}
      />,
    );

    cy.contains('label', 'Temperature unit').should('be.visible');
    cy.get('#temperatureUnit').should('be.visible');
    cy.get('#temperatureUnit').should('contain', 'Celsius');
    cy.get('#temperatureUnit').should('contain', 'Kelvin');
  });

  it('displays selected value', () => {
    cy.mount(
      <SelectField<TestUnit>
        id="temperatureUnit"
        label="Temperature unit"
        value="kelvin"
        options={[
          { id: 'celsius', label: 'Celsius' },
          { id: 'kelvin', label: 'Kelvin' },
        ]}
        onChange={() => {}}
      />,
    );

    cy.get('#temperatureUnit').should('have.value', 'kelvin');
  });
});

export {};
