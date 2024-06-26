require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log('Ready!');
});

client.on('messageCreate', message => {
    if (!message.content.startsWith('.send') || message.author.bot) return;

    const args = message.content.slice(6).trim();
    const attachments = message.attachments.map(attachment => attachment.url);

    let responseMessage = args;
    if (attachments.length) {
        responseMessage += "\n" + attachments.join("\n");
    }

    if (responseMessage) {
        message.channel.send(responseMessage);
    }
});

client.login(process.env.DISCORD_TOKEN); // Ensures the bot uses the token from the environment variable
