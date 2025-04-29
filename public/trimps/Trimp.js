class Trimp {
  
    constructor(obj) {
      const keys = Object.keys(obj);
      this.p_color = obj.p_color || [random(0, 255), random(0, 255), random(0, 255)];
      this.s_color = obj.s_color || [random(0, 255), random(0, 255), random(0, 255)];
      this.pos = {
        x: obj.x || 50,
        y: obj.y || 50
      };
      this.begin = this.pos;
      this.state = 0;
      if (obj && keys.includes('brain'))this.brain = obj.brain;
      else {
        this.brain = new Network(0);
        this.brain.fromLayers(4, 5, 6);
      }
    }
    
    act() {
      let output = this.brain.ffor([this.pos.x / width, this.pos.y / height, mouseX / width, mouseY / height]);
      if (!output[5]) {
        if (output[4])
          output[floor(random(0, 4))] = 1;
        this.state = 0;
        if (output[0] && this.pos.x !== width) {
          this.state = 1;
          this.pos.x++;
        } else if (output[1] && this.pos.x !== 0) {
          this.state = 1;
          this.pos.x--;
        } 
        if (output[2] && this.pos.y !== height) {
          this.state = 2;
          this.pos.y++;
        } else if (output[3] && this.pos.y !== 0) {
          this.state = 2;
          this.pos.y--;
        }
      }
      if (this.pos.x < 5)this.pos.x = 0;
      if (this.pos.x > width-5)this.pos.x = width;
      if (this.pos.y < 5)this.pos.y = 0;
      if (this.pos.y > height-5)this.pos.y = height;
    }
    
    show() {
      let image;
      if (this.state == 1)image = this.show_hor();
      else if (this.state == 2)image = this.show_vert();
      else image = this.show_idle();
      image.forEach(pixels => {
        stroke(this.targeted ? [255, 255, 255] : pixels.color);
        pixels.pixels.forEach(pixel => point(...pixel));
      });
    }

    show_vert() {
      return [
        {
          color: this.p_color,
          pixels: [
            [this.pos.x, this.pos.y],
            [this.pos.x, this.pos.y+1],
            [this.pos.x, this.pos.y-1],
          ]
        }, 
        {
          color: this.s_color,
          pixels: [
            [this.pos.x-1, this.pos.y-1],
            [this.pos.x+1, this.pos.y-1],
            [this.pos.x-1, this.pos.y+1],
            [this.pos.x+1, this.pos.y+1]
          ]
        }
      ]
    }

    show_hor() {
      return [
        {
          color: this.p_color,
          pixels: [
            [this.pos.x, this.pos.y],
            [this.pos.x+1, this.pos.y],
            [this.pos.x-1, this.pos.y],
          ]
        }, 
        {
          color: this.s_color,
          pixels: [
            [this.pos.x-1, this.pos.y+1],
            [this.pos.x+1, this.pos.y+1]
          ]
        }
      ]
    }

    show_idle() {
      return [
        {
          color: this.p_color,
          pixels: [
            [this.pos.x, this.pos.y],
            [this.pos.x+1, this.pos.y]
          ]
        },
        {
          color: this.s_color,
          pixels: [
            [this.pos.x, this.pos.y+1],
            [this.pos.x+1, this.pos.y+1]
          ]
        }
      ]
    }

    replicate() {
      let brain = this.brain.copy();
      let chance = false;
      chance = brain.weights_ih.mutate() ? true : chance;
      chance = brain.weights_ho.mutate() ? true : chance;
      chance = brain.bias_h.mutate() ? true : chance;
      chance = brain.bias_o.mutate() ? true : chance;
      return new Trimp({
        p_color: chance ? [random(0, 255), random(0, 255), random(0, 255)] : this.p_color,
        s_color: chance ? [random(0, 255), random(0, 255), random(0, 255)] : this.s_color,
        brain: brain,
      });
    }
  }