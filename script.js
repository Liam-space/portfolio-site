// Show welcome alert when the page loads
window.onload = function () {
  alert("Welcome to Liam's Portfolio!");
};

document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.getElementById('theme-toggle');

  if (toggleSwitch) {
    toggleSwitch.addEventListener('change', function () {
      document.body.classList.toggle('dark-mode');
    });
  } else {
    console.error('Theme toggle switch not found.');
  }
});
