const Discord = require('discord.js');

module.exports = {
    name: `about`,
    description: 'About the bot',
    arguments: 0,
    execute(message, args, prefix, client) {

        const embed = new Discord.MessageEmbed()
            .setTitle(`Hello, I'm kekbot!`)
            .addField(`I was made in the 18th of july by <@732667572448657539> `)
            .addField('To get started, please use kekhelp')
            .setColor(`RANDOM`)
            .setThumbnail(`https://cdn.discordapp.com/avatars/734007071686787123/c6864719c028d71e47d3f860f39f0ce1.webp`);

        message.channel.send(embed);

    }
}