require('dotenv').config();

const colors = require('colors');
const discord = require('discord.js-selfbot-v13');
const client = new discord.Client({});

client.on("ready",async () => {
    console.log(`[+] Logged in as ${client.user.tag}`.green);
    client.user.setActivity("Monitoring Messages", { type: "WATCHING" });
});

client.on("messageCreate", async (message) => {
    if (message.author.id == process.env.DISCORD_ID) {
        let user = await client.users.fetch(process.env.LISTENER_ID);
        if (user) {
            let location;
            if (message.guild) {
                location = `**Server:** ${message.guild.name}\n**Channel:** ${message.channel.name}`;
            } else {
                location = `**Direct Message**`;
            }
            user.send(`**From:** ${message.author.username} (<@${message.author.id}>) \n**Message:** ${message.content}\n${location}`);
            console.log(`[+] Sent message to user ${user.username}`.green);
        } else {
            console.log(`[-] User not found`.red);
        }
    }
});

client.login(process.env.TOKEN);