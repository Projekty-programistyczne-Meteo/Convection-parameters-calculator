import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  visitHome() {
    return this.visit('/');
  }
}
