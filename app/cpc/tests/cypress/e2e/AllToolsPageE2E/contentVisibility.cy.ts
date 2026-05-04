import {AllToolsPage} from "../../pages/AllToolsPage.cy";

const allToolsPage = new AllToolsPage();

describe("Static content", () => {
    it("Should see static hero content", async () => {
        allToolsPage.visit();
        allToolsPage.shouldShowHeroContent();
    })
})
