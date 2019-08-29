// const http = require('http');
// const express = require('express');
// const app = express();
// app.get("/", (request, response) => {
//   console.log(Date.now() + " Ping Received");
//   response.sendStatus(200);
// });
// app.listen(process.env.PORT);
// setInterval(() => {
//   http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
// }, 280000); 
// // var keepAlive = require("node-keepalive");
// // keepAlive();
const Discord = require('discord.js');
const token = 'process.env.TOKEN'

var dashboard = 'https://role-bot2.glitch.me';
var BLUE_ROLE = '580767519489654784';
var RED_ROLE = '580767602415239170';
var GREEN_ROLE = '580767635298582530';
var BLACK_ROLE = '580780121280217109';
var CYAN_ROLE = '580767454901436417';
var ELECTRIC_BLUE = '6115231547565408259';
var Version = '0.1.10';
var owner = ['<@473276250815856650>'];
var ideaowner = ['<@540219416726601739>'];
// var blackRole = member.roles.find("name", 'Black");

const bot = new Discord.Client();

bot.on('message', (message) => {
    const parts = message.content.split(' ');

    if (parts[0] == '!role'){

        if(parts[1] == 'red') {
            message.member.addRole(RED_ROLE);
            message.author.send(`Role in ${message.guild} has been given!`)
        }
        if(parts[1] == 'cyan') {
            message.member.addRole(CYAN_ROLE);
            message.author.send(`Role in ${message.guild} has been given!`)
        }
        else if(parts[1] == 'green') {
            message.member.addRole(GREEN_ROLE);
            message.author.send(`Role in ${message.guild} has been given!`)
        }
        else if(parts[1] == 'blue') {
            message.member.addRole(BLUE_ROLE);
            message.author.send(`Role in ${message.guild} has been given!`)
        }  
        else if(parts[1] == 'black') {
            message.member.addRole(BLACK_ROLE);
            message.author.send(`Role in ${message.guild} has been given!`)
        }
          else if(parts[1] == 'electric_blue') {
            message.member.addRole(ELECTRIC_BLUE);
            message.author.send(`Role in ${message.guild} has been given!`)
        }
        // remove role
}
else if (parts[0] == '!remove') {

    if(parts[1] == 'red') {
        message.member.removeRole(RED_ROLE);
        message.author.send(`Role in ${message.guild} has been removed!`)
    }
    if(parts[1] == 'cyan') {
        message.member.removeRole(CYAN_ROLE);
        message.author.send(`Role in ${message.guild} has been removed!`)
    }
    else if(parts[1] == 'green') {
        message.member.removeRole(GREEN_ROLE);
        message.author.send(`Role in ${message.guild} has been removed!`)
    }
    else if(parts[1] == 'blue') {
        message.member.removeRole(BLUE_ROLE);
        message.author.send(`Role in ${message.guild} has been removed!`)
    }
    else if(parts[1] == 'black'){
       message.member.removeRole(BLACK_ROLE);
       message.author.send(`Role in ${message.guild} has been removed!`)
    }

}
// host cmd
if (parts[0] == '!host') {
           let hembed = new Discord.RichEmbed()
           .setThumbnail(bot.user.displayAvatarURL)
           .setAuthor(bot.user.username, bot.user.displayAvatarURL)
           .setTimestamp()
           .setTitle(`${bot.user.username}'s Host Status`)
           .setColor(3066993)
           .addField("✅", "I'm currently hosted 24/7")
           .addField("I'm hosted from **Glitch**", "https://glitch.com")
           .setFooter(bot.user.username, bot.user.displayAvatarURL)
           message.channel.send(hembed);
           message.react("✅");
}
if(parts[0] == '!botinfo' || parts[0] == '!bi'){
    let biembed = new Discord.RichEmbed()
    .setColor(10181046)
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setTimestamp()
    .setTitle(`${bot.user.username}'s Info`)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("**Bot's Name:**", bot.user.username, true)
    .addField("**Bot Owner:**", owner, true)
    .addField("**The Bot idea was given by:**", ideaowner, true)
    .addField("**Bot Version:**", Version, true)
    .addField("**Bot ID:**", bot.user.id, true)
    .addField("**Bot Discriminator:**", bot.user.discriminator, true)
    .addField("**Web Dashboard**\nWork In Progress", dashboard, true)
    .setFooter(bot.user.username, bot.user.displayAvatarURL)
    message.channel.send(biembed);
}
  // server info
if(parts[0] == '!si'){
        let siembed = new Discord.RichEmbed()
        
        .setColor(10181046)
        .setFooter(bot.user.username, bot.user.displayAvatarURL)
        .setTimestamp()
        .setTitle(`${message.guild.name}'s Server Info`, `${message.guild.iconURL}`)
        .addField("**Guild Name:**", `${message.guild.name}`, true)
        .addField("**Guild Owner:**", `${message.guild.owner}`, true)
        .addField("**Member Count:**", `${message.guild.memberCount}`, true)
        .addField("**Role Count:**", `${message.guild.roles.size}`, true)
        .addField("**Server Region is:**", message.guild.region)
        message.channel.send(siembed);
}
// user info 
if(parts[0] == '!ui'){
    let whoisembed = new Discord.RichEmbed()
    .setTitle("User Info")
    .setColor(15158332)
    .setTimestamp()
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
    .addField("**Username:**", `${message.author.username}`, true)
    .addField("**Discriminator:**", `${message.author.discriminator}`, true)
    .addField("**ID:**", `${message.author.id}`, true)
    .addField("**Status:**", `${message.author.presence.status}`, true)
    .addField("**Created At:**", `${message.author.createdAt}`, true)
  //  .addField("**Current Server:" message.guild.name)
    .setFooter(bot.user.username, bot.user.displayAvatarURL);
    message.channel.send(whoisembed);
}
if(parts[0] == '!help' || parts[0] == '!h'){
    let helpembed = new Discord.RichEmbed()
    .setTitle("Help Menu")
    .setColor(15158332)
    .setTimestamp()
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${bot.user.username} Commands`, bot.user.displayAvatarURL)
    .setDescription("_Miscellaneous Commands_")
    .addField("**!role <role or color>**", `- Gives you a role`, true)
    .addField("**!remove <role or color>**", `- Removes you a role`, true)
    .addField("**!ui**", `- Pulls your user info`, true)
    .addField("**!si**", `- Pulls the server info`, true)
    .addField("**!host**", `- Current host status of the bot`, true)
    .addField("**!bi or !botinfo**", `Pulls out the bot info`, true)
    .addField("**!h or !help**", `- Pulls out this menu`, true)
    .addField("**!ping**", `- Ping Pong`, true)
    .addField("**!avatar**", `- Shows your avatar`, true)
    .addField("**!channel**", `- DM's you with the link for my channel`, true)
    .addField("**!uptime**", ` - Shows how much time the \n bot was online`, true)
    .addField("**!website**", `- Messages you with the link to the website \n in the channel`, true)
    .setFooter(bot.user.username, bot.user.displayAvatarURL);
    message.channel.send(helpembed);
}
  // ping
if(parts[0] == '!ping'){
     message.channel.send('🏓 pong');
     message.react('🏓');
}      
  if(parts[0] == '!uptime'){
    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds, `
    }
    // let uptimeembed = new Discord.RichEmbed()
    // .setFooter(bot.user.displayAvatarURL, bot.user.username)
    // .setTimestamp()
    // .setColor(15158332)
    // .setImage(bot.user.displayAvatarURL)
    // .setTitle(`I've been online for`)
    // .addField(`**Seconds:**`, sec)
    // .addField(`**Minutes:**`, min)
    // .addField(`**Hours:**`, hrs)
    // .addField("**Days:**", days)
    // message.channel.send(duration, uptimeembed)
    message.channel.send(`I have been online for: ${duration(bot.uptime)}`)
} 
// chnnael developer 
  // developer youtube
   if(parts[0] == '!channel'){
  //    if(parts[1] != 'developer'){
        message.channel.send(`Are u sure u want the Developer's YT channel?`)
            message.channel.send("check your **DM**")
            message.author.send('https://youtube.com/channel/UCUOFYiaAECTJMO0PS_PmMnw')
     }
// avatar 
if(parts[0] == '!avatar'){
let aEmbed = new Discord.RichEmbed()
.setTitle(`${message.author.username}'s Avatar`, `${message.author.displayAvatarURL}`)
.setImage(`${message.author.displayAvatarURL}`)
.setFooter("Vexus Studios © 2019-2020", `${bot.user.displayAvatarURL}`)
.setColor(15158332)
.setTimestamp();
message.channel.send(aEmbed)
}
// website
if(parts[0] == '!website'){
      message.reply('https://role-bot2.glitch.me')
}
  const channel = bot.channels.get("571698435317825536");
  if(parts[0]=='!join'){
  if (!channel) return console.error("The channel does not exist!");
  channel.join()
    // Yay, it worked! 
    console.log("Successfully connected.");
  }
   if(parts[0] == '!stopstream') {
        bot.leaveVoiceChannel("571698435317825536");
        message.channel.send(`Thanks for tuning in!`); }
    // Status
    let statuses =['!help to see all commands | Site Coming Soon']

    setInterval(function(){
      let status = statuses[Math.floor(Math.random()* statuses.length)];
      bot.user.setActivity(status, {type: 'Playing'});
    }, 120000)
});

console.log("Role Bot is online")
bot.login(process.env.TOKEN);
