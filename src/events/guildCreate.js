export const name = 'guildCreate';
export async function execute(guild, client) {

	client.channels.cache.get('813143654998868009').send({ content: `New server joined: ${guild.name} (id: ${guild.id}). This server has ${guild.memberCount} members!` });

}