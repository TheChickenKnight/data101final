let trimpods = [];

const population = 200;
const fps = 100000000;
let frames = 0;
const mutationChance = 1;

function setup() {
  createCanvas(100, 100);
  frameRate(fps);
  for (let i = 0; i < population; i++)trimpods.push(new Trimp({}));
}
 
function draw() {
  background(0);
  trimpods.forEach(trimp => {
    trimp.show();
    trimp.act();
  });
  frames++;
  if (frames % 500 == 0) {
    console.log("Gen " + frames/500)
    endEpoch();
  }
}

function endEpoch() {
  let newGen = [];
  trimpods.map(trimp => {trimp.fitness = fitTest(trimp); return trimp}).sort((a, b) => b.fitness - a.fitness).slice(0, population / 20).forEach(trimp => {
    for (let i = 0; i < 20; i++) 
      newGen.push(trimp.replicate());
  });
  trimpods = newGen;
}

function fitTest(trimp) {
  return -1*Math.sqrt(Math.pow(trimp.pos.x - mouseX, 2) + Math.pow(trimp.pos.y - mouseY, 2));
}