import {test as base,expect,Page} from '@playwright/test'
import {InventoryPage} from '../pages/InventoryPage'
import {LoginPage} from '../pages/LoginPage'

type Myfixture={
    'loginPage':any,
    'inventoryPage':any
}

export const test=base.extend<Myfixture>({
    'loginPage':async ({page},use)=>{
        const login_page=new LoginPage(page)
        await use(login_page)
    },
    'inventoryPage':async ({page},use)=>{
        const inventory_page=new InventoryPage(page)
        console.log("Inventory page fixture called")
        await inventory_page.goto()
        await use(inventory_page)
    }

})

export {expect}


















// import {test as base, expect, Page} from '@playwright/test'

// type MyFixture = {
//     'testfix':any
// };

// export const test=base.extend<MyFixture>(
//     {
//         'testfix':async ({/* You can pass some fixture to use , this is fixture nesting */},use)=>{
//             console.log("I am test Fixture build phase")
//             const a="Passing a value from Fixture"
//             await use(a)
//             console.log("Test Fixture teardown phase")
//         }
//     }
// )

// export { expect }