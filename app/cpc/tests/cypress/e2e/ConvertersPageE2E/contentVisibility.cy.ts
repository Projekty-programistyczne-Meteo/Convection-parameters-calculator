import {ConvertersPage} from "../../pages/ConvertersPage.cy";

const convertersPage = new ConvertersPage();

describe("Static content", () => {
    it("Should see basic content", async () => {
        convertersPage.visit();
        convertersPage.shouldShowHeroContent();
        cy.contains("When a Celsius value is selected, conversions are calculated directly from degrees Celsius. When other units are selected, conversions first go through degrees Celsius (°C) and then to the target units.");
        cy.contains("All conversions use meters per second (m/s) as the base meteorological unit. When another unit is selected, values are first converted to m/s and then to the remaining units.");
    })
})
