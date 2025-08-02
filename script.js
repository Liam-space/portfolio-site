// Show welcome alert when the page loads
window.onload = function () {
  alert("Welcome to Liam's Portfolio!");
};

const toggle = document.getElementById("theme-toggle");
const body = document.body;

// Check local storage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});
