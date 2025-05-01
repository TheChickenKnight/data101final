const MAX_SPEED = 5;
const MAX_ACCEL = 0.1;
const RANDTWEAK = 0;

class Tringle {
    constructor(genome) {
        this.pos = createVector(WIDTH/2, HEIGHT/2);
        this.vel = createVector(0, MAX_SPEED).rotate(random(2 * PI));
        this.dir = this.vel.copy();
        this.perp = createVector(this.dir.y, -this.dir.x);
        this.brain = genome;
        this.brain.score = 0;
        tringles.push(this);
    }

    act() {
        let output = this.brain.activate(this.detect());
        this.vel = createVector(output[0], output[1]);
        this.vel.setMag(MAX_SPEED);
        this.pos.add(this.vel);
        if (this.pos.x > WIDTH) 
            this.pos.x = WIDTH;
        else if (this.pos.x < 0)
            this.pos.x = 0;
        if (this.pos.y > HEIGHT)
            this.pos.y = HEIGHT;
        else if (this.pos.y < 0)
            this.pos.y = 0;
        this.lastDist = this.dist;
        this.dist = Math.sqrt(Math.pow(target.pos.x - this.pos.x, 2) + Math.pow(target.pos.y - this.pos.y, 2));
        if (!this.lastDist)
            this.lastDist = this.dist;
        this.brain.score = this.dist;
    }

    detect() {
        let res = [
            this.pos.x / WIDTH,
            this.pos.y / HEIGHT,
            target.pos.x / WIDTH,
            target.pos.y / HEIGHT,
        ];
        return res;
    }

    show(s) {
        stroke(255);
        if (this.vel.mag() > 0)
            this.dir = this.vel.copy();
        else if (this.dir.mag() == 0) 
            this.dir = createVector(0, 1).rotate(random(2*PI));
        this.dir.normalize();
        this.perp = createVector(this.dir.y, -this.dir.x);
        triangle(
          this.pos.x + s*2*this.dir.x, 
          this.pos.y + s*2*this.dir.y,
          this.pos.x - s*(this.dir.x + this.perp.x), 
          this.pos.y - s*(this.dir.y + this.perp.y), 
          this.pos.x - s*(this.dir.x - this.perp.x), 
          this.pos.y - s*(this.dir.y - this.perp.y)
        );
    }

      graph(x, y) {
        drawGraph(this.brain.graph(x, y), '.draw', true);
      }
}