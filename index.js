const discord = require("discord.js")

const client = new discord.Client()

const CHANNEL = process.env.CHANNEL
const MESSAGE = process.env.MESSAGE

client.once('ready', () => {
    console.log("ready")
})

var interval = setInterval(()=>{
    console.log("reminder")
    client.channels.cache.get(CHANNEL).send(MESSAGE)
}, 60*1000)

client.login(process.env.TOKEN)