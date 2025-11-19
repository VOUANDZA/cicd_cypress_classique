const { defineConfig } = require("cypress");
import { allureCypress } from "allure-cypress/reporter";

module.exports = defineConfig({
  /* JUNIT */
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output-[hash].xml',
    toConsole: true,
  },
  // MOCHAWESOME
  //reporter: 'cypress-mochawesome-reporter',
  e2e: {
    // Capture video / ScreenShot
    video: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',

    setupNodeEvents(on, config) {
      // allure
      // allureCypress(on, config, {
      //   resultsDir: "allure-results",
      // });
      // rapport mocha awesome
      //require('cypress-mochawesome-reporter/plugin')(on);
      // gestion des tags
      const { plugin: cypressGrepPlugin } = require('@cypress/grep/plugin')
      cypressGrepPlugin(config)
      return config
    },
  },
});
