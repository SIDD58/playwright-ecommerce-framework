import {test as setup,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
// This is how you import json file 
// it autmatically parses into js object 
import data from '../utils/users.json' with{type:'json'}
setup('authnetication setup',async({page},testInfo)=>{
    // in javascript it is for of loop 
    for(const username of data)
    {
        const login_page=new LoginPage(page)
        const testinfo=testInfo.project.name
        console.log(`Inside setup file project name: ${testinfo}`)
        await login_page.goto()
        await login_page.login(username,"secret_sauce")
        await page.waitForURL(/inventory/)
        const path_to_user="playwright/.auth/"+username+".json"
        await page.context().storageState({path:path_to_user})
    }
})
