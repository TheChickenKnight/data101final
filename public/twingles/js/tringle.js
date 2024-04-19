const MAX_SPEED = 5;
const MAX_ACCEL = 0.1;
const RANDTWEAK = 0;

class Tringle {
    constructor(genome) {
        this.pos = createVector(random(width), random(height));
        this.curVel = createVector(0, 0)
        this.dir = createVector(0, 1).rotate(random(2 * PI));
        this.accel = createVector(0, 0)
        this.perp = createVector(this.dir.y, -this.dir.x);
        this.gaze = new Gaze(this.pos.x, this.pos.y, 100, this.dir);
        this.brain = genome;
        this.brain.score = 0;
        this.seenTarget;
        this.seenTwingle;
        tringles.push(this);
    }

    act() {
        let output = this.brain.activate(this.detect());
        this.accel = p5.Vector.fromAngle(output[0] * 2 * PI);
        this.accel.setMag(output[1]*MAX_ACCEL)
        this.curVel.add(this.accel);
        if (this.curVel.mag() > MAX_SPEED)
            this.curVel.setMag(MAX_SPEED);
        this.pos.add(this.curVel);
        this.gaze.pos = this.pos;
        this.gaze.dir = this.dir;
        if (this.pos.x > WIDTH) 
            this.pos.x = WIDTH;
        else if (this.pos.x < 0)
            this.pos.x = 0;
        if (this.pos.y > HEIGHT)
            this.pos.y = HEIGHT;
        else if (this.pos.y < 0)
            this.pos.y = 0;
    }

    detect() {
        let res = [
            this.pos.x / WIDTH,
            this.pos.y / HEIGHT,
            this.curVel.heading() / (2*PI),
            this.curVel.mag() / (MAX_SPEED),
            this.accel.heading() / (2*PI),
            -1,
            -1,
        ];
        let newTargets = targets.filter(one => this.gaze.isWithin(createVector(one.pos.x - this.pos.x, one.pos.y - this.pos.y)));
        if (newTargets.length != 0) {
            this.seenTarget = newTargets[0];
            let tarDir = createVector(this.seenTarget.pos.x - this.pos.x, this.seenTarget.pos.y - this.pos.y);
            res[5] = tarDir.mag() / Math.sqrt(WIDTH*WIDTH + HEIGHT*HEIGHT);
            res[6] =  Math.acos(this.dir.dot(tarDir) / (this.dir.mag() * tarDir.mag())) / (2*PI);
        } else {
            this.seenTarget = undefined;
        }
        return res;
    }

    show(s) {
        stroke(255);
        if (this.curVel.mag() > 0)
            this.dir = this.curVel.copy();
        else if (this.dir.mag() == 0) {
            this.dir = createVector(0, 1).rotate(random(2*PI));
        }
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

        stroke(0, 255, 0);
        line(this.pos.x, this.pos.y, this.seenTarget ? this.seenTarget.pos.x : this.pos.x, this.seenTarget ? this.seenTarget.pos.y : this.pos.y);
        stroke(255, 0, 0);
        line(this.pos.x, this.pos.y, 10*this.curVel.x + this.pos.x, 10*this.curVel.y + this.pos.y);
        stroke(0, 0, 255);
        line(this.pos.x, this.pos.y, 10*this.accel.x + this.pos.x, 10*this.accel.y+this.pos.y);
    }

      graph(x, y) {
        drawGraph(this.brain.graph(x, y), '.draw', true);
      }
}