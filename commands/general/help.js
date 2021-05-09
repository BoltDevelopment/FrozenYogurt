const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
module.exports = {
	name: 'help',
	description: 'Sends info about the bot.',
  category: 'general',
	execute(c, m, a) {
    console.log('hi')
    var prefix = db.get(`prefix_${m.guild.id}`)
    if(prefix == null) prefix = '&'
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
const commands = cmdArray.map(obj => {
	return ` \`${prefix}${obj.name}\` | ${obj.description}` 
});
const embed2 = new MessageEmbed()
.setAuthor(c.user.tag, c.user.displayAvatarURL())
.setThumbnail(c.user.displayAvatarURL())
.setTitle('Command List')
.setDescription(commands.join('\n'))
.setTimestamp()
//.setColor(roleColor)

const pages = [
    page1,
    embed2
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
      cmdNoExist.setDescription()
      cmdNoExist.setFooter(m.author.tag, m.author.displayAvatarURL({ dynamic: true }))
      cmdNoExist.setTimestamp()
      if(cmd == null) return m.channel.send(cmdNoExist)
    }
	},
};