const { Telegraf } = require('telegraf');
const bot = new Telegraf('YOUR_BOT_TOKEN');

bot.command('slots', function(ctx) {
  var slots = [
    { location: "Kolkata", time: "09:00", status: "Available" },
    { location: "Kolkata", time: "11:00", status: "Available" },
    { location: "Kolkata", time: "14:00", status: "Available" }
  ];
  
  var message = "SLOTS FOUND:

";
  for(var i = 0; i < slots.length; i++) {
    message = message + "Location: " + slots[i].location + "
";
    message = message + "Time: " + slots[i].time + "
";
    message = message + "Status: " + slots[i].status + "

";
  }
  
  ctx.reply(message);
});

bot.start(function(ctx) {
  ctx.reply('US Visa Bot Active! Use /slots');
});

bot.launch();
console.log('Bot running...');
