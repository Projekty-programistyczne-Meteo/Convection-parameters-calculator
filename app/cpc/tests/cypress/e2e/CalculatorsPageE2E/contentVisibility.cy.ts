import {CalculatorsPage} from "../../pages/CalculatorsPage.cy";

const calculatorsPage = new CalculatorsPage();

describe("Static content", () => {
    it("Should see static hero content", async () => {
        calculatorsPage.visit();
        calculatorsPage.shouldShowHeroContent();
    })
})
