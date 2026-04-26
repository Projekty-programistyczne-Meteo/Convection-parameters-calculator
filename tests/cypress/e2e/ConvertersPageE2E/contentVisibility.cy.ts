import {ConvertersPage} from "../../pages/ConvertersPage.cy";

const convertersPage = new ConvertersPage();

describe("Static content", () => {
    it("Should see static hero content", async () => {
        convertersPage.visit();
        convertersPage.shouldShowHeroContent();
    })
})
