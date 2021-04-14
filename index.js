const Discord = require('discord.js');
const client = new Discord.Client();

const {prefix, token, channelid, matn, matngoodbe, channelid2} = require(`./bot.json`);

client.login(token);
client.on('ready', () => {
  console.log(`bot ${client.user.tag} online shod  [ready!]`)
})

console.log("node index.js")
client.on("message", message => {
  if (message.content === `${prefix}help welcome`){
    let help =new Discord.MessageEmbed()
    .setColor("RENDOM")
    .setDescription(`welcome test \n ${prefix}test welcome \n test goodbye \n ${prefix}test goodbye\n avatar you \n ${prefix}avatar `)
 message.channel.send(help)
  }
})
client.on("message", message => {
  if (message.content === `${prefix}avatar`){
    if(message.author.bot)return
  
    let welcomeEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.username)
    .setImage(message.author.displayAvatarURL({ size: 2048, dynamic: true }))
message.channel.send(welcomeEmbed)
    
    
 
  }
})

client.on('guildMemberAdd', member => {



  let welcomeChannel = client.channels.cache.get(channelid) 
  if(welcomeChannel){

      let welcomeEmbed = new Discord.MessageEmbed()
      if(member.user.bot){
        welcomeEmbed.setColor()
        welcomeEmbed.setAuthor(`${member.guild.name}`)
        welcomeEmbed.setDescription(`به سرور ما خوش آمدید ، امیدوارم که لحظات خوبی داشته باشید │ 
│ Welcome to our server, I hope you have a good time<@${member.user.id}>`)
        welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
         welcomeEmbed.setFooter(`ممبر های سرور${member.guild.memberCount}`)
        

welcomeChannel.send(welcomeEmbed)
     
        welcomeChannel.send(welcomeEmbed)
      }else{
   
          welcomeEmbed.setColor()
          welcomeEmbed.setAuthor(`${member.guild.name}`)
          welcomeEmbed.setDescription(`به سرور ما خوش آمدید ، امیدوارم که لحظات خوبی داشته باشید │ 
│ Welcome to our server, I hope you have a good time <@${member.user.id}>`)
          welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
           welcomeEmbed.setFooter(`ممبر های سرور${member.guild.memberCount}`)
   
          welcomeChannel.send(welcomeEmbed)

      }
  }else{
      console.log("یافت نشید ولکام چنل")
  }
})



client.on('message', message => {

  if (message.content === `${prefix}info`){


      let welcomeEmbed2 = new Discord.MessageEmbed()
//if (!message.member.hasPermission("ADMINISTRATOR"))
          welcomeEmbed2.setColor("#25EEFF")
         // welcomeEmbed2.setAuthor(`info`)
    //welcomeEmbed.setThumbnail()
   welcomeEmbed2.setDescription(` **<a:818185064411955210:831566077263740950>  │ Info**
<a:5106verifyblack:831513383815217203> │ Sakhte Shode Dar Saal : 1400 (2021)
<a:5106verifyblack:831513383815217203> │ Owner : Profesor Va Radman
<a:5106verifyblack:831513383815217203> │ Developer Ha : Parsa Va Radman
<a:5106verifyblack:831513383815217203> │ Sponser : Poorya
<a:5106verifyblack:831513383815217203> │ Prefix Bot : % ${message.author}`)
    // welcomeEmbed2.setFooter(`ممبر های سرور${message.guild.memberCount}`)
          message.channel.send(welcomeEmbed2)
      }
     
  
      

})
client.on('message', message => {

  if (message.content === `${prefix}test welcome`){


      let welcomeEmbed3 = new Discord.MessageEmbed()
if (!message.member.hasPermission("ADMINISTRATOR"))

          welcomeEmbed3.setColor("#25EEFF")
          welcomeEmbed3.setAuthor(`welcome test`)
 //   welcomeEmbed.setThumbnail()
   welcomeEmbed3.setDescription(`به سرور ما خوش آمدید ، امیدوارم که لحظات خوبی داشته باشید │ 
│ Welcome to our server, I hope you have a good time ${message.author}`)
   welcomeEmbed3.setFooter(`ممبر های سرور${message.guild.memberCount}`)
          message.channel.send(welcomeEmbed3)
      }

  

})



