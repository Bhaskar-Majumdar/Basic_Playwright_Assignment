import { test, expect } from '@playwright/test';

test( 'Playwright Specific Locator' , async ( {page} ) => {

    await page.goto("opencart/index.php?route=account/register");

    let firstNameTxt = page.getByRole( "textbox" , { name : "* First Name" } );
    let lastNameTxt = page.getByRole( "textbox" , { name : "* Last Name" } );
    let personal = page.getByText("Your Personal Details");
    let email = page.getByLabel("E-Mail");
    let phoneNum = page.getByPlaceholder("Telephone");
    let imgLocator1 = page.getByAltText("naveenopencart");
    let imgLocator2 = page.getByTitle("naveenopencart");
    let password = page.getByPlaceholder("Password");

    await firstNameTxt.fill("Salakn");
    await lastNameTxt.fill("Khn");
    await personal.isVisible();
    await email.fill("abwsgdfs@gmail.com");
    await phoneNum.fill("123282318");
    await password.first().fill("1234");
    await password.last().fill("1234")
    await imgLocator1.isVisible();
    await imgLocator2.isVisible();

    await page.getByRole("checkbox").click();
    await page.getByRole("button" , {name : "Continue"}).click();

    //Assertion Type 1
    let confirmMsgTxt = await page.locator("h1").textContent();
    expect(confirmMsgTxt).toBe("Your Account Has Been Created!");
    expect(confirmMsgTxt).toContain("Created!");

    //Assertion Type 2
    let confirmMsg =  page.locator("h1");
    expect(confirmMsg).toHaveText("Your Account Has Been Created!");
    expect(confirmMsg).toContainText("Created!");

    await page.pause();



})