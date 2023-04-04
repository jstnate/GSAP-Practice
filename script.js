// récupère le canvas
const canvas = document.getElementById("canvas");
const button = document.getElementById("bubble-add");

let bubbleNum = 5;

button.addEventListener("click", () => {
  if (bubbleNum < 10) {
    bubbleNum++;
  }
})

// définit la taille du canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// récupère le contexte 2D du canvas
const context = canvas.getContext("2d");

// tableau pour stocker les positions précédentes de la souris
const positions = [];

// écoute l'événement "mousemove" sur le canvas
canvas.addEventListener("mousemove", (event) => {
  // efface le canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // ajoute la position actuelle de la souris au tableau des positions
  positions.unshift({ x: event.clientX, y: event.clientY });

  // dessine les bulles à partir des positions stockées
  const sizes = [30, 25, 20, 15, 10];
  const colors = ["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, .9)", "rgba(0, 0, 0, .8)", "rgba(0, 0, 0, .7)", "rgba(0, 0, 0, .6)", "rgba(0, 0, 0, .5)", "rgba(0, 0, 0, .4)", "rgba(0, 0, 0, .3)", "rgba(0, 0, 0, .2)", "rgba(0, 0, 0, .1)"];

  for (let i = 0; i < bubbleNum; i++) {
    const position = positions[i];
    if (position) {
      context.beginPath();
      context.arc(position.x, position.y, sizes[i], 0, 2 * Math.PI);
      context.fillStyle = colors[i];
      context.fill();
    }
  }

  // supprime les positions de souris supplémentaires si nécessaire
  if (positions.length > 5) {
    positions.pop();
  }
});
