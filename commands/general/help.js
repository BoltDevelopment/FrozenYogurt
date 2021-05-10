const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
module.exports = {
	name: 'help',
	description: 'Sends info about the bot.',
  category: 'general',
	execute(c, m, a) {
    var prefix = db.get(`prefix_${m.guild.id}`)
    if(prefix == null) prefix = '&'
    console.log(a)
    if(!a.length) {
		const pagination =  require('discord.js-pagination');

const page1 = new MessageEmbed()
page1.setAuthor("📬 Need help?", c.user.displayAvatarURL())
page1.setThumbnail(c.user.displayAvatarURL())
 page1.setDescription(`Use \`${prefix}help\` followed by a command name to get more additional information on a command. For example: \`${prefix}help [Command].\`\n\n[Invite me](https://discord.com/api/oauth2/authorize?client_id=${c.user.id}&permissions=8&scope=bot) **|** [Support Server](https://dsc.gg/boltdev) **|** [Documention](TEST) **|** [Website](TEST)`)
page1.setFooter(m.author.tag, m.author.displayAvatarURL({ dynamic: true }))
page1.setTimestamp()
//page1.setColor(roleColor);
const cmdArray = c.commands.array()
const configCmds = cmdArray.map(obj => {
  if(obj.category == 'config') {
	return ` \`${prefix}${obj.name}\` | ${obj.description}`
  }
});
const generalCmds = cmdArray.map(obj => {
  if(obj.category == 'general') {
	return ` \`${prefix}${obj.name}\` | ${obj.description}`
  }
});
const cmdPage1 = new MessageEmbed()
.setAuthor(c.user.tag, c.user.displayAvatarURL())
.setThumbnail(c.user.displayAvatarURL())
.setTitle('General Commands')
.setDescription(generalCmds.join('\n'))
.setTimestamp()
const cmdPage2 = new MessageEmbed()
.setAuthor(c.user.tag, c.user.displayAvatarURL())
.setThumbnail(c.user.displayAvatarURL())
.setTitle('Config Commands')
.setDescription(configCmds.join('\n'))
.setTimestamp()

const pages = [
    page1,
    cmdPage1,
    cmdPage2
];

const emojiList = ['⏮', '⏭']
const timeout = 120000;
//console.log(c.commands.array())
pagination(m, pages, emojiList, timeout);
    } else {
      let cmd = c.commands.get(a[0])
      const cmdNoExist = new MessageEmbed()
      cmdNoExist.setThumbnail(c.user.displayAvatarURL())
      cmdNoExist.setTitle(`Command Does Not Exist`)
      //cmdNoExist.setDescription()
      cmdNoExist.setFooter(m.author.tag, m.author.displayAvatarURL({ dynamic: true }))
      cmdNoExist.setTimestamp()
      if(cmd == null) return m.channel.send(cmdNoExist)
      const infoOnCommand = new MessageEmbed()
      infoOnCommand.setThumbnail(c.user.displayAvatarURL())
      infoOnCommand.setTitle(`${prefix}${a[0]} Command`)
      infoOnCommand.setDescription(cmd.description)
      infoOnCommand.addField(`Category`, cmd.category)
      infoOnCommand.setFooter(m.author.tag, m.author.displayAvatarURL({ dynamic: true }))
      infoOnCommand.setTimestamp()
      return m.channel.send(infoOnCommand)
    }
	},
};