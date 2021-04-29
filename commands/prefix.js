const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
module.exports = {
	name: 'prefix',
	description: 'Edits the bot prefix!',
	execute(c, m, a) {
    let prefix = db.get(`prefix_${m.guild.id}`)
    if(!a.length) {
      var embed = new MessageEmbed()
      .setTitle('Current prefix')
      .setDescription(`\`${prefix}\``)
      return m.channel.send(embed)
    }

    const newPrefix = a.join(' ')

    db.set(`prefix_${m.guild.id}`, newPrefix)
    var embed = new MessageEmbed()
      .setTitle('Set Prefix To ')
      .setDescription(`\`${newPrefix}\``)
      m.channel.send(embed)
	},
};