client.on('guildMemberRemove', member => {
  let goodnuy = client.channels.cache.get(channelid2) //inja vared ko //inja vared kon
  if(goodnuy){

      let welcomeEmbed4 = new Discord.MessageEmbed()

      if(member.user.bot){

          welcomeEmbed4.setColor("#5eff00")
          welcomeEmbed4.setAuthor(`${member.guild.name}`)
          welcomeEmbed4.setDescription(`خدا نگهدار👋 <@${member.user.id}> `)
          welcomeEmbed4.setThumbnail(member.user.displayAvatarURL())
          welcomeEmbed4.setFooter(`ممبر های سرور${member.guild.memberCount}`)

          goodnuy.send(welcomeEmbed4)
      }else{
          welcomeEmbed4.setColor("#5eff00")
          welcomeEmbed4.setAuthor(`${member.guild.name}`)
          welcomeEmbed4.setDescription(`خدا نگهدار👋 <@${member.user.id}> `)
           welcomeEmbed4.setThumbnail(member.user.displayAvatarURL())
           welcomeEmbed4.setFooter(`ممبر های سرور${member.guild.memberCount}`)
 
          goodnuy.send(welcomeEmbed4)
        
      }
  }else{
      console.log(" گود بای چنل یافت نشد")
  }
})
client.on("message", message => {
        const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const saymessage = args.join(" ");
  if (command === "%avatar"){

          let mentionMember = message.mentions.members.first();
          var userm = message.author.username
          var avatarauthor = message.author.displayAvatarURL({  dynamic: true })
if(mentionMember){
          let embedavatar = new Discord.MessageEmbed()
          .setImage(mentionMember.user.displayAvatarURL({dynamic: true }))
          .setFooter('Requested by '+ userm, avatarauthor)

          .setColor('#2700FF')
          .setTitle('**<a:816812038499991602:831566053015552000>  │ Download Avatar**')
          .setURL(mentionMember.user.displayAvatarURL({ dynamic: true }))
          .setAuthor(mentionMember.user.tag, mentionMember.user.displayAvatarURL({dynamic: true }))
          message.channel.send(embedavatar)
return;
}  
      }
  
})
client.on("ready", () => {
  function YousamPower() {
let targetguild = client.guilds.cache.get("828658962999148584")
    let hungry = [`${targetguild.memberCount} members`, "𝑳𝒐𝒔𝒂𝒏𝒈𝒆𝒍𝒆𝒔 𝑺𝒉𝒐𝒑 │ discord.gg/EFMRAhGkjA"]
    let Power = Math.floor(Math.random() * hungry.length);
    client.user.setActivity(hungry[Power], {type: "WATCHING"});
  }; setInterval(YousamPower, 10000)

  function chNickname() {
    const targetguild = client.guilds.cache.get("828658962999148584")
    const me = targetguild.members.cache.get(client.user.id)
    let name = ["𝑳" , "𝑳𝒐" , "𝑳𝒐𝒔" , "𝑳𝒐𝒔𝒂" , "𝑳𝒐𝒔𝒂𝒏" , "𝑳𝒐𝒔𝒂𝒏𝒈" , "𝑳𝒐𝒔𝒂𝒏𝒈𝒆" , "𝑳𝒐𝒔𝒂𝒏𝒈𝒆𝒍" , "𝑳𝒐𝒔𝒂𝒏𝒈𝒆𝒍𝒆" , "𝑳𝒐𝒔𝒂𝒏𝒈𝒆𝒍𝒆𝒔" , "𝑳𝒐𝒔𝒂𝒏𝒈𝒆𝒍𝒆𝒔 𝑺" , "𝑳𝒐𝒔𝒂𝒏𝒈𝒆𝒍𝒆𝒔 𝑺𝒉" , "𝑳𝒐𝒔𝒂𝒏𝒈𝒆𝒍𝒆𝒔 𝑺𝒉𝒐" , "𝑳𝒐𝒔𝒂𝒏𝒈𝒆𝒍𝒆𝒔 𝑺𝒉𝒐𝒑"]
    for (let i = 0; i < name.length; i++)
        me.setNickname(name[i])
}; setInterval(chNickname, 10000)
});
     client.on('message', message => {

  if (message.content === `${prefix}help`){


      let welcomeEmbed3 = new Discord.MessageEmbed()
//if (!message.member.hasPermission("ADMINISTRATOR"))

          welcomeEmbed3.setColor("#F4F701")
          //welcomeEmbed3.setAuthor(``)
 //   welcomeEmbed.setThumbnail()
   welcomeEmbed3.setDescription(`
   
   **<a:818185064411955210:831566077263740950>  │ Help**
   
<a:818177881036947466:831562255392964639> │Bot Prefix = %
<a:818177881036947466:831562255392964639> │Cmd Haye Bot
<a:818177881036947466:831562255392964639> │%info -> Darbare Shop Losangeles
<a:818177881036947466:831562255392964639> │%help -> Gereftan Komak Az Bot
<a:818177881036947466:831562255392964639> │%avatar @User -> Gereftan Profile Fard
<a:818177881036947466:831562255392964639> │%freegame -> Tarz Gereftan Bazi Rayegan
<a:818177881036947466:831562255392964639> │%nitro -> Moshakhasat Va Gheimat Nitro
<a:818177881036947466:831562255392964639> │%stock -> Mojodi Kala Ha
<a:818177881036947466:831562255392964639> │ %dargah -> Link Dargah Losangeles Shop
<a:ajirrr:830519460904304640> │Cmd Haye Admin Ha ( Faghat Adminstrator's )
<a:ajirrr:830519460904304640> │%ann -> Ferestadan Payam Announce Az Taraft Bot
<a:ajirrr:830519460904304640> │%ann1 -> Ferestadan Announce Be Sorat Embed
<a:ajirrr:830519460904304640> │%clear {tedad} -> Pak Kardan Payam Ha Be tedadi Ke Vared Kardid
<a:4312boomer:831515718368624670> │Cmd Haye Music
<a:4312boomer:831515718368624670> │*play -> Pakhsh Music
<a:loading34:830519772126511164> │ *invite -> invite Dadan Losangeles Shop Bot Be Server Khodeton
<a:5106verifyblack:831513383815217203> │When You Have Problem You Can Open A Ticket
<a:5106verifyblack:831513383815217203> │Agar Moshkeli Dashtid Mitonid Ticket Baz Konid`)
   //welcomeEmbed3.setFooter(`ممبر های سرور${message.guild.memberCount}`)
          message.channel.send(welcomeEmbed3)
      }
});
     client.on('message', message => {

  if (message.content === `${prefix}freegame`){


      let welcomeEmbed3 = new Discord.MessageEmbed()
//if (!message.member.hasPermission("ADMINISTRATOR"))

          welcomeEmbed3.setColor("#00FF51")
          welcomeEmbed3.setAuthor(``)
 //   welcomeEmbed.setThumbnail()
   welcomeEmbed3.setDescription(`
  **<a:818185055058264064:831739844921131018> │ Free Game**
   
 <a:loading34:830519772126511164> │ Bazi Raygan
<a:gherrr23:830691720307802112> │5 Invite = Bazi Raygan`)
   //welcomeEmbed3.setFooter(`ممبر های سرور${message.guild.memberCount}`)
          message.channel.send(welcomeEmbed3)
      }
       
       
});
     client.on('message', message => {

  if (message.content === `${prefix}nitro`){


      let welcomeEmbed3 = new Discord.MessageEmbed()
//if (!message.member.hasPermission("ADMINISTRATOR"))

          welcomeEmbed3.setColor("#ff007f")
          welcomeEmbed3.setAuthor(``)
 //   welcomeEmbed.setThumbnail()
   welcomeEmbed3.setDescription(`
   **<a:6234_nitro_booster_s:831772126385143878> │ Nitro**
   
   <a:816812038499991602:831566053015552000> │ Nitro va Boost Ta Akhar In Hafte Mojod Mishavad`)
   //welcomeEmbed3.setFooter(`ممبر های سرور${message.guild.memberCount}`)
          message.channel.send(welcomeEmbed3)
      }
});


