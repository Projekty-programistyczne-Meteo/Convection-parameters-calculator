import { BasePage } from './BasePage';

export class CalculatorsPage extends BasePage {
  visitCalculators() {
    return this.visit('/#calculators');
  }

  /**
   * Select a calculator from the menu
   */
  selectCalculator(calculatorName: string) {
    cy.contains(calculatorName).should('be.visible');
    return this;
  }

  /**
   * Fill an input field with a value
   */
  fillInput(inputId: string, value: string) {
    cy.get(`#${inputId}`).type(value);
    return this;
  }

  /**
   * Clear an input field
   */
  clearInput(inputId: string) {
    cy.get(`#${inputId}`).clear();
    return this;
  }

  /**
   * Fill multiple inputs at once
   */
  fillMultipleInputs(inputs: Record<string, string>) {
    Object.entries(inputs).forEach(([inputId, value]) => {
      cy.get(`#${inputId}`).type(value);
    });
    return this;
  }

  /**
   * Click the calculate button
   */
  clickCalculate() {
    cy.contains('button', 'Calculate').click();
    return this;
  }

  /**
   * Verify calculation result is displayed
   */
  shouldShowResult(resultText: string) {
    cy.contains(resultText).should('be.visible');
    return this;
  }

  /**
   * Get the result value from the results section
   */
  getResultValue(): Cypress.Chainable<string> {
    return cy
      .get('div')
      .contains(/=\s*[\d.]+/)
      .invoke('text');
  }

  /**
   * Complete a full calculator test: fill inputs, calculate, verify result
   */
  calculateWithInputs(
    inputs: Record<string, string>,
    expectedResultPattern: RegExp | string,
  ) {
    this.fillMultipleInputs(inputs);
    this.clickCalculate();

    if (typeof expectedResultPattern === 'string') {
      this.shouldShowResult(expectedResultPattern);
    } else {
      cy.get('div').invoke('text').should('match', expectedResultPattern);
    }

    return this;
  }

  /**
   * Verify calculator form is visible with all inputs
   */
  shouldShowCalculatorForm(inputIds: string[]) {
    inputIds.forEach((inputId) => {
      cy.get(`#${inputId}`).should('be.visible');
    });
    cy.contains('button', 'Calculate').should('be.visible');
    return this;
  }
}
