var three = function( p ) {

  var monstertype;
  var mapimgno;

  var mapscale;

  var buttonX;
  var buttonY;
  var buttonW;
  var buttonH;

  var options = {
    target_id: 'screen2',
    animation_command:  'left',
  	enter_animation_command: 'left',
  	exit_animation_command: 'fade',
    enter_animation_time: '400',
    exit_animation_time: '400'
  }

  var buttonoffset = 0;

  p.mousePressed = function() {
    if (p.mouseX > buttonX && p.mouseX < (buttonX + buttonW)
    && p.mouseY > buttonY && p.mouseY < (buttonY + buttonH)) {
      MultiScreen.switch_screens(options);
    }
  }

  p.exitMap = function() {

    if (p.mouseX > buttonX && p.mouseX < (buttonX + buttonW)
    && p.mouseY > buttonY && p.mouseY < (buttonY + buttonH)) {
      buttonoffset = 0.01;
    } else {
      buttonoffset = 0;
    }

    buttonX = (10*scale);
    buttonY = (10*scale);
    buttonW = (148.8*(0.2*scale));
    buttonH = (143.8*(0.2*scale));

    p.push();
    p.scale((0.2*scale) + buttonoffset);
    p.translate(20*scale, 20*scale);
    p.fill(244, 121, 32);
    p.noStroke();
    p.beginShape();
    p.vertex(87.3, 71.9);
    p.vertex(143.8, 128.3);
    p.vertex(128.3, 143.8);
    p.vertex(71.9, 87.3);
    p.vertex(15.4, 143.8);
    p.vertex(0, 128.3);
    p.vertex(56.4, 71.9);
    p.vertex(0, 15.5);
    p.vertex(15.4, 0);
    p.vertex(71.9, 56.5);
    p.vertex(128.3, 0);
    p.vertex(143.8, 15.5);
    p.endShape(p.CLOSE);
    p.pop();
    p.push();
    p.scale((0.2*scale) + buttonoffset);
    p.translate(buttonX, buttonY)
    p.fill(71, 47, 145);
    p.noStroke();
    p.beginShape();
    p.vertex(87.3, 71.9);
    p.vertex(143.8, 128.3);
    p.vertex(128.3, 143.8);
    p.vertex(71.9, 87.3);
    p.vertex(15.4, 143.8);
    p.vertex(0, 128.3);
    p.vertex(56.4, 71.9);
    p.vertex(0, 15.5);
    p.vertex(15.4, 0);
    p.vertex(71.9, 56.5);
    p.vertex(128.3, 0);
    p.vertex(143.8, 15.5);
    p.endShape(p.CLOSE);
    p.pop();
  }

  p.drawKey = function() {
    var keyW = (270*scale);
    var keyH = (50*scale);
    var keyX = (10*scale);
    var keyY = ((p.windowHeight- keyH) - (10*scale));

    p.push();
    p.noStroke();
    p.fill(255, 200);
    p.rect(keyX, keyY, keyW, keyH, 15);
    p.fill(71, 47, 145);
    p.rect(keyX+(9*scale), keyY+(9*scale), 30*scale, 30*scale,5);
    p.fill(244, 121, 32);
    p.rect(keyX+(140*scale), keyY+(9*scale), 30*scale, 30*scale,5);
    p.fill(99);
    p.textSize(14*scale);
    p.textFont("Roman");
    p.text("Your\nLocation", keyX+(60*scale), keyY+(20*scale));
    p.text("-", keyX+(47*scale), keyY+(27*scale));
    p.text("Delivery\nLocation", keyX+(190*scale), keyY+(20*scale))
    p.text("-", keyX+(177*scale), keyY+(27*scale));
    p.pop();
  }

  p.chooseImage = function () {
  if (monster === 'undefined') {
    mapimgno = '0'
    monstertype = 'V'
  } else {
    monstertype = monster
    mapimgno = String(deliveryprogress.toFixed(0));
  }
  if (resetmap === true) {
  p.resetMap();
  }
}

p.windowResized = function() {
  p.resizeCanvas(p.windowWidth, p.windowHeight);
  if (p.windowWidth > p.windowHeight) {
    mapscale = p.windowWidth;
  }
  if (p.windowHeight > p.windowWidth) {
    mapscale = p.windowHeight;
  }
}

  p.resetMap = function() {
    p.createCanvas(p.windowWidth, p.windowHeight)
    mapimg = p.loadImage("assets/maps/" + monstertype + "/" + mapimgno + '.jpg');
  }


  p.setup = function() {
    p.resetMap();
    if (p.windowWidth > p.windowHeight) {
      mapscale = p.windowWidth;
    }
    if (p.windowHeight > p.windowWidth) {
      mapscale = p.windowHeight;
    }
  }

  p.draw = function() {
    p.chooseImage();
    p.push();
    p.imageMode(p.CENTER)
    p.image(mapimg, p.windowWidth/2, p.windowHeight/2, mapscale, mapscale)
    p.exitMap();
    p.pop();
    p.drawKey();
  }

};

var myp5 = new p5(three, 'screen3');
