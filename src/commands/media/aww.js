const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'aww',
	description: 'Shows a reddit aww from r/aww',
	usage: '',

	permissions: [],
	ownerOnly: false,
	guildOnly: true,

	data: new SlashCommandBuilder()
		.setName('aww')
		.setDescription('Shows a post from r/aww!'),

	error: false,
	execute: async ({ interaction }) => {
		const { got } = await import('got');

		got('https://www.reddit.com/r/awws/random/.json').then(response => {
			const content = JSON.parse(response.body);

			const embed = new MessageEmbed()
				.setTitle(`${content[0].data.children[0].data.title}`)
				.setURL(`https://reddit.com${content[0].data.children[0].data.permalink}`)
				.setColor('RANDOM')
				.setImage(`${content[0].data.children[0].data.url}`)
				.setFooter({ text: `👍 ${content[0].data.children[0].data.ups} 💬 ${content[0].data.children[0].data.num_comments}` });

			interaction.followUp({ embeds: [embed] });

		})
			.catch(() => { interaction.followUp({ content: 'Sorry, an error occured with that command.' }); });
	},
};
