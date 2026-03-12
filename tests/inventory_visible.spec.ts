import {expect,test} from "@playwright/test"
//import { LoginPage } from "../pages/LoginPage"


test('inventory visible',async ({page})=>{
    await page.goto('/inventory.html')
    const inventory_list=page.locator('.inventory_list')
    await expect(inventory_list).toBeVisible()
})

// test('login',async ({page})=>{
//     const login_page=new LoginPage(page)
//     await login_page.goto()
//     await login_page.login('standard_user','secret_sauce')
//     expect(page).toHaveURL(/inventory/)
// })