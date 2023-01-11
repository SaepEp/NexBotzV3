import fs from 'fs';
import crypto from 'crypto'
import { youtubeSearch } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

   if (!text) throw `*ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴛᴏ ʀᴇᴛʀɪᴇᴠᴇ ᴀᴜᴅɪᴏ ᴏʀ ᴠɪᴅᴇᴏ ғʀᴏᴍ ʏᴏᴜᴛᴜʙᴇ sᴇʀᴠᴇʀ.* 
  
 =========================== 
 ★ ᴜsᴀɢᴇ: 
 ${usedPrefix + command} <name/url> 
  
 ★ ᴇxᴀᴍᴩʟᴇ: 
 ${usedPrefix + command} bolenath ji` 
   let vid = (await youtubeSearch(text)).video[0] 
   if (!vid) throw 'ᴀᴜᴅɪᴏ ᴏʀ ᴠɪᴅᴇᴏ ɴᴏᴛ ғᴏᴜɴᴅ﹗' 
   let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid 
   const url = 'https://www.youtube.com/watch?v=' + videoId 

    let sewa = `
 🔖 ᴛɪᴛʟᴇ: ${title}
 
 📡 ᴩᴜʙʟɪsʜᴇᴅ: ${publishedTime} 
 ⌛ ᴅᴜʀᴀᴛɪᴏɴ: ${durationH} 
 👀️ ᴠɪᴇᴡs: ${viewH} 
 
 📃 ᴅᴇsᴄʀɪᴩᴛɪᴏɴ: ${description} 
`

    let img1 = fs.readFileSync('./img/yt.png');
    let img2 = fs.readFileSync('./img/bawah.png');
    return conn.sendButton(m.chat, `${htki} YT PLAY ${htka}`, sewa, thumbnail, [["menu", usedPrefix + "menu"], ["profile", usedPrefix + "profile"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: url,
                mediaType: "VIDEO",
                title: 'Click video di atas untuk melihat',
                body: bottime,
                previewType: 0,
                thumbnail: img1
            }
        }
    })
}
handler.help = ['play'].map(v => v + ' <name/url>') 
 handler.tags = ['YouTube'] 
 handler.command = /^(play)$/i 
  
 handler.exp = 0 
 handler.limit = false 
  
 export default handler