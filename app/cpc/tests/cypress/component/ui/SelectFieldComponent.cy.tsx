/// <reference types="cypress" />

import SelectField from '../../../../src/components/ui/SelectField';

type TestUnit = 'celsius' | 'kelvin';

describe('SelectField', () => {
  it('renders options and reports selected value', () => {
    const onChange = cy.stub().as('onChange');

    cy.mount(
      <SelectField<TestUnit>
        id="temperatureUnit"
        label="Temperature unit"
        value="celsius"
        options={[
          { id: 'celsius', label: 'Celsius' },
          { id: 'kelvin', label: 'Kelvin' },
        ]}
        onChange={onChange}
      />,
    );

    cy.contains('label', 'Temperature unit').should(
      'have.attr',
      'for',
      'temperatureUnit',
    );
    cy.get('#temperatureUnit').select('kelvin');
    cy.get('@onChange').should('have.been.calledWith', 'kelvin');
  });
});

export {};
