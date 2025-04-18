const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  "viewportWidth": 1440,
  "viewportHeight": 900,
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: '**/*.feature',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      return config;
    },
  },
})
