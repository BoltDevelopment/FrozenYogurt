const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
module.exports = {
	name: 'help',
	description: 'Sends info about the bot.',
	execute(c, m, a) {
    var prefix = db.get(`prefix_${m.guild.id}`)
    if(prefix == null) prefix = '&'
		const pagination =  require('discord.js-pagination');

const page1 = new MessageEmbed()
page1.setAuthor("📬 Need help?", c.user.displayAvatarURL())
page1.setThumbnail(c.user.displayAvatarURL())
 page1.setDescription(`Use \`${prefix}help\` followed by a command name to get more additional information on a command. For example: \`${prefix}help [Command].\`\n\n[Invite me](https://discord.com/api/oauth2/authorize?client_id=${c.user.id}&permissions=8&scope=bot) **|** [Support Server](https://dsc.gg/boltdev) **|** [Documention](TEST) **|** [Website](TEST)`)
page1.setFooter(m.author.tag, m.author.displayAvatarURL({ dynamic: true }))
page1.setTimestamp()
//page1.setColor(roleColor);

const embed2 = new MessageEmbed()
.setAuthor(c.user.tag, c.user.displayAvatarURL())
.setThumbnail(c.user.displayAvatarURL())
.setTitle('All Commands.')
.addFields('NOT DONE')
.setTimestamp()
//.setColor(roleColor)

const pages = [
    page1,
    embed2
];

const emojiList = ['⏮', '⏭']
const timeout = 120000;

pagination(m, pages, emojiList, timeout);

	},
};