const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // baseUrl: 'http://localhost:3000',
    supportFile: false,
    specPattern: 'cypress/homeWork/**/*.cy.js',
    // specPattern: 'cypress/classWork/**/*.cy.js',
  },
});
