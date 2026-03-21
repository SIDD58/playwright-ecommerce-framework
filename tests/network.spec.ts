import {test,expect} from '../fixtures/test-fixtures'

test.use({
    noImage:true
})
test('@regression Import inventory page without png/jpeg files',async({inventoryPage,page,status})=>{

    await page.pause()
    //expect(inventoryPage.inventoryList).toBeVisible()
    // page.route(
    //     /(png|jpeg|jpg)$/, (route)=>{
    //         route.abort()
    //     }
    // )
    await expect(inventoryPage.inventoryList).toHaveCount(1);
    await expect(inventoryPage.inventoryList.first()).toBeAttached();
    //expect(inventoryPage.inventoryList).toBeAttached();
})

// to Use tes.use() for each test we have to wrap it in anonymouus test.describe one by one 

test.describe(' Empty Successful',()=>{
    test.use(
        {
            noImage:true,
            status:'success'
        })

    test('Empty Successful response',{tag:['@regression',"@mock"]},async ({inventoryPage,page})=>{
        await page.pause()

    })
})

test.describe('Server Erorr',()=>{
    test.use(
        {
            noImage:true,
            status:'server-failure'
        })

    test('Server Error response', {tag:["@regression","@mock","@error"]},async ({inventoryPage,page})=>{
        await page.pause()

    })
})
// test.describe('Server Blocked',()=>{
//     test.use(
//         {
//             noImage:true,
//             status:'block'
//         })

//     test('Server blocked', async ({inventoryPage,page})=>{
//         await page.pause()

//     })
// })

