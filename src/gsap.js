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
      duration: 2,
      scrollTo: { y: "#section" + (index + 1), offsetY: 0 },
      ease: "power4.out"
    });
  });
});

//mousefollow
gsap.set(".ball", { xPercent: -50, yPercent: -50 });

const ball = document.querySelector(".ball");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.1;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

gsap.ticker.add(() => {
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});

//flip animation
gsap.registerPlugin(Flip);

const squares1 = gsap.utils.toArray(".square1");
const squares2 = gsap.utils.toArray(".square2");
const squares3 = gsap.utils.toArray(".square3");

function doFlip() {
  // Get the initial state
  const state1 = Flip.getState(squares1);
  const state2 = Flip.getState(squares2);
  const state3 = Flip.getState(squares3);

  // Make DOM or styling changes (swap the squares in our case)
  swap(squares1);
  swap(squares2);
  swap(squares3);

  // Animate from the initial state to the end state
  Flip.from(state1, { duration: 2, ease: "power1.inOut" });
  Flip.from(state2, { duration: 2, ease: "power1.inOut" });
  Flip.from(state3, { duration: 2, ease: "power1.inOut" });
}

// Given an Array of two siblings, append the one that's first so it's last (swap)
function swap([a, b]) {
  a.parentNode.children[0] === a
    ? a.parentNode.appendChild(a)
    : a.parentNode.appendChild(b);
}

// click anywhere to flip
document.querySelector('#section1').addEventListener("click", doFlip);




