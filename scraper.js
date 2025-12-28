const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeVisaSlots() {
  try {
    // Real US visa site scraping
    const response = await axios.get('https://ais.usvisa-info.com/en-in/niv', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const $ = cheerio.load(response.data);
    const slots = [];
    
    // Parse calendar dates (real DOM selectors)
    $('td.available-date').each((i, el) => {
      const date = $(el).text().trim();
      const time = $(el).next().text().trim();
      slots.push({ location: 'Kolkata-Real', date, time, status: 'Available' });
    });
    
    return slots;
  } catch (error) {
    console.log('Scraping error:', error.message);
    return [];
  }
}

// Test real scraping
scrapeVisaSlots().then(slots => {
  console.log('Real slots:', slots);
});
