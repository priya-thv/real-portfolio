const navItems = document.querySelectorAll("#nav-bar li");

for (let item of navItems) {
  item.addEventListener("click", () => {
    const section = item.getAttribute(item.id); // get the section ID
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
}




const sections = document.querySelectorAll("section");

function showSection(id) {
  sections.forEach(sec => {
    sec.style.display = (sec.id === id) ? "flex" : "none";
  });
}

navItems.forEach(item => {
  item.addEventListener("click", () => {
    showSection(item.id);
  });
});

// start by showing only home
showSection("home");
