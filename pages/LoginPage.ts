import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page
    readonly getCustomerLoginBtn: Locator
    readonly getBankManagerLoginBtn: Locator


    constructor(page: Page) {
        this.page = page
        this.getCustomerLoginBtn = page.locator('button', {hasText: 'Customer Login'})
        this.getBankManagerLoginBtn = page.locator('button', {hasText: 'Bank Manager Login'})
    }

    async goto() {
        await this.page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    }

    async clickCustomerLoginBtn() {
        await this.getCustomerLoginBtn.click()
    }

    async clickBankManagerLoginBtn() {
        await this.getBankManagerLoginBtn.click()
    }
}