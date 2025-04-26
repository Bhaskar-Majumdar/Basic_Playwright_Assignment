import { test, expect } from '@playwright/test';

test("Handle Web Tables", async ( {page} ) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
   
    await page.evaluate(
       () => {
    window.scrollBy(0, 700);
    }
   );
    
   //explicit wait
   await page.locator("tbody tr").first().waitFor({ timeout: 50000 }); 
   const firstRow = await page.locator("tbody tr").first();
   const cells = await firstRow.locator("th").allTextContents();
   console.log(cells);
   const secondRow = await page.locator("tbody tr").nth(1);
   const data = await secondRow.locator("td").nth(0).textContent();
   console.log(data);

   await page.pause();


   } )