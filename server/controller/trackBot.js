const {scrapeAmazonProduct} = require("../scrape");
const  {sendEmail} = require("../email");

module.exports.trackPriceAndEmailBot = async(body)=>{
    const {url,price,email} = body;
    const scrapedData = await scrapeAmazonProduct(url);
    // console.log(scrapedPrice);
  
    // Send email with scraped price
    scrapedPrice = parseInt(scrapedData.price.replace(/,/,""));
    if (scrapedPrice < price) {
      const subject = "Price drop alert!";
      const text = `There has been a price drop on the Amazon product.\n\nCurrent price: ${scrapedData.price}\nProduct URL: ${url}\n\n PFA the screenshot.`;
      await sendEmail(email, subject, text, scrapedData.screenshotPath);
      return { success: true, message: 'Email sent successfully, Go and Grab it now!!!' };
    }
    else {
        return { success: false, message: 'No email sent. The price has not reduced yet :(' };
    }
  
};