Cypress.Commands.add('showHeroContent', () => {
    cy.contains('Convection Parameters Calculator');
    cy.contains('The convection parameters calculator is a tool under the form of the structure of the pages in which you will convert parameters such as Cape, Li and other stuff, that is used for weather forecasts. In addition, it is possible to convert wind units and temperature.');
});

declare global {
    namespace Cypress {
        interface Chainable {
            showHeroContent(): Chainable<void>;
        }
    }
}

export {};