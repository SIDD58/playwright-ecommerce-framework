import {test as base, expect, Page} from '@playwright/test'

type MyFixture = {
    'testfix':any
};

export const test=base.extend<MyFixture>(
    {
        'testfix':async ({/* You can pass some fixture to use , this is fixture nesting */},use)=>{
            console.log("I am test Fixture build phase")
            const a="Passing a value from Fixture"
            await use(a)
            console.log("Test Fixture teardown phase")
        }
    }
)

export { expect }