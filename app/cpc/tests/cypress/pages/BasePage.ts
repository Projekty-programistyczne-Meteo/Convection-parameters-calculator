export class BasePage {
  visit(path: string) {
    cy.visit(path);
    return this;
  }

  shouldShowHeroContent() {
    cy.showHeroContent();
    return this;
  }

  shouldShowFooterContent() {
    cy.contains('Website Designers:').should('be.visible');
    cy.contains('Website Developer:').should('be.visible');
    cy.contains('Content creators:').should('be.visible');
    cy.contains('cpc.jpfs.support@gmail.com').should('be.visible');
    return this;
  }
}
