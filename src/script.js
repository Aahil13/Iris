"use strict";

const menuBtn = document.querySelector(".menu");
const navLinks = document.querySelector(".header-ul");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
  navLinks.classList.add("mobile-nav");
});
