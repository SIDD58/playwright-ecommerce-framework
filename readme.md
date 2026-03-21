## Common Commands
npx playwright test 
Options used 
--debug to use debug mode 
--headed to run in headed mode 
--project=my-chromium (to run specific project)
--ui run in UI mode
You can also specify file-name to run that particualr website only 

npx playwright show-report reports\html-report (Path where you save reports)
npx playwright codegen


## Meta Commands 
npx playwright --help
npx playwright test --help 

## Note 
We have shown concepts of network intreception on frontend UI just for learning purpose 
As https://www.saucedemo.com/ is not calling any backend API 

However it needs to be streesed out interception is majorly used with backend API or other resources that network requests

