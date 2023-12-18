class MovingRainbow {
    constructor(width, height) {
      this.xOffset = 0;
      this.yPos = 50;
      this.speed = 5;
      this.width = width; // Use the provided width parameter
      this.height = height; // Use the provided height parameter
  
      this.createRainbowImage();
    }
  
    createRainbowImage() {
      this.rainbow = createImage(this.width, this.height);
      this.rainbow.loadPixels();
      for (let i = 0; i < this.width; i++) {
        for (let j = 0; j < this.height; j++) {
          let h = map((i + this.xOffset) % this.width, 0, this.width, 0, 100);
          this.rainbow.set(i, (j + this.yPos) % this.height, color(h, 100, 70));
        }
      }
      this.rainbow.updatePixels();
    }
  
    update() {
      this.xOffset = (this.xOffset + this.speed) % this.width;
      let sinOffset = sin(radians(this.xOffset)) * 10;
      for (let i = 0; i < this.width; i++) {
        for (let j = 0; j < this.height; j++) {
          let h = map((i + this.xOffset + sinOffset) % this.width, 0, this.width, 0, 100);
          this.rainbow.set(i, (j + this.yPos) % this.height, color(h, 100, 70));
        }
      }
      this.rainbow.updatePixels();
    }
  
    display() {
      image(this.rainbow, 0, 0);
    }
  }
  