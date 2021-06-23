console.log("Hi this is the first time i am writing a bot program");
require('dotenv').config();


const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN)

client.on('ready', itsReady)

function itsReady() {
	console.log("Hey I am Ready");
}

const replies = [ 'I love you Akanksha- this messaage was coded by Avinash!', 'Hey Preety face!',
	'Ahh you again dont you have anything to do!', 'Not you again', 'I am tired now dont wanna reply', 'You are a very vella person!',
	'Stop saying Hey I too get tired!']

client.on('message', doReply)

function doReply(msg) {
	if (msg.content === 'Hey Bot') {
		//msg.reply("Hey There How was your day");
		// the messsage with the reply is used to send messages with the mentioned functions in them

		//the msg channel is used to do the same without the mentionining
		const index = Math.floor(Math.random() * replies.length);
		msg.channel.send(replies[index]);
		msg.channel.send(`${ msg.author }`);
	}
}
