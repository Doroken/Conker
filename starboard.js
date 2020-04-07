//starboard test
client.on('messageReactionAdd', reaction => {
  const message = reaction.message
  if (reaction.emoji.name !== '⭐') return;
  
  const { starboardChannel } = client.settings.get(message.guild.id); 
  
  if (message.author.id === message.user.id) { message.channel.send(`${message.author.username}, you can't star your own messages you conceited turd.`);
  return;
 }
  
const starChannel = message.guild.channels.find(channel => channel.name == starboardChannel)
});
