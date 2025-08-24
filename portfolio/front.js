const sticks = [
  document.getElementById("stick1"),
  document.getElementById("stick2"),
  document.getElementById("stick3"),
  document.getElementById("stick4"),
  document.getElementById("stick5")
];

let current = 0;

let stickInterval = setInterval(() => {
  if (current < sticks.length) {
    sticks[current].classList.add("show");
    current++;
  } else {
    clearInterval(stickInterval);
    window.location.href = "index.html";
  }
}, 800); // show one every 800ms
