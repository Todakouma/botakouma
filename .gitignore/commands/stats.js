const Command = require('./command')
const Discord = require('discord.js')

module.exports = class Stats extends Command {
  static match(message) {
    return message.content.startsWith('/stats')
  }

  static action(message){
    let args = message.content.split(' ')
    args.shift()
    console.log(message.content)
    if(message.content === '/stats'){
      message.delete()
      message.reply('❌ Veuillez saisir un pseudo')
    }else{
      message.delete()
      var mysql = require('mysql');
      var con = mysql.createConnection({
        host     : "localhost",
        user     : "craftashop",
        password : "YrXlgyiY0eNN1woe",
        database : "So-Plugins"
      });

      con.connect(function(err) {
        if (err) throw err;
        var adr = args.join('%20');
        //Escape the address value:
        var sql = 'SELECT * FROM BungeePlayer WHERE name = ?';
        //Send an array with value(s) to replace the escaped values:
        con.query(sql, [adr], function (err, result) {
          if (err) throw err;
          console.log(result);
        });
      });

      const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .addField("Statistique de " + args.join('%20'), "Minage: 100%", true);
      message.channel.send({embed});
    }
  }
}