client.on('message', (message) => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
      
        const args = message.content
          .toLowerCase()
          .slice(prefix.length)
          .trim()
          .split(/\s+/);
        const [command, input] = args;
      
        if (command === 'clear' || command === 'c') {
          if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel
              .send(
                "<:4352_DiCaprioLaugh:831515836207726613> ",
              );
          }
      
          if (isNaN(input)) {
            return message.channel
              .send('Meghdare Payami Ke Mikhayd Pak She Ra Vared Konid')
              .then((sent) => {
                setTimeout(() => {
                  sent.delete();
                }, 2500);
              });
          }
          if (Number(input) < 0) {
            return message.channel
              .send('Yek Adad Mosbat Entekhab konid')
              .then((sent) => {
                setTimeout(() => {
                  sent.delete();
                }, 2500);
              });
          }
      
          // add an extra to delete the current message too
          const amount = Number(input) > 100
            ? 101
            : Number(input) + 1;
      
          message.channel.bulkDelete(amount, true)
          .then((_message) => {
            message.channel
              // do you want to include the current message here?
              // if not it should be ${_message.size - 1}
              .send(`Bot \`${_message.size}\` Ta Payamo Pak Kard :innocent:`)
              .then((sent) => {
                setTimeout(() => {
                    sent.delete();
}, 2500);
});
});
}
});

     client.on('message', message => {

  if (message.content === `${prefix}stock`){


      let welcomeEmbed3 = new Discord.MessageEmbed()
//if (!message.member.hasPermission("ADMINISTRATOR"))

          welcomeEmbed3.setColor("#FF0000")
          welcomeEmbed3.setAuthor(``)
 //   welcomeEmbed.setThumbnail()
   welcomeEmbed3.setDescription(`
**<a:818185041968365639:831739862369304596> │ Mojodi Kala**
<:OIP:831572458132996177>  │ Anbar Khalie Moteassefane `)
   //welcomeEmbed3.setFooter(`ممبر های سرور${message.guild.memberCount}`)
          message.channel.send(welcomeEmbed3)
      }
});



     client.on('message', message => {

  if (message.content === `${prefix}dargah`){


      let welcomeEmbed3 = new Discord.MessageEmbed()
//if (!message.member.hasPermission("ADMINISTRATOR"))

          welcomeEmbed3.setColor("#F4F701")
          //welcomeEmbed3.setAuthor(` Losangeles Shop Id Pay`)
    // welcomeEmbed.setThumbnail()
   welcomeEmbed3.setDescription(`[**<a:818185041968365639:831739862369304596> | Losangeles Shop Id Pay**]( https://idpay.ir/losangeles-shop)`)
   //welcomeEmbed3.setFooter(`ممبر های سرور${message.guild.memberCount}`)
          message.channel.send(welcomeEmbed3)
      }
});


client.on("message", msg => {
  if (msg.content === "سلام") {
    msg.channel.send("علیک |:");
  }
});


const { Client } = require("discord.js");

require("./ExtendedMessage");

//const client = new Client();

client.on("message", msg => {
    if (msg.author.bot) return;
    if (msg.content === "hi") {
        msg.inlineReply("hello");
    }
});   


client.on("message", msg => {
  if (msg.content === "fuck") {
    msg.reply("fuck you <:fuck:830519161302024234> ");
  }
});

client.on("message", msg => {
  if (msg.content === "!nitro") {
    msg.reply("bot nitro offe va fekr ham nakonam on beshe <:4352_DiCaprioLaugh:831515836207726613> ")
  }
});



client.on("message", msg => {
  if (msg.content === "فاک") {
    msg.reply("fuck you <:fuck:830519161302024234> ")
  }
});


client.on("message", msg => {
  if (msg.content === "sik") {
    msg.reply("<:4352_DiCaprioLaugh:831515836207726613> ")
  }
});

client.on("message", msg => {
  if(msg.content === "sik tir"){
    msg.reply("<:4352_DiCaprioLaugh:831515836207726613> ")
  }
});


client.on("message", msg => {
  if (msg.content === "سیک") {
    msg.reply("<:4352_DiCaprioLaugh:831515836207726613> ")
  }
});

client.on("message", msg => {
  if (msg.content === "سیک تیر") {
    msg.reply("<:4352_DiCaprioLaugh:831515836207726613> ")
  }
});
