import { defineConfig, devices } from '@playwright/test';
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
    {
      name:'setup',
      testMatch:/auth\.setup\.ts/
    },
    {name:'chromium',
      use:{
        browserName:'chromium',
        storageState:'playwright/.auth/user.json',
        testIdAttribute: 'data-test'
      },
      dependencies:['setup']
    },
    {
      name:'webkit',
      use:{
        browserName:'webkit',
        storageState:'playwright/.auth/user.json',
        testIdAttribute: 'data-test'
      },
      dependencies:['setup']
    }
    // {
    //   name:'firefox',
    //   use:{
    //     browserName:'firefox',
    //     storageState:'playwright/.auth/user.json'
    //   },
    //   dependencies:['setup'],
    //   testIdAttribute: 'data-test'
    // },
  ]
});
