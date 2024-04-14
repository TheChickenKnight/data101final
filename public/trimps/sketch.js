let trimpods = [], predatods = [];

const population = 200;
const predators = 1;
const fps = 10000000000000;
let frames = 0;
const kill = false;
const mutationChance = 0.01;

function setup() {
  createCanvas(100, 100);
  frameRate(fps);
  for (let i = 0; i < population; i++)trimpods.push(new Trimp({}));
  for (let i = 0; i < predators; i++)predatods.push(new Predator());
}
 
function draw() {
  background(0);
  if (trimpods.length < population)trimpods.push(trimpods[floor(random(0, trimpods.length))].replicate())
  trimpods.forEach(trimp => {
    trimp.show();
    trimp.act();
  });
  predatods.forEach(predator => predator.act());
  if (frames % 1000 == 0)console.log("Frame " + frames);
  frames++;
}