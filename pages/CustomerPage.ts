import { expect, type Locator, type Page } from '@playwright/test';

export class CustomerPage {
    readonly page: Page
    readonly getYourNameLabel: Locator
    readonly getUserNameList: Locator
    readonly getLoginBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.getYourNameLabel = page.locator('.form-group label')
        this.getUserNameList = page.locator('#userSelect')
        this.getLoginBtn = page.locator('button', {hasText: 'Login'})
    }

    async selectUser(name: string) {
        await this.getUserNameList.selectOption(name)
    }

    async clickLoginBtn() {
        await this.getLoginBtn.click()
    }
    
}