import { expect, type Locator, type Page } from '@playwright/test';

export class ManagerPage {
    readonly page: Page
    readonly getAddCustomerBtn: Locator
    readonly getOpenAccountBtn: Locator
    readonly getCustomersBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.getAddCustomerBtn = page.locator('button[ng-class="btnClass1"]')
        this.getOpenAccountBtn = page.locator('button[ng-class="btnClass2"]')
        this.getCustomersBtn = page.locator('button[ng-class="btnClass3"]')
    }
}