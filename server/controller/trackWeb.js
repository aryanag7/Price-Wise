const {scrapeAmazonProduct} = require("../scrape");
const  {sendEmail} = require("../email");

module.exports.trackPriceAndEmailWeb = async(req,res)=>{
    // console.log(req.body);
    const {url,price,email} = req.body;
    const scrapedData = await scrapeAmazonProduct(url);

  
    // Send email with scraped price
    scrapedPrice = parseInt(scrapedData.price.replace(/,/,""));
    
    if (scrapedPrice < price) {
      const subject = "Price drop alert!";
      const text = `There has been a price drop on the Amazon product.\n\nCurrent price: ${scrapedData.price}\nProduct URL: ${url}\n\n PFA the screenshot.`;
      await sendEmail(email, subject, text, scrapedData.screenshotPath);
      res.json({ message: 'Email sent successfully' });
    }
    else {
      res.json({ message: 'No email sent. The price has not reduced yet :(' });
  }
  
};