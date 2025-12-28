const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
// app.use(express.json());  ← এটা DELETE করো

app.get('/', (req, res) => {
  res.json({ message: "US Visa Slot Tracker API is running!" });
});

app.get('/slots', (req, res) => {
  const demoSlots = [
    {"date":"2025-12-28","location":"Kolkata","time":"09:00","status":"Available"},
    {"date":"2025-12-28","location":"Kolkata","time":"11:00","status":"Available"},
    {"date":"2025-12-28","location":"Delhi","time":"10:00","status":"Booked"},
    {"date":"2025-12-29","location":"Mumbai","time":"14:00","status":"Available"}
  ];
  res.json(demoSlots);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
