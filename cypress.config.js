const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Quidax QA Assessment',
    embeddedScreenshots: true,
    reportFilename: 'demo-report',
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });
      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)]
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config)

      return config;
    },
    specPattern:["cypress/e2e/features/*.feature",'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
    chromeWebSecurity: false,
    baseUrl:"https://demo.seleniumeasy.com/"
  }
});
