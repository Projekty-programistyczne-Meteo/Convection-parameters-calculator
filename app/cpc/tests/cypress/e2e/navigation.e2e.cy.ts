/// <reference types="cypress" />

import { HomePage } from '../pages/HomePage';
import { CalculatorsPage } from '../pages/CalculatorsPage';
import { ConvertersPage } from '../pages/ConvertersPage';
import { AboutUsPage } from '../pages/AboutUsPage';
import { SupportPage } from '../pages/SupportPage';

describe('Navigation and Menu E2E Tests', () => {
  const homePage = new HomePage();
  const calculatorsPage = new CalculatorsPage();
  const convertersPage = new ConvertersPage();
  const aboutUsPage = new AboutUsPage();
  const supportPage = new SupportPage();

  beforeEach(() => {
    homePage.visitHome();
  });

  describe('Navigation via navbar buttons', () => {
    it('should navigate to Calculators page from Home', () => {
      homePage.navigateViaNavbar('Calculators');
      calculatorsPage.shouldBeOnRoute('#calculators');
      cy.contains('Stability of the atmosphere').should('be.visible');
    });

    it('should navigate to Converters page from Home', () => {
      homePage.navigateViaNavbar('Converters');
      convertersPage.shouldBeOnRoute('#converters');
      cy.contains('Temperature Units Converter').should('be.visible');
    });

    it('should navigate to About Us page from Home', () => {
      homePage.navigateViaNavbar('About Us');
      aboutUsPage.shouldBeOnRoute('#about-us');
      cy.contains('Developers and content creators').should('be.visible');
    });

    it('should navigate to Support page from Home', () => {
      homePage.navigateViaNavbar('Support');
      supportPage.shouldBeOnRoute('#support');
      cy.contains("We'd love to hear from you").should('be.visible');
    });

    it('should navigate back to Home from any page', () => {
      homePage.navigateViaNavbar('Calculators');
      homePage.navigateViaNavbar('Home');
      homePage.shouldBeOnRoute('');
      cy.showHeroContent();
    });
  });

  describe('Navigation between pages', () => {
    it('should navigate Calculators -> Converters -> About Us -> Support -> Home', () => {
      homePage.navigateViaNavbar('Calculators');
      calculatorsPage.shouldBeOnRoute('#calculators');

      homePage.navigateViaNavbar('Converters');
      convertersPage.shouldBeOnRoute('#converters');

      homePage.navigateViaNavbar('About Us');
      aboutUsPage.shouldBeOnRoute('#about-us');

      homePage.navigateViaNavbar('Support');
      supportPage.shouldBeOnRoute('#support');

      homePage.navigateViaNavbar('Home');
      homePage.shouldBeOnRoute('');
    });
  });

  describe('Mobile menu navigation', () => {
    const clickMobileMenuButton = (buttonText: string) => {
      cy.get('header nav')
        .filter(':visible')
        .contains('button', buttonText)
        .click();
    };

    it('should open and navigate via mobile menu', () => {
      cy.viewport(375, 667);
      cy.visit('/');

      cy.get('button[aria-label="Open menu"]').should('be.visible').click();
      clickMobileMenuButton('Calculators');
      cy.window().then((win) => {
        expect(win.location.hash).to.equal('#calculators');
      });
    });

    it('should close mobile menu after navigation', () => {
      cy.viewport(375, 667);
      cy.visit('/');

      cy.get('button[aria-label="Open menu"]').click();
      clickMobileMenuButton('Converters');

      cy.get('button[aria-label="Open menu"]').should(
        'have.attr',
        'aria-expanded',
        'false',
      );
    });
  });

  describe('Direct URL navigation', () => {
    it('should navigate directly to /Convection-parameters-calculator/', () => {
      cy.visit('/Convection-parameters-calculator/');
      cy.contains('Convection Parameters Calculator').should('be.visible');
    });

    it('should navigate directly to calculators page via hash', () => {
      cy.visit('/#calculators');
      cy.contains('Stability of the atmosphere').should('be.visible');
    });

    it('should navigate directly to converters page via hash', () => {
      cy.visit('/#converters');
      cy.contains('Temperature Units Converter').should('be.visible');
    });

    it('should navigate directly to about-us page via hash', () => {
      cy.visit('/#about-us');
      cy.contains('Developers and content creators').should('be.visible');
    });

    it('should navigate directly to support page via hash', () => {
      cy.visit('/#support');
      cy.contains("We'd love to hear from you").should('be.visible');
    });
  });
});

export {};
