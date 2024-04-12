
<h1 align="center">
 Price Wise
</h1>

Price Wise is a web application that allows users to track product prices on Amazon and receive email alerts when the price drops below a specified threshold.








## Features
Web Application:
- Track prices of products on Amazon by providing product URLs and desired price thresholds.
- Receive email notifications when the tracked product price drops below the specified threshold along with a product screenshot.
- Simple and intuitive user interface for entering product details and setting price alerts.

Discord Bot:
- Interact with the Price Wise bot on Discord to track product prices using a specific command.
- Use the !trackprice command followed by the product URL, desired price threshold, and email address to initiate price tracking.



## Installation

Clone the repository:

```bash
 git clone https://github.com/aryanag7/price-wise.git
```

Navigate to the project directory:
```bash
 cd homestay-project
```
Install dependencies:
```bash
npm install
```
Setting Up Environment Variables. Follow these steps to create and configure the .env file:
- Create a new file named .env in the server folder of the project.
- Copy and paste the following template into your .env file.
```bash
TOKEN=your_discord_bot_token
EMAIL_USER=your_emailID
EMAIL_PASS=your_google_app_password
```
- Replace TOKEN, EMAIL_USER, EMAIL_PASS with your actual credentials obtained from the respective services.
- Save the .env file in the server folder of the project.
> **_NOTE:_** Ensure that you do not share your .env file or its contents publicly. Add .env to your .gitignore file to prevent it from being committed to version control.

Start the development servers:
- To run the client (Frontend):
```bash
npm run dev
```
- To run the server (Backend):
```bash
nodemon index.js
```
  
## Screenshots

Home

<img width="800" alt="image" src="https://github.com/aryanag7/Price-Wise/assets/62555290/448c8484-f558-466f-b5c1-57b91e9d33d8">
<br><br>
<br>

Tracking Prices

<img width="800" alt="image" src="https://github.com/aryanag7/Price-Wise/assets/62555290/1a1412d3-e564-4d52-9972-232afa37fe20">
<img width="800" alt="image" src="https://github.com/aryanag7/Price-Wise/assets/62555290/3334de11-6b1b-405e-bf57-a603f76e4ade"><br><br>
<br>

Email Notification

<img width="800" alt="image" src="https://github.com/aryanag7/Price-Wise/assets/62555290/9792f252-d8d2-41b4-8876-e45f1c734dbd"><br><br>
<br>

Discord Bot Example: !trackprice & Bot Response

<img width="800" alt="image" src="https://github.com/aryanag7/Price-Wise/assets/62555290/b0a57628-c120-48c9-b40f-409e77ff3914">
<br><br>
<br>



## Tech Stack

- **Frontend:**
  - React (JavaScript library for building user interfaces)
    
- **Backend:**
  - Node.js
  - Express.js

- **Email Service::**
  - Nodemailer (library for sending emails), Gmail SMTP (for sending notification emails)

- **Discord Bot:**
  - Discord.js (JavaScript library for interacting with the Discord API)


## Usage

Web Application:
- Enter the product URL, desired price threshold, and your email address.
- Click the "Track" button to start tracking the product price.
- Receive email notifications if the product price drops below the specified threshold.
  
Discord Bot:
- Invite the Price Wise bot to your Discord server using the below bot invite link.
- Use the !trackprice command followed by the product URL, desired price threshold, and email address in your Discord server to track product prices.

### Invite the Bot to Your Server

- To add the Price Wise bot to your Discord server with administrator permissions, click [here](https://discord.com/oauth2/authorize?client_id=1226455873321308160&permissions=8&scope=bot).
  

## Contributing

Contributions to this project are welcome! To contribute:

- Fork the repository.
- Create a new branch (git checkout -b feature/new-feature).
- Commit your changes (git commit -am 'Add new feature').
- Push to the branch (git push origin feature/new-feature).
- Submit a pull request.














