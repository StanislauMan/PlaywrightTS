import { expect, type Locator, type Page } from '@playwright/test';

export class CustomerPage {
    readonly page: Page
    readonly getYourNameLabel: Locator

    constructor(page: Page) {
        this.page = page
        this.getYourNameLabel = page.locator('.form-group label')
    }
    
}