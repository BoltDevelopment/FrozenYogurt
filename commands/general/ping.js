const { MessageEmbed } = require('discord.js')
module.exports = {
	name: 'ping',
	description: 'Sends the bot ping.',
  category: 'general',
	execute(c, m, a) {
		var msg = m.channel.send(`🏓 | Pinging...`)
    const embed = new MessageEmbed()
    embed.setTitle('🏓 | Pong!')
    embed.setDescription(`Current Ping: \`${c.ws.ping}\`MS!`)
    embed.setFooter(m.author.tag, m.author.avatarURL({dynamic: true}))
    m.channel.send(embed)
    //console.log(msg)
	},
};