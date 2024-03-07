import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CustomerPage } from '../pages/CustomerPage';
import { Header } from '../pages/Header';
import { ManagerPage } from '../pages/ManagerPage';
import { AccountPage } from '../pages/AccountPage';

test.describe('Smoke suite', () => {

    test('Login page: click the "Customer Login" button', async ({ page }) => {
        const loginPage = new LoginPage(page)
        const customerPage = new CustomerPage(page)
        const header = new Header(page)
        await loginPage.goto()
        await expect(loginPage.getCustomerLoginBtn).toBeVisible()
        await loginPage.clickCustomerLoginBtn()
        await expect(customerPage.getYourNameLabel).toBeVisible()
        await header.clickHomeBtn()
        await expect(loginPage.getCustomerLoginBtn).toBeVisible()
    })

    test('Login page: click the "Bank Manager Loging" button', async ({ page }) => {
        const loginPage = new LoginPage(page)
        const managerPage = new ManagerPage(page)
        await loginPage.goto()
        await loginPage.clickBankManagerLoginBtn()
        await expect(managerPage.getAddCustomerBtn).toBeVisible()
    })

    test('Login with user', async ({ page }) => {
        const loginPage = new LoginPage(page)
        const customerPage = new CustomerPage(page)
        const accountPage = new AccountPage(page)
        await loginPage.goto()
        await loginPage.clickCustomerLoginBtn()
        await customerPage.selectUser('Hermoine Granger')
        await customerPage.clickLoginBtn()
        await expect(page).toHaveURL(/account/)
        await expect(accountPage.getUserAccountTitle).toHaveText('Hermoine Granger')
    })
})