import {expect,test} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"


test('login',async ({page})=>{
    const login_page=new LoginPage(page)
    await login_page.goto()
    await login_page.login('standard_user','secret_sauce')
    expect(page).toHaveURL(/inventory/)
})