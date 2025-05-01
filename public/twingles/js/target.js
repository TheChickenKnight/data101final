const RANGE = 5;
const SPEED = 0.5;
const VELCHANGE = 1;

class Target {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, SPEED).rotate(random(2 * PI));
        target = this;
    }

    isContact() {
        for (let tri of tringles) {
            if (Math.sqrt(Math.pow(tri.pos.x - this.pos.x, 2) + Math.pow(tri.pos.y - this.pos.y, 2)) < RANGE && tri.curVel.mag() > 0) {
                tringles[tringles.indexOf(tri)].brain.score++;
                return true;
            }
        }
        return false;
    }

    act() {
        this.pos.add(this.vel);
        let closest = tringles[0].pos
        for (let i = 1; i < tringles.length; i++) 
            if (Math.sqrt(Math.pow(tringles[i].pos.x - this.pos.x, 2) + Math.pow(tringles[i].pos.y - this.pos.y, 2)) < Math.sqrt(Math.pow(closest.x - this.pos.x, 2) + Math.pow(closest.y - this.pos.y, 2)))
                closest = tringles[i].pos;
        this.vel = createVector(closest.x - this.pos.x, closest.y - this.pos.y);
        this.vel.setMag(-1* SPEED);
        if (this.vel.mag() > SPEED)
            this.vel.setMag(SPEED);
        if (this.pos.x > WIDTH)
            this.pos.x = WIDTH
        else if (this.pos.x < 0)
            this.pos.x = 0;
        if (this.pos.y > HEIGHT)
            this.pos.y = HEIGHT;
        else if (this.pos.y < 0)
            this.pos.y = 0;
        this.show();
    }

    show() {
        stroke(255,0 ,0);
        fill(255);
        ellipse(this.pos.x, this.pos.y, 25);
    }
}