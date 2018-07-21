const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
var bot = require("discord-music-bot");
 
var serverName = "Your server name here";
var textChannelName = "Your text channel name here (without #)";
var voiceChannelName = "Your voice channel name here";
var aliasesFile = "A file the bot will use to store your aliases";
var botToken = "Your bot token here";
 
bot.run(serverName, textChannelName, voiceChannelName, aliasesFile, botToken);
