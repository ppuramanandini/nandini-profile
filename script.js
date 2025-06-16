document.addEventListener("DOMContentLoaded", function () {
  const text = "Frontend Developer";
  const typedText = document.querySelector(".typed-text");
  let index = 0;
  let isDeleting = false;
    function typeLoop() {
    if (!isDeleting) {
      typedText.textContent = text.substring(0, index);
      index++;
      if (index > text.length) {
        isDeleting = true;
        setTimeout(typeLoop, 1000); 
        return;
      }
    } else {
      typedText.textContent = text.substring(0, index);
      index--;
      if (index < 0) {
        isDeleting = false;
        setTimeout(typeLoop, 500); 
        return;
      }
    }
    const speed = isDeleting ? 100 : 150; 
    setTimeout(typeLoop, speed);
  }
  typeLoop();
const bars = document.querySelectorAll(".bar .progress");
function animateProgressBarsLoop() {
bars.forEach((bar) => {
const target = bar.getAttribute("data-percent");
bar.style.transition = "none";
bar.style.width = "0%";
void bar.offsetWidth; 
setTimeout(() => {
bar.style.transition = "width 2s ease-in-out";
bar.style.width = target + "%";
}, 100);
});
}
animateProgressBarsLoop();
setInterval(animateProgressBarsLoop, 4000);
});
  const links = document.querySelectorAll(".nav-link");
  const indicator = document.querySelector(".indicator");
  function moveIndicator(activeLink) {
    const parent = activeLink.parentElement;
    indicator.style.width = `${activeLink.offsetWidth}px`;
    indicator.style.left = `${parent.offsetLeft}px`;
    indicator.style.animation = "none";
    indicator.offsetHeight;
    indicator.style.animation = "sparkleMove 0.6s ease";
  }
  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      moveIndicator(link);
    });
  });
 const defaultActive = document.querySelector(".nav-link.active");
  if (defaultActive) moveIndicator(defaultActive);