import {SupportPage} from "../../pages/SupportPage.cy";

const supportPage = new SupportPage();

describe("Static content", () => {
    it("Should see static hero content", async () => {
        supportPage.visit();
        supportPage.shouldShowHeroContent();
    })
})
