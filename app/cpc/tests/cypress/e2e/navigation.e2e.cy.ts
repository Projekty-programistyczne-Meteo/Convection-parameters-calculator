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

  const pages = [
    {
      name: 'Home',
      buttonText: 'Home',
      visitPath: '/',
      route: '',
      assertRoute: () => homePage.shouldBeOnRoute(''),
      visibleText: 'Convection Parameters Calculator',
    },
    {
      name: 'Calculators',
      buttonText: 'Calculators',
      visitPath: '/#calculators',
      route: '#calculators',
      assertRoute: () => calculatorsPage.shouldBeOnRoute('#calculators'),
      visibleText: 'Stability of the atmosphere',
    },
    {
      name: 'Converters',
      buttonText: 'Converters',
      visitPath: '/#converters',
      route: '#converters',
      assertRoute: () => convertersPage.shouldBeOnRoute('#converters'),
      visibleText: 'Temperature Units Converter',
    },
    {
      name: 'About Us',
      buttonText: 'About Us',
      visitPath: '/#about-us',
      route: '#about-us',
      assertRoute: () => aboutUsPage.shouldBeOnRoute('#about-us'),
      visibleText: 'Developers and content creators',
    },
    {
      name: 'Support',
      buttonText: 'Support',
      visitPath: '/#support',
      route: '#support',
      assertRoute: () => supportPage.shouldBeOnRoute('#support'),
      visibleText: "We'd love to hear from you",
    },
  ];

  beforeEach(() => {
    cy.setDesktopViewport();
    homePage.visitHome();
  });

  describe('Navigation via navbar buttons', () => {
    pages.forEach((sourcePage) => {
      pages
        .filter((targetPage) => targetPage.route !== sourcePage.route)
        .forEach((targetPage) => {
          it(`should navigate from ${sourcePage.name} to ${targetPage.name}`, () => {
            cy.visit(sourcePage.visitPath);

            cy.clickVisibleNavButton(targetPage.buttonText);

            targetPage.assertRoute();
            cy.contains(targetPage.visibleText).should('be.visible');
          });
        });
    });
  });

  describe('Mobile menu navigation', () => {
    pages.forEach((sourcePage) => {
      pages
        .filter((targetPage) => targetPage.route !== sourcePage.route)
        .forEach((targetPage) => {
          it(`should navigate from ${sourcePage.name} to ${targetPage.name} via mobile menu`, () => {
            cy.setMobileViewport();
            cy.visit(sourcePage.visitPath);

            cy.openMobileMenu();
            cy.clickVisibleNavButton(targetPage.buttonText);

            targetPage.assertRoute();
            cy.contains(targetPage.visibleText).should('be.visible');
          });
        });
    });

    it('should close mobile menu after navigation', () => {
      cy.setMobileViewport();
      cy.visit('/');

      cy.openMobileMenu();
      cy.clickVisibleNavButton('Converters');

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
