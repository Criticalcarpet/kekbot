const { Collection } = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'ready',
	once: true,

	execute: async (client) => {

		console.log(`Logged in as ${client.user.tag}!`);

		/* Set client status */
		client.user.setPresence({
			status: 'online',
			activities: [{ type: 'PLAYING', name: 'Update 4.2.0 - /help' }],
		});

		/* Registering slash commands */
		client.commands = new Collection();
		const data = [];

		const categories = fs.readdirSync(`${__dirname}/../commands/`);
		for (const category of categories) {
			const commandFiles = fs.readdirSync(`${__dirname}/../commands/${category}`).filter(file => file.endsWith('.js'));
			for (const file of commandFiles) {

				const command = require(`${__dirname}/../commands/${category}/${file}`);
				client.commands.set(command.name, command);
				data.push(command.data.toJSON());

			}
		}

		/* Set ApplicationCommand data */
		await client.application.commands.set(data);

	},
};
