// Update header background on scroll to increase visibility
function updateHeaderOnScroll() {
  const header = document.querySelector("header");
// Update header background on scroll to increase visibility
function updateHeaderOnScroll() {
  const header = document.querySelector("header");

  if (window.scrollY > window.innerHeight - header.clientHeight) {
    header.classList.add("scrolled");
  if (window.scrollY > window.innerHeight - header.clientHeight) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateHeaderOnScroll);
window.addEventListener("DOMContentLoaded", updateHeaderOnScroll);

// FAQ Section

function updateFaqq(event) {
  const answer = event.currentTarget.querySelector("p");
  answer.classList.toggle("visible");
  event.currentTarget.querySelector("i").classList.toggle("rotated")
}

const faqq = document.querySelectorAll(".faqq");
faqq.forEach((faqq) => faqq.addEventListener("click", updateFaqq));
