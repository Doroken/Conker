//cmds that are still being tested


client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find("name", "welcome");
  if (!channel) return;
  message.channel.send(stripIndents`Hey hey hey hello hello hello there, ${member}!`);
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find("name", "welcome");
  if (!channel) return;
  message.channel.send(stripIndents`Oh oh oh no no no goodbye there, ${member}!`);
});



    //this was before case insensitive aka command const; prior to "if (command === "command")" it was "if (message.content.startsWith (prefix + "command"))" alot uglier to say the least
  if (message.content.startsWith (prefix + "screech")) {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply("Connected! I'm surprised Doroken managed to do somethin' right.");
        })
        .catch(console.log);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
    //will need to be run locally from laptop
const dispatcher = connection.playFile('C:/Users/Doroken/Music/something.mp3');
  dispatcher.on("end", end => {
  voiceChannel.leave();
});


// Play an mp3 from a URL
connection.playArbitraryInput('http://site.com/sound.mp3');
    
    
    if (command === "corgi") {
  const answers = [
  "https://img.buzzfeed.com/buzzfeed-static/static/2014-01/enhanced/webdr02/10/10/enhanced-buzz-7111-1389369374-24.jpg?downsize=715:*&output-format=auto&output-quality=auto",
  "http://www.cutestpaw.com/wp-content/uploads/2014/07/Friend-said-she-just-got-a-new-corgi..jpg",
  "http://www.cutestpaw.com/wp-content/uploads/2014/08/corgi.jpg",
  "https://az616578.vo.msecnd.net/files/2016/07/24/6360498492827782071652557381_corgi%20header.jpg",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  ]

const Random = answers[Math.floor(Math.random() * answers.length)];

message.reply(Random);
  }
  
    
  if (command === "canudont") {
    message.channel.send({files: ["https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2Fstop.png?1528221349146"]});
    }
    
      if(command === "test2") {
    message.reply({
"embed": {
    "fields": [
      {
        "name": " ",
        "value": "name"
      },
      ]
        
      .catch(message.reply(stripIndents`Uh oh, I did an oopsy woopsy! \`${Error}\` happened. You should tell Doroken.`));
   }
  }
                  
                  
if (command === "test") {
    const one = "test 1"
		const two = "test 2"
		const three = "test 3"
    
    const songs = [
      (one),
      (two),
      (three),
  ]

    if (one === "right") {
      message.reply("Correct!");
    }
      if (one !=== "right") {
        message.reply("Wrong!");
      }
  }
