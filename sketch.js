let defaultImg;
let agreeImg;
let disagreeImg;
let wordsImg;
let confetti = [];
let lastConfettiTime = 0;
let toptitle;



function preload(){
  defaultImg = loadImage ("assets/defaultbg.png");
  agreeImg = loadImage ("assets/agree.png");
  disagreeImg = loadImage ("assets/disagree.png");
  wordsImg = loadImage ("assets/words.png");
  toptitle = loadImage ("assets/toptitle.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    confetti.push(new Confetti(random(width), random(height), random(2, 5)));
  }
}

function draw() {
  background(220);
  //기본 배경
  fill(60,93,167);
  noStroke();
  rect (0,0,windowWidth,windowHeight);
  fill(249,249,249);
  rect (0,50,windowWidth,windowHeight);
  imageMode (CENTER);
  image (defaultImg,windowWidth/2, 380,800,600);
  image (toptitle, windowWidth/2,28,275,25);


  if (frameCount - lastConfettiTime >= 60 * 6) {
    generateConfetti();
    lastConfettiTime = frameCount;
  }

  for (let i = 0; i < confetti.length; i++) {
    confetti[i].confettiDisplay();
  }

  //첫 페이지
  image (wordsImg,windowWidth/2, 380,800,600);

  image (agreeImg,windowWidth/2+200,360,150,50);
  image (disagreeImg, windowWidth/2+200,440,150,50);

 
}

function generateConfetti() {
  // Generate multiple confetti objects
  for (let i = 0; i < 50; i++) {
    confetti.push(new Confetti(random(width), random(height), random(2, 5)));
  }
}

function mouseClicked() {
  // Check if the mouse is pressed on the agreeImg
  if (
    mouseX >= windowWidth / 2 + 120 &&
    mouseX <= windowWidth / 2 + 280 &&
    mouseY >= 335 &&
    mouseY <= 385
  ) {
    // Navigate to secondpage.html
    window.location.href = 'secondpage.html';
  }

  if (
    mouseX >= windowWidth / 2 + 120 &&
    mouseX <= windowWidth / 2 + 280 &&
    mouseY >= 415 &&
    mouseY <= 465
  ) {
    // Show an alert when disagreeImg is clicked
    alert('이걸 안 하네?');
  }
}