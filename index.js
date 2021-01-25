const Discord = require('discord.js');
const ytdl = require('ytdl-core')
const client = new Discord.Client();
const embed = new Discord.MessageEmbed();
const member = new Discord.GuildMember();
client.on('redy', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
    if (msg.content.includes('c!M')) {
        embed.setTitle(':robot:  Bots Musica  :robot:')
        embed.setAuthor(msg.member.displayName, msg.author.displayAvatarURL())
        embed.setColor('RANDOM')
        embed.addField('Sinon :', '*play', true)
        embed.addField('PushoJenso :',';;play',true)
        embed.addField('Dyno :','?play',true)
        embed.addField('DonChecho :','p!play',true)
        embed.addField('RickBot :',';;play',true)
        embed.addField('Octave :','_play',true)
        embed.addField('RickBot :','+play',true)
        embed.addField('LocoRene :','-play',true)
        embed.setImage('https://i.gifer.com/BLI6.gif')
        msg.channel.send(embed);
    }
});


client.login('NzMzNDU4ODc3Mzk1MzcwMDM1.XxDczw.ShqqHwr75mOgFAUsVhteTUw7nzE');