const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233257419190";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_01_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMixcbiAgICAgICAgMTQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzksXG4gICAgICAgIDU2LFxuICAgICAgICAyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDgzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTksXG4gICAgICAgIDYyLFxuICAgICAgICA4NSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjksXG4gICAgICAgIDYzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQyLFxuICAgICAgICA4MixcbiAgICAgICAgNTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNixcbiAgICAgICAgNixcbiAgICAgICAgMjMwLFxuICAgICAgICA5MyxcbiAgICAgICAgNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NixcbiAgICAgICAgNjgsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0LFxuICAgICAgICA5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgODQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxIYWVDOUx2QlFjOGFLY2xOYStYRFJQR01QREk5S2tkaXJYRlp4YnNaSWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhfSWZOTHk1UmpLNXE0MFVyRWJoNFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTlhOWE1YzctM2ZmZS00ZmQ4LWI5YmYtZjNlOTZlNTI4MGM4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MSxcbiAgICAgIDE3NCxcbiAgICAgIDEyOCxcbiAgICAgIDYyLFxuICAgICAgMTA5LFxuICAgICAgMjM4LFxuICAgICAgMjMxLFxuICAgICAgMSxcbiAgICAgIDE4MyxcbiAgICAgIDk4LFxuICAgICAgMjM5LFxuICAgICAgOTMsXG4gICAgICAxMzYsXG4gICAgICAxMTQsXG4gICAgICA3MCxcbiAgICAgIDksXG4gICAgICAyMzYsXG4gICAgICAxNjAsXG4gICAgICAxMDAsXG4gICAgICAxODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzUsXG4gICAgICAxMyxcbiAgICAgIDE5NCxcbiAgICAgIDY2LFxuICAgICAgMjI2LFxuICAgICAgMzAsXG4gICAgICAyNTEsXG4gICAgICAyMTQsXG4gICAgICAxLFxuICAgICAgMTYwLFxuICAgICAgMTI5LFxuICAgICAgNjgsXG4gICAgICAyMDIsXG4gICAgICAyNDMsXG4gICAgICAxNTQsXG4gICAgICAwLFxuICAgICAgNzAsXG4gICAgICA0NCxcbiAgICAgIDE5NCxcbiAgICAgIDk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdBQjcxU0tOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyNTc0MTkxOTA6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJ1ZG9scGggVGFubm9yXCIsXG4gICAgXCJsaWRcIjogXCIyNzM3OTE3MzMyMzE3NzE6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPSE9pbElRMEpEZnN3WVlBeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRUclEyVndFb0JhbFJaRGFTbkwzU3pNcmJxTll6UTdhZ2FDVk5IZnlqUjg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRDdBYkdwMXE0N25DU0U4NnJnTTRleVJsUHZZQnVUVHZ6U2JhbnVzTGVpOHhBY1BSdUY2L29BRGdsQ1dnUkR3SU9teTFhek12aWNCbENXRGVXa1FCRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ2tCSEpqQTdWemR1ZXNXaHJ4WXd2MjRncnBqM2daMWpoQllrZ1ViYXZkazF2ZXp1SzkwdUs5ODFQTmVodi9KM29FRVpxQlQ4TnJYWEJ2alZuM1A4Qnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjU3NDE5MTkwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MTI2MTAwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
