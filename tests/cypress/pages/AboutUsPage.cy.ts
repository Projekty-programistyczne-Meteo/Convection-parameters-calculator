export class AboutUsPage {
    url = '/#about-us';

    visit() {
        cy.visit(this.url);
        return this;
    }

    shouldShowHeroContent() {
        cy.showHeroContent();
        return this;
    }
}