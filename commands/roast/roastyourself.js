const { Message } = require("discord.js");

module.exports = {
  config: {
    name: "roastyourself",
    description: "roast nevin!",
    usage: "/roastyourself"
  },
  run: async (client, message, args, prefix, config, db) => {
    client.on("message", message => {
      if (message.author.bot) return false;
      if (!message.guild) return false;
      if (message.content.indexOf(Prefix) !== 0) return false;
  
      const arguments = message.content.slice(Prefix.length).split(/ +/g); // Splitting the message.content into an Array with the arguments.
      // Input --> !test hello
      // Output --> ["test", "hello"]
  
      const command = arguments.shift().toLowerCase();
      // Removing the first element from arguments since it's the command, and storing it in a variable.
  
      if (command == "roastyourself") {
          const Response = Math.floor(Math.random() * Responses.length);
          message.channel.send(`${Responses[Response]}`);
      };
  });
  }
};

