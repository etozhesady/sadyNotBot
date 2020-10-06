const Discord = require('discord.js');
const { prefix, token } = require('./botconfig.json');
const bot = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
let citata = require('./quotess.json');
let schedule = require('./schedulee.json');
                 
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', function(message) {
    let i=39;
    if (message.content === `${prefix}quote`) { 

        var interval = setInterval (function () {
            message.channel.send(citata.quote[i]);
            if(i<48){
                i=i+1;
            }
            else if(i>=48){
                i=0;
            }
        },  60 * 1000);

    }
});

let date = new Date();
let dayOfWeek = date.getDay();
let maxLess = 48;
arrSb = [];

bot.on('message', function(message) {
    function showPn() {
        if(dayOfWeek==1){
            for (let index = 0; index < maxLess; index++) {
              if (schedule[index].Day_name == "Пн"){
                arrSb.push(schedule[index].id_faculty);
              }
            }
        }
    }

    function showVt() {
        if(dayOfWeek==2){
            for (let index = 0; index < maxLess; index++) {
              if (schedule[index].Day_name == "Вт"){
                arrSb.push(schedule[index].id_faculty);
              }
            }
        }
    }

    function showSr() {
        if(dayOfWeek==3){
            for (let index = 0; index < maxLess; index++) {
              if (schedule[index].Day_name == "Ср"){
                arrSb.push(schedule[index].id_faculty);
              }
            }
        }
    }

    function showCht() {
        if(dayOfWeek==4){
            for (let index = 0; index < maxLess; index++) {
              if (schedule[index].Day_name == "Чт"){
                arrSb.push(schedule[index].id_faculty);
              }
            }
        }
    }

    function showPt() {
        if(dayOfWeek==5){
            for (let index = 0; index < maxLess; index++) {
              if (schedule[index].Day_name == "Пт"){
                arrSb.push(schedule[index].id_faculty);
              }
            }
        }
    }

    function showSb() {
      if(dayOfWeek==6){
          for (let index = 0; index < maxLess; index++) {
            if (schedule[index].Day_name == "Сб"){
              arrSb.push(schedule[index].id_faculty);
            }
          }
      }
  }



    if (message.content === `${prefix}schedule`) {
      switch (dayOfWeek) {
        case 1:
         showPn();
         break;
        case 2:
          showVt();
          break;
        case 3:
          showSr();
          break;
        case 4:
          showCht();
          break;
        case 5:
          showPt();
          break;
        case 6:
          showSb();
          break;
        }
         const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setThumbnail('https://kstu.kg/typo3conf/ext/vlad/Resources/Public/Images/logo/logo.png')
        .addFields(
            { name: 'Расписание', value: `
            8:00-9:20
            ${arrSb[0]}
            9:30-10:50
            ${arrSb[1]}
            11:00-12:20
            ${arrSb[2]}
            13:00-14:20
            ${arrSb[3]}
            14:30-15:50
            ${arrSb[4]}
            16:00-17:20
            ${arrSb[5]}
            17:30-18:50
            ${arrSb[6]}
            19:00-20:20
            ${arrSb[7]}
            `}
        )
        .setTimestamp()
        .setFooter('Какай просто!');
        message.channel.send(exampleEmbed);

    }

});



bot.on('message', message => {
if (message.content === `${prefix}server`) {
        message.channel.send(`This server's name is: ${message.guild.name}
Total members: ${message.guild.memberCount}
The time this fucking server was created at: ${message.guild.createdAt}
Owner: ${message.guild.owner}
Region: ${message.guild.region}`);
    }
});

bot.login(token);