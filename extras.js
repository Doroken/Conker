//i'm sorry this is a mess

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const extras = new Discord.Client();
const { stripIndents } = require('common-tags');

extras.on("ready", () => {
  console.log("Logged in as Conker with Extra Responses.");
});

extras.on("message", (message) => {
if (message.author.bot) return;
  //well this obviously didn't work-
const args = message.content.slice(message.length).trim().split(/ +/g);
 const word = args.shift().toLowerCase();
  
  //ignore >heck
  if (message.content.startsWith(">")) return;
  if (message.content.includes("check")) return;
  if (message.content.includes("Check")) return;
  if (message.content.includes("CHECK")) return;
  if (message.content.includes("Danganronpa")) return;
  if (message.content.includes("danganronpa")) return;
  if (message.content.includes("DANGANRONPA")) return;
  
  if (message.content.startsWith("die")) {
    if (message.author.id !== "229003197908385794") {
            message.reply("sorry, only Doroken can make me commit die.")
              .then(console.log(Date.now() + stripIndents`Attemped forcekill by ${message.author.username}`))
               return;
          }
            else
            message.reply("Alright fine, I'll go take a nap...")
          .then(message => extras.destroy())
          .then(console.log(Date.now() + stripIndents`Forcekilled by ${message.author.username}`))
         //why did i even think this would work
            if (message.content.startsWith("wake up")) {
                  extras.login(process.env.SECRET)
                    .then(() => message.reply("Hello! Did ya' miss me?"))
                          }
      }
  
 if (message.content.startsWith("ping")) {
   message.reply("Pong! I'm up, thanks for checking. (Script 2)");
 }
     if (message.content.startsWith("pong")) {
     message.reply("Ping! I'm up, thanks for checking. (Script 2)");
   }
        if (message.content.startsWith("ping1")) {
        message.reply("Pong! Script 1 is up and running.");
      }
	
  if (message.content.includes("pog")) {
    message.channel.send("<:Pog:380471700090781697>");
  }
    if (message.content.includes("Pog")) {
    message.channel.send("<:Pog:380471700090781697>");
  }
  
    if (message.content.includes("POG")) {
    message.channel.send("<:Pog:380471700090781697>");
  }
  
  if (message.content.includes("hecc")) {
      message.reply("trying to bypass my filter again? Well heck you. \"Hecc\" is still a bad word, you heck.");
}
   if (message.content.includes("Hecc")) {
      message.reply("trying to bypass my filter again? Well heck you. \"Hecc\" is still a bad word, you heck.");
}
   if (message.content.includes("HECC")) {
      message.reply("trying to bypass my filter again? Well heck you. \"Hecc\" is still a bad word, you heck.");
}


  if (message.content.includes("👀")) {
    message.channel.send("<:FlippedEyes:417402135831904268>");
  }
  if (message.content.includes("<:ZoomEyes:411968793074466828>")) {
    message.channel.send("<:AngeryEyes:380489940972077066>");
  }
  if (message.content.includes("<:AngeryEyes:380489940972077066>")) {
    message.channel.send("<:ZoomEyes:411968793074466828>");
  }
  if (message.content.includes("<:FlippedEyes:417402135831904268>")) {
    message.channel.send("👀");
  }


  if (message.content.includes("heck")) {
	  message.reply("shut the heck up! No swearing in my server.");
  }  
  if (message.content.includes("Heck")) {
	  message.reply("your soul has been condemned to the land of the VeggieTales as a result of your hecking language.");
  }  
  if (message.content.includes("HECK")) {
	  message.reply("NO HECKING SWEARING IN MY SERVER!");
  }
  if (message.content.includes("hECK")) {
	  message.reply("shut the heck your up!");
  }
  if (message.content.includes("heCK")) {
	  message.reply("no heCKing swearing in my server.");
  }
  if (message.content.includes("hecK")) {
	  message.reply("no hecKing sweaRing!");
  }
  if (message.content.includes("HEck")) {
	  message.reply("i tried so hard and got so far, but in the end, you're still HEcking swearing.");
  }
  if (message.content.includes("HECk")) {
	  message.reply("no heck");
  }
  if (message.content.includes("hEcK")) {
	  message.reply("stop saying heck it's a bad word.");
  }
  if (message.content.includes("heCk")) {
	  message.reply("please stop hecking swearing you're hurting my feelings.");
  }
  if (message.content.includes("HeCk")) {
	  message.reply("i have a hecking family to feed :(");
  }
  if (message.content.includes("heCK")) {
	  message.reply("you're hecking hopeless.");
  }

//too lazy to do other cases
  if (message.content.includes("Dang")) {
	  message.reply("watch your gosh dang language.");
  }
  
  
  if (message.content.includes("DANG")) {
	  message.reply("NO DANG SWEARING!");
  }
  
  if (message.content.includes("dang")) {
	  message.reply("I'll drag you down to dimmadang Toad hell if I catch you using that kind of language again.");
  }
  
  if (message.content.includes("Crap")) {
	  message.reply("my dude, what the crap. No swearing. Yeesh, you humans are so incompetent...");
  }
  
  if (message.content.includes("crap")) {
	  message.reply("cut the crap man. *No swearing!*");
  }
  
  if (message.content.includes("CRAP")) {
	  message.reply("SHUT THE CRAP YOUR MOUTH");
  }
  
  if (message.content.includes("Frick")) {
	  message.reply("you're really fricking pushing it! ***No swearing*** in my Christian server!");
  }
  
  if (message.content.includes("frick")) {
	  message.reply("if you don't tone your language the frick down imma march over there and eat your mcfricken turtle.");
  }
  
  if (message.content.includes("FRICK")) {
	  message.reply("SHUT YOUR FRICKING FACEHOLE");
  }
  
  
 if (message.content.includes ("wut")) {
    message.channel.send("<:ConkerWut:380894345060155392>");
  }
if (message.content.includes("this is fine")) {
    message.channel.send("<:ThisIsFine:352129159855865856>");
  }
    if (message.content.includes("This is fine")) {
    message.channel.send("<:ThisIsFine:352129159855865856>");
  }
  
if (message.content.includes("you tried")) {
    message.channel.send("<:YouTried:352129159813660680>");
  }
if (message.content.includes("You tried")) {
    message.channel.send("<:YouTried:352129159813660680>");
  }
  
  if (message.content.includes("professional")) {
    message.reply("pRoFeSsIoNaL!"),
    message.channel.send({files: ["https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2Fweb%20dev.PNG"]});
  }
  
  if (message.content.includes("Professional")) {
    message.reply("pRoFeSsIoNaL!"),
    message.channel.send({files: ["https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2Fweb%20dev.PNG"]});
  }
  
      
	if (message.content.includes("Conker heck")) {
	message.channel.send("no u"); }
	if (message.content.includes("Heck Conk")) {
	message.channel.send("no u"); }
	if (message.content.includes("heck Conk")) {
	message.channel.send("no u"); }
	if (message.content.includes("Conker shut")) {
	message.channel.send("no u"); }
	if (message.content.includes("Shut Conker")) {
	message.channel.send("no u"); }
	if (message.content.includes("shut Conker")) {
	message.channel.send("no u"); }
	if (message.content.includes("Heck u Conk")) {
	message.channel.send("no u"); }
	if (message.content.includes("heck u Conk")) {
	message.channel.send("no u"); }
	if (message.content.includes("Heck you Conk")) {
	message.channel.send("no u"); }
	if (message.content.includes("heck you Conk")) {
	message.channel.send("no u"); }
	if (message.content.includes("Conker's a heck")) {
	message.channel.send("no u"); }
	if (message.content.includes("Hecc Conk")) {
	message.channel.send("no u"); }
	if (message.content.includes("hecc Conk")) {
	message.channel.send("no u"); }
	if (message.content.includes("Heck off Conk")) {
	message.channel.send("no u"); }
	if (message.content.includes("heck off Conk")) {
	message.channel.send("no u"); }
	if (message.content.includes("CONKER HECK")) {
	message.channel.send("NO U"); }
	if (message.content.includes("HECK CONK")) {
	message.channel.send("NO U"); }
	if (message.content.includes("CONKER SHUT")) {
	message.channel.send("NO U"); }
	if (message.content.includes("SHUT CONKER")) {
	message.channel.send("NO U"); }
	if (message.content.includes("HECK U CONK")) {
	message.channel.send("NO U"); }
	if (message.content.includes("HECK YOU CONK")) {
	message.channel.send("NO U"); }
	if (message.content.includes("CONKER'S A HECK")) {
	message.channel.send("NO U"); }
	if (message.content.includes("HECC CONK")) {
	message.channel.send("NO U"); }
	if (message.content.includes("HECK OFF CONK")) {
	message.channel.send("NO U"); }
	if (message.content.includes("conker heck")) {
	message.channel.send("no u"); }
	if (message.content.includes("heck conk")) {
	message.channel.send("no u"); }
	if (message.content.includes("conker shut")) {
	message.channel.send("no u"); }
	if (message.content.includes("shut conker")) {
	message.channel.send("no u"); }
	if (message.content.includes("heck u conk")) {
	message.channel.send("no u"); }
	if (message.content.includes("heck you conk")) {
	message.channel.send("no u"); }
	if (message.content.includes("conker's a heck")) {
	message.channel.send("no u"); }
	if (message.content.includes("hecc conk")) {
	message.channel.send("no u"); }
	if (message.content.includes("heck off conk")) {
	message.channel.send("no u"); }
	if (message.content.startsWith("shut")) {
	message.channel.send("no u"); }
	if (message.content.startsWith("Shut")) {
	message.channel.send("no u"); }
	if (message.content.startsWith("SHUT")) {
	message.channel.send("NO U"); }
	if (message.content.startsWith("BE QUIET CONK")) {
	message.channel.send("NO U"); }
	if (message.content.startsWith("be quiet conk")) {
	message.channel.send("no u"); }
	if (message.content.startsWith("be quiet Conk")) {
	message.channel.send("no u"); }
	if (message.content.startsWith("Be quiet Conk")) {
	message.channel.send("no u"); }
	if (message.content.startsWith("Shh Conk")) {
	message.channel.send("no u"); }
	if (message.content.startsWith("shh Conk")) {
	message.channel.send("no u"); }
	if (message.content.startsWith("shh conk")) {
	message.channel.send("no u"); }
	if (message.content.startsWith("SHH CONK")) {
	message.channel.send("NO U"); }
	if (message.content.startsWith("Shut")) {
	message.channel.send("no u"); }
  if (message.content.startsWith("i will delete you")) {
	message.channel.send("no u won't"); }
  if (message.content.startsWith("I will delete you")) {
	message.channel.send("no u won't"); }
  if (message.content.startsWith("I WILL DELETE YOU")) {
	message.channel.send("NO U WON'T"); }
  if (message.content.startsWith("go away conk")) {
	message.channel.send("no u"); }
  if (message.content.startsWith("go away Conk")) {
	message.channel.send("no u"); }
  if (message.content.startsWith("Go away Conk")) {
	message.channel.send("no u"); }
  if (message.content.startsWith("Go away conk")) {
	message.channel.send("no u"); }
  if (message.content.startsWith("GO AWAY CONK")) {
	message.channel.send("NO U"); }
  
  });

extras.login(process.env.SECRET);
