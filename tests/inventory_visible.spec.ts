// import {expect,test} from "@playwright/test"
import {expect,test} from "../fixtures/test-fixtures"
//import { LoginPage } from "../pages/LoginPage"


test('inventory visible',async ({inventoryPage,page})=>{
    await inventoryPage.add_to_cart("hello")
    await inventoryPage.open_cart()
    // instead of cart item , it changes its URL 
    await expect(page).toHaveURL(/cart/)
    await expect(inventoryPage.cartItem).toBeVisible()
})

// test('inventory visible',async ({inventoryPage,page})=>{
    // await page.goto('/inventory.html')
    // const inventory_list=page.locator('.inventory_list')
    // await expect(inventory_list).toBeVisible()
//     await expect(inventoryPage.inventoryList).toBeVisible()
// })

// test('login',async ({page})=>{
//     const login_page=new LoginPage(page)
//     await login_page.goto()
//     await login_page.login('standard_user','secret_sauce')
//     expect(page).toHaveURL(/inventory/)
// })

