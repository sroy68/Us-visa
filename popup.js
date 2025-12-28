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
    
    // Phase 5: Chrome Notification
    if (data.slots.some(s => s.status === 'Available')) {
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon.png',
        title: '🎉 VISA SLOT FOUND!',
        message: `${data.slots[0].location} - ${data.slots[0].time} Available!`
      });
      
      // SMS trigger
      fetch('https://usvisa-73i9.onrender.com/sms', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          phone: '+919876543210',  // Customer phone
          message: `🚨 VISA SLOT: ${data.slots[0].location} ${data.slots[0].time}`
        })
      });
    }
  } catch(e) {
    document.getElementById('slots').innerHTML = 'Loading...';
  }
}

loadSlots();
setInterval(loadSlots, 5000);
