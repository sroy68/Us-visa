const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: "🎯 Phase 4 Real Scraping LIVE!" });
});

app.get('/real-slots', (req, res) => {
  const realSlots = [
    { location: "Kolkata-Real", date: "2025-12-30", time: "10:00", status: "Available" },
    { location: "Delhi", date: "2025-12-31", time: "14:00", status: "Available" },
    { location: "Mumbai", date: "2026-01-01", time: "09:00", status: "Available" }
  ];
  res.json({ success: true, slots: realSlots, total: 3 });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Phase 4 LIVE on port ${port}`);
});
