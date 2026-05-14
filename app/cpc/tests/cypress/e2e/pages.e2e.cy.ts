/// <reference types="cypress" />

import { HomePage } from '../pages/HomePage';
import { CalculatorsPage } from '../pages/CalculatorsPage';
import { ConvertersPage } from '../pages/ConvertersPage';
import { AboutUsPage } from '../pages/AboutUsPage';
import { SupportPage } from '../pages/SupportPage';

describe('Page Content and Links E2E Tests', () => {
  const homePage = new HomePage();
  const calculatorsPage = new CalculatorsPage();
  const convertersPage = new ConvertersPage();
  const aboutUsPage = new AboutUsPage();
  const supportPage = new SupportPage();

  describe('Home Page Content', () => {
    beforeEach(() => {
      homePage.visitHome();
    });

    it('should display home page with hero section', () => {
      cy.showHeroContent();
      cy.contains('Convection Parameters Calculator').should('be.visible');
    });

    it('should display documentation and welcome section', () => {
      homePage.shouldContainText('Welcome to Convection Parameters Calculator');
      homePage.shouldContainText('Docs and quick start');
    });

    it('should display website version information', () => {
      homePage.shouldContainText('Website Version');
      homePage.shouldContainText('alpha-0.1.0');
    });

    it('should display website sections overview', () => {
      homePage.shouldContainText('Website Sections');
      homePage.shouldContainText('📊 Calculators');
      homePage.shouldContainText('🔄 Converters');
    });

    it('should display footer with contact information', () => {
      homePage.shouldShowFooterContent();
      homePage.shouldContainText('cpc.jpfs.support@gmail.com');
    });
  });

  describe('Calculators Page Content', () => {
    beforeEach(() => {
      calculatorsPage.visitCalculators();
    });

    it('should display all calculator titles', () => {
      const calculators = [
        'Stability of the atmosphere',
        'Updraft Strenght',
        'Vertical velocity',
        'Energy Helicity Index',
        'Derecho Composite Parameter',
        'Lifting Condensation Level',
        'Td',
      ];
      calculators.forEach((calc) => {
        cy.contains(calc).should('be.visible');
      });
    });

    it('should display calculator descriptions', () => {
      calculatorsPage.shouldContainText(
        'Lifted Index (LI) calculated from the environmental and air parcel temperature',
      );
      calculatorsPage.shouldContainText(
        'Maximum theoretical updraft speed calculated from CAPE value',
      );
    });

    it('should have form elements for each calculator', () => {
      cy.get('input[type="number"]').should('have.length.greaterThan', 0);
      cy.contains('button', 'Calculate').should('be.visible');
    });
  });

  describe('Converters Page Content', () => {
    beforeEach(() => {
      convertersPage.visitConverters();
    });

    it('should display temperature converter section', () => {
      convertersPage.shouldContainText('Temperature Units Converter');
      convertersPage.shouldContainText('Temperature value:');
    });

    it('should display wind converter section', () => {
      convertersPage.shouldContainText('Wind Units Converter');
      convertersPage.shouldContainText('Wind speed value:');
    });

    it('should display conversion formulas', () => {
      convertersPage.shouldContainText('x[°C]=(x+273.15)[K]');
      convertersPage.shouldContainText('x[°C]=(x * 9/5+32)[°F]');
    });

    it('should have converter form elements', () => {
      cy.get('input[type="number"]').should('have.length.greaterThan', 0);
      cy.get('select').should('have.length.greaterThan', 0);
    });
  });

  describe('About Us Page Content', () => {
    beforeEach(() => {
      aboutUsPage.visitAboutUs();
    });

    it('should display developers section', () => {
      aboutUsPage.shouldContainText('Developers and content creators');
    });

    it('should display developer information', () => {
      aboutUsPage.shouldContainText('Jakub Początek');
      aboutUsPage.shouldContainText('software engineer');
    });

    it('should display cooperation section', () => {
      aboutUsPage.shouldContainText('In cooperation with');
      aboutUsPage.shouldContainText('Poland storm hunters');
    });

    it('should display GitHub link', () => {
      cy.contains('https://github.com/Rorschach-IT').should('be.visible');
    });
  });

  describe('Support Page Content', () => {
    beforeEach(() => {
      supportPage.visitSupport();
    });

    it('should display support page header', () => {
      supportPage.shouldContainText("We'd love to hear from you");
    });

    it('should display contact form fields', () => {
      cy.get('input[name="firstName"]').should('be.visible');
      cy.get('input[name="lastName"]').should('be.visible');
      cy.get('input[name="email"]').should('be.visible');
      cy.get('textarea[name="message"]').should('be.visible');
    });

    it('should display privacy policy checkbox', () => {
      cy.get('input[name="privacyAccepted"]').should('be.visible');
    });

    it('should display send message button', () => {
      cy.contains('button', 'Send message').should('be.visible');
    });

    it('should display contact email', () => {
      supportPage.shouldContainText('cpc.jpfs.support@gmail.com');
    });
  });

  describe('External Links Verification', () => {
    it('should have GitHub link on About Us page', () => {
      aboutUsPage.visitAboutUs();

      cy.contains('https://github.com/Rorschach-IT')
        .should('have.attr', 'href')
        .and('include', 'github.com');
    });

    it('should display all navigation buttons with correct functionality', () => {
      homePage.visitHome();
      homePage.shouldHaveNavigationButtons();
    });

    it('should have footer links visible on all pages', () => {
      homePage.visitHome();
      homePage.shouldShowFooterContent();

      calculatorsPage.visitCalculators();
      cy.contains('Website Designers:').should('be.visible');

      convertersPage.visitConverters();
      cy.contains('Website Designers:').should('be.visible');
    });
  });

  describe('Page Responsiveness Content', () => {
    it('should display content correctly on mobile viewport', () => {
      cy.viewport(375, 667);
      homePage.visitHome();

      cy.contains('Convection Parameters Calculator').should('be.visible');
      cy.get('img[alt="CPC Logo"]').should('be.visible');
    });

    it('should display content correctly on tablet viewport', () => {
      cy.viewport(768, 1024);
      calculatorsPage.visitCalculators();

      cy.contains('Stability of the atmosphere').should('be.visible');
    });

    it('should display content correctly on desktop viewport', () => {
      cy.viewport(1920, 1080);
      convertersPage.visitConverters();

      cy.contains('Temperature Units Converter').should('be.visible');
      cy.contains('Wind Units Converter').should('be.visible');
    });
  });

  describe('Page Load Performance', () => {
    it('should load home page quickly', () => {
      homePage.visitHome();

      cy.contains('Convection Parameters Calculator').should('be.visible');
      cy.contains('Calculators').should('be.visible');
    });

    it('should load calculators page with all content', () => {
      calculatorsPage.visitCalculators();

      cy.contains('Stability of the atmosphere', { timeout: 5000 }).should(
        'be.visible',
      );
    });

    it('should load converters page with all content', () => {
      convertersPage.visitConverters();

      cy.contains('Temperature Units Converter', { timeout: 5000 }).should(
        'be.visible',
      );
      cy.contains('Wind Units Converter').should('be.visible');
    });
  });
});

export {};
