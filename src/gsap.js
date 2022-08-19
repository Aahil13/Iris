const arrow = document.querySelector(".arrow");

// Animate arrow.
gsap.from(".arrow", {
  rotation: 360,
  x: "65vw",
  xPercent: -100,
  duration: 8,
  repeat: -1,
  yoyo: true,
  ease: "bounce.inOut",
});


