import {test,expect,type Page} from '@playwright/test'


export class InventoryPage{
    constructor(private page:Page){}

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
        // I would need a generic selector , I thought CSS generic lcass .btn_inventory would be a good choice 
        
        // const add_to_cart_button=this.page.getByTestId('inventory-item-description').filter({hasText:'Sauce Labs Backpack'}).filter({has:this.page.locator('.btn_inventory')})
        // add_to_cart_button.click()

        // However I think role could also be an option, I have made sure there is not other element 
        // which is also a button , hence the role button locator can also be used in this case 

        const add_to_cart_button=this.page.getByTestId('inventory-item-description').filter({hasText:'Sauce Labs Backpack'}).filter({has:this.page.getByRole("button")})
        add_to_cart_button.click()


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
        shop_cart_link.click()
    }

}