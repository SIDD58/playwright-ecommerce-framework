import {Page} from '@playwright/test'

export class LoginPage{
    constructor(private page:Page){}

    async goto()
    {
        this.page.goto('/')
    }
    async login(username:string,password:string)
    {
        const username_field=this.page.locator('#user-name')
        const password_field=this.page.locator("#password")
        const submit=this.page.locator('#login-button')
        await username_field.fill(username)
        await password_field.fill(password)
        await submit.click()
    }
}
