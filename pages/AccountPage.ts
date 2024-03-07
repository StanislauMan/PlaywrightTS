import { expect, type Locator, type Page } from '@playwright/test';

export class AccountPage {
    readonly page: Page
    readonly getUserAccountTitle: Locator

    constructor(page: Page) {
        this.page = page
        this.getUserAccountTitle = page.locator('.fontBig')
    }
}