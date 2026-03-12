import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  retries:1,
  reporter:[['html',{outputFolder:'reports/html-report'}]],
  use: {
    baseURL:'https://www.saucedemo.com',
    headless:true,
    screenshot:'only-on-failure',
    video:'retain-on-failure',
    trace:'retain-on-failure'
  },
  projects:[
    {name:'chromium',
      use:{
        browserName:'chromium'
      },
    },
    {
      name:'firefox',
      use:{
        browserName:'firefox'
      }
    },
    {
      name:'webkit',
      use:{
        browserName:'webkit'
      }
    }
  ]
});
