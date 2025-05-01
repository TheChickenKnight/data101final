var FPS = Number.MAX_SAFE_INTEGER;
var tringles = [];
var highestScore = 0;
var target;
var neat;
var iteration = 0
var chart;
var showGaze = false;
var tringSize = 10;
var food = 300;

function setup() {
    HEIGHT = windowHeight;
    WIDTH = windowHeight;
    createCanvas(HEIGHT, WIDTH);
    frameRate(FPS);
    initNeat();
    chart = new Chart(document.getElementById('myChart'), {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: 'Average',
            data: [],
            fill: false,
            borderColor: 'rgb(255, 255, 0)',
            tension: 0.1
          },
          {
            label: 'Best',
            data: [],
            fill: false,
            borderColor: 'rgb(0, 255, 0)',
            tension: 0.1
          },
          {
            label: 'Worst',
            data: [],
            fill: false,
            borderColor: 'rgb(255, 0, 0)',
            tension: 0.1
          }
        ]
      }
    });
    new Target(random(width), random(height));
    
    startEval();
}

function draw() {
    iteration++;
    background(0);
    if(iteration == ITERATIONS){
      endEval();
      iteration = 0;
      new Target(random(WIDTH), random(HEIGHT));
    }
    tringles.forEach(tri => {
      tri.act();
      tri.show(tringSize);
    });
    target.act();
}