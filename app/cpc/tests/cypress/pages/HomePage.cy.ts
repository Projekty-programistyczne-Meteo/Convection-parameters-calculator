export class HomePage {
    url = '/';

    visit() {
        cy.visit(this.url);
        return this;
    }

    shouldShowHeroContent() {
        cy.showHeroContent();
        return this;
    }
}