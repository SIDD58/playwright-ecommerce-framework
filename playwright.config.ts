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
      // testMatch:/auth\.spec\.ts/
    },
    {name:'standard-user',
      use:{
        browserName:'chromium',
        storageState:'playwright/.auth/standard_user.json',
        testIdAttribute: 'data-test'
      },
      dependencies:['setup']
    },
    {name:'erorr-user',
      use:{
        browserName:'chromium',
        storageState:'playwright/.auth/error_user.json',
        testIdAttribute: 'data-test'
      },
      dependencies:['setup']
    },
    {name:'problem-user',
      use:{
        browserName:'chromium',
        storageState:'playwright/.auth/problem_user.json',
        testIdAttribute: 'data-test'
      },
      dependencies:['setup']
    },    
    // {name:'performance-user',
    //   use:{
    //     browserName:'chromium',
    //     storageState:'playwright/.auth/performance_glitch_user.json',
    //     testIdAttribute: 'data-test'
    //   },
    //   dependencies:['setup']
    // },
    // {name:'visual-user',
    //   use:{
    //     browserName:'chromium',
    //     storageState:'playwright/.auth/visual_user.json',
    //     testIdAttribute: 'data-test'
    //   },
    //   dependencies:['setup']
    // },


    // {name:'chromium',
    //   use:{
    //     browserName:'chromium',
    //     storageState:'playwright/.auth/user.json',
    //     testIdAttribute: 'data-test'
    //   },
    //   dependencies:['setup']
    // },
    // {
    //   name:'webkit',
    //   use:{
    //     browserName:'webkit',
    //     storageState:'playwright/.auth/user.json',
    //     testIdAttribute: 'data-test'
    //   },
    //   dependencies:['setup']
    // }
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
