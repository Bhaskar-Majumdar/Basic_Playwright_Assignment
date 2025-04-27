import { test, expect } from '@playwright/test';

import { generateRandomNumber } from "../Utils/utils.js"
import { faker } from '@faker-js/faker';

test( 'Registration Page' , async ( {page} ) => {

    await page.goto("https://automationexercise.com/login");

    const signupForm = page.locator('form').filter({ hasText: 'New User Signup!' });

    await page.getByPlaceholder("Name").fill(faker.person.firstName());
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(faker.internet.email());

    await page.getByRole("button" , {name : "Signup"}).click();


    await page.locator("#uniform-id_gender1").click();
    await page.locator("#password"). fill("12345");

    await page.getByRole("combobox").nth(0).selectOption("12");
    await page.getByRole("combobox").nth(1).selectOption("December");
    await page.getByRole("combobox").nth(2).selectOption("2002");

    await page.locator("#newsletter").click();

    await page.locator("#first_name").fill("Rakib");
    await page.locator("#last_name").fill("Khan");
    await page.locator("#company").fill("Road To SDET");

    await page.locator("#address1").fill("Badda");
    await page.locator("#address2").fill("Rampura");

    await page.locator('#country').selectOption('Australia'); 

    await page.locator('#state').fill('Sydney'); 
    await page.locator('#city').fill('Sydney City');

    await page.locator("#zipcode").fill( "09" + generateRandomNumber(1000,9999) );

    await page.locator("#mobile_number").fill( "017" + generateRandomNumber(10000000,99999999) );

    await page.getByText("Create Account").click();

    const confirmMsg = await page.locator('[data-qa="account-created"]').textContent();
    await expect(confirmMsg).toBe('Account Created!');
    await expect(page.getByText('Congratulations! Your new account has been successfully created!')).toBeVisible();

    await page.getByText("Continue").click();


    await page.evaluate(
        () => {
     window.scrollBy(0, 650);
     }
    );

    await page.locator(".choose a").first().click()

    await page.locator("#quantity"). fill("3");

    await page.getByText("Add to cart").click();

    await expect(page.locator('#cartModal')).toContainText('Your product has been added to cart');

    await page.getByText("View Cart").click();

    await expect(page.locator('.cart_total_price')).toContainText('Rs. 1500');


})