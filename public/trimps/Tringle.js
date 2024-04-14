class Tringle {

    constructor(obj) {
        const keys = Object.keys(obj);
        this.p_color = obj.p_color || [random(0, 255), random(0, 255), random(0, 255)];
        this.s_color = obj.s_color || [random(0, 255), random(0, 255), random(0, 255)];
        this.pos = {
            x: obj.x || floor(random(0, width+1)),
            y: obj.y || floor(random(0, height+1))
        };
        this.curVel = newVector(0, 0);
        this.dir = newVector(0, 0);
        this.accel = newVector(0, 1).rotate(random(2*Math.PI));
        this.perp = createVector(this.curVel.y, -this.curVel.x);
        if (obj && keys.includes('brain'))
            this.brain = obj.brain;
        else {
            this.brain = new Network(0);
            this.brain.fromLayers(5, 9, 8);
        }
    }
}