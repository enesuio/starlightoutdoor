// Update header background on scroll to increase visibility
function updateHeaderOnScroll() {
  const header = document.querySelector("header");

  if (window.scrollY > window.innerHeight - header.clientHeight) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateHeaderOnScroll);
window.addEventListener("DOMContentLoaded", updateHeaderOnScroll);
