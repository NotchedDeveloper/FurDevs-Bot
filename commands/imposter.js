const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")

exports.run = async (client, message, args) => {
    await message.delete();
    if(args){
        var imposterDetector = [true, false]
    }else{
        throw new Error("Give me some choices man ( Like Should I die **or** stay alive ) Make sure you put \" or \" between you choices")
    }
    const imposter = Math.floor(Math.random() * imposterDetector.length)
        const embed = new MessageEmbed()
        .setAuthor(
            `${message.author.tag}`, 
            `${message.author.displayAvatarURL({dynamic: true})}`
        )
        .setTitle("Imposter Command")
        .setColor("#8800FF")
        .setFooter(`User ID: ${message.author.id}`)
        .setDescription(`
                .      　。　　　　•　    　ﾟ　　。
        　　.　　　.　　　  　　.　　　　　。　　   。　.
         　.　　      。　        ඞ   。　    .    •
         .      ${message.author} was ${imposter ? " " : "Not"} The Imposter　 。　.
        　 　　。　　　　　　ﾟ　　　.　　　　　.
        ,　　　　.　 .　　       .
        `)
        .setTimestamp();
        message.channel.send(embed)
};

exports.help = {
    name: "imposter",
    description: "You do be looking kinda sus though",
    usage: "",
    aliases: [],
};