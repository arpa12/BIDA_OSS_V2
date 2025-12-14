const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    baseUrl: 'https://staging-bida-g2.oss.net.bd/'
  },
});
