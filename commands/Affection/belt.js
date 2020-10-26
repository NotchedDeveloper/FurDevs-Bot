const { MessageEmbed } = require("discord.js")
let users = [];

exports.run = async (client, message, args) => {
    await message.delete();
    if(!message.member.roles.cache.get("759870953488121878")){
        throw new Error("Hey! you're not the server mom")
    }
    if(args[0]){
        message.mentions.users.map(user => {
            users.push(user)
        })
    }else{
        throw new Error("Who will be the person you want to hit with the belt!")
    }
    const embed = new MessageEmbed()
        .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
        .setTitle("<:belt:759887997726097498> Hit by a Belt! Ouch")
        .setColor("#8800FF")
        .setDescription(`
        ${users.join(", ")} got hit by ${message.author}'s Belt **OUCH!**
        `)
        .setTimestamp()
        .setFooter(`User ID: ${message.author.id}`)
    message.channel.send(embed)
};

exports.help = {
    name: "belt",
    description: "Don't make Server Mommy disappointed >:O.",
    usage: "[ Mention ]",
    aliases: [],
};