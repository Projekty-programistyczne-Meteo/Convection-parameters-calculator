export class AllToolsPage {
    url = '/#all-tools';

    visit() {
        cy.visit(this.url);
        return this;
    }

    shouldShowHeroContent() {
        cy.showHeroContent();
        return this;
    }
}