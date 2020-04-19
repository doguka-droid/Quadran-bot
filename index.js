const Discord = require ('discord.js');
const bot = new Discord.Client();

const token = 'NzAxMzMwMjA4OTU5MjM0MDY4.Xpxhgg.AtrdYfUC1OqXAnn5FSHAvCcfac0';

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('pong!')
            break;
        case 'channel':
            message.channel.send('https://www.youtube.com/channel/UC7WU793UNO9Hx9ia90Y-8SA')
            break;    
    }
})

bot.login(token);