import {test,expect} from '../fixtures/test-fixtures'
test.use({
    noImage:true
})
test('Import inventory page without png/jpeg files',async({inventoryPage,page})=>{
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