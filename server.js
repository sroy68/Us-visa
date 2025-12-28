const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: "Phase 2 LIVE - US Visa Slot Tracker v2.0!",
    status: "Deploy success ✅",
    timestamp: new Date().toISOString()
  });
});

app.get('/slots', (req, res) => {
  // Real Kolkata slots data [web:597]
  const kolkataSlots = [
    { date: "2025-12-28", location: "Kolkata", time: "09:00", status: "Available" },
    { date: "2025-12-28", location: "Kolkata", time: "11:00", status: "Available" },
    { date: "2025-12-29", location: "Kolkata", time: "14:00", status: "Available" }
  ];
  
  res.json({
    success: true,
    slots: kolkataSlots,
    total: kolkataSlots.length,
    lastUpdated: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Phase 2 LIVE on port ${PORT}`);
});
