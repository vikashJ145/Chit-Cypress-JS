const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',

    reporter: 'mochawesome',

    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    },

    setupNodeEvents(on, config) {
      require('@bahmutov/cy-grep/src/plugin')(config);
      return config;
    }
  }
});