import {Page} from '@playwright/test'
export async function mockSuccessful(page:Page)
{
    page.route(
        '**inventory*',(route)=>{
            const body={
                message:"Successful Empty response"
            }
            route.fulfill({
                body:JSON.stringify([body]),
                contentType:"application/json",
                headers:{
                },
                status:200,
            })
        }
    )
}

export async function mockServerError(page:Page)
{
    page.route('**inventory*',(route)=>{
        const body={
            'message':'Server Erorr'
        }
        route.fulfill({
            status:500,
            body:JSON.stringify(body),
            contentType:'application/json'
        })   
    })

}

export async function mockBlock(page:Page)
{
    page.route('**inventory*',(route)=>{
        route.abort()
    })
}