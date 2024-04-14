class Gaze {
    constructor(x, y, r, dir) {
        this.radius = r;
        this.width = PI/4;
        this.pos = createVector(x, y);
        this.dir = dir;
        this.left = this.dir.copy();
        this.left.rotate(this.width/2);
        this.right = this.dir.copy();
        this.right.rotate(-this.width/2);
    }

    isWithin(c) {
        let a = this.dir.copy();
        a.rotate(this.width/2);
        let b = this.dir.copy();
        b.rotate(-this.width/2);
        return (a.y * b.x - a.x * b.y) * (a.y * c.x - a.x * c.y) < 0 && this.radius >= c.mag();
    }

    show() {
        this.left = this.dir.copy();
        this.left.rotate(this.width/2);
        this.left.setMag(this.radius);
        this.right = this.dir.copy();
        this.right.rotate(-this.width/2);
        this.right.setMag(this.radius);
        stroke(100);
        fill(100);
        arc(this.pos.x, this.pos.y, this.radius*2, this.radius*2, this.right.heading(), this.left.heading(), )
    }
}