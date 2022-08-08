
const Discord = require("discord.js");

const client = new Discord.Client();

client.once("ready", function () {
	console.log("nevin big idot ew");
});

client.on('message', msg => {
    if (msg.content === 'roast nevin pls') {
      msg.reply('nevin more like big fat dumdum :>');
    }
  });
  

client.login('MTAwNjA3OTA3MDgzODIwMjQwMA.Gx1ux7.QpVdGc6y7RbW6NGzsMkOnyhTx5A7qiGovYyVRs');