const Discord = require('discord.js')
const { defualtPrefix } = require('./config.json')
require('./server.js')
const client = new Discord.Client()
client.commands = new Discord.Collection();
const fs = require('fs');
const AsciiTable = require('ascii-table')
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
var table = new AsciiTable('Commands')
 
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
  table.addRow(defualtPrefix + command.name, 'Loaded!')
}
console.log(table.toString())

const db = require('quick.db')
client.on('message', message => {
  let prefix = db.get(`prefix_${message.guild.id}`)
  if(prefix == null) prefix = defualtPrefix
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

try {
	client.commands.get(command).execute(client, message, args);
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}
	// other commands...
});
client.login(process.env.TOKEN)