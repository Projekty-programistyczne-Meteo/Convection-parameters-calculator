import { BasePage } from './BasePage';

export class CalculatorsPage extends BasePage {
  visitCalculators() {
    return this.visit('/#calculators');
  }
}
