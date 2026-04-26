export class SupportPage {
    url = '/#support';

    visit() {
        cy.visit(this.url);
        return this;
    }

    shouldShowHeroContent() {
        cy.showHeroContent();
        return this;
    }
}