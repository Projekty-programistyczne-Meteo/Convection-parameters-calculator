export class ConvertersPage {
    url = '/#converters';

    visit() {
        cy.visit(this.url);
        return this;
    }

    shouldShowHeroContent() {
        cy.showHeroContent();
        return this;
    }
}