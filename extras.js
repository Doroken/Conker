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
  console.log("Logged in as Conker with Extra Responses. Press CTRL+C to abort.");
});

//special for idiot nation/triple d nation - automatically gives new member a role
extras.on('guildMemberAdd', (guildMember) => {
   guildMember.addRole(guildMember.guild.roles.find(role => role.name === "(Auto Assigned Role by Conker)"));
});

extras.on("message", (message) => {
  
  if (message.author.id === "332354236253995013") {
        message.reply(stripIndents`No I don't wanna.\n\ \`${Error}\` \n\This means that something went wrong. Maybe it'll be fixed, maybe it won't.`)
    return;
    }
  
      //no hackers or weird links or whatever
  if (message.content.includes("discordgg.") || message.content.includes("discordg.g") || message.content.includes("discor.dgg") || message.content.includes("disco.rdgg") || message.content.includes("disc.ordgg") || message.content.includes("dis.cordgg") || message.content.includes("di.scordgg") || message.content.includes("d.iscordgg") || message.content.includes("discordgg.ga") || message.content.includes("discordgg.ga/nitro") || message.content.includes("discordgg.ga/nitro/redeem")) {
    const badLink = message.content
message.channel.send(`HACKER NO HACKING! ${message.author.username} posted a blacklisted link. Should probably kick them. Offending link/message: ||${badLink}||`);
        message.delete()
  }
  
   if (message.content.includes("😀") || message.content.includes("😃") || message.content.includes("😄") || message.content.includes("😁") ||  message.content.includes("😆") || message.content.includes("😅") ||  message.content.includes("🤣") || message.content.includes("😂") ||  message.content.includes("🙂") || message.content.includes("🙃") ||  message.content.includes("😉") || message.content.includes("😊") ||  message.content.includes("😇") || message.content.includes("🥰") ||  message.content.includes("😍") || message.content.includes("🤩") ||  message.content.includes("☺") || message.content.includes("😋") ||  message.content.includes("😛") || message.content.includes("😜") ||  message.content.includes("🤪") || message.content.includes("😝") ||  message.content.includes("🤑") || message.content.includes("🤗") || message.content.includes("🤭") || message.content.includes("😏") || message.content.includes("😌") ||  message.content.includes("🤠") || message.content.includes("😎") ||  message.content.includes("🤓") || message.content.includes("😺") || message.content.includes("😸") || message.content.includes("😹") || message.content.includes("😻") || message.content.includes("😼")) {
     message.channel.send("<:CreepySmiley:252915802162855936>");
 }
  
    
  if (message.content.includes("┬─┬ ノ( ゜-゜ノ)")) {
    message.channel.send("(╯°□°）╯︵ ┻━┻");
  }
  
if (message.author.bot) return;
  //well this obviously didn't work-
const args = message.content.slice(message.length).trim().split(/ +/g);
 const word = args.shift().toLowerCase();
  
    if (message.content.startsWith(">ping2")) {
    message.reply("Pong! Script 2 (extras) is up and running.");
    message.react("✔");
  }
    if (message.content.startsWith(">ping")) {
      if (message.content.startsWith(">ping1") || message.content.startsWith(">ping2") || message.content.startsWith(">ping3") || message.content.startsWith(">ping4")) return;
    message.reply("Pong! I'm up, thanks for checking. (Script 2 - extras)");
    message.react("✔");
  }
  
  //ignore >heck and other words
  if (message.content.startsWith(">")) return;
  if (message.content.includes("check")) return;
  if (message.content.includes("Check")) return;
  if (message.content.includes("CHECK")) return;
  if (message.content.includes("Danganronpa")) return;
  if (message.content.includes("danganronpa")) return;
  if (message.content.includes("DANGANRONPA")) return;
  if (message.content.includes("Dangerous")) return;
  if (message.content.includes("dangerous")) return;
  if (message.content.includes("scrap")) return;
  if (message.content.includes("Scrap")) return;
  if (message.content.includes("butter")) return;
  if (message.content.includes("Butter")) return;
  if (message.content.includes("BUTTER")) return;
  if (message.content.includes("button")) return;
  if (message.content.includes("Button")) return;
  if (message.content.includes("BUTTON")) return;

  
     if (message.content.startsWith("conk")) {
   message.channel.send("no u");
 }
  
     if (message.content.startsWith("Conk")) {
   message.channel.send("no u");
 }
  
     if (message.content.startsWith("CONK")) {
   message.channel.send("NO U");
 }
  
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
            if (message.content.startsWith("wake up")) {
                  extras.login(process.env.SECRET)
                    .then(() => message.reply("Hello! Did ya' miss me?"))
                          }
      }
  
     if (message.content.includes("creeper") || message.content.includes("Creeper") || message.content.includes("CREEPER")) {
   message.channel.send("Aww man");
 }
  
     if (message.content.includes("butt") || message.content.includes("Butt") || message.content.includes("BUTT")) {
   message.channel.send("haha butts");
 }
  
     /*if (message.content.includes("pee") || message.content.includes("poo") || message.content.includes("Pee") || message.content.includes("Poo")) {
   message.channel.send("peepeepoopoo");
 }*/
  
  if (message.content.includes("<@313365972943896576>") || message.content.includes("<@!313365972943896576>")) {
    message.reply("don't ping me nerd");
  }
  
    if (message.content.startsWith("<@313365972943896576>") || message.content.startsWith("<@!313365972943896576>")) {
    message.reply("(if you're trying to @ me for a command, please use > instead because Discord is stupid and the @ prefix won't work anymore.)");
  }
   
     if (message.content.includes("nerd") || message.content.includes("Nerd") || message.content.includes("NERD")) {
   message.channel.send("haha nerd, big ole nerd");
 }
  
     if (message.content.includes("stupid bot") || message.content.includes("Stupid bot")) {
   message.channel.send("shut ur mouth");
 }
  
     if (message.content.includes("walter") || message.content.includes("Walter")) {
   message.channel.send("I like fire trucks and moster trucks");
 }
  
     if (message.content.includes("fire trucks and moster trucks") || message.content.includes("fire trucks and monster trucks") || message.content.includes("firetrucks and moster trucks") || message.content.includes("firetrucks and monster trucks") || message.content.includes("firetrucks and mostertrucks") || message.content.includes("firetrucks and monstertrucks") || message.content.includes("fire trucks and moster trucks") || message.content.includes("fire trucks and monster trucks")) {
   message.channel.send("Walter");
 }
  
     if (message.content.includes("bruh") || message.content.includes("Bruh")) {
   message.channel.send("hurb");
 }
  
     if (message.content.includes("BRUH")) {
   message.channel.send("hüürb");
 }
  
     if (message.content.startsWith("Hi Conk") || message.content.startsWith("hi Conk") || message.content.startsWith("hi conk")) {
   message.channel.send("i will beat you to death");
 }
  
     if (message.content.includes("dumb conk") || message.content.includes("dumb Conk") || message.content.includes("dumb bot") || message.content.includes("Dumb conk") || message.content.includes("Dumb Conk") || message.content.includes("Dumb bot")) {
   message.channel.send("i will slam you onto a table");
 }
  
       if (message.content.includes("idiot conk") || message.content.includes("idiot Conk") || message.content.includes("idiot bot") || message.content.includes("Idiot conk") || message.content.includes("Idiot Conk") || message.content.includes("Idiot bot")) {
   message.channel.send("i will stab you in the liver");
 }
  
  if (message.content.includes("owo")) {
    message.channel.send("︠ʘw ︠ʘ");
  }
  
  if (message.content.includes("uwu")) {
    message.channel.send("︠ʘwʘ");
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
  
    if (message.content.includes("fricc")) {
      message.reply("trying to bypass my filter again? Well frick you. \"Fricc\" is still a bad word, you frick.");
}
   if (message.content.includes("Fricc")) {
      message.reply("trying to bypass my filter again? Well frick you. \"Fricc\" is still a bad word, you frick.");
}
   if (message.content.includes("FRICC")) {
      message.reply("trying to bypass my filter again? Well frick you. \"Fricc\" is still a bad word, you frick.");
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
  
  if (message.content.includes("no u")) {
	  message.reply("no u");
  }  
  
  if (message.content.includes("no U")) {
	  message.reply("no U");
  }  
  
  if (message.content.includes("No U")) {
	  message.reply("no u");
  }  
  
  if (message.content.includes("nO u")) {
	  message.reply("no U");
  }  
  
  if (message.content.includes("nO U")) {
	  message.reply("NO U");
  }  
  
  if (message.content.includes("No u")) {
	  message.reply("no u");
  } 
  
  if (message.content.includes("n o u")) {
	  message.reply("n o u");
  } 
  
  if (message.content.includes("n o  u")) {
	  message.reply("n o  u");
  } 
  
  if (message.content.includes("N o u")) {
	  message.reply("n o u");
  } 
  
  if (message.content.includes("N o  u")) {
	  message.reply("n o  u");
  } 
  
  if (message.content.includes("N O U")) {
	  message.reply("N O U");
  } 
  
  if (message.content.includes("N O  U")) {
	  message.reply("N O  U");
  } 
  
  if (message.content.includes("NO U")) {
	  message.reply("NO U");
  }  
  
  if (message.content.startsWith("No you")) {
	  message.reply("no u");
  }  
  
  if (message.content.startsWith("no you")) {
	  message.reply("no u");
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
  
if (message.content.includes("molten core")) {
  message.channel.send("MOLTEN COOORRREEEEE");
}
  
  if (message.content.includes("Molten core")) {
  message.channel.send("MOLTEN COOORRREEEEE");
}
  
  if (message.content.includes("Molten Core")) {
  message.channel.send("MOLTEN COOORRREEEEE");
}
  
  if (message.content.includes("MOLTEN CORE")) {
  message.channel.send("MOLTEN COOORRREEEEE");
}
  
  if (message.content.includes("MOLTEN COOORRREEEEE")) {
  message.channel.send("MOLTEN COOORRREEEEE");
}
  
  });

extras.login(process.env.SECRET);
