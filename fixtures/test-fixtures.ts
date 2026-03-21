import {test as base,expect,Page} from '@playwright/test'
import {InventoryPage} from '../pages/InventoryPage'
import {LoginPage} from '../pages/LoginPage'
import {mockBlock, mockServerError, mockSuccessful} from '../utils/apiMocks'

type Myfixture={
    'loginPage':LoginPage,
    'inventoryPage':InventoryPage,
    'noImage':boolean,
    'status': 'block'|'server-failure'|'success'|'normal'
}

export const test=base.extend<Myfixture>({
    'loginPage':async ({page},use)=>{
        const login_page=new LoginPage(page)
        await use(login_page)
    },
    'noImage':[false,{option:true}],
    'status':['normal',{option:true}],
    'inventoryPage':async ({page,noImage,status},use)=>{
        const inventory_page=new InventoryPage(page)
        console.log("Inventory page fixture called")
        // mock code based on condtion 
        if(status == 'success')
        {
            console.log("Success")
            await mockSuccessful(page)
            console.log("Success Complete")
        }
        else if(status=='server-failure')
        {
            await mockServerError(page)

        }
        else if(status=='block')
        {
            await mockBlock(page)

        }

        // Conditional interception code
        if(noImage)
        {
            await page.route(
            /(png|jpeg|jpg)$/,(route)=>{
                route.abort('failed')
            }
        )
        }
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