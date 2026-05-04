const { defineConfig } = require('cypress');
const { devServer } = require('../vite.config');

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:5173/',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    supportFile: 'cypress/support/e2e.ts',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    chromeWebSecurity: false,
    redirectionLimit: 3,
    watchForFileChanges: true,
    testIsolation: false,
    waitForAnimations: true,
    retries: {
      runMode: 1,
      openMode: 1,
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    indexHtmlFile: 'cypress/support/component-index.html',
    supportFile: 'cypress/support/component.ts',
    specPattern: 'cypress/component/**/*.cy.{ts,tsx}',
  },
});
