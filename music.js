const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//declaring discord stuff
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ">";
const { stripIndents } = require('common-tags');

const songCount = "42";
const MusMonth = "April 2020";


client.on("ready", () => {
  console.log("Logged in as Conker.");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (message.author.id === "332354236253995013") {
        message.reply(stripIndents`No I don't wanna.\n\ \`${Error}\` \n\This means that something went wrong. Maybe it'll be fixed, maybe it won't.`)
    return;
    }
  
  if (command === "ping4") {
    message.reply("Pong! Script 4 (music) is up and running.");
    message.react("✔");
  }
    if (message.content.startsWith(">ping")) {
      if (message.content.startsWith(">ping1") || message.content.startsWith(">ping2") || message.content.startsWith(">ping3") || message.content.startsWith(">ping4")) return;
    message.reply("Pong! I'm up, thanks for checking. (Script 4 - music)");
    message.react("✔");
  }
  

      if (command === "disconnect" || command === "leave" || command === "stop" || command === "shutupjesusicantstanditevenironically") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.leave()
    } else {
      message.reply("Either you or I are not in the voice channel. You have to still be in the voice channel in order to make me leave for some reason. Doroken's working on it, supposedly.");
    }

      }
  
      if (command === "music") {
    message.channel.send({
      "embed": {
    "description": stripIndents`These are all midi files. They're great. Song request? Slide into Doro's DMs.\nCurrent song count: ${songCount}\nOptionally, put a - before the song name to play it from the main script, rather than the one dedicated to it, ex. \`>-allstar\`. Be warned that it is very very laggy, since it's the main script and thus running more than just music! I don't know why you'd want this.`,
	"color": 2254003,
      "thumbnail": {
      "url": "https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2Ficon.png"
      },
    "author": {
      "name": "List of Songs"
    },
	  "footer": {
      "icon_url": stripIndents`${message.author.avatarURL}`,
      "text": stripIndents`© ${MusMonth} <> Music rights belong to their respective artists and copyrights and whatever else the hecc`
    },
	   "fields": [
          {
           "name": "blink-182",
           "value":"M+M's `mms`\nStockholm Syndrome `stockholm`\nThe Rock Show `rockshow`\nI Won't Be Home For Christmas `christmas`\nWhat's My Age Again `age`\nWasting Time `wastingtime`\nAliens Exist `aliens`\nDon't Leave Me `leaveme`\nAll The Small Things `smallthings`\nMH 4.18.2011 `mh418`"
         },
       {

"name": "Coldplay",
           "value": "Viva la Vida `vivavida`\nClocks `clocks`\nParadise `paradise`\nStrawberry Swing `strawberry`\nCharlie Brown `cbrown`\nViolet Hill `violethill`\nThe Scientist `scientist`\nYellow `yellow`"
         },
{
"name": "Green Day",
           "value": "Boulevard of Broken Dreams `bobd`\nBasket Case `basket`\n21 Guns `21guns`\nJesus of Suburbia `suburbia`\nNice Guys Finish Last `niceguys`\nWaiting `waiting`"
       },

{
"name": "The Offspring",
           "value": "Have You Ever `haveyouever`\nKick Him When He's Down `kickdown`\nAmazed `amazed`\nThe Noose `noose`\n(Can't Get My) Head Around You `headaround`\nAmericana `americana`\nCome Out And Play `comeplay`\nChange the World `changeworld`\nGone Away `goneaway`\nI Choose `choose`\nMota `mota`\nThe Meaning of Life `meaninglife`\nSelf Esteem `selfesteem`\nThe Kids Aren't Alright `kidsalright`"
      },
{
"name": "Other",
           "value": "Smash Mouth - All Star `allstar`\nRick Astley -Never Gonna Give You Up `rickroll`\nNirvana - Heart Shaped Box `heartbox`"
         
       },
       
       {
         "name": "Beta! 1hr+ Nightcore Mixes (no audio skipping/rewinding; song lists are included)",
         "value": "Linkin Park (1hr 32m) `lp`\nThe Offspring (1hr 5m) `offspring`\nHard/Punk Rock Mix (50:50) `rockmix`"
       }
       ]
    }
  });
}
  
  
  //Songs
  
  if (command === "lp") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Linkin Park Nightcore Mix (1hr 32m)`\nSong list: https://pastebin.com/2fkZPd2s");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/94890286-4be0-46c4-af6d-0eb8d60e191d%2FLPnightcore.mp3');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}
  
    if (command === "rockmix") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Hard/Punk Rock Nightcore Mix (50:50)`\nSong list: https://pastebin.com/JXZYnAhg");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/94890286-4be0-46c4-af6d-0eb8d60e191d%2Fhard-punk%20rock%20nightcore%20mix.mp3');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}
  
  
  if (command === "offspring") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `The Offspring Nightcore Mix (1hr 5m)`\nNo song list yet, sorry!");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/94890286-4be0-46c4-af6d-0eb8d60e191d%2FOffspring%20Mix%20(2019_04_13%2018_38_07%20UTC).mp3');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

  
  
  if (command === "allstar") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `All Star - Smash Mouth`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FAllStar.mp3');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}
  
    if (command === "vivavida") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Viva la Vida - Coldplay`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FVivaLaVida.mp3');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}
  
    if (command === "bobd") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Boulevard of Broken Dreams - Green Day`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FBoulevardofBrokenDreams.mp3');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}
  
