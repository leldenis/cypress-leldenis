const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // baseUrl залишається в окремих конфіг-файлах, якщо треба
    supportFile: false,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

    setupNodeEvents(on, config) {
      on('task', { log: (message) => console.log(message) });
    },
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
