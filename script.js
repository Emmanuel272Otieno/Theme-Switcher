const body = document.body;
const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");

// Default theme
body.classList.add("light");

// Light Mode Button
lightBtn.addEventListener("click", () => {
  body.classList.remove("dark");
  body.classList.add("light");
});

// Dark Mode Button
darkBtn.addEventListener("click", () => {
  body.classList.remove("light");
  body.classList.add("dark");
});