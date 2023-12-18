class ImageDisplay {
    constructor() {
      this.images = [];
      this.imageData = [];
      this.accumulatedText = '';
      this.shuffled = false;
    }
  
    preload() {
      p5.disableFriendlyErrors = true;
  
      this.images.push(loadImage('assets/a.png'));
      this.images.push(loadImage('assets/b.png'));
      this.images.push(loadImage('assets/c.png'));
      this.images.push(loadImage('assets/d.png'));
      this.images.push(loadImage('assets/e.png'));
      this.images.push(loadImage('assets/f.png'));
      this.images.push(loadImage('assets/g.png'));
      this.images.push(loadImage('assets/h.png'));
      this.images.push(loadImage('assets/i.png'));
      this.images.push(loadImage('assets/j.png'));
      this.images.push(loadImage('assets/k.png'));
      this.images.push(loadImage('assets/l.png'));
      this.images.push(loadImage('assets/m.png'));
      this.images.push(loadImage('assets/n.png'));
      this.images.push(loadImage('assets/o.png'));
      this.images.push(loadImage('assets/p.png'));
      this.images.push(loadImage('assets/q.png'));
      this.images.push(loadImage('assets/r.png'));
      this.images.push(loadImage('assets/s.png'));
      this.images.push(loadImage('assets/t.png'));
      this.images.push(loadImage('assets/u.png'));
      this.images.push(loadImage('assets/v.png'));
      this.images.push(loadImage('assets/w.png'));
      this.images.push(loadImage('assets/x.png'));
      this.images.push(loadImage('assets/y.png'));
      this.images.push(loadImage('assets/z.png'));
  
      this.images.push(loadImage('assets/zero.png'));
      this.images.push(loadImage('assets/one.png'));
      this.images.push(loadImage('assets/two.png'));
      this.images.push(loadImage('assets/three.png'));
      this.images.push(loadImage('assets/four.png'));
      this.images.push(loadImage('assets/five.png'));
      this.images.push(loadImage('assets/six.png'));
      this.images.push(loadImage('assets/seven.png'));
      this.images.push(loadImage('assets/eight.png'));
      this.images.push(loadImage('assets/nine.png'));
      this.images.push(loadImage('assets/dot.png'));
      this.images.push(loadImage('assets/underscore.png'));
  
      this.imageData = [
            { image: this.images[0], text: 'a' },
            { image: this.images[1], text: 'b' },
            { image: this.images[2], text: 'c' },
            { image: this.images[3], text: 'd' },
            { image: this.images[4], text: 'e' },
            { image: this.images[5], text: 'f' },
            { image: this.images[6], text: 'g' },
            { image: this.images[7], text: 'h' },
            { image: this.images[8], text: 'i' },
            { image: this.images[9], text: 'j' },
            { image: this.images[10], text: 'k' },
            { image: this.images[11], text: 'l' },
            { image: this.images[12], text: 'm' },
            { image: this.images[13], text: 'n' },
            { image: this.images[14], text: 'o' },
            { image: this.images[15], text: 'p' },
            { image: this.images[16], text: 'q' },
            { image: this.images[17], text: 'r' },
            { image: this.images[18], text: 's' },
            { image: this.images[19], text: 't' },
            { image: this.images[20], text: 'u' },
            { image: this.images[21], text: 'v' },
            { image: this.images[22], text: 'w' },
            { image: this.images[23], text: 'x' },
            { image: this.images[24], text: 'y' },
            { image: this.images[25], text: 'z' },
            { image: this.images[26], text: '0' },
            { image: this.images[27], text: '1' },
            { image: this.images[28], text: '2' },
            { image: this.images[29], text: '3' },
            { image: this.images[30], text: '4' },
            { image: this.images[31], text: '5' },
            { image: this.images[32], text: '6' },
            { image: this.images[33], text: '7' },
            { image: this.images[34], text: '8' },
            { image: this.images[35], text: '9' },
            { image: this.images[36], text: '.' },
            { image: this.images[37], text: '-' },
        ];
    }
  
    setup() {
      createCanvas(2000, 1000);
      this.userInput = createInput();
      this.userInput.position(10, 200);
      this.userInput.mouseClicked(this.displayImages.bind(this));
    }
  
    draw() {
      fill(255, 0, 0);
      textSize(24);
      text("인스타그램 아이디를 입력하세요: " + this.accumulatedText, 10, 180);
    }
  
    displayImages() {
      clear();
      for (let i = 0; i < this.imageData.length; i++) {
        let col = i % 10;
        let row = floor(i / 10);
        image(this.imageData[i].image, col * 40, row * 40, 40, 40);
      }
    }
  
    shuffleImages() {
      for (let i = this.imageData.length - 1; i > 0; i--) {
        let j = floor(random(i + 1));
        let temp = this.imageData[i];
        this.imageData[i] = this.imageData[j];
        this.imageData[j] = temp;
      }
      this.displayImages();
    }
  
    mouseClicked() {
      if (!this.shuffled) {
        this.displayImages();
        this.shuffled = true;
      } else {
        let clickedImageIndex = floor(mouseX / 40) + floor(mouseY / 40) * 10;
        let imageName = this.imageData[clickedImageIndex].text;
  
        this.accumulatedText += imageName + ' ';
        this.userInput.value(this.accumulatedText);
  
        fill(255, 0, 0);
        textSize(24);
        text(this.accumulatedText, 10, height - 20);
  
        this.shuffleImages();
      }
    }
  
    keyPressed() {
      return false;
    }
  }
  
  let imageDisplay;
  
  function preload() {
    imageDisplay = new ImageDisplay();
    imageDisplay.preload();
  }
  
  function setup() {
    imageDisplay.setup();
  }
  
  function draw() {
    imageDisplay.draw();
  }
  
  function mouseClicked() {
    imageDisplay.mouseClicked();
  }
  
  function keyPressed() {
    imageDisplay.keyPressed();
  }
  