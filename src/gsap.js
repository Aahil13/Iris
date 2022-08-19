let t1 = gsap.timeline();

//animate navlink
t1.from(".links__list", {
  opacity: 0,
  stagger: 1,
  duration: 1,
  delay: 1.3,
});

//animate headerbox
t1.from(".header-box", {
  duration: 1,
  opacity: 0,
  scale: 1.3,
  ease: "power1.in",
});

// Animate arrow.
gsap.from(".arrow", {
  rotation: 360,
  x: "65vw",
  xPercent: 100,
  duration: 10,
  repeat: -1,
  delay: 18,
  yoyo: true,
  ease: "bounce.inOut",
});

//page navigation animation
document.querySelectorAll("ul li").forEach((li, index) => {
  li.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: "#section" + (index + 1), offsetY: 0 },
    });
  });
});
