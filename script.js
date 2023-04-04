let xSetter = gsap.utils.pipe(
    gsap.utils.clamp(0, 100),    //make sure the number is between 0 and 100
    gsap.utils.snap(5),          //snap to the closest increment of 5
    gsap.quickSetter("#id", "x", "px") //apply it to the #id element's x property and append a "px" unit
  );

//then later...
xSetter(150) //sets the #el's transform to translateX(100px) (clamped to 100)
xSetter(3)   //sets it to 5px (snapped)

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
