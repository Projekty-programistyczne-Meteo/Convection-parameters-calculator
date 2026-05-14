import { BasePage } from './BasePage';

export class ConvertersPage extends BasePage {
  visitConverters() {
    return this.visit('/#converters');
  }

  /**
   * Select a converter from the menu
   */
  selectConverter(converterName: string) {
    cy.contains(converterName).should('be.visible');
    return this;
  }

  /**
   * Fill the input field for conversion
   */
  fillInputValue(value: string) {
    cy.get('input[type="number"]').first().type(value);
    return this;
  }

  /**
   * Clear the input field
   */
  clearInputValue() {
    cy.get('input[type="number"]').first().clear();
    return this;
  }

  /**
   * Select a unit from dropdown
   */
  selectFromUnit(unit: string) {
    cy.get('select').first().select(unit);
    return this;
  }

  /**
   * Select a unit to convert to
   */
  selectToUnit(unit: string) {
    cy.get('select').eq(1).select(unit);
    return this;
  }

  /**
   * Perform a conversion
   */
  convertValue(fromValue: string, fromUnit: string, toUnit: string) {
    this.selectFromUnit(fromUnit);
    this.selectToUnit(toUnit);
    this.fillInputValue(fromValue);
    return this;
  }

  /**
   * Verify conversion result is displayed
   */
  shouldShowConvertedValue(value: string) {
    cy.contains(value).should('be.visible');
    return this;
  }

  /**
   * Get the converted value from the results section
   */
  getConvertedValue(): Cypress.Chainable<string> {
    return cy
      .get('div')
      .contains(/≈\s*[\d.]+/)
      .invoke('text');
  }

  /**
   * Verify converter form is visible
   */
  shouldShowConverterForm() {
    cy.get('input[type="number"]').should('be.visible');
    cy.get('select').should('have.length.at.least', 2);
    return this;
  }
}
