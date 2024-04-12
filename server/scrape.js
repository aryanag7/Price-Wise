const  puppeteer = require("puppeteer");

async function scrapeAmazonProduct(url) {

    // Launch Puppeteer browser and create a new page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the Amazon product page
    await page.goto(url);

    // Wait for the price element to be visible on the page
    await page.waitForSelector('.a-price-whole'); // Update this selector to match the actual price element on the page

    // Extract the price from the page
    const price = await page.$eval('.a-price-whole', priceElement => priceElement.textContent.trim()); // Update this selector to match the actual price element on the page

    await page.setViewport({ width: 1000, height: 1000});
    const screenshotPath = 'screenshot.png';
    await page.screenshot({ path: screenshotPath});


    // Close the Puppeteer browser
    await browser.close();

    // Send the scraped price and screenshot path as the response
    return { price: price, screenshotPath: screenshotPath };
}

module.exports = {scrapeAmazonProduct};