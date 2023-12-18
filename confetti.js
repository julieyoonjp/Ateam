class Confetti {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.speed = s;
    this.time = random(0, 100);
    this.color = color(random(255), random(255), random(255));
    this.amp = random(2, 30);
    this.phase = random(0.5, 2);
    this.size = random(width / 25, height / 50);
    this.form = round(random(0, 1));
  }

  confettiDisplay() {
    fill(this.color);
    noStroke();
    push();
    translate(this.x, this.y);
    translate(this.amp * sin(this.time * this.phase), this.speed * cos(2 * this.time * this.phase));
    rotate(this.time);
    rectMode(CENTER);
    scale(cos(this.time / 4), sin(this.time / 4));
    if (this.form === 0) {
      rect(0, 0, this.size, this.size / 2);
    } else {
      ellipse(0, 0, this.size);
    }
    pop();

    this.time += 0.1;

    this.speed += 1 / 200;

    this.y += this.speed;
  }
}