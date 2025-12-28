// popup.js - 5 SECOND AUTO REFRESH
document.addEventListener('DOMContentLoaded', function() {
  const slotsDiv = document.getElementById('slots');
  
  async function updateSlots() {
    try {
      slotsDiv.innerHTML = '🔄 Checking slots...';
      
      const response = await fetch('https://usvisa-73i9.onrender.com/slots');
      const data = await response.json();
      
      if (data.success && data.slots.length > 0) {
        slotsDiv.innerHTML = data.slots.map(slot => 
          `<div class="slot ${slot.status === 'Available' ? 'available' : 'booked'}">
            🚨 ${slot.location} - ${slot.time} - <strong>${slot.status}</strong>
          </div>`
        ).join('');
        
        // Chrome notification for available slots
        if (data.slots.some(slot => slot.status === 'Available')) {
          chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icon.png',
            title: '🎉 VISA SLOT FOUND!',
            message: `${data.slots[0].location} ${data.slots[0].time} Available!`
          });
        }
      } else {
        slotsDiv.innerHTML = 'No slots available';
      }
    } catch (error) {
      slotsDiv.innerHTML = 'Error checking slots';
    }
  }
  
  // 5 SECOND AUTO REFRESH ⚡
  setInterval(updateSlots, 5000);
  
  // Initial load
  updateSlots();
});
