const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// simple demo data (পরে এখানে real slot ডাটা বসাবে)
const demoSlots = [
  { id: 1, date: '2025-01-10', location: 'Kolkata', type: 'F1' },
  { id: 2, date: '2025-01-15', location: 'Mumbai',  type: 'B1/B2' },
  { id: 3, date: '2025-01-20', location: 'Delhi',   type: 'H1B' }
];

app.get('/slots', (req, res) => {
  res.json(demoSlots);
});

app.get('/', (req, res) => {
  res.send('US Visa slot demo API is running');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
