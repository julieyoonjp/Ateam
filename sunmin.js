let defaultImgl
let toptitle;
let thirdtitle;

let options = [];
let checkboxes = [];
let checkboxSize = 18;
let checkboxSpacing = 40;
let columns = 5;
let rows = 7;

let year = 1950;
let month = 1;
let day = 1;
let age = 100;
let decreaseButton, completedButton, nextButton;
let stage = 1;

let button1PressedCount = 0;
let button2PressedCount = 0;
let button3PressedCount = 0;
let checkedCountLog = "";
let canGoToNextStage = false;
let matchMessage = "";

let backImg;
let backclickX;
let backclickY;

let thirdpagead;
let hotnews;
let adAlpha = 0;

function preload(){
  defaultImg = loadImage ("assets/defaultbg.png");
  toptitle = loadImage ("assets/toptitle.png");
  backImg = loadImage("assets/back.png");
  thirdtitle = loadImage("assets/thirdtitle.png");
  thirdpagead = loadImage ("assets/thirdpagead.png");
  hotnews = loadImage ("assets/adhotnews.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  backclickX = windowWidth/2 +320;
  backclickY = 650

  let departmentNames = [
    '독어독문학과', '미학과', '고고미술사학과', '국어국문학과', '소비자학과', '언론정보학과',
    '공예과', '경영학과', '경제학과', '약학과', '국악과', '의학과', '국어교육과', '식품영양학과',
    '수의학과', '간호학과', '통계학과', '생명학과', '인류학과', '사회학과 ', '생명과학부', '수의학과', '치의학과',
    '피아노과', '조소과', '기타', '무용과', '미술학과', '음악과', '정보문화학', '디자인학과', '환경공학과',
    '화학과', '물리학과', '전자공학과', '컴퓨터공학과', '식품공학과', '화공신소재공학과'
  ];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let index = i * columns + j;
      if (index < departmentNames.length) {
        options.push({
          text: departmentNames[index],
          isChecked: true,
          isClicked: false
        });
      }
    }
  }

  let button1 = createButton('이용약관 동의 1');
  button1 = createButton('이용약관 동의 1');
  button1.position(width / 2 - 200, rows * checkboxSpacing + 340);
  button1.mousePressed(() => {
    openPopup();
    button1PressedCount++;
    console.log('Button 1 Pressed', button1PressedCount);

    updateButtonColor(button1, button1PressedCount);
  });

  button2 = createButton('이용약관 동의 2');
  button2.position(width / 2 - 50, rows * checkboxSpacing + 340);
  button2.mousePressed(() => {
    openPopup2();
    button2PressedCount++;
    console.log('Button 2 Pressed', button2PressedCount);
    updateButtonColor(button2, button2PressedCount);
  });

  button3 = createButton('이용약관 동의 3');
  button3.position(width / 2 + 100, rows * checkboxSpacing + 340);
  button3.mousePressed(() => {
    openPopup3();
    button3PressedCount++;
    console.log('Button 3 Pressed', button3PressedCount);
    updateButtonColor(button3, button3PressedCount);
  });


  decreaseButton = createButton('-')
    .position(windowWidth/2-180, 270)
    .size(20, 20)
    .style("font-size", "14px")
    .mousePressed(decreaseAge);

  createButton('+')
    .position(windowWidth/2-200, 270)
    .size(20, 20)
    .style("font-size", "14px")
    .mousePressed(increaseAge);

  createButton('-')
    .position(windowWidth/2 +5, 270)
    .size(20, 20)
    .style("font-size", "14px")
    .mousePressed(decreaseYear);

  createButton('+')
    .position(windowWidth/2-15, 270)
    .size(20, 20)
    .style("font-size", "14px")
    .mousePressed(increaseYear);

  createButton('-')
    .position(windowWidth/2 +60, 270)
    .size(20, 20)
    .style("font-size", "14px")
    .mousePressed(decreaseMonth);

  createButton('+')
    .position(windowWidth/2 +40, 270)
    .size(20, 20)
    .style("font-size", "14px")
    .mousePressed(increaseMonth);

  createButton('-')
    .position(windowWidth/2 +90, 270)
    .size(20, 20)
    .style("font-size", "14px")
    .mousePressed(decreaseDay);

  createButton('+')
    .position(windowWidth/2 +110, 270)
    .size(20, 20)
    .style("font-size", "14px")
    .mousePressed(increaseDay);

  // 버튼을 만들어 변수에 할당합니다.
  nextButton = createButton('Next')
    .position(windowWidth/2+150, 20)
    .size(60, 30)
    .style("font-size", "14px")


    completedButton = createButton("완성")
    .position(windowWidth / 2 + 230, height / 4 - 10)
    .size(80, 30)
    .style("font-size", "14px")
    .mousePressed(() => {
      if (stage === 1) {
        checkBirthYear();
      } else if (stage === 2) {
        saveData();
      }
    });

    function updateButtonColor(button, count) {
      if (count > 0) {
        button.style('background-color', 'green');
      }
    }
}

