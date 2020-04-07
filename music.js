  //just a bunch of test commands related to music playing

if (command === "loop") {
    const looping = false;
    const currentVoiceChannel = null;
  		if(currentVoiceChannel !== message.member.voiceChannel){
			message.channel.send("Join the voice channel first you soggy chicken nugget.");
  			return;
  		}

	  	if(!looping){
	  		looping = true;
	  		message.channel.send("Audio looping `on`!");
	  	} else{
	  		looping = false;
	  		message.channel.send("Audio looping `off`!");
	  	}
  }
  
  
  
  
  
  
  
  if (command === "music") {
    message.channel.send({
      "embed": {
    "title": "Kingdom Cats Music",
    "description": "Soundtracks from Petz Catz/Dogz 2 and The DOG Island that have been dramatically edited.\nUse `>music-songname` to play a song.",
	"color": 2254003,
      "thumbnail": {
      "url": "https://cdn.discordapp.com/attachments/328613437854711808/419295552233275412/avatar.png"
      },
    "author": {
      "name": "Music"
    },
	  "footer": {
      "icon_url": stripIndents`${message.author.avatarURL}`,
      "text": "Doroken#9881 <> © July 2018 <> Music rights belong to Ubisoft and the other parties responsible for the games"
    },
	   "fields": [
       {
           "name": "Song List",
           "value":"Alley `alley`\nBetween Time `time`\nBubble Kingdom `bubb1`\nBubble Kingdom 2/Secondary Ice Kingdom `bubb2`\nSuspicion `susp`\nDeserted Kingdom `desert`\nDungeon `dungeon`\nForgotten Wastelands `wasteland`\nIce Kingdom `ice`\nLibrary `lib`\nMain Castle Theme `castle1`\nSecondary Castle Theme `castle2`\nShadow Kingdom `shadow`\nShadow Kingdom Alt `shadow2`\nSolitary Fields `fields`\nMain Theme/Title `title`\nVillage Theme `village`"
       }
       ]
    }
  });
}

  if (command === "music-lib") {
    (connection => {
           connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FLibrary.mp3')
      .catch(stripIndents`Sorry, Doro's still working on this music thing. \`${Error}\` happened.`);
        })
    }
  
  if (command === "music-help") {
    message.reply("https://www.npmjs.com/package/discord-music-bot");
  }










    if (command === "music") {
    message.channel.send({
      "embed": {
    "title": "List of Songs",
    "description": "These are all midi files. They're great. Song request? Slide into Doro's DMs.",
	"color": 2254003,
      "thumbnail": {
      "url": "https://cdn.discordapp.com/attachments/328613437854711808/419295552233275412/avatar.png"
      },
    "author": {
      "name": "Music"
    },
	  "footer": {
      "icon_url": stripIndents`${message.author.avatarURL}`,
      "text": stripIndents`Doroken#9881 <> © ${MusMonth} <> Music rights belong to their respective artists and copyrights and whatever else the hecc`
    },
	   "fields": [
       {
           "name": "Song List",
           "value":"All Star `allstar`\nViva la Vida `vivalavida`\nBoulevard of Broken Dreams `bobd`"
       }
       ]
    }
  });
}












if (command === "allstar") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply("Connected! I'm surprised Doroken managed to do somethin' right.");
            //will need to be run locally from laptop
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FAllStar.mp3');
        })
        .catch(console.log);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}


if (command === "music") {
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  if (command === "music1") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply("Connected! I'm surprised Doroken managed to do somethin' right.");
            //will need to be run locally from laptop
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FDungeonMusic.mp3');
        })
        .catch(console.log);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}
  
  
  
  if (command === "allstar") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply("Connected! I'm surprised Doroken managed to do somethin' right.");
            //will need to be run locally from laptop
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FAllStar.mp3');
        })
        .catch(console.log);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}
