 const navItems = document.querySelectorAll("#nav-bar li");

    for (let item of navItems) {
      item.onclick = () => {
        const section = document.getElementById(item.id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
    }

document.querySelectorAll(".cta").forEach(el => {
  el.addEventListener("click", event => {
    const section = document.getElementById(item.id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
  });
});


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
