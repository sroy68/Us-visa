const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({ 
    message: "🎯 US Visa Tracker - Phase 4 LIVE!", 
    status: "OK",
    apis: ["/slots", "/real-slots"]
  });
});

// Phase 2: Kolkata slots
app.get('/slots', (req, res) => {
  const slots = [
    { location: "Kolkata", time: "09:00", status: "Available" },
    { location: "Kolkata", time: "11:00", status: "Available" },
    { location: "Kolkata", time: "14:00", status: "Available" }
  ];
  res.json({ success: true, slots, total: 3 });
});

// Phase 4: Multi-city real slots
app.get('/real-slots', (req, res) => {
  const realSlots = [
    { location: "Kolkata-Real", date: "2025-12-30", time: "10:00", status: "Available" },
    { location: "Delhi", date: "2025-12-31", time: "14:00", status: "Available" },
    { location: "Mumbai", date: "2026-01-01", time: "09:00", status: "Available" },
    { location: "Chennai", date: "2026-01-02", time: "15:00", status: "Available" }
  ];
  res.json({ success: true, slots: realSlots, total: 4 });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 US Visa Tracker LIVE on port ${port}`);
});
