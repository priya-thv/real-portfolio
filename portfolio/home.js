

const navItems = document.querySelectorAll("#nav-bar li");


const sections = document.querySelectorAll("section");
function showSection(id) {
  sections.forEach(sec => {
    sec.style.display = (sec.id === id) ? "flex" : "none";
  });
}

navItems.forEach(item => {
  item.addEventListener("click", () => {
    const sectionId = item.id.split("-")[0]; // e.g., "about"
    showSection(sectionId);
  });
});

// start by showing only home
showSection("home");

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const buttonId = e.target.id;
    
    const sectionId = buttonId.split("sec")[0]; 
    showSection(sectionId); 
  });
});

let gif=document.querySelector('#gif');
let cookies = document.querySelectorAll(".cookie");


cookies.forEach(cookie => {
  let box = cookie.querySelector(".skill");
  box.style.display="none"
  cookie.addEventListener("click", () => {
    box.style.display = (box.style.display === "block") ? "none" : "block";
  });
});

let cook = document.querySelectorAll(".cook");
const clickText = document.querySelector('.inf click');
const meText = document.querySelector('.inf me');
const skill = document.querySelector('.skill');

cook.addEventListener('click', () => {
  clickText.style.display = 'none';
  meText.style.display = 'none';

});


  const svg = document.querySelector('.edu-line');
  const path = svg.querySelector('path');

  // Create the moving dot
  const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  svg.appendChild(dot);

  function animateDot() {
    const length = path.getTotalLength();
    let progress = 0;

    function frame() {
      progress += 2; // speed
      if (progress > length) progress = 0;

      const point = path.getPointAtLength(progress);
      dot.setAttribute('cx', point.x);
      dot.setAttribute('cy', point.y);

      requestAnimationFrame(frame);
    }
    frame();
  }

  animateDot();


const navLinks = document.querySelectorAll('.slider-nav a');
const slider = document.querySelector('.slider');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSlide = document.getElementById(targetId);
    slider.scrollTo({
      left: targetSlide.offsetLeft,
      behavior: 'smooth'
    });
  });
});

