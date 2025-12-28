const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: "🎉 US Visa Tracker - Phase 3 LIVE!", status: "OK" });
});

app.get('/slots', (req, res) => {
  const slots = [
    { location: "Kolkata", time: "09:00", status: "Available" },
    { location: "Kolkata", time: "11:00", status: "Available" },
    { location: "Kolkata", time: "14:00", status: "Available" }
  ];
  res.json({ success: true, slots, total: 3 });
});

const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