if (command === "rickroll") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Never Gonna Give You Up - Rick Astley`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FNeverGonnaGiveYouUp.mp3');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "basket") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Basket Case - Green Day`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FBasketCase.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "21guns") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `21 Guns - Green Day`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2F21Guns.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "suburbia") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Jesus of Suburbia - Green Day`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FJesusOfSuburbia.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "niceguys") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Nice Guys Finish Last - Green Day`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FNiceGuysFinishLast.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "waiting") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Waiting - Green Dayy`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FWaiting.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "clocks") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Clocks - Coldplay`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FClocks.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "paradise") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Paradise - Coldplay`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FParadise.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "strawberry") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Strawberry Swing - Coldplay`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FStrawberrySwing.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "cbrown") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Charlie Brown - Coldplay`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FCharlieBrown.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "violethill") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Violet Hill - Coldplay`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FVioletHill.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "scientist") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `The Scientist - Coldplay`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FTheScientist.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "yellow") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Yellow - Coldplay`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FYellow.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "haveyouever") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Have You Ever - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FHaveYouEver.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "kickdown") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Kick Him When He's Down - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FKickHimWhenHesDown.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "amazed") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Amazed - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FAmazed.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}
  
  if (command === "noose") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `The Noose - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FTheNoose.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "headaround") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(Can't Get My) Head Around You - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FCantGetMyHeadAroundYou.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "americana") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Americana - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FAmericana.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "comeplay") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Come Out and Play - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FComeOutAndPlay.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "changeworld") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Change the World - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FChangeTheWorld.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "goneaway") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Gone Away - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FGoneAway.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "choose") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `I Choose - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FIChoose.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "mota") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Mota - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FMota.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "meaninglife") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `The Meaning of Life - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FTheMeaningOfLife.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "selfesteem") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Self Esteem - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FSelfEsteem.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "kidsalright") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `The Kids Aren't Alright - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FTheKidsArentAlright.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "mms") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `M+M's - blink-182`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FMMs.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "stockholm") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Stockholm Syndrome - blink-182`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FStockholmSyndrome.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "rockshow") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `The Rock Show - blink-182`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FTheRockShow.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "christmas") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `I Won't Be Home For Christmas - blink-182`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FIWontBeHomeForChristmas.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "age") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `What's My Age Again - blink-182`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FWhatsMyAgeAgain.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "wastingtime") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Wasting Time - blink-182`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FWastingTime.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "aliens") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Aliens Exist - blink-182`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FAliensExist.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "leaveme") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Don't Leave Me - blink-182`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FDontLeaveMe.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "smallthings") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `All The Small Things - blink-182`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FAllTheSmallThings.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

  if (command === "mh418") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `MH 4.18.2011 - blink-182`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FMH4.18.2011.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}
  
    if (command === "heartbox") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Heart Shaped Box - Nirvana`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FHeartShapedBox.mp3');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}
      });
   client.login(process.env.SECRET);
//no bot token for u
