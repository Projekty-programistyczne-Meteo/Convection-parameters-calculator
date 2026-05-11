import { BasePage } from './BasePage';

export class SupportPage extends BasePage {
  visitSupport() {
    return this.visit('/#support');
  }
}
