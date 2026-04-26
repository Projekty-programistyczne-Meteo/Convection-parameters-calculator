import {AboutUsPage} from "../../pages/AboutUsPage.cy";

const aboutUsPage = new AboutUsPage();

describe("Static content", () => {
    it("Should see static hero content", async () => {
        aboutUsPage.visit();
        aboutUsPage.shouldShowHeroContent();
    })
})
