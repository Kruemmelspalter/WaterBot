const discord = require("discord.js")

const client = new discord.Client()

const CHANNEL = "800622259500351500"
const MESSAGE = "||@everyone|| Trinkt was!"

client.once('ready', () => {
    console.log("ready")
})

var interval = setInterval(()=>{
    console.log("reminder")
    client.channels.cache.get(CHANNEL).send(MESSAGE)
}, 60*1000)

client.login("ODAwNjE5NjkzODgyMDgxMzIx.YAUxMQ.7eB6b1Zd9Eik8XYFxHpGOGQXik0")