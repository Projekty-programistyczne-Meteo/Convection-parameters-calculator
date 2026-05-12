import { BasePage } from './BasePage';

export class ConvertersPage extends BasePage {
  visitConverters() {
    return this.visit('/#converters');
  }
}
