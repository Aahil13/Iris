"use strict";

//Menu button
const menuBtn = document.querySelector(".menu");
const navLinks = document.querySelector(".header-ul");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("hidden");
  navLinks.classList.add("mobile-nav");
});

//typed.js
////////Typewriter effect
var typed = new Typed(".heading-text", {
  strings: ["We are creatives", "Iris says Welcome❤"],
  typeSpeed: 200,
  backSpeed: 200,
  loop: true,
});
