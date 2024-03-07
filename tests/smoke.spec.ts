import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CustomerPage } from '../pages/CustomerPage';
import { Header } from '../pages/Header';

test.describe('Smoke suite', () => {

    test('Login page: clicking the "Customer Login" button', async({ page }) => {
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
})