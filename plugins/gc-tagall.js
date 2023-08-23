let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝒔𝒉𝒂𝒅𝒆𝒆𝒏_𝒎𝒓: ${pesan}`
let teks = `𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂𝒏 𝒎𝒓𝒅- 𝑪𝒐𝒒𝒖𝒊𝒕𝒐 𝑩𝒐𝒕 \n\n❏ ${oi}\n❏ 🫶🏻 ➢ 𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒂 𝒈𝒆𝒏𝒆𝒓𝒂𝒍: \n`
for (let mem of participants) {
teks += `🦋🩷  @${mem.id.split('@')[0]}\n`}
teks += `🐾𝐂𝐨𝐪𝐮𝐢𝐭𝐨 𝐁𝐨𝐭`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
