const Discord = require("discord.js");
const client = new Discord.Client();

 client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription("تم أرسال الرابط برسالة خاصة")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription("** مدة الرابط : ساعه | عدد استخدامات الرابط : 1 **")
      message.author.sendEmbed(Embed11)
    }
}); 
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : pretty`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : pretty ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`الشيخ بريتي`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});


client.login("NTM1MDYxMTc5OTE2MzUzNTU2.DyCqTQ.edMn-W815q9TUj_UeeRyF3wQF-g")