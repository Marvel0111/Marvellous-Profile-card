const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  timeElement.textContent = Date.now();
}

updateTime();
// Optional: Update every second
setInterval(updateTime, 1000);