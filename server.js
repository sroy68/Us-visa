const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Phase 4 APIs (existing)
app.get('/', (req, res) => {
  res.json({ message: "🎯 Phase 5 SMS Alerts LIVE!", apis: ["/slots", "/real-slots", "/sms"] });
});

app.get('/slots', (req, res) => {
  const slots = [{ location: "Kolkata", time: "09:00", status: "Available" }];
  res.json({ success: true, slots, total: 1 });
});

app.get('/real-slots', (req, res) => {
  const realSlots = [
    { location: "Kolkata-Real", date: "2025-12-30", time: "10:00", status: "Available" },
    { location: "Delhi", date: "2025-12-31", time: "14:00", status: "Available" }
  ];
  res.json({ success: true, slots: realSlots, total: 2 });
});

// Phase 5: SMS Alert
app.post('/sms', (req, res) => {
  const { phone, message } = req.body;
  console.log(`📱 SMS to ${phone}: ${message}`);
  
  // Twilio integration (production)
  // const client = require('twilio')('ACCOUNT_SID', 'AUTH_TOKEN');
  // client.messages.create({ body: message, from: 'whatsapp:+14155238886', to: phone });
  
  res.json({ success: true, message: `SMS sent to ${phone}! 🚨` });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Phase 5 SMS LIVE on port ${port}`);
});
