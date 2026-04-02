## installing playwright and typescript
npm init playwright@latest
npm install --save-dev typescript
After that intialize typescript that is tsconfig.json
npx tsc --init


## package.json
Add line "type": "module",
This is for modern module syntax like import and export instead of commmonjs module  

## tsconfig.json
"types": ["node"],
This tells the compiler to include the type definitions for the Node.js runtime environment

"exactOptionalPropertyTypes": false,
When enabled, it prevents developers from assigning undefined to an optional property, requiring it to be either absent or present with a valid value

## .env file 
Add CI environment variable to false for now 
npx playwright install 
// This installs browser binaries

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

