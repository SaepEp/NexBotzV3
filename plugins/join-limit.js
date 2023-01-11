import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
 await conn.sendButton(m.chat, ${global.db.data.users[who].joinlimit}\n`,hiasan + '\n\n' + , jlimit, [['OHLX','ohlx']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: author,
                        body: 'JOIN LIMIT',          previewType: 0,
                        sourceUrl: swb
                      }}
})
}


handler.help = ['joinlimit [@user]']
handler.tags = ['xp']
handler.command = /^(joinlimit)$/i
export default handler