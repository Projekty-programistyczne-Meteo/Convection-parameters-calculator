import { BasePage } from './BasePage';

export class AboutUsPage extends BasePage {
  visitAboutUs() {
    return this.visit('/#about-us');
  }
}
