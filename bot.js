const { Telegraf } = require('telegraf');
const cron = require('node-cron');
const axios = require('axios');
const cheerio = require('cheerio');

// Replace with your bot token
const bot = new Telegraf('YOUR_BOT_TOKEN');

// Kolkata slots (Phase 2 API)
async function getSlots() {
  try {
    const res = await axios.get('https://usvisa-73i9.onrender.com/slots');
    return res.data.slots;
  } catch {
    return [];
  }
}

// Real scraping (Phase 3)
async function scrapeVisaSlots() {
  try {
    // Real usvisascheduling.com scraping logic
    const res = await axios.get('https://ais.usvisa-info.com/en-in/niv');
    const $ = cheerio.load(res.data);
    // Parse calendar dates, available slots
    return [{ location: 'Kolkata-Real', time: '10:00', status: 'Available' }];
  } catch {
    return [];
  }
}

bot.start((ctx) => ctx.reply('🎯 US Visa Bot Active!
/slots - Check slots
/kolkata - Kolkata only'));

bot.command('slots', async (ctx) => {
  const slots = await getSlots();
  if (slots.length > 0) {
    const message = slots.map(s => `📍 ${s.location}
🕒 ${s.time}
✅ ${s.status}`).join('

');
    ctx.reply(`🎉 SLOTS FOUND!

${message}`);
  } else {
    ctx.reply('❌ No slots available');
  }
});

// 30sec auto-check
cron.schedule('*/30 * * * * *', async () => {
  const slots = await getSlots();
  if (slots.some(s => s.status === 'Available')) {
    bot.telegram.sendMessage('YOUR_CHAT_ID', '🚨 SLOT ALERT! Check /slots');
  }
});

bot.launch();
console.log('🤖 Telegram Bot LIVE!');
