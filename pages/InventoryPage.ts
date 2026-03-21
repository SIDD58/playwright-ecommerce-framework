import {test,expect,type Page, type Locator} from '@playwright/test'


export class InventoryPage{
    public inventoryList:Locator;
    public cartItem:Locator;

    constructor(private page:Page){
        this.inventoryList = page.locator('.inventory_list');
        this.cartItem = page.locator('.cart_item')
    }

    async goto()
    {
        // in goto you can pass regex only string , so you should know defintely 
        // toHaveURL there you can pass regex because there we do not know 
        await this.page.goto('inventory.html')
    }

    async add_to_cart(itemName:string)
    {
        // I find the parent element (which has both button element and also element that contains text)
        // Then I fiter out one which contains that test , afterwards I locate the button 
        // I would need a generic selector , I thought CSS generic class .btn_inventory would be a good choice 
        
        // const add_to_cart_button=this.page.getByTestId('inventory-item-description').filter({hasText:'Sauce Labs Backpack'}).filter({has:this.page.locator('.btn_inventory')})
        // add_to_cart_button.click()

        // However I think role could also be an option, I have made sure there is not other element 
        // which is also a button , hence the role button locator can also be used in this case 

        // we add filters for filtering (narrow down options) and for drilling (going inside element) we use locators chaining
        // hence below code line only selects div element 
        // const add_to_cart_button=this.page.getByTestId('inventory-item-description').filter({hasText:'Sauce Labs Backpack'}).filter({has:this.page.getByRole("button")})

        
        const add_to_cart_button=this.page.getByTestId('inventory-item-description').filter({hasText:'Sauce Labs Backpack'}).getByRole("button");
  
        // const add_to_cart_button=this.page.locator('[data-test="inventory-item-description"]').filter({ hasText: 'Sauce Labs Backpack' }).getByRole('button')
        await add_to_cart_button.waitFor({ state: 'visible' });
        await add_to_cart_button.click()

        // // Way I thought was that all test id are named in this specific way 
        // // how getBytext locator is better usecase here to find your item 
        // // Also you fiter and chaining in this case 
        // const testid='add-to-cart-'+itemName
        // const add_to_cart_button=this.page.getByTestId(testid)
        // add_to_cart_button.click()
    }

    async open_cart()
    {
        // grab locator
        const shop_cart_link=this.page.getByTestId('shopping-cart-link')
        await shop_cart_link.click()
    }

}