const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./commands/google')
const Ping = require('./commands/ping')
const Stats = require('./commands/stats')



bot.on('ready', function () {
  bot.user.setPresence({ game: { name: 'SkyBot by Todakouma', type: 0}})
  .catch(console.error)
  .then(console.log("Bot Ready !"))
})

bot.login('NDUyMTgwNjY4Mjk0NzU4NDAw.DfMlpA.PU0rXf4E0jtM9lhmwPuktez6rVo')


bot.on('message', function (message) {
  let commandUsed =
    Google.parse(message) ||
    Ping.parse(message) ||
    Stats.parse(message)
})
