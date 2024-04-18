const MAX_SPEED = 1;
const RANDTWEAK = 0;

class Tringle {
    constructor(genome) {
        this.pos = createVector(random(width), random(height));
        this.curVel = createVector(0, 0).rotate(random(2*PI));
        this.dir = createVector(0, 1).rotate(random(2 * PI));
        this.accel = createVector(0, 0).rotate(random(2 * PI));
        this.perp = createVector(this.curVel.y, -this.curVel.x);
        this.handling = 0.01;
        this.color = genome.color ? genome.color : [random(255), random(255), random(255)];
        this.maxAccel = 2;
        this.gaze = new Gaze(this.pos.x, this.pos.y, 100, this.dir);
        this.brain = genome;
        this.brain.score = 0;
        this.brain.color = this.color;
        this.seenTarget;
        this.seenTwingle;
        tringles.push(this);
    }

    act() {
        this.dir = this.curVel.copy();
        this.dir.normalize();
        let output = this.brain.activate(this.detect());
        let moveangle = output[0] * 2 * PI;
        this.accel = p5.Vector.fromAngle(moveangle);
        this.accel.setMag(output[1]*5)
        this.curVel.add(this.accel);
        if (this.curVel.mag() > MAX_SPEED)
            this.curVel.setMag(MAX_SPEED);
        this.pos.add(this.curVel);
        this.gaze.pos = this.pos;
        this.gaze.dir = this.dir;

        this.brain.score /= 2;
        if (this.pos.x > WIDTH) 
            this.pos.x = WIDTH;
        else if (this.pos.x < 0)
            this.pos.x = 0;
        if (this.pos.y > HEIGHT)
            this.pos.y = HEIGHT;
        else if (this.pos.y < 0)
            this.pos.y = 0;
        else 
            this.brain.score *= 2;
    }

    detect() {
        let newTargets = targets.filter(one => this.gaze.isWithin(createVector(one.pos.x - this.pos.x, one.pos.y - this.pos.y)));
        if (newTargets.length != 0)
            this.seenTarget = newTargets[0];
        else
            this.seenTarget = undefined;
        return [
            this.pos.x / WIDTH,
            this.pos.y / HEIGHT,
            this.curVel.heading() / (2*PI),
            this.curVel.mag() / (MAX_SPEED),
            this.accel.heading() / (2*PI),
            this.seenTarget ? Math.sqrt(Math.pow(this.seenTarget.pos.x - this.pos.x, 2) + Math.pow(this.seenTarget.pos.y - this.pos.y, 2)) / (Math.sqrt(Math.pow(WIDTH, 2) + Math.pow(HEIGHT, 2))) : 0,
            this.seenTarget ? p5.Vector.angleBetween(this.curVel, createVector(this.seenTarget.x - this.pos.x, this.seenTarget.y - this.pos.y)) / (2*PI): 0,
        ]
    }

    velTune() {
        let angle = p5.Vector.angleBetween(this.curVel, this.accel);
        let magDiff = this.curVel.mag() - this.accel.mag();
        let mag = this.curVel.mag();
        if (angle > this.handling)
            this.curVel.rotate(-this.handling);
        else if (angle < this.handling)
            this.curVel.rotate(this.handling);
        else
            this.curVel = this.accel.copy();
        if (magDiff > this.maxAccel) 
            this.curVel.setMag(mag - this.maxAccel);
        else if (magDiff < -this.maxAccel)
            this.curVel.setMag(mag + this.maxAccel);
        else 
            this.curVel.setMag(this.accel.mag());
        if (this.curVel.mag() > MAX_SPEED)
            this.curVel.setMag(MAX_SPEED);
        this.dir = this.curVel.copy();
        this.dir.normalize();
    }

    show(s) {
        this.perp = createVector(this.dir.y, -this.dir.x);
        stroke(255);
        fill(this.color);
        this.dir = this.curVel.copy();
        this.dir.normalize();
        triangle(
          this.pos.x + s*2*this.dir.x, 
          this.pos.y + s*2*this.dir.y,
          this.pos.x - s*(this.dir.x + this.perp.x), 
          this.pos.y - s*(this.dir.y + this.perp.y), 
          this.pos.x - s*(this.dir.x - this.perp.x), 
          this.pos.y - s*(this.dir.y - this.perp.y)
        );
        //stroke(255, 0, 0);
        //line(this.pos.x, this.pos.y, s*this.curVel.x + this.pos.x, s*this.curVel.y + this.pos.y);
        //stroke(0, 0, 255);
        //line(this.pos.x, this.pos.y, s*this.accel.x + this.pos.x, s*this.accel.y + this.pos.y);
            //this.gaze.show()
        stroke(255, 0, 0);
        line(this.pos.x, this.pos.y, this.seenTarget ? this.seenTarget.pos.x : this.pos.x, this.seenTarget ? this.seenTarget.pos.y : this.pos.y);
      }

      graph(x, y) {
        drawGraph(this.brain.graph(x, y), '.draw', false);
      }
}