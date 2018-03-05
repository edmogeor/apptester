var tnumber;
var carryon;
var randomArray1;
var randomArray2;
var randomArray3;
var randomArray4;

var designW = 414;

var mapimg;

var one = function( p ) {

  //SHUFFLE & RANGE FUNCTIONS
  /**
 * Creates a range of numbers in an array, starting at a specified number and
 * ending before a different specified number.
 * @param {number} start  Indicates what number should be used as the first
 *     number in the returned array.  If this is the only number argument
 *     supplied, this will be used as the edge and 0 will be used as the start.
 * @param {number=} edge  Indicates the first number that should not appear in
 *     the range of numbers.  If this number preceeds the start in the range
 *     (taking into account the step), an empty array will be returned.  If not
 *     specified and not inferred this defaults to 0.
 * @param {number=} step  Indicates the difference between one number and the
 *     subsequent number placed in the returned array.  If not specified this
 *     defaults to 1.
 * @return {!Array.<number>}  Array of numbers in the specified range.
 */
  p.range = function(start, edge, step) {
  // If only one number was passed in make it the edge and 0 the start.
  if (arguments.length == 1) {
    edge = start;
    start = 0;
  }

  // Validate the edge and step numbers.
  edge = edge || 0;
  step = step || 1;

  // Create the array of numbers, stopping befor the edge.
  for (var ret = []; (edge - start) * step > 0; start += step) {
    ret.push(start);
  }
  return ret;
}

  p.shuffle = function(a) {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
  }


  //CODE STARTS HERE >>>>>>>>>>>>>>>>>>>>>

  var logo;
  var searchlogo;

  var searchlogoW;
  var searchlogoH;
  var searchlogoX;
  var searchlogoY;


  var mouseclicked;
  var buttonpressed;

  var scale;

  var input;

  var codes;


  p.preload = function() {
    p.fontLoader();
    logo = p.loadImage("assets/logo.png")
    searchlogo = p.loadImage("assets/search.png")
    codes = p.loadStrings('assets/codes.txt');
    updatelist = p.loadStrings('assets/updates.txt');
  }

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    input = p.createInput();
  };


  p.screenScaler = function() {
    var scaleoffset;
    var scalefactor = (p.windowWidth/designW);
    scale = p.constrain((scalefactor), 0.6, 1.1);
    if (p.windowWidth > 1500) {
      scale = 1.1
    }
  }

  var options = {
    target_id: 'screen2',
    animation_command:  'bottom',
  	enter_animation_command: 'bottom',
  	exit_animation_command: 'top',
    enter_animation_time: '400',
    exit_animation_time: '400'
  }

  p.fontLoader = function() {
     fontLight = p.loadFont('assets/fonts/Helvetica/Light.ttf');
     fontThin = p.loadFont('assets/fonts/Helvetica/Thin.ttf');
     fontRoman = p.loadFont('assets/fonts/Helvetica/Roman.ttf');
     fontBold = p.loadFont('assets/fonts/Helvetica/Bold.ttf');
     fontItalic = p.loadFont('assets/fonts/Helvetica/Italic.ttf');
     fontRomanItalic = p.loadFont('assets/fonts/Helvetica/BoldItalic.ttf');
  }

  p.drawBG = function() {
    p.clear();
    p.background(71, 47, 145);
    p.fill(255);
    p.noStroke();
    p.rect(0,0,p.windowWidth,p.windowHeight*0.28);
    p.fill(244, 121, 32);
    p.rect(0,p.windowHeight*0.28,p.windowWidth,8*scale);
  }


  var boxX;
  var boxY;
  var boxW;
  var boxL;

  p.drawElements = function() {
    p.push();
    p.translate((p.windowWidth/2)-((412*(0.4*scale))/2),(p.windowHeight*0.4));
    p.scale(0.4*scale)
    p.fill(255);
    p.noStroke();
    p.rect(32.5, 0, 11.2, 211.7);
    p.rect(57.1, 0, 47, 211.7);
    p.rect(110.5, 0, 22.4, 211.7);
    p.rect(142.2, 0, 5.6, 208.5);
    p.rect(171.4, 0, 12.3, 211.7);
    p.rect(201.6, 0, 22.4, 211.7);
    p.rect(246.4, 0, 3.4, 211.7);
    p.rect(267.7, 0, 39.2, 211.7);
    p.rect(321.4, 0, 11.2, 211.7);
    p.rect(346.1, 0, 23.5, 211.7);
    p.fill(255,0,0);
    p.rect(0, 97.8, 412.1, 16.1);
    p.pop();

    p.push()
    p.imageMode(p.CENTER);
    p.image(logo, p.windowWidth/2, (p.windowHeight/3.5)/2, (logo.width*0.29)*scale, (logo.height*0.29)*scale);
    p.pop();


    var triangle1x = ((p.windowWidth/2)/(0.4*scale))-(71.8/2) + (logo.width*0.33);
    var triangle2x = ((p.windowWidth/2)/(0.4*scale))-(71.8/2) + (logo.width*0.33) - (100*scale);

    p.push();
    p.scale(0.4*scale)
    p.translate(triangle1x,((p.windowHeight*0.28)/(0.4*scale))-(82.9/2)+(8*scale))
    p.fill(244, 121, 32);
    p.noStroke();
    p.beginShape();
    p.vertex(71.8, 41.5);
    p.vertex(0, 0);
    p.vertex(0, 82.9);
    p.endShape(p.CLOSE);
    p.pop();

    p.push();
    p.scale(0.4*scale)
    p.translate(triangle2x,((p.windowHeight*0.28)/(0.4*scale))-(82.9/2)+(8*scale))
    p.fill(244, 121, 32);
    p.noStroke();
    p.beginShape();
    p.vertex(71.8, 41.5);
    p.vertex(0, 0);
    p.vertex(0, 82.9);
    p.endShape(p.CLOSE);
    p.pop();

    p.textAlign(p.CENTER);
    p.fill(71, 47, 145)
    p.textSize(18.2*scale)
    p.textFont(fontLight);
    p.text('International Monster Postage', p.windowWidth/2, (p.windowHeight/3.5)/2 + (45*scale));

    p.fill(255)
    p.textSize(22*scale)
    p.textAlign(p.CENTER);
    p.textFont(fontLight);
    p.text('Enter Tracking No. :', (p.windowWidth/2), (p.windowHeight*0.4) + (120*scale));

    boxX = (p.windowWidth/2);
    boxY = ((p.windowHeight*0.4) + (160*scale));
    boxL = (300*scale);
    boxH = (35*scale);

    p.push();
    p.rectMode(p.CENTER);
    p.fill(33,25,76)
    p.rect(boxX + 7, boxY + 7, boxL, boxH, 40);
    p.fill(114,114,114);
    p.rect(boxX, boxY, boxL, boxH, 40);
    p.pop();

    if (p.mouseX > searchlogoX && p.mouseX < (searchlogoX + searchlogoW)
    && p.mouseY > searchlogoY && p.mouseY < (searchlogoY + searchlogoH)) {
      searchlogoW = ((searchlogo.width*0.31)*scale);
      searchlogoH = ((searchlogo.height*0.31)*scale);
    } else {
      searchlogoW = ((searchlogo.width*0.3)*scale);
      searchlogoH = ((searchlogo.height*0.3)*scale);
    }

    searchlogoX = ((p.windowWidth/2) - (searchlogoW/2));
    searchlogoY = (((p.windowHeight*0.4) + (280*scale)) - (searchlogoH/2));

    p.image(searchlogo, searchlogoX, searchlogoY, searchlogoW, searchlogoH);

    p.push();
    p.fill(255)
    p.textSize(17*scale)
    p.textAlign(p.CENTER);
    p.textFont(fontBold);
    p.text('ENTER', p.windowWidth/2, (p.windowHeight*0.4) + (340*scale))
    p.pop();
  }

  var errortext = false;

  p.mousePressed = function() {
    if (p.mouseX > searchlogoX && p.mouseX < (searchlogoX + searchlogoW)
    && p.mouseY > searchlogoY && p.mouseY < (searchlogoY + searchlogoH)
    && carryon == true) {
      MultiScreen.switch_screens(options);
      randomArray1 = p.range(updatelist.length);
      p.shuffle(randomArray1);
      randomArray2 = p.range(updatelist.length);
      p.shuffle(randomArray2);
      randomArray3 = p.range(updatelist.length);
      p.shuffle(randomArray3);
      randomArray4 = p.range(updatelist.length);
      p.shuffle(randomArray4);
      mapimgno = String(deliveryprogress.toFixed(0));
      mapimg = p.loadImage("assets/maps/" + monster + "/" + mapimgno + '.jpg');
    }
    if (p.mouseX > searchlogoX && p.mouseX < (searchlogoX + searchlogoW)
    && p.mouseY > searchlogoY && p.mouseY < (searchlogoY + searchlogoH)
    && carryon == false) {
      errortext = true;
    }
  };

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

  p.inputSettings = function () {
    input.style('height', boxH-4 + 'px');
    input.style('width', boxL + 'px');
    input.style('background', 'transparent');
    input.style('border', 'none');
    input.style('outline', 'none');
    input.style('font-size', 18 * scale + 'px');
    input.style('text-align', 'center');
    input.style('font-family', 'Thin');
    input.style('color', 'white');
    input.style('letter-spacing', '2px');
    input.id('trackingno')
    document.getElementById("trackingno").maxLength = "10";
    input.position(boxX - (boxL/2), boxY - (boxH/2));
    var num = input.value();
    input.value(num.toUpperCase());
  }

  p.drawTick = function() {
    if (codes.includes(input.value())) {

    carryon = true;
    errortext = false;

    var tick1X = ((boxX + (boxL/2))/(0.35*scale))-(129.3*0.7);
    var tick1Y = ((boxY)/(0.35*scale))-(130.6*0.62);
    var tick2X = tick1X + (10*scale);
    var tick2Y = tick1Y + (10*scale);

    p.push();
    p.scale(0.35*scale)
    p.translate(tick2X, tick2Y)
    p.fill(0,100);
    p.noStroke();
    p.beginShape();
    p.vertex(130.6, 16.9);
    p.bezierVertex(130.6, 20.4, 129.3, 23.8, 126.7, 26.4);
    p.vertex(59.5, 93.6);
    p.vertex(42.8, 110.7);
    p.vertex(23.3, 91);
    p.vertex(6.6, 74.3);
    p.bezierVertex(1.4, 69.1, 1.4, 60.5, 6.6, 55.2);
    p.bezierVertex(9.2, 52.6, 12.7, 51.3, 16.1, 51.3);
    p.bezierVertex(19.6, 51.3, 23, 52.6, 25.6, 55.2);
    p.vertex(42.7, 72.3);
    p.vertex(107.6, 7.4);
    p.bezierVertex(112.8, 2.2, 121.4, 2.2, 126.7, 7.4);
    p.bezierVertex(129.3, 10, 130.6, 13.5, 130.6, 16.9);
    p.endShape();
    p.pop();

    p.push();
    p.scale(0.35*scale)
    p.translate(tick1X, tick1Y)
    p.fill(31,151,87);
    p.stroke(255);
    p.strokeWeight(7);
    p.beginShape();
    p.vertex(130.6, 16.9);
    p.bezierVertex(130.6, 20.4, 129.3, 23.8, 126.7, 26.4);
    p.vertex(59.5, 93.6);
    p.vertex(42.8, 110.7);
    p.vertex(23.3, 91);
    p.vertex(6.6, 74.3);
    p.bezierVertex(1.4, 69.1, 1.4, 60.5, 6.6, 55.2);
    p.bezierVertex(9.2, 52.6, 12.7, 51.3, 16.1, 51.3);
    p.bezierVertex(19.6, 51.3, 23, 52.6, 25.6, 55.2);
    p.vertex(42.7, 72.3);
    p.vertex(107.6, 7.4);
    p.bezierVertex(112.8, 2.2, 121.4, 2.2, 126.7, 7.4);
    p.bezierVertex(129.3, 10, 130.6, 13.5, 130.6, 16.9);
    p.endShape();
    p.pop();
  } else {
    carryon = false;
    }
  }

  p.errorText = function() {
    if (errortext == true) {
      p.push();
      p.fill(244, 121, 32)
      p.textSize(15*scale)
      p.textAlign(p.CENTER);
      p.textFont(fontLight);
      p.text('YOU SHALL NOT PASS!', p.windowWidth/2, (p.windowHeight*0.4) + (200*scale))
      p.pop();
    }
  }

  p.gettrackingNo = function() {
   if (carryon == true) {
    tnumber = String(input.value());
   }
  }

  p.draw = function() {
    p.drawBG();
    p.drawElements();
    p.screenScaler();
    p.inputSettings();
    p.drawTick();
    p.errorText();
    p.gettrackingNo();
  };

};
var myp5 = new p5(one, 'screen1');
