const loadBtn = document.getElementById('loadBtn');
const statusEl = document.getElementById('status');
const slotsEl = document.getElementById('slots');

// এখন ডেমো হিসেবে public JSON API ব্যবহার করছি
// পরে এখানে তোমার real ustavelDocs scraper/API এর URL বসাবে
const DEMO_API = 'https://usvisa-73i9.onrender.com/slots';

async function loadSlots() {
  statusEl.textContent = 'Loading demo data...';
  slotsEl.innerHTML = '';

  try {
    const res = await fetch(DEMO_API);
    if (!res.ok) {
      throw new Error('HTTP ' + res.status);
    }

    const data = await res.json();

    statusEl.textContent = 'Showing demo slots (fake data).';

    data.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'slot';
      // এখানে title-কে ভিসা slot text ধরে দেখাচ্ছি
      div.textContent = `Slot ${index + 1}: ` + item.title;
      slotsEl.appendChild(div);
    });
  } catch (err) {
    console.error(err);
    statusEl.innerHTML = `<span class="error">Failed to load data.</span>`;
  }
}

loadBtn.addEventListener('click', loadSlots);
