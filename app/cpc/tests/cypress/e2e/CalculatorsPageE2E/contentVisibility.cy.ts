import { CalculatorsPage } from '../../pages/CalculatorsPage.cy';

const calculatorsPage = new CalculatorsPage();

describe('Static content', () => {
  it('Should see static hero content', async () => {
    calculatorsPage.visit();
    calculatorsPage.shouldShowHeroContent();
    cy.contains('1) Stability of the atmosphere');
    cy.contains('2) Updraft Strenght');
    cy.contains('3) Vertical velocity');
    cy.contains('4) Energy Helicity Index');
    cy.contains('5) Derecho Composite Parameter');
    cy.contains('6) Lifting Condensation Level');
    cy.contains('7) Td');
    cy.contains('8) UVV (Upward Vertical Velocity)');
  });

  it('Should display all calculator components', () => {
    calculatorsPage.visit();

    // Check that all calculator headers are present
    cy.contains('Stability of the atmosphere').should('be.visible');
    cy.contains('Updraft Strenght').should('be.visible');
    cy.contains('Vertical velocity').should('be.visible');
    cy.contains('Energy Helicity Index').should('be.visible');
    cy.contains('Derecho Composite Parameter').should('be.visible');
    cy.contains('Lifting Condensation Level').should('be.visible');
    cy.contains('Td').should('be.visible');
    cy.contains('UVV (Upward Vertical Velocity)').should('be.visible');
  });

  it('Should display calculator descriptions', () => {
    calculatorsPage.visit();

    // Check specific calculator descriptions
    cy.contains(
      'Lifted Index (LI) calculated from the environmental and air parcel temperature at 500 mb pressure level',
    ).should('be.visible');
    cy.contains(
      'Negative values indicate unstable conditions favorable for convection',
    ).should('be.visible');

    cy.contains(
      'Maximum theoretical updraft speed calculated from CAPE value',
    ).should('be.visible');
    cy.contains(
      'It approximates the vertical motion available to rising air parcels in unstable atmospheric conditions',
    ).should('be.visible');

    cy.contains('Vertical lifting velocity calculated from CIN value').should(
      'be.visible',
    );
    cy.contains(
      'It estimates the strength of upward motion that a parcel needs to overcome inhibition',
    ).should('be.visible');

    cy.contains(
      'Energy Helicity Index calculated from CAPE and storm-relative helicity values',
    ).should('be.visible');
    cy.contains(
      'It helps assess the potential for rotating storms and severe storm development',
    ).should('be.visible');

    cy.contains(
      'Derecho Composite Parameter calculated from DCAPE, MUCAPE, 0–6 km shear, and 0–6 km mean wind',
    ).should('be.visible');
    cy.contains(
      'It is used to evaluate the potential for long-lived convective windstorms',
    ).should('be.visible');

    cy.contains(
      'Lifting condensation level calculated from air temperature and dew point temperature',
    ).should('be.visible');
    cy.contains(
      'It estimates the approximate altitude where rising air will become saturated',
    ).should('be.visible');

    cy.contains(
      'Dew point temperature calculated from air temperature and relative humidity',
    ).should('be.visible');
    cy.contains(
      'It indicates the temperature at which air becomes saturated and condensation begins',
    ).should('be.visible');

    cy.contains('Upward vertical velocity calculated from CAPE').should(
      'be.visible',
    );
    cy.contains(
      'It gives an estimate of how fast air parcels can rise in a buoyant atmosphere',
    ).should('be.visible');
  });

  it('Should display calculator input fields', () => {
    calculatorsPage.visit();

    // Check for common input field labels
    cy.contains('Ambient temperature (°C)').should('be.visible');
    cy.contains('Air parcel temperature (°C)').should('be.visible');
    cy.contains('CAPE (J/kg)').should('be.visible');
    cy.contains('Storm-relative helicity (m²/s²)').should('be.visible');
    cy.contains('DCAPE (J/kg)').should('be.visible');
    cy.contains('MUCAPE (J/kg)').should('be.visible');
    cy.contains('Temperature (°C)').should('be.visible');
    cy.contains('Dew point temperature (°C)').should('be.visible');
  });

  //   it('Should display calculate buttons', () => {
  //     calculatorsPage.visit();

  //     // Check that calculate buttons are present
  //     cy.get('button').contains('CALCULATE').should('have.length.at.least', 8);
  //   });
});