function draw() {
  fill(60,93,167);
  noStroke();
  rect (0,0,windowWidth,windowHeight);
  fill(249,249,249);
  rect (0,50,windowWidth,windowHeight);
  imageMode (CENTER);
  image (defaultImg,windowWidth/2, 380,800,600);
  image (toptitle, windowWidth/2,28,275,25);
  image(thirdtitle, windowWidth/2, 155,380,130);

  drawOptions();
  drawAgeAndBirthday();
  drawCompletedButton();
  drawNextButton(); // 새로 추가된 부분

  image(backImg, backclickX, backclickY, 60,30);
  
  if (adAlpha < 255) {
    adAlpha += 0.5; // Adjust the step as needed
  }

  tint(255, adAlpha);
  image(thirdpagead, windowWidth / 2, 780, 800, 150);
  noTint();

  imageMode(CORNER);
  image (hotnews,windowWidth/2+450,150,300,600);

}

function drawOptions() {
  let checkedCount = 0;

  for (let i = 0; i < options.length; i++) {
    let col = i % columns;
    let row = floor(i / columns);

    let x = col * (700 / columns) + windowWidth / 2 - 350;
    let y = row * checkboxSpacing + 310;

    fill(255);
    rect(x, y, checkboxSize, checkboxSize);

    fill(options[i].isClicked ? 150 : 0);
    textAlign(LEFT, CENTER);
    textSize(16);

    let textX = x + checkboxSize + 5;
    let textY = y + checkboxSize / 2;
    text(options[i].text, textX, textY);

    if (options[i].isChecked) {
      fill(12);

      let checkX = x + checkboxSize / 2 - textWidth('✔') / 2 - 5;
      let checkY = y + checkboxSize / 2 - 10;
      text('✔', checkX, checkY);
      checkedCount++;
    }
  }

  if (checkedCount === 1) {
    console.log(`체크된 개수: ${checkedCount}`);
  }
}


function drawAgeAndBirthday() {
  let ageBoxWidth = 150;
  let ageBoxHeight = 40;
  let ageBoxX = width / 2 - 210;
  let ageBoxY = height / 4;

  fill(0);
  textAlign(CENTER, CENTER);
  text("만나이  " + age + "세", ageBoxX, ageBoxY);

  let birthdayBoxWidth = 300;
  let birthdayBoxHeight = 40;
  let birthdayBoxX = width / 2;
  let birthdayBoxY = height / 4;


  fill(0);
  textAlign(CENTER, CENTER);
  text(`생년월일:      ${year}년      ${month}월      ${day}일`, birthdayBoxX, birthdayBoxY);
}

function drawCompletedButton() {
  if (stage === 1) {
    drawPopupButtons();
  } else if (stage === 2) {
    drawSaveButton();
  }
}

function drawPopupButtons() {
  let button1X = width / 2 - 200;
  let button2X = width / 2 - 50;
  let button3X = width / 2 + 100;
  let buttonY = rows * checkboxSpacing + 260;

  // "완성" 버튼 추가
  drawSaveButton();
}

function drawPopupButton(x, y, count, label) {
  fill(255);
  rect(x, y, 120, 30);

  fill(0);
  textAlign(CENTER, CENTER);
  text(`${label} (${count})`, x + 60, y + 15);
}

function drawSaveButton() {
  let saveButtonX = width / 2 + 230;
  let saveButtonY = height / 4 - 10;

  if (
    mouseX > saveButtonX - 40 &&
    mouseX < saveButtonX + 40 &&
    mouseY > saveButtonY - 15 &&
    mouseY < saveButtonY + 15
  ) {
    saveData();
  }
}

function mouseClicked() {
  let checkedCount = 0;

  for (let i = 0; i < options.length; i++) {
    let col = i % columns;
    let row = floor(i / columns);

    let x = col * (700 / columns) + windowWidth / 2 - 350 + checkboxSize / 2;
    let y = row * checkboxSpacing + 310 + checkboxSize / 2;

    if (dist(mouseX, mouseY, x, y) < checkboxSize) {
      options[i].isChecked = !options[i].isChecked;
      options[i].isClicked = !options[i].isClicked;
    }

    if (options[i].isChecked) {
      checkedCount++;
    }
  }

  console.log(`체크된 개수: ${checkedCount}`);

  if (
    mouseX > backclickX - 30 &&
    mouseX < backclickX + 20 &&
    mouseY > backclickY - 15 &&
    mouseY < backclickY + 15
  ) {
    console.log("Clicked backImg button");
    window.location.reload(); // Reload the page to the initial screen
  }
}



