const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

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

client.login(`MTIzNjA1MjM4MDc4NTU3MzkzMA.G2cThU.JPj5c0Y2c8wehTzrZYOUxgHdQJ4WFnV1zI1nhI`); // Replace YOUR_BOT_TOKEN with your actual bot token
