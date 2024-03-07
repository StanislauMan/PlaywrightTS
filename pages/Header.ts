import { expect, type Locator, type Page } from '@playwright/test';

export class Header {
    readonly page: Page
    readonly getHeaderTitle: Locator
    readonly getHomeBtn: Locator
    readonly getLogOutBtn: Locator
    

    constructor(page: Page) {
        this.page = page
        this.getHeaderTitle = page.locator('.mainHeading')
        this.getHomeBtn = page.locator('button', {hasText: 'Home'})
        this.getLogOutBtn = page.locator('button', {hasText: 'Logout'})
    }

    async clickHomeBtn() {
        await this.getHomeBtn.click()
    }

    async clickLogoutBtn() {
        await this.getLogOutBtn.click()
    }
}