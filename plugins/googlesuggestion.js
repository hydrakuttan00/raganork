/*coded by Souravkl11

*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*COMMAND KAZHINJ ENTHEKILUM EZHUTH"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'gsearch ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/logoaveng?apikey=Upe1Fp1lDAtX0ioPYLEPsSoX51i&text1=Pikachu&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by* 𝐑𝐀𝐆𝐀𝐍𝐎𝐑𝐊' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'gsearch ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://zenzapi.xyz/api/photooxy/googlesuges?text=${topText}&text2=${bottomText}&text3=How%20to%20make%20raganork%20bot&apikey=2379e14bbf)}`, { responseType: 'arraybuffer' })


        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by 𝐑𝐀𝐆𝐀𝐍𝐎𝐑𝐊' })

    }));
    
}
