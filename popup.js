async function loadSlots() {
  try {
    const res = await fetch('https://usvisa-73i9.onrender.com/real-slots');
    const data = await res.json();
    const slotsDiv = document.getElementById('slots');
    slotsDiv.innerHTML = data.slots.map(slot => 
      `<div class="slot available">
        📍 ${slot.location}<br>
        🕒 ${slot.time} (${slot.date})<br>
        ✅ ${slot.status}
      </div>`
    ).join('');
  } catch(e) {
    document.getElementById('slots').innerHTML = 'API loading...';
  }
}

loadSlots();
setInterval(loadSlots, 5000);
