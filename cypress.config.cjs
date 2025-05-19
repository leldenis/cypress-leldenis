const { defineConfig } = require('cypress');
const credentials = require('./cypress/e2e/work4/credentials.json');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const configEnv = config.env.configEnv;

      if (configEnv && credentials.baseUrl[configEnv]) {
        config.baseUrl = credentials.baseUrl[configEnv];
        config.env.username = credentials.username[configEnv];
        config.env.password = credentials.password[configEnv];
      }

      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
  },

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'yyyymmdd_HHMMss',
  },
});
