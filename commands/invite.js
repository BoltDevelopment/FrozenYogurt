//https://discord.com/api/oauth2/authorize?client_id=${c.user.id}&permissions=8&scope=bot
const { MessageEmbed } = require('discord.js')
module.exports = {
	name: 'invite',
	description: 'Sends the bot invite!',
  execute: function(c, m, a) {
    const embed = new MessageEmbed();
    embed.setTitle('Invite')
    embed.setDescription(`Here you go! [Invite Link](https://discord.com/api/oauth2/authorize?client_id=${c.user.id}&permissions=8&scope=bot)`)
  },
}