import {test as setup,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

setup('authnetication setup',async({page})=>{
    const login_page=new LoginPage(page)
    await login_page.goto()
    await login_page.login("standard_user","secret_sauce")
    await page.waitForURL(/inventory/)
    await page.context().storageState({path:'playwright/.auth/user.json'})
})