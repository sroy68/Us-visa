document.addEventListener('DOMContentLoaded', function() {
  const slotsDiv = document.getElementById('slots');
  const statusDiv = document.getElementById('status');
  
  async function updateSlots() {
    statusDiv.textContent = '🔄 Checking...';
    try {
      const response = await fetch('https://usvisa-73i9.onrender.com/slots');
      const data = await response.json();
      
      if (data.success && data.slots.length > 0) {
        slotsDiv.innerHTML = data.slots.map(slot => 
          `<div class="slot ${slot.status === 'Available' ? 'available' : 'booked'}">
            📍 ${slot.location}<br>
            🕒 ${slot.time}<br>
            <strong>${slot.status}</strong>
          </div>`
        ).join('');
        
        if (data.slots.some(slot => slot.status === 'Available')) {
          chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icon.png',
            title: '🎉 SLOT AVAILABLE!',
            message: `${data.slots[0].location} - ${data.slots[0].time}`
          });
        }
        statusDiv.textContent = `Updated: ${new Date().toLocaleTimeString()}`;
      }
    } catch (error) {
      slotsDiv.innerHTML = '❌ API Error';
      statusDiv.textContent = 'Connection failed';
    }
  }
  
  setInterval(updateSlots, 5000);
  updateSlots();
});
