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

let gif = document.querySelector('#gif');
let cookies = document.querySelectorAll(".cookie");
let cook = document.querySelectorAll(".cook");
const clickText = document.querySelector('.inf.click');
const meText = document.querySelector('.inf.me');
const skill = document.querySelector('.skill');

cookies.forEach(cookie => {
  let box = cookie.querySelector(".skill");
  box.style.display = "none"
  cookie.addEventListener("click", () => {
    box.style.display = (box.style.display === "block") ? "none" : "block";
     if (clickText) clickText.style.display = 'none'; // hide safely
    if (meText) meText.style.display = 'none';
  });
});





// const svg = document.querySelector('.edu-line');
// const path = svg.querySelector('path');

// 
// const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//  svg.appendChild(dot);

// function animateDot() {
//   const length = path.getTotalLength();
//   let progress = 0;

//   function frame() {
//     progress += 2; // speed
//     if (progress > length) progress = 0;

//     const point = path.getPointAtLength(progress);
//     dot.setAttribute('cx', point.x);
//     dot.setAttribute('cy', point.y);

//     requestAnimationFrame(frame);
//   }
//   frame();
// }

// animateDot();
document.addEventListener("DOMContentLoaded", () => {
  const svg = document.querySelector('.timeline-line');
  const path = svg.querySelector('path');

  const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  dot.setAttribute("r", 6); // radius of the dot
  dot.setAttribute("fill", "#ffb347"); // color of the dot
  svg.appendChild(dot);

  function animateDot() {
    const length = path.getTotalLength();
    let progress = 0;

    function frame() {
      progress += 3; // speed
      if (progress > length) progress = 0;

      const point = path.getPointAtLength(progress);
      dot.setAttribute('cx', point.x);
      dot.setAttribute('cy', point.y);

      requestAnimationFrame(frame);
    }
    frame();
  }

  animateDot();
});



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


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("pname");
  const emailInput = document.getElementById("pemail");
  const messageInput = document.getElementById("pmessage");
  const goHomeButton = document.getElementById("homesec");
  const feedbackMessage = document.getElementById("formMessage");

  // ✅ Safety check
  if (!form) {
    console.error("❌ contactForm not found in DOM!");
    return;
  }

  // Form submit handler
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Stop default page reload

    const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };

    console.log("Sending data:", formData); // Debugging

    try {
      const res = await fetch("/api/messages/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Server response:", data);

      if (res.ok) {
        form.reset();
        window.location.reload();
       
      } else {
        console.error("Submission failed:", data.message || "Unknown error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  });

  // Go Home Button
  goHomeButton.addEventListener("click", () => {
    window.location.href = "/home.html";
  });
});
