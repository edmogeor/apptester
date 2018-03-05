tnumber = '';

var monster;
var deliveryprogress;
var resetmap;

var scale;

var two = function( p ) {

tnumber = String(tnumber);

var updatelist;
var textscale;

var logo;

var displaydate;
var displaydispatch;
var displaydeliver;

var textcolor = 99;

var interval1;
var interval2;
var interval3;

var random1;
var random2;

var callShuffle = false;

var testmode = true;
var testslider;
var testdate = 5;

var todaytest;

  p.setDate = function() {

    if (testmode == true) {
      testslider = p.createSlider(1,100,0,1);
    }

    if (testmode == true) {
      todaytest =  Date.today().set({ day: testdate });
    } else if (testmode == false) {
      todaytest = Date.today().setTimeToNow().addDays(0);
    }


    if (todaytest.is().mon() && testmode == false) {
      displaydispatch = Date.today().toString('dd/MM/yy');
      displaydeliver =  Date.today().addDays(7).toString('dd/MM/yy');
      var dispatchdate = Date.today().getTime();
    } else if (testmode == false){
      displaydispatch =  Date.today().last().monday().toString('dd/MM/yy');
      displaydeliver =  Date.today().last().monday().addDays(7).toString('dd/MM/yy');
      var dispatchdate = Date.today().last().monday().getTime();
    }

    if (todaytest.is().mon() && testmode == true) {
      displaydispatch = Date.today().set({ day: testdate }).toString('dd/MM/yy');
      displaydeliver =  Date.today().set({ day: testdate }).addDays(7).toString('dd/MM/yy');
      var dispatchdate = Date.today().set({ day: testdate }).getTime();
    } else if (testmode == true) {
      displaydispatch =  Date.today().set({ day: testdate }).last().monday().toString('dd/MM/yy');
      displaydeliver =  Date.today().set({ day: testdate }).last().monday().addDays(7).toString('dd/MM/yy');
      var dispatchdate = Date.today().set({ day: testdate }).last().monday().getTime();
    }


    if (testmode == true) {
    var today = Date.today().set({ day: testdate }).getTime();
    displaydate =  Date.today().set({ day: testdate }).toString('dd/MM/yy');
    } else {
    var today = Date.today().setTimeToNow().addDays(0).getTime();
    displaydate =  Date.today().toString('dd/MM/yy');
  }

    var diffMs = (today - dispatchdate);
    deliveryprogress = p.map(diffMs,0,604800000,0,100)

  }

  var p1;
  var p2;
  var p3;
  var p4;

  p.setup = function() {
    p.setDate();
    resetmap = false;
    // p.setDate();
    p.createCanvas(p.windowWidth, p.windowHeight);
    logo = p.loadImage("assets/logo.png")
    mapicon = p.loadImage("assets/mapicon.png")
    updatelist = p.loadStrings('assets/updates.txt');
    p1 = p.createP(' ').id('p1');
    p2 = p.createP(' ').id('p2');
    p3 = p.createP(' ').id('p3');
    p4 = p.createP(' ').id('p4');
    l1 = p.createP(' ').id('l1');
    l2 = p.createP(' ').id('l2');
    l3 = p.createP(' ').id('l3');
    l4 = p.createP(' ').id('l4');
    d1 = p.createP(' ').id('d1');
    d2 = p.createP(' ').id('d2');
    d3 = p.createP(' ').id('d3');
    d4 = p.createP(' ').id('d4');


    random1 = p.random(-2,-3);
    random2 = p.random(-4,-5);
  }

  p.screenScaler = function() {
    var scaleoffset;
    var scalefactor = (p.windowWidth/designW);
    scale = p.constrain((scalefactor), 0.6, 1.1);
    if (p.windowWidth > 1500) {
      scale = 1.1
    }
  }

  p.textScaler = function() {
    var scaleoffset;
    var scalefactor = (p.windowWidth/designW);
    textscale = p.constrain((scalefactor), 0.3, 1.4);
    if (p.windowWidth > 1500) {
      textscale = 1.4
    }
  }


  var options = {
    target_id: 'screen1',
    animation_command:  'top',
  	enter_animation_command: 'top',
  	exit_animation_command: 'bottom',
    enter_animation_time: '400',
    exit_animation_time: '400'
  }

  var mapoptions = {
    target_id: 'screen3',
    animation_command:  'right',
    enter_animation_command: 'right',
    exit_animation_command: 'left',
    enter_animation_time: '400',
    exit_animation_time: '400'
  }

var buttonX;
var buttonY;
var buttonH;
var buttonW;

var textsizeincrease;

  // draw info container
var boundaryW;
var boundaryH;
var boundaryX;
var boundaryY;
var bcornerX;
var bcornerY;

  p.drawBoundary = function() {
    p.push();

    boundaryX = (p.windowWidth/2)
    boundaryY = (p.windowHeight/2-(10*scale))
    boundaryW = (p.windowWidth - (40*scale));
    boundaryH = (p.windowHeight - (130*scale));

    boundaryW = p.constrain(boundaryW, 150, 900)

    bcornerX = (boundaryX - (boundaryW/2));
    bcornerY = (boundaryY - (boundaryH/2));

    p.rectMode(p.CENTER);
    p.fill(71, 47, 145)
    p.rect(boundaryX+(5*scale), boundaryY+(5*scale), boundaryW, boundaryH, (20*scale));

    p.rectMode(p.CENTER);
    p.fill(255)
    p.rect(boundaryX, boundaryY, boundaryW, boundaryH, (20*scale));
    p.pop();
  }

  var buttonmapX;
  var buttonmapY;
  var buttonmapW;
  var buttonmapH;

  p.mousePressed = function() {
    if (p.mouseX > buttonX && p.mouseX < (buttonX + buttonW)
    && p.mouseY > buttonY && p.mouseY < (buttonY + buttonH)) {
      MultiScreen.switch_screens(options)
    }
    if (p.mouseX > buttonmapX && p.mouseX < (buttonmapX + buttonmapW)
    && p.mouseY > buttonmapY && p.mouseY < (buttonmapY + buttonmapH)) {
      resetmap = true;
    }
  }

  p.mouseReleased = function() {
    if (p.mouseX > buttonmapX && p.mouseX < (buttonmapX + buttonmapW)
    && p.mouseY > buttonmapY && p.mouseY < (buttonmapY + buttonmapH)) {
      resetmap = false;
      MultiScreen.switch_screens(mapoptions)
    }
  }

  // Handles button & move to map
  p.goMap = function() {

    // drawing button
    p.push();

    if (p.mouseX > buttonmapX && p.mouseX < (buttonmapX + buttonmapW)
    && p.mouseY > buttonmapY && p.mouseY < (buttonmapY + buttonmapH)) {
      buttonmapW = (52*scale);
      buttonmapH = (52*scale);
    } else {
      buttonmapW = (50*scale);
      buttonmapH = (50*scale);
    }

    buttonmapY = ((p.windowHeight-buttonmapH)-(10.5*scale));
    buttonmapX = ((p.windowWidth/2)+(boundaryW/2)-(buttonmapW));

    p.noStroke();
    p.fill(255);
    p.image(mapicon, buttonmapX, buttonmapY, buttonmapW, buttonmapH)
    p.pop();
  }


  // Handles button & return to home
  p.goHome = function() {

    // drawing button
    p.push();

    if (p.mouseX > buttonX && p.mouseX < (buttonX + buttonW)
    && p.mouseY > buttonY && p.mouseY < (buttonY + buttonH)) {
      buttonW = (162*scale);
      buttonH = (27*scale);
      textsizeincrease = 0.5;
    } else {
      buttonW = (160*scale);
      buttonH = (25*scale);
      textsizeincrease = 0;
    }

    buttonY = (5*scale);
    buttonX = ((p.windowWidth/2)+(boundaryW/2)-(buttonW));

    p.noStroke();
    p.fill(255);
    p.rect(buttonX, buttonY, buttonW, buttonH, 40)
    p.pop();

    // drawing button text
    p.push();
    p.textAlign(p.CENTER,p.TOP);
    p.fill(71, 47, 145);
    p.textSize((14+textsizeincrease)*scale);
    p.textFont("Light");
    p.text("Track another dispatch", buttonX + (buttonW/2), buttonY + (3.5*scale));
    p.pop();

    var logoW = ((logo.width*0.18)*scale);
    var logoH = ((logo.height*0.18)*scale);
    var logoY = (p.windowHeight-(logoH)-(20*scale))
    // var logoX = (20*scale);
    var logoX = (p.windowWidth/2-(boundaryW/2));
    //drawing logo
    p.push()
    p.image(logo, logoX, logoY, logoW, logoH);
    p.pop();

  }

var m = '';
var location = '';
var country = '';
var abr = '';
var monstertype = '';
var midlocation1 = '';
var midlocation2 = '';
var midlocation3 = '';


  p.monsterInfo = function() {
    m = p.split(tnumber, '');
    monster = String(m[0]);
    if (monster === "V") {
      location = "Transalvania"
      country = "Romania"
      abr = 'RO'
      monstertype = "Vampire"
      midlocation1 = 'BRUSSELS, BE';
      midlocation2 = 'NUREMBERG, DE';
      midlocation3 = 'TIMISOARA, RO';
    } else if (monster === "W") {
        location = "Zürich"
        country = 'Switzerland'
        abr = "CH"
        monstertype = "Werewolf"
        midlocation1 = 'ARRAS, FR';
        midlocation2 = 'METZ, FR';
        midlocation3 = 'BASEL, CH';
    } else if (monster === "O") {
        location = "Camargue"
        country = "France"
        abr = 'FR'
        monstertype = "Ogre"
        midlocation1 = 'CALIAS, FR';
        midlocation2 = 'DIJON, FR';
        midlocation3 = 'VALENCE, FR';
    } else if (monster === "C") {
        location = "Nicosia"
        country = "Cyprus"
        abr = 'CY'
        monstertype = "Centaur"
        midlocation1 = 'GHENT, BE';
        midlocation2 = 'ZAGREB, HR';
        midlocation3 = 'ANTALYA, TR';
      }
  }

  var infoX;
  var infoY;
  var inforightX;
  var inforightY;
  var infobottomX;
  var infobottomY;
  var infoRbottomX;
  var infoRbottomY;
  var infoW;
  var infoH;

  p.drawText = function() {

    infoGap = 22;

    p.noStroke();

    //Setting 'info' boundary

    //Top Left Corner
    infoX = (bcornerX + (infoGap*scale));
    infoY = (bcornerY+ (infoGap*scale));
    //Top Right corner
    inforightX = (bcornerX + boundaryW - (infoGap*scale));
    inforightY = (bcornerY + (infoGap*scale));
    //Bottom Left corner
    infobottomX = (bcornerX + (infoGap*scale));
    infobottomY = (bcornerY + boundaryH - (infoGap*scale));
    //Bottom right corner
    infoRbottomX = (bcornerX + boundaryW - (infoGap*scale));
    infoRbottomY = (bcornerY + boundaryH - (infoGap*scale));

    infoW = (boundaryW - (infoGap*2));
    infoH = (boundaryH - (infoGap*2));

    p.push();
    p.textAlign(p.LEFT, p.TOP);
    p.fill(textcolor)
    p.textSize(20*scale)
    p.textFont("Light")
    p.text("Ship date:", infoX, infoY);
    p.pop();

    p.push();
    p.textAlign(p.LEFT, p.TOP);
    p.fill(71, 47, 145)
    p.textSize(25*scale)
    p.textFont("Light")
    p.text(displaydispatch, infoX, infoY + (25*scale));
    var infowidth1 = p.textWidth(displaydispatch);
    p.pop();

    p.push();
    p.fill(textcolor)
    p.rect(infoX, infoY + (62*scale), infowidth1, 1*scale);
    p.pop();

    p.push();
    p.textAlign(p.LEFT, p.TOP);
    p.fill(textcolor)
    p.textSize(18*scale)
    p.textFont("Light")
    p.text("from", infoX, infoY + (70*scale));
    p.pop();

    p.push();
    p.textAlign(p.LEFT, p.TOP);
    p.fill(textcolor)
    p.textSize(14*scale)
    p.textFont("BoldItalic")
    p.text("HOXTON, UK", infoX, infoY + (97*scale));
    p.textAlign(p.CENTER);
    p.textSize(25*scale)
    p.fill(188)
    var triangleX = boundaryX - (20*scale);
    if (p.windowWidth >= 600) {
      triangleX = boundaryX
      }
    p.text("▶", triangleX + (3*scale), (infoY + (48*scale))+(3*scale));
    p.fill(71, 47, 145)
    p.text("▶", triangleX, infoY + (48*scale));
    p.pop();

    var locationwidth;
    var infowidth;

    p.push();
    p.textSize(20*scale);
    p.textFont("Light");
    infowidth = p.textWidth("Estimated return:");
    p.pop();

    p.push();
    p.textAlign(p.LEFT, p.TOP);
    p.fill(textcolor)
    p.textSize(14*scale)
    p.textFont("BoldItalic")
    locationwidth = p.textWidth(location.toUpperCase() + ',' + ' ' + abr)
    if (locationwidth > infowidth) {
      infowidth = locationwidth;
    } else {
      infowidth = infowidth;
    }
    p.text(location.toUpperCase() + ',' + ' ' + abr, inforightX-(infowidth), infoY + (97*scale));
    p.pop();

    p.push();
    p.textAlign(p.LEFT, p.TOP);
    p.fill(textcolor);
    p.textSize(20*scale);
    p.textFont("Light");
    p.text("Estimated return:", inforightX-(infowidth), inforightY);
    p.pop();

    p.push();
    p.textAlign(p.LEFT, p.TOP);
    p.fill(71, 47, 145)
    p.textSize(25*scale)
    p.textFont("Light")
    p.text(displaydeliver, inforightX-(infowidth), infoY + (25*scale));
    p.pop();

    p.push();
    p.fill(textcolor)
    p.rect(inforightX - infowidth, inforightY + (62*scale), infowidth, 1*scale);
    p.pop();

    p.push();
    p.textAlign(p.LEFT, p.TOP);
    p.fill(textcolor)
    p.textSize(18*scale)
    p.textFont("Light")
    p.text("from", inforightX-(infowidth), infoY + (70*scale));
    p.pop();

  }

  var deliverystage;

  p.drawProgress = function() {

    if (testmode == true) {
      deliveryprogress = testslider.value();
    }

    if (deliveryprogress <= 10 && 0 < deliveryprogress) {
      statustext = "Label created";
      deliverystage = 1;
    } else if (deliveryprogress <= 30 && 10 < deliveryprogress) {
        statustext = "Picked up";
        deliverystage = 2;
      } else if (deliveryprogress <= 90 && 30 < deliveryprogress) {
        statustext =  "In transit"
        deliverystage = 3;
      } else if (deliveryprogress <= 100 && 90 < deliveryprogress) {
        statustext = "Delivered"
        deliverystage = 4;
        }

    p.push();
    if (deliverystage >=4) {
      p.fill(31,151,87)
      statustext = "Delivered";
    } else {
      p.fill(71, 47, 145)
    }
    p.textAlign(p.CENTER, p.TOP);
    p.textSize(25*scale)
    p.textFont("Light")
    p.text(statustext, boundaryX, (280*scale));
    p.pop();

    p.push();
    p.noStroke();
    p.translate(((p.windowWidth/2)-(602.5*(0.55*scale))/2),220*scale);
    p.scale(0.55*scale)
    if (deliverystage >= 1) {
      p.fill(71,47,145);
    } else (
      p.fill(188)
      )
    p.ellipse(39, 39.6, 78, 78);
    p.beginShape();
    p.vertex(162.2, 39.7);
    p.vertex(125.9, 79.1);
    p.vertex(39.8, 79.1);
    p.vertex(39.8, 0);
    p.vertex(127.8, 0);
    p.vertex(0);
    p.endShape(p.CLOSE);
    if (deliverystage >= 2) {
      p.fill(71,47,145)
    } else (
      p.fill(188)
      )
    p.beginShape();
    p.vertex(312.9, 39.7);
    p.vertex(276.6, 79.1);
    p.vertex(151.4, 79.1);
    p.vertex(186.5, 39.7);
    p.vertex(151.9, 0);
    p.vertex(278.5, 0);
    p.vertex(0);
    p.endShape(p.CLOSE);
    if (deliverystage >= 3) {
      p.fill(71,47,145)
    } else (
      p.fill(188)
      )
    p.beginShape();
    p.vertex(463.6, 39.7);
    p.vertex(427.3, 79.1);
    p.vertex(302, 79.1);
    p.vertex(337.2, 39.7);
    p.vertex(302.6, 0);
    p.vertex(429.2, 0);
    p.vertex(0);
    p.endShape(p.CLOSE);
    if (deliverystage >= 4) {
      p.fill(31,151,87)
    } else (
      p.fill(188)
      )
    p.beginShape();
    p.vertex(562.8, 0);
    p.vertex(562.8, 79.1);
    p.vertex(452.8, 79.1);
    p.vertex(487.9, 39.7);
    p.vertex(453.3, 0);
    p.vertex(0);
    p.endShape(p.CLOSE);
    p.ellipse(562, 39.6, 78, 78);

    //tick
    if (deliverystage >= 4) {
      p.push();
      p.fill(31,151,87);
      p.stroke(255)
      p.strokeWeight(6*scale)
      p.beginShape();
      p.vertex(613, -1.2);
      p.bezierVertex(613, 2.2, 611.7, 5.3, 609.3, 7.7);
      p.vertex(566.3, 50.1);
      p.vertex(552.8, 63.7);
      p.vertex(537.4, 48.4);
      p.vertex(526.7, 37.9);
      p.bezierVertex(524.3, 35.5, 523, 32.4, 523, 29);
      p.bezierVertex(523, 25.6, 524.3, 22.5, 526.7, 20.1);
      p.bezierVertex(529.1, 17.7, 532.2, 16.5, 535.6, 16.5);
      p.bezierVertex(539, 16.5, 542.1, 17.8, 544.5, 20.1);
      p.vertex(552.6, 28.1);
      p.vertex(591.4, -10.1);
      p.bezierVertex(593.8, -12.4, 596.9, -13.7, 600.3, -13.7);
      p.bezierVertex(603.7, -13.7, 606.8, -12.4, 609.2, -10.1);
      p.bezierVertex(611.7, -7.7, 613, -4.6, 613, -1.2);
      p.endShape();
      p.pop();
    }
    p.pop();
  }

  p.drawElements = function() {
    p.noStroke();
    //Top Bar
    p.push();
    p.fill(71, 47, 145)
    p.noStroke();
    p.rect(0,0,p.windowWidth, 35*scale);
    p.pop();

    // Tracking Number Text
    p.push();
    p.textAlign(p.LEFT);
    p.fill(255)
    p.textSize(18.2*scale)
    p.textFont("Light")
    p.text(tnumber, 50*scale, 23.5*scale);
    p.pop();

    //Letter logo
    p.push();
    p.scale(0.7*scale)
    p.translate(8,11)
    p.fill(0,99)
    p.rect(5,5,41,26.6)
    p.fill(255);
    p.noStroke();
    p.beginShape();
    p.vertex(41, 10.3);
    p.vertex(41, 26.6);
    p.vertex(0, 26.6);
    p.vertex(0, 10.2);
    p.vertex(20.5, 18.7);
    p.vertex(NaN);
    p.endShape(p.CLOSE);
    p.beginShape();
    p.vertex(41, 0);
    p.vertex(41, 5.5);
    p.vertex(20.5, 13.8);
    p.vertex(0, 5.4);
    p.vertex(0, 0);
    p.vertex(NaN);
    p.endShape(p.CLOSE);
    p.pop();

    p.drawProgress();
  }

  var samedate;

  p.trackingInfo = function() {
    p.push();
    p.fill(textcolor)
    p.noStroke();
    p.textFont("Light")
    p.textSize(16*scale)
    p.text("Travel History", infoX, infoY + (280*scale))
    p.rect(infoX, infoY + (285*scale), infoW, 0.8*scale)
    p.pop();

    var timeX = infoX;
    var statusX = (infoX + (infoW*(0.2*scale)));
    var locationX;

    var dateformat;

    if (boundaryW > 700) {
    locationX = (inforightX - (150*scale));
    } else {
      locationX = (inforightX - (90*scale));
    }

    if (boundaryW > 450) {
    dateformat = 'dd/MM/yy'
    } else {
      dateformat = 'dd/MM'
    }

   var columngap = 10;

    var dateW = (statusX - infoX) - (columngap*scale);
    var statusW = ((locationX - infoX) - dateW) - ((columngap*scale*2));
    var locationW = (inforightX - locationX);

    var headingY = (infoY + (310*scale));

    p.push();
    p.fill(71,47,145)
    p.textAlign(p.Left)
    p.noStroke();
    p.textFont("Bold")
    p.textSize(13*scale)
    p.text("Date", timeX, headingY)
    p.text("Status", statusX, headingY)
    p.text("Location", locationX, headingY)
    p.pop();

    var update1 = '';
    var update2 = '';
    var update3 = '';
    var update4 = '';
    var update5 = '';
    var update6 = '';

    if (deliverystage == 1 && randomArray1 !== undefined) {
      update1 = String(updatelist[randomArray1[0]])
      var update1H = (document.getElementById('p1').offsetHeight)
      update2 = String(updatelist[randomArray1[1]])
      var update2H = (document.getElementById('p2').offsetHeight)
      update3 = String(updatelist[randomArray1[2]])
      var update3H = (document.getElementById('p3').offsetHeight)
      update4 = String(updatelist[randomArray1[3]])
      var update4H = (document.getElementById('p4').offsetHeight)
    } else if (deliverystage == 2 && randomArray2 !== undefined) {
      update1 = String(updatelist[randomArray2[0]])
      var update1H = (document.getElementById('p1').offsetHeight)
      update2 = String(updatelist[randomArray2[1]])
      var update2H = (document.getElementById('p2').offsetHeight)
      update3 = String(updatelist[randomArray2[2]])
      var update3H = (document.getElementById('p3').offsetHeight)
      update4 = String(updatelist[randomArray2[3]])
      var update4H = (document.getElementById('p4').offsetHeight)
    } else if (deliverystage == 3 && randomArray3 !== undefined) {
      update1 = String(updatelist[randomArray3[0]])
      var update1H = (document.getElementById('p1').offsetHeight)
      update2 = String(updatelist[randomArray3[1]])
      var update2H = (document.getElementById('p2').offsetHeight)
      update3 = String(updatelist[randomArray3[2]])
      var update3H = (document.getElementById('p3').offsetHeight)
      update4 = String(updatelist[randomArray3[3]])
      var update4H = (document.getElementById('p4').offsetHeight)
    } else if (deliverystage == 4 && randomArray4 !== undefined) {
      update1 = String(updatelist[randomArray4[0]])
      var update1H = (document.getElementById('p1').offsetHeight)
      update2 = String(updatelist[randomArray4[1]])
      var update2H = (document.getElementById('p2').offsetHeight)
      update3 = String(updatelist[randomArray4[2]])
      var update3H = (document.getElementById('p3').offsetHeight)
      update4 = String(updatelist[randomArray4[3]])
      var update4H = (document.getElementById('p4').offsetHeight)
    }


    var lineheight = (20*textscale);


    var row1Y = (infoY + ((320)*scale));
    var row2Y = ((row1Y + update1H) + lineheight)
    var row3Y = ((row2Y + update2H) + lineheight)
    var row4Y = ((row3Y + update3H) + lineheight)

    var date1;
    var date2;
    var date3;
    var date4;


    if (deliverystage == 1) {
      date1 = Date.today().toString(dateformat)
    } else if (deliverystage == 2) {
      date1 = Date.today().addDays(interval1).toString(dateformat)
      date2 = Date.today().toString(dateformat)
    } else if (deliverystage == 3) {
      date1 = Date.today().addDays(interval2).toString(dateformat)
      date2 = Date.today().addDays(interval1).toString(dateformat)
      date3 = Date.today().toString(dateformat)
    } else if (deliverystage == 4) {
      date1 = Date.today().addDays(interval3).toString(dateformat)
      date2 = Date.today().addDays(interval2).toString(dateformat)
      date3 = Date.today().addDays(interval1).toString(dateformat)
      date4 = Date.today().toString(dateformat)
    }

    var interval1 = -1
    var interval2 = random1;
    var interval3 = random2;


    if (testmode == true) {
      livedateval = p.map(testslider.value(),1,100,0,7);
      livetestdate = (testdate + livedateval);
    }



    Date.today().set({ day: testdate }).last().monday()
    Date.today().last().monday()

    if (testmode == true) {
      var todaytester = Date.today().set({ day: livetestdate }).addDays(interval1);
      var dispatchtester = Date.today().set({ day: testdate })
    }
    if (testmode == false) {
      var todaytester = Date.today().toString(dateformat);
      var dispatchtester = Date.today()
    }

    if (todaytester < dispatchtester) {
     samedate = true;
   } else {
     samedate = false;
   }

    if (deliverystage == 1 && testmode == true) {
      date1 = Date.today().set({ day: livetestdate }).toString(dateformat)
    } else if (deliverystage == 2 && testmode == true && samedate == false) {
      date1 = Date.today().set({ day: livetestdate }).addDays(interval1).toString(dateformat)
      date2 = Date.today().set({ day: livetestdate}).toString(dateformat)
    } else if (deliverystage == 2 && testmode == true && samedate == true) {
      date1 = Date.today().set({ day: livetestdate}).toString(dateformat)
      date2 = Date.today().set({ day: livetestdate}).toString(dateformat)
    } else if (deliverystage == 3 && testmode == true) {
      date1 = Date.today().set({ day: livetestdate }).addDays(interval2).toString(dateformat)
      date2 = Date.today().set({ day: livetestdate }).addDays(interval1).toString(dateformat)
      date3 = Date.today().set({ day: livetestdate}).toString(dateformat)
    } else if (deliverystage == 4 && testmode == true) {
      date1 = Date.today().set({ day: livetestdate }).addDays(interval3).toString(dateformat)
      date2 = Date.today().set({ day: livetestdate }).addDays(interval2).toString(dateformat)
      date3 = Date.today().set({ day: livetestdate }).addDays(interval1).toString(dateformat)
      date4 = Date.today().set({ day: livetestdate }).toString(dateformat)
    }


    if (deliverystage == 1 && testmode == false) {
      date1 = Date.today().toString(dateformat)
    } else if (deliverystage == 2 && testmode == false && samedate == false) {
      date1 = Date.today().addDays(interval1).toString(dateformat)
      date2 = Date.today().toString(dateformat)
   }  else if (deliverystage == 2 && testmode == false && samedate == true) {
      date1 = Date.today().toString(dateformat)
      date2 = Date.today().toString(dateformat)
    } else if (deliverystage == 3 && testmode == false) {
      date1 = Date.today().addDays(interval2).toString(dateformat)
      date2 = Date.today().addDays(interval1).toString(dateformat)
      date3 = Date.today().toString(dateformat)
    } else if (deliverystage == 4 && testmode == false) {
      date1 = Date.today().addDays(interval3).toString(dateformat)
      date2 = Date.today().addDays(interval2).toString(dateformat)
      date3 = Date.today().addDays(interval1).toString(dateformat)
      date4 = Date.today().toString(dateformat)
    }

    var currentlocation;

    if (deliverystage == 1) {
      currentlocation = "HOXTON,UK"
    } else if (deliverystage == 2) {
        currentlocation = midlocation2
    } else if (deliverystage == 3) {
        currentlocation = midlocation3
    } else if (deliverystage == 4) {
        currentlocation = "HOXTON,UK"
    }


    // UPDATES AT DELIVERY STAGE 1

    if (deliverystage >= 1) {
      document.getElementById("d1").innerHTML = date1;
      document.getElementById("p1").innerHTML = update1;
      document.getElementById("l1").innerHTML = "HOXTON, UK";
    } else {
      document.getElementById("l1").innerHTML = "";
      document.getElementById("d1").innerHTML = "";
      document.getElementById("p1").innerHTML = "";
    }

    p.push();
    p1.style('color', '#636363');
    p1.style('position', 'absolute');
    p1.style('top', String(row1Y) + 'px');
    p1.style('left', String(statusX) + 'px');
    p1.style('width', String(statusW) + 'px');
    p1.style('font-size', String(10*textscale) + 'pt');
    p1.style('font-family', 'Roman');
    p.pop();

    p.push();
    l1.style('color', '#f47920');
    l1.style('position', 'absolute');
    l1.style('top', String(row1Y + (8*scale)) + 'px');
    l1.style('left', String(locationX) + 'px');
    l1.style('width', String(locationW) + 'px');
    l1.style('font-size', String(7*textscale) + 'pt');
    l1.style('font-family', 'BoldItalic');
    p.pop();

    // UPDATES AT DELIVERY STAGE 2

    if (deliverystage >= 2) {
      callShuffle = true;
      document.getElementById("d2").innerHTML = date2;
      document.getElementById("p2").innerHTML = update2;
      document.getElementById("l2").innerHTML = midlocation2;
    } else {
      document.getElementById("d2").innerHTML = "";
      document.getElementById("p2").innerHTML = "";
      document.getElementById("l2").innerHTML = "";
    }

    p.push();
    p2.style('color', '#636363');
    p2.style('position', 'absolute');
    p2.style('top', String(row2Y) + 'px');
    p2.style('left', String(statusX) + 'px');
    p2.style('width', String(statusW) + 'px');
    p2.style('font-size', String(10*textscale) + 'pt');
    p2.style('font-family', 'Roman');
    p.pop();

    p.push();

    l2.style('color', '#f47920');
    l2.style('position', 'absolute');
    l2.style('top', String(row2Y + (8*scale)) + 'px');
    l2.style('left', String(locationX) + 'px');
    l2.style('width', String(locationW) + 'px');
    l2.style('font-size', String(7*textscale) + 'pt');
    l2.style('font-family', 'BoldItalic');
    p.pop();

    // UPDATES AT DELIVERY STAGE 3

    if (deliverystage >= 3) {
      callShuffle = true;
      document.getElementById("d3").innerHTML = date3;
      document.getElementById("p3").innerHTML = update3;
      document.getElementById("l3").innerHTML = midlocation3;
    } else {
      document.getElementById("d3").innerHTML = "";
      document.getElementById("p3").innerHTML = "";
      document.getElementById("l3").innerHTML = "";
    }

    p.push();
    p3.style('color', '#636363');
    p3.style('position', 'absolute');
    p3.style('top', String(row3Y) + 'px');
    p3.style('left', String(statusX) + 'px');
    p3.style('width', String(statusW) + 'px');
    p3.style('font-size', String(10*textscale) + 'pt');
    p3.style('font-family', 'Roman');
    p.pop();

    p.push();
    l3.style('color', '#f47920');
    l3.style('position', 'absolute');
    l3.style('top', String(row3Y + (8*scale)) + 'px');
    l3.style('left', String(locationX) + 'px');
    l3.style('width', String(locationW) + 'px');
    l3.style('font-size', String(7*textscale) + 'pt');
    l3.style('font-family', 'BoldItalic');
    p.pop();

    // UPDATES AT DELIVERY STAGE 4

    if (deliverystage >= 4) {
      callShuffle = true;
      document.getElementById("d4").innerHTML = date4;
      document.getElementById("p4").innerHTML = update4;
      document.getElementById("l4").innerHTML = midlocation1;
    } else {
      document.getElementById("d4").innerHTML = "";
      document.getElementById("p4").innerHTML = "";
      document.getElementById("l4").innerHTML = "";
    }

    p.push();
    p4.style('color', '#636363');
    p4.style('position', 'absolute');
    p4.style('top', String(row4Y) + 'px');
    p4.style('left', String(statusX) + 'px');
    p4.style('width', String(statusW) + 'px');
    p4.style('font-size', String(10*textscale) + 'pt');
    p4.style('font-family', 'Roman');
    p.pop();

    p.push();
    l4.style('color', '#f47920');
    l4.style('position', 'absolute');
    l4.style('top', String(row4Y + (8*scale)) + 'px');
    l4.style('left', String(locationX) + 'px');
    l4.style('width', String(locationW) + 'px');
    l4.style('font-size', String(7*textscale) + 'pt');
    l4.style('font-family', 'BoldItalic');
    p.pop();

    //DATE1
    p.push();
    d1.style('color', '#636363');
    d1.style('position', 'absolute');
    d1.style('top', String(row1Y) + 'px');
    d1.style('left', String(infoX) + 'px');
    d1.style('width', String(dateW) + 'px');
    d1.style('font-size', String(10*textscale) + 'pt');
    d1.style('font-family', 'Thin');
    p.pop();

    //DATE2
    p.push();
    d2.style('color', '#636363');
    d2.style('position', 'absolute');
    d2.style('top', String(row2Y) + 'px');
    d2.style('left', String(infoX) + 'px');
    d2.style('width', String(dateW) + 'px');
    d2.style('font-size', String(10*textscale) + 'pt');
    d2.style('font-family', 'Thin');
    p.pop();

    //DATE3
    p.push();
    d3.style('color', '#636363');
    d3.style('position', 'absolute');
    d3.style('top', String(row3Y) + 'px');
    d3.style('left', String(infoX) + 'px');
    d3.style('width', String(dateW) + 'px');
    d3.style('font-size', String(10*textscale) + 'pt');
    d3.style('font-family', 'Thin');
    p.pop();

    //DATE4
    p.push();
    d4.style('color', '#636363');
    d4.style('position', 'absolute');
    d4.style('top', String(row4Y) + 'px');
    d4.style('left', String(infoX) + 'px');
    d4.style('width', String(dateW) + 'px');
    d4.style('font-size', String(10*textscale) + 'pt');
    d4.style('font-family', 'Thin');
    p.pop();


    p.push();
    p.fill(textcolor)
    p.textAlign(p.CENTER, p.TOP);
    p.textSize(13.5*scale)
    p.textFont("BoldItalic")
    p.text(currentlocation, boundaryX, (315*scale));
    p.pop();

  }


  p.draw = function() {
    if (testmode == true) {
      testslider.position(p.windowWidth/2 - (70), infobottomY-20)
    }
    p.monsterInfo();
    p.background(188,188,188);
    p.screenScaler();
    p.textScaler();
    p.drawBoundary();
    p.drawElements();
    p.drawText();
    p.trackingInfo();
    p.goMap();
    p.goHome();
    // console.log(monster, location)
  }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);

  }

  };

var myp5 = new p5(two, 'screen2');