function openPopup() {
  let popup = window.open('popup.html', 'Popup', 'width=800,height=600');
}

function openPopup2() {
  let popup2 = window.open('popup2.html', 'Popup2', 'width=800,height=600');
}

function openPopup3() {
  let popup3 = window.open('popup3.html', 'Popup3', 'width=800,height=600');
}


function checkBirthYear() {
  let currentYear = new Date().getFullYear();
  let enteredYear = currentYear - age;

  if (year !== enteredYear) {
    alert("Error!⚠️⚠️🙅  나이와 생년월일 맞지 않다");
    canGoToNextStage = false;
    return;
  }

  // 일치할 때의 처리
  matchMessage = "Match Year and Age";
  console.log(matchMessage);
  alert("True!!🙆‍♂️ 나이와 생년월일이 일치하다. 이제 너의 전공 단 하나를 골라라.")

  // Move to the next stage
  stage = 2;
  console.log("Moved to stage 2");
  updateText();
}


function increaseYear() {
  year++;
  updateText();
}

function decreaseYear() {
  year--;
  updateText();
}

function increaseMonth() {
  month = (month % 12) + 1;
  updateText();
}

function decreaseMonth() {
  month = month === 1 ? 12 : month - 1;
  updateText();
}

function increaseDay() {
  day = (day % 31) + 1;
  updateText();
}

function decreaseDay() {
  day = day === 1 ? 31 : day - 1;
  updateText();
}

function increaseAge() {
  age++;
  updateText();
}

function decreaseAge() {
  age = max(0, age - 1);
  updateText();
}

function updateText() {
  let birthdayBoxX = width / 2;
  let birthdayBoxY = height / 2 + 80;
  let birthdayBoxWidth = 450;
  let birthdayBoxHeight = 50;

  fill(176, 224, 230);
  rect(birthdayBoxX - birthdayBoxWidth / 2, birthdayBoxY - birthdayBoxHeight / 2, birthdayBoxWidth, birthdayBoxHeight);
  fill(0);
  textAlign(CENTER, CENTER);
  text(`생년월일: ${year}년 ${month}월 ${day}일`, birthdayBoxX, birthdayBoxY);
}


function checkIfCanGoToNextStage() {
  let checkedCount = 0;

  for (let i = 0; i < options.length; i++) {
    if (options[i].isChecked) {
      checkedCount++;
    }
  }

  let matchCondition = matchMessage.includes("Match Year and Age");
  console.log('button1PressedCount:', button1PressedCount);
  console.log('button2PressedCount:', button2PressedCount);
  console.log('button3PressedCount:', button3PressedCount);
  console.log('checkedCount:', checkedCount);
  console.log('matchCondition:', matchCondition);


  canGoToNextStage = button1PressedCount > 0 && button2PressedCount > 0 && button3PressedCount > 0 && checkedCount === 1 && matchCondition;


  if (canGoToNextStage) {
    console.log('All conditions met. You can go to the next stage!');
  } else {
    console.log('Conditions not met. Cannot go to the next stage.');
  }

  // Additional logic or alerts if needed
  if (!canGoToNextStage) {
    showAlert('🥹 정보가 일치하지 않아요. 어디서 거짓말을 치시나요? 🥹');
  }

  // You can also include additional logic here if needed
}


function saveData() {
  if (stage === 2 && matchMessage === "Match Year and Age") {
    console.log('All conditions met. You can go to the next stage!');
    // Additional logic if needed for the next stage
    localStorage.setItem("savedData2", JSON.stringify({ year, month, day}));
    localStorage.setItem("savedData3", JSON.stringify({ age }));
  } else {
    console.log('Conditions not met. Cannot go to the next stage.');
  }
}

function drawNextButton() {
  nextButton.show();
  nextButton.style('background-color', 'rgb(60, 93, 167)');
  nextButton.style('color', 'white');

  nextButton.mousePressed(() => {
    checkIfCanGoToNextStage(); // 조건 확인 함수 호출

    if (canGoToNextStage) {
      console.log('다음으로 진행합니다!!');
      stage++;
      console.log(`스테이지 이동: ${stage}`);
      // 'fourthpage.html'로 리디렉션
      window.location.href = 'fourthpage.html';
    } else {
      console.log('다음 스테이지로 진행할 수 없습니다. 조건이 충족되지 않았습니다.');
      showAlert('🥹 정보가 일치하지 않아요. 어디서 거짓말을 치시나요? 🥹');
    }
  });
}

function showAlert(message) {
  alert(message);
}