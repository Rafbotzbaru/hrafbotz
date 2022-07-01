/*
 * ngelarang lu biar g diubah kyknya emg susah ya anjg
 * jadi kalau lu g bsa ngehargain orang
 * setidaknya buat sc ori by gw, trs buat sc lu hasil copas tuh
 * better bgtu dripada nma gw dihapus smua
 * najis 👎🗿
*/

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye} Lagi Mulung Sc Ya? 

Nih Link Sc Nya Dibawah :
https://youtube.com/channel/UCY6WNM6jZlmfWULcG69rNbQ

_*Jangan Lupa Di Subscribe*_`
conn.sendBut(m.chat, esce, wm3, 'Ok', 'Ok', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
