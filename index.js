const discord = require("discord.js")

const client = new discord.Client()

const CHANNEL = process.env.CHANNEL
const MESSAGE = process.env.MESSAGE
const INTERVAL = process.env.INTERVAL

client.once('ready', () => {
    console.log("ready")
})

var interval = setInterval(()=>{
    console.log("reminder")
    client.channels.cache.get(CHANNEL).send(MESSAGE)
}, INTERVAL)

client.login(process.env.TOKEN)