const express = require("express");
const app = express();
const port = 8080; 
const cors = require("cors");
const {trackPriceAndEmailWeb} = require("./controller/trackWeb");
const {trackPriceAndEmailBot} = require("./controller/trackBot");

const { Client, GatewayIntentBits } = require('discord.js');
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent,GatewayIntentBits.GuildMembers,GatewayIntentBits.GuildPresences] });

require('dotenv').config();


app.use(cors());

app.use(express.json());


app.post("/submit",trackPriceAndEmailWeb);

app.get("/hello",(req,res)=>{
  res.send("workingg");
});

// Event listener for when the bot is ready
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//Add new Member to the channel
client.on("guildMemberAdd",(member)=>{
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}!`);

})



client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.content) return;

  const prefix = "!trackprice";
  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(" ");
    if (args.length !== 3) {
      return message.reply('Invalid usage! Please provide a valid URL, price, and email.');
    }

    message.reply("Tracking prices ...");
    const [url, price, email] = args;
    let result= await  trackPriceAndEmailBot( {url, price, email} );
    if (result.success){
      message.reply("Email sent successfully, Go and Grab it now!!!");
    }else{
      message.reply("No email sent. The price has not reduced yet :(");
    }
  }
  else if(message.content.toLowerCase() === "hello") {
    message.reply("Hi from the Bot!");

  }
  else if(message.content.toLowerCase() === "hi") {
    message.reply("Hello from the Bot!");

  }
  else if(message.content.toLowerCase() === "hey") {
    message.reply("Hi from the Bot!");

  }
  else{
    message.reply("Please provide a proper command!");
  }
});












// Log in to Discord with your bot token
client.login(process.env.TOKEN);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});