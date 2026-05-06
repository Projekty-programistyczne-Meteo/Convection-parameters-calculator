import {CalculatorsPage} from "../../pages/CalculatorsPage.cy";

const calculatorsPage = new CalculatorsPage();

describe("Static content", () => {
    it("Should see static hero content", async () => {
        calculatorsPage.visit();
        calculatorsPage.shouldShowHeroContent();
        cy.contains("1) Stability of the atmosphere");
        cy.contains("2) Updraft Strenght");
        cy.contains("3) Vertical velocity");
        cy.contains("4) Energy Helicity Index");
        cy.contains("5) Derecho Composite Parameter");
        cy.contains("6) Lifting Condensation Level");
        cy.contains("7) Td");
        cy.contains("8) UVV (Upward Vertical Velocity)");
    })
})
