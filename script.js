let xSetter = gsap.utils.pipe(
    gsap.utils.clamp(0, 100), 
    gsap.utils.snap(5), 
    gsap.quickSetter("#id", "x", "px")
  );


xSetter(150)
xSetter(3) 

gsap.set(".ship", {xPercent: -50, yPercent: -50});

const ship = document.querySelector(".ship");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.2;

const xSet = gsap.quickSetter(ship, "x", "px");
const ySet = gsap.quickSetter(ship, "y", "px");

window.addEventListener("mousemove", e => {    
  mouse.x = e.x;
  mouse.y = e.y;  
});

gsap.ticker.add(() => {
  
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});

function calculerAngle(x, y) {
  const centreX = window.innerWidth / 2;
  const centreY = window.innerHeight / 2;
  const deltaX = x - centreX;
  const deltaY = y - centreY;
  const angleRad = Math.atan2(deltaY, deltaX);
  const angleDeg = angleRad * 180 / Math.PI;
  return angleDeg;
}
function tournerImage(event) {
  const angle = calculerAngle(event.clientX, event.clientY);
  TweenMax.to(ship, 1, {rotation:angle, ease:Linear.easeNone, transformOrigin:"50% 50%"})
}
window.addEventListener('mousemove', tournerImage);
