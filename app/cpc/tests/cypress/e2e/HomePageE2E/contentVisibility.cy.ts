import { HomePage } from '../../pages/HomePage.cy';

const homePage = new HomePage();

describe('Static content', () => {
  it('Should see static hero content', async () => {
    homePage.visit();
    homePage.shouldShowHeroContent();
  });
});
