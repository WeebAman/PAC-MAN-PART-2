var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5905e48c-30af-4761-9b66-20802abc9331","4da4dab4-c655-4793-81a4-c0314c591b2a","3aea90b6-a2ce-4413-ac9f-185a46c45a32","02d70dd7-055c-4053-a8ff-7a2318bf8e79","ad58f653-08f8-4bb8-ba13-9044faa6de1b","66b6c40c-cdde-48be-8cbf-6e4f2f2579c8","8d99e156-c382-4013-930e-60a9096f198f","81333e68-8002-4f3d-a3a3-4a113b48fb60","16efb6eb-b275-4896-b656-8a070a61ea0b","210c854d-360c-4afb-b51f-446b65b9aeb1","c8ab09fc-e680-421d-a0cf-bd6425a64347","9981c3f1-9be7-4465-b2e3-98564f2a5004","912dad4b-6537-43ff-b286-8266c49a5f15","59b51d78-badd-4604-af48-80b710fe0d1a","7c18768d-a107-40c8-a216-cf826037ae96","f7f5e524-9521-430a-a466-263f0ff6c11d","461cb557-5984-4eab-a1d9-e7b5778f9bb2"],"propsByKey":{"5905e48c-30af-4761-9b66-20802abc9331":{"name":"pacmanR","sourceUrl":null,"frameSize":{"x":13,"y":13},"frameCount":2,"looping":true,"frameDelay":5,"version":"MZYI1lq7YnZIw1UGDVIqBuIPB9NxVjNd","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":26},"rootRelativePath":"assets/5905e48c-30af-4761-9b66-20802abc9331.png"},"4da4dab4-c655-4793-81a4-c0314c591b2a":{"name":"pacmanL","sourceUrl":null,"frameSize":{"x":13,"y":13},"frameCount":2,"looping":true,"frameDelay":5,"version":".v7ABOcgO6KRXqjRMCbg1zQdpxeYunDu","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":26},"rootRelativePath":"assets/4da4dab4-c655-4793-81a4-c0314c591b2a.png"},"3aea90b6-a2ce-4413-ac9f-185a46c45a32":{"name":"pacmanU","sourceUrl":null,"frameSize":{"x":13,"y":13},"frameCount":2,"looping":true,"frameDelay":5,"version":"GE.3.OXen9m8lW54Rm6szmRUdjL0gJC4","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":26},"rootRelativePath":"assets/3aea90b6-a2ce-4413-ac9f-185a46c45a32.png"},"02d70dd7-055c-4053-a8ff-7a2318bf8e79":{"name":"pacmanD","sourceUrl":null,"frameSize":{"x":13,"y":13},"frameCount":2,"looping":true,"frameDelay":5,"version":"c15MXy.nHI8AktdRLsl2ZE3ZHl312pOm","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":26},"rootRelativePath":"assets/02d70dd7-055c-4053-a8ff-7a2318bf8e79.png"},"ad58f653-08f8-4bb8-ba13-9044faa6de1b":{"name":"wall","sourceUrl":null,"frameSize":{"x":26,"y":3},"frameCount":1,"looping":true,"frameDelay":12,"version":"dXpZKU2gGYSgZbwiUD0V86VgF7J0oRHj","loadedFromSource":true,"saved":true,"sourceSize":{"x":26,"y":3},"rootRelativePath":"assets/ad58f653-08f8-4bb8-ba13-9044faa6de1b.png"},"66b6c40c-cdde-48be-8cbf-6e4f2f2579c8":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":3},"frameCount":1,"looping":true,"frameDelay":12,"version":"V7L.J877C6i7AgPmhMDVuTegaNhoyGUi","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":3},"rootRelativePath":"assets/66b6c40c-cdde-48be-8cbf-6e4f2f2579c8.png"},"8d99e156-c382-4013-930e-60a9096f198f":{"name":"coin","sourceUrl":null,"frameSize":{"x":4,"y":4},"frameCount":1,"looping":true,"frameDelay":12,"version":"VU0Lyy2Q6N0cIcteSPPqIy3e5vxL6gsa","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":4},"rootRelativePath":"assets/8d99e156-c382-4013-930e-60a9096f198f.png"},"81333e68-8002-4f3d-a3a3-4a113b48fb60":{"name":"ghost1","sourceUrl":null,"frameSize":{"x":16,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"0a3wJo9KpSBVzuYBBPBjxC262KEdf3Cd","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":15},"rootRelativePath":"assets/81333e68-8002-4f3d-a3a3-4a113b48fb60.png"},"16efb6eb-b275-4896-b656-8a070a61ea0b":{"name":"ghost2","sourceUrl":null,"frameSize":{"x":16,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"S_tFEM9N2n_O18Wfx.tQqmN_6LmdHTrC","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":15},"rootRelativePath":"assets/16efb6eb-b275-4896-b656-8a070a61ea0b.png"},"210c854d-360c-4afb-b51f-446b65b9aeb1":{"name":"ghost3","sourceUrl":null,"frameSize":{"x":16,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"JZEP.yEwobZNBCAiiXwOy.zQJ987ixIR","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":15},"rootRelativePath":"assets/210c854d-360c-4afb-b51f-446b65b9aeb1.png"},"c8ab09fc-e680-421d-a0cf-bd6425a64347":{"name":"ghost4","sourceUrl":null,"frameSize":{"x":16,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"We_RXJBKHOhT90oMAKw8ABIgrP8zvspO","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":15},"rootRelativePath":"assets/c8ab09fc-e680-421d-a0cf-bd6425a64347.png"},"9981c3f1-9be7-4465-b2e3-98564f2a5004":{"name":"blueghost","sourceUrl":null,"frameSize":{"x":16,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"UinAyYAtKbkUptyf3x.RtyuGff9TEHK0","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":15},"rootRelativePath":"assets/9981c3f1-9be7-4465-b2e3-98564f2a5004.png"},"912dad4b-6537-43ff-b286-8266c49a5f15":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":23,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"roNKObVBv4njrH_sOCc5vWOJ._nmUT4R","loadedFromSource":true,"saved":true,"sourceSize":{"x":23,"y":25},"rootRelativePath":"assets/912dad4b-6537-43ff-b286-8266c49a5f15.png"},"59b51d78-badd-4604-af48-80b710fe0d1a":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":13,"y":3},"frameCount":1,"looping":true,"frameDelay":12,"version":"G4WR6qaXd0YDPekcqKQ60hHaivA5zyh7","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":3},"rootRelativePath":"assets/59b51d78-badd-4604-af48-80b710fe0d1a.png"},"7c18768d-a107-40c8-a216-cf826037ae96":{"name":"heart","sourceUrl":null,"frameSize":{"x":14,"y":11},"frameCount":1,"looping":true,"frameDelay":12,"version":"_szkWFlR.9S7dJSNwbbkyF3MxwKruwaM","loadedFromSource":true,"saved":true,"sourceSize":{"x":14,"y":11},"rootRelativePath":"assets/7c18768d-a107-40c8-a216-cf826037ae96.png"},"f7f5e524-9521-430a-a466-263f0ff6c11d":{"name":"Game Over","sourceUrl":null,"frameSize":{"x":22,"y":13},"frameCount":1,"looping":true,"frameDelay":12,"version":"8yDKp3_Y5.ZJaTKHskmqGezszoqRbxHx","loadedFromSource":true,"saved":true,"sourceSize":{"x":22,"y":13},"rootRelativePath":"assets/f7f5e524-9521-430a-a466-263f0ff6c11d.png"},"461cb557-5984-4eab-a1d9-e7b5778f9bb2":{"name":"winner","sourceUrl":null,"frameSize":{"x":28,"y":19},"frameCount":1,"looping":true,"frameDelay":12,"version":"BTVVWeWz2AxHkfBEdKUsG5xFY.oZcPyM","loadedFromSource":true,"saved":true,"sourceSize":{"x":28,"y":19},"rootRelativePath":"assets/461cb557-5984-4eab-a1d9-e7b5778f9bb2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Create your variables here
var score = 0;
var lives = 3;
var timer = 5;
var score1 = 0; 

// Create your sprites here
var pacman = createSprite(20, 122);
pacman.setAnimation("pacmanR");
pacman.velocityX = 0;
pacman.scale = 1.1;

var heart1 = createSprite(115, 350);
heart1.setAnimation("heart");
heart1.scale = 2;
var heart2 = createSprite(200, 350);
heart2.setAnimation("heart");
heart2.scale = 2;
var heart3 = createSprite(285, 350);
heart3.setAnimation("heart");
heart3.scale = 2;

//Walls
var wall = createSprite(0, 110);
wall.setAnimation("wall");
wall.scale = 3;

var wall2 = createSprite(400, 110);
wall2.setAnimation("wall");
wall2.scale = 3;

var wall3 = createSprite(0, 135);
wall3.setAnimation("wall");
wall3.scale = 3;

var wall4 = createSprite(400, 135);
wall4.setAnimation("wall");
wall4.scale = 3;

var wall5 = createSprite(35, 67);
wall5.setAnimation("wall");
wall5.scale = 3;
wall5.rotation = 90;

var wall6 = createSprite(366, 67);
wall6.setAnimation("wall");
wall6.scale = 3;
wall6.rotation = 90;

var wall7 = createSprite(200, 20);
wall7.setAnimation("animation_1");
wall7.scale = 3.4;

var wall8 = createSprite(65, 82);
wall8.setAnimation("wall");
wall8.scale = 2.7;
wall8.rotation = 90;

var wall9 = createSprite(340, 82);
wall9.setAnimation("wall");
wall9.scale = 2.7;
wall9.rotation = 90;

var wall10 = createSprite(200, 50);
wall10.setAnimation("wall");
wall10.scale = 3;

var wall11 = createSprite(237, 79);
wall11.setAnimation("wall");
wall11.scale = 2.5;
wall11.rotation = 90;

var wall12 = createSprite(193, 135);
wall12.setAnimation("wall");
wall12.scale = 3;

var wall13 = createSprite(205, 135);
wall13.setAnimation("wall");
wall13.scale = 3;

var wall14 = createSprite(200, 100);
wall14.setAnimation("animation_2");
wall14.scale = 4.5;
wall14.rotation = 90;

var wall15 = createSprite(100, 135);
wall15.setAnimation("wall");
wall15.scale = 4;
wall15.rotation = 90;

var wall16 = createSprite(77, 138);
wall16.setAnimation("animation_2");
wall16.scale = 3;

var wall17 = createSprite(300, 135);
wall17.setAnimation("wall");
wall17.scale = 4;
wall17.rotation = 90;

var wall18 = createSprite(325, 137);
wall18.setAnimation("animation_2");
wall18.scale = 3;

var wall19 = createSprite(200, 180);
wall19.setAnimation("wall");
wall19.scale = 3;

var wall20 = createSprite(237, 210);
wall20.setAnimation("wall");
wall20.scale = 2.5;
wall20.rotation = 90;

var wall21 = createSprite(63, 210);
wall21.setAnimation("wall");
wall21.scale = 3;
wall21.rotation = 90;

var wall22 = createSprite(335, 210);
wall22.setAnimation("wall");
wall22.scale = 3;
wall22.rotation = 90;

var wall23 = createSprite(200, 240);
wall23.setAnimation("wall");
wall23.scale = 3;
wall23.rotation = 90;

var wall24 = createSprite(270, 275);
wall24.setAnimation("wall");
wall24.scale = 3;

var wall25 = createSprite(300, 275);
wall25.setAnimation("wall");
wall25.scale = 3;

var wall26 = createSprite(300, 246);
wall26.setAnimation("animation_2");
wall26.scale = 4;
wall26.rotation = 90;

var wall27 = createSprite(95, 275);
wall27.setAnimation("wall");
wall27.scale = 3;

var wall28 = createSprite(125, 275);
wall28.setAnimation("wall");
wall28.scale = 3;

var wall29 = createSprite(100, 246);
wall29.setAnimation("animation_2");
wall29.scale = 4;
wall29.rotation = 90;

var wall30 = createSprite(0, 275);
wall30.setAnimation("wall");
wall30.scale = 3;

var wall31 = createSprite(0, 243);
wall31.setAnimation("wall");
wall31.scale = 3;

var wall32 = createSprite(400, 275);
wall32.setAnimation("wall");
wall32.scale = 3;

var wall33 = createSprite(400, 243);
wall33.setAnimation("wall");
wall33.scale = 3;

var wall34 = createSprite(370, 190);
wall34.setAnimation("wall");
wall34.scale = 3.7;
wall34.rotation = 90;

var wall35 = createSprite(32, 190);
wall35.setAnimation("wall");
wall35.scale = 3.7;
wall35.rotation = 90;

var wall36 = createSprite(200, 300);
wall36.setAnimation("animation_1");
wall36.scale = 3.4;

var wall37 = createSprite(365, 287);
wall37.setAnimation("animation_2");
wall37.scale = 2.5;
wall37.rotation = 90;

var wall38 = createSprite(35, 287);
wall38.setAnimation("animation_2");
wall38.scale = 2.5;
wall38.rotation = 90;

var wall39 = createSprite(165, 79);
wall39.setAnimation("wall");
wall39.scale = 2.5;
wall39.rotation = 90;

var wall40 = createSprite(315, 52);
wall40.setAnimation("animation_2");
wall40.scale = 3.5;

var wall41 = createSprite(85, 47.5);
wall41.setAnimation("animation_2");
wall41.scale = 3.8;

var wall42 = createSprite(165, 210);
wall42.setAnimation("wall");
wall42.scale = 2.5;
wall42.rotation = 90;

var wall43 = createSprite(35, 197);
wall43.setAnimation("wall");
wall43.scale = 2.5;
wall43.rotation = 90;

var wall44 = createSprite(370, 185);
wall44.setAnimation("wall");
wall44.scale = 2.5;
wall44.rotation = 90;

//Coins
var coin = createSprite(48, 39);
coin.setAnimation("coin");
var coin2 = createSprite(48, 54);
coin2.setAnimation("coin");
var coin3 = createSprite(48, 69);
coin3.setAnimation("coin");
var coin4 = createSprite(48, 84);
coin4.setAnimation("coin");
var coin5 = createSprite(48, 99);
coin5.setAnimation("coin");
var coin6 = createSprite(48, 114);
coin6.setAnimation("coin");
var coin7 = createSprite(48, 129);
coin7.setAnimation("coin");
var coin8 = createSprite(48, 144);
coin8.setAnimation("coin");
var coin9 = createSprite(48, 159);
coin9.setAnimation("coin");
var coin10 = createSprite(48, 174);
coin10.setAnimation("coin");
var coin11 = createSprite(48, 189);
coin11.setAnimation("coin");
var coin12 = createSprite(48, 204);
coin12.setAnimation("coin");
var coin13 = createSprite(48, 219);
coin13.setAnimation("coin");
var coin14 = createSprite(48, 234);
coin14.setAnimation("coin");
var coin15 = createSprite(48, 249);
coin15.setAnimation("coin");
var coin16 = createSprite(48, 264);
coin16.setAnimation("coin");
var coin17 = createSprite(48, 279);
coin17.setAnimation("coin");
var coin18 = createSprite(60, 288);
coin18.setAnimation("coin");
var coin19 = createSprite(75, 288);
coin19.setAnimation("coin");
var coin20 = createSprite(90, 288);
coin20.setAnimation("coin");
coin20.scale = 2.5;
var coin21 = createSprite(105, 288);
coin21.setAnimation("coin");
var coin22 = createSprite(120, 288);
coin22.setAnimation("coin");
var coin23 = createSprite(135, 288);
coin23.setAnimation("coin");
var coin24 = createSprite(150, 288);
coin24.setAnimation("coin");
var coin25 = createSprite(165, 288);
coin25.setAnimation("coin");
var coin26 = createSprite(180, 288);
coin26.setAnimation("coin");
var coin27 = createSprite(195, 288);
coin27.setAnimation("coin");
var coin28 = createSprite(210, 288);
coin28.setAnimation("coin");
var coin29 = createSprite(225, 288);
coin29.setAnimation("coin");
var coin30 = createSprite(240, 288);
coin30.setAnimation("coin");
var coin31 = createSprite(255, 288);
coin31.setAnimation("coin");
var coin32 = createSprite(270, 288);
coin32.setAnimation("coin");
var coin33 = createSprite(285, 288);
coin33.setAnimation("coin");
var coin34 = createSprite(300, 288);
coin34.setAnimation("coin");
var coin35 = createSprite(315, 288);
coin35.setAnimation("coin");
var coin36 = createSprite(330, 288);
coin36.setAnimation("coin");
var coin37 = createSprite(345, 288);
coin37.setAnimation("coin");
var coin38 = createSprite(352, 275);
coin38.setAnimation("coin");
var coin39 = createSprite(352, 260);
coin39.setAnimation("coin");
var coin40 = createSprite(352, 245);
coin40.setAnimation("coin");
var coin41 = createSprite(352, 230);
coin41.setAnimation("coin");
var coin42 = createSprite(352, 215);
coin42.setAnimation("coin");
var coin43 = createSprite(352, 200);
coin43.setAnimation("coin");
var coin44 = createSprite(352, 185);
coin44.setAnimation("coin");
var coin45 = createSprite(352, 170);
coin45.setAnimation("coin");
var coin46 = createSprite(352, 155);
coin46.setAnimation("coin");
var coin47 = createSprite(352, 140);
coin47.setAnimation("coin");
var coin48 = createSprite(352, 125);
coin48.setAnimation("coin");
var coin49 = createSprite(352, 110);
coin49.setAnimation("coin");
var coin50 = createSprite(352, 95);
coin50.setAnimation("coin");
var coin51 = createSprite(352, 80);
coin51.setAnimation("coin");
var coin52 = createSprite(352, 65);
coin52.setAnimation("coin");
var coin53 = createSprite(352, 50);
coin53.setAnimation("coin");
var coin54 = createSprite(340, 38);
coin54.setAnimation("coin");
var coin55 = createSprite(325, 38);
coin55.setAnimation("coin");
var coin56 = createSprite(310, 38);
coin56.setAnimation("coin");
var coin57 = createSprite(295, 38);
coin57.setAnimation("coin");
coin57.scale = 2.5;
var coin58 = createSprite(280, 38);
coin58.setAnimation("coin");
var coin59 = createSprite(265, 38);
coin59.setAnimation("coin");
var coin60 = createSprite(250, 38);
coin60.setAnimation("coin");
var coin61 = createSprite(235, 38);
coin61.setAnimation("coin");
var coin62 = createSprite(220, 38);
coin62.setAnimation("coin");
var coin63 = createSprite(205, 38);
coin63.setAnimation("coin");
var coin64 = createSprite(190, 38);
coin64.setAnimation("coin");
var coin65 = createSprite(175, 38);
coin65.setAnimation("coin");
var coin66 = createSprite(160, 38);
coin66.setAnimation("coin");
var coin67 = createSprite(145, 38);
coin67.setAnimation("coin");
var coin68 = createSprite(130, 38);
coin68.setAnimation("coin");
var coin69 = createSprite(115, 38);
coin69.setAnimation("coin");
var coin70 = createSprite(100, 38);
coin70.setAnimation("coin");
var coin71 = createSprite(85, 38);
coin71.setAnimation("coin");
var coin72 = createSprite(70, 38);
coin72.setAnimation("coin");
var coin73 = createSprite(80, 70);
coin73.setAnimation("coin");
coin73.scale = 2.5;
var coin74 = createSprite(80, 85);
coin74.setAnimation("coin");
var coin75 = createSprite(80, 100);
coin75.setAnimation("coin");
var coin76 = createSprite(80, 115);
coin76.setAnimation("coin");
var coin77 = createSprite(320, 70);
coin77.setAnimation("coin");
var coin78 = createSprite(320, 85);
coin78.setAnimation("coin");
var coin79 = createSprite(320, 100);
coin79.setAnimation("coin");
var coin80 = createSprite(320, 115);
coin80.setAnimation("coin");
var coin81 = createSprite(320, 155);
coin81.setAnimation("coin");
var coin82 = createSprite(320, 170);
coin82.setAnimation("coin");
var coin83 = createSprite(320, 185);
coin83.setAnimation("coin");
var coin84 = createSprite(320, 200);
coin84.setAnimation("coin");
var coin85 = createSprite(320, 215);
coin85.setAnimation("coin");
var coin86 = createSprite(320, 230);
coin86.setAnimation("coin");
var coin87 = createSprite(320, 245);
coin87.setAnimation("coin");
var coin88 = createSprite(320, 260);
coin88.setAnimation("coin");
var coin89 = createSprite(80, 155);
coin89.setAnimation("coin");
var coin90 = createSprite(80, 170);
coin90.setAnimation("coin");
var coin91 = createSprite(80, 185);
coin91.setAnimation("coin");
var coin92 = createSprite(80, 200);
coin92.setAnimation("coin");
var coin93 = createSprite(80, 215);
coin93.setAnimation("coin");
var coin94 = createSprite(80, 230);
coin94.setAnimation("coin");
var coin95 = createSprite(80, 245);
coin95.setAnimation("coin");
var coin96 = createSprite(80, 260);
coin96.setAnimation("coin");
var coin97 = createSprite(122, 53);
coin97.setAnimation("coin");
var coin98 = createSprite(122, 68);
coin98.setAnimation("coin");
var coin99 = createSprite(122, 83);
coin99.setAnimation("coin");
var coin100 = createSprite(122, 98);
coin100.setAnimation("coin");
var coin101 = createSprite(122, 113);
coin101.setAnimation("coin");
var coin102 = createSprite(122, 128);
coin102.setAnimation("coin");
var coin103 = createSprite(122, 143);
coin103.setAnimation("coin");
var coin104 = createSprite(122, 158);
coin104.setAnimation("coin");
var coin105 = createSprite(122, 173);
coin105.setAnimation("coin");
var coin106 = createSprite(122, 188);
coin106.setAnimation("coin");
var coin107 = createSprite(122, 203);
coin107.setAnimation("coin");
var coin108 = createSprite(122, 218);
coin108.setAnimation("coin");
var coin109 = createSprite(122, 233);
coin109.setAnimation("coin");
var coin110 = createSprite(122, 248);
coin110.setAnimation("coin");
var coin111 = createSprite(122, 263);
coin111.setAnimation("coin");
var coin112 = createSprite(148, 53);
coin112.setAnimation("coin");
var coin113 = createSprite(148, 68);
coin113.setAnimation("coin");
var coin114 = createSprite(148, 83);
coin114.setAnimation("coin");
var coin115 = createSprite(148, 98);
coin115.setAnimation("coin");
var coin116 = createSprite(148, 113);
coin116.setAnimation("coin");
var coin117 = createSprite(148, 128);
coin117.setAnimation("coin");
var coin118 = createSprite(148, 143);
coin118.setAnimation("coin");
var coin119 = createSprite(148, 158);
coin119.setAnimation("coin");
var coin120 = createSprite(148, 173);
coin120.setAnimation("coin");
var coin121 = createSprite(148, 188);
coin121.setAnimation("coin");
var coin122 = createSprite(148, 203);
coin122.setAnimation("coin");
var coin123 = createSprite(148, 218);
coin123.setAnimation("coin");
var coin124 = createSprite(148, 233);
coin124.setAnimation("coin");
var coin125 = createSprite(148, 248);
coin125.setAnimation("coin");
var coin126 = createSprite(148, 263);
coin126.setAnimation("coin");
var coin127 = createSprite(252, 53);
coin127.setAnimation("coin");
var coin128 = createSprite(252, 68);
coin128.setAnimation("coin");
var coin129 = createSprite(252, 83);
coin129.setAnimation("coin");
var coin130 = createSprite(252, 98);
coin130.setAnimation("coin");
var coin131 = createSprite(252, 113);
coin131.setAnimation("coin");
var coin132 = createSprite(252, 128);
coin132.setAnimation("coin");
var coin133 = createSprite(252, 143);
coin133.setAnimation("coin");
var coin134 = createSprite(252, 158);
coin134.setAnimation("coin");
var coin135 = createSprite(252, 173);
coin135.setAnimation("coin");
var coin136 = createSprite(252, 188);
coin136.setAnimation("coin");
var coin137 = createSprite(252, 203);
coin137.setAnimation("coin");
var coin138 = createSprite(252, 218);
coin138.setAnimation("coin");
var coin139 = createSprite(252, 233);
coin139.setAnimation("coin");
var coin140 = createSprite(252, 248);
coin140.setAnimation("coin");
var coin141 = createSprite(252, 263);
coin141.setAnimation("coin");
var coin142 = createSprite(280, 53);
coin142.setAnimation("coin");
var coin143 = createSprite(280, 68);
coin143.setAnimation("coin");
var coin144 = createSprite(280, 83);
coin144.setAnimation("coin");
var coin145 = createSprite(280, 98);
coin145.setAnimation("coin");
var coin146 = createSprite(280, 113);
coin146.setAnimation("coin");
var coin147 = createSprite(280, 128);
coin147.setAnimation("coin");
var coin148 = createSprite(280, 143);
coin148.setAnimation("coin");
var coin149 = createSprite(280, 158);
coin149.setAnimation("coin");
var coin150 = createSprite(280, 173);
coin150.setAnimation("coin");
var coin151 = createSprite(280, 188);
coin151.setAnimation("coin");
var coin152 = createSprite(280, 203);
coin152.setAnimation("coin");
var coin153 = createSprite(280, 218);
coin153.setAnimation("coin");
var coin154 = createSprite(280, 233);
coin154.setAnimation("coin");
var coin155 = createSprite(280, 248);
coin155.setAnimation("coin");
var coin156 = createSprite(280, 263);
coin156.setAnimation("coin");
var coin157 = createSprite(179, 66);
coin157.setAnimation("coin");
var coin158 = createSprite(179, 81);
coin158.setAnimation("coin");
var coin159 = createSprite(179, 96);
coin159.setAnimation("coin");
var coin160 = createSprite(179, 111);
coin160.setAnimation("coin");
var coin161 = createSprite(220, 66);
coin161.setAnimation("coin");
var coin162 = createSprite(220, 81);
coin162.setAnimation("coin");
var coin163 = createSprite(220, 96);
coin163.setAnimation("coin");
var coin164 = createSprite(220, 111);
coin164.setAnimation("coin");
var coin165 = createSprite(179, 196);
coin165.setAnimation("coin");
var coin166 = createSprite(179, 211);
coin166.setAnimation("coin");
var coin167 = createSprite(179, 226);
coin167.setAnimation("coin");
var coin168 = createSprite(179, 241);
coin168.setAnimation("coin");
var coin169 = createSprite(179, 256);
coin169.setAnimation("coin");
var coin170 = createSprite(179, 271);
coin170.setAnimation("coin");
var coin171 = createSprite(220, 196);
coin171.setAnimation("coin");
var coin172 = createSprite(220, 211);
coin172.setAnimation("coin");
var coin173 = createSprite(220, 226);
coin173.setAnimation("coin");
coin173.scale = 2.5;
var coin174 = createSprite(220, 241);
coin174.setAnimation("coin");
var coin175 = createSprite(220, 256);
coin175.setAnimation("coin");
var coin176 = createSprite(220, 271);
coin176.setAnimation("coin");
var coin177 = createSprite(200, 65);
coin177.setAnimation("coin");
var coin178 = createSprite(200, 195);
coin178.setAnimation("coin");
var coin179 = createSprite(160, 152);
coin179.setAnimation("coin");
var coin180 = createSprite(175, 152);
coin180.setAnimation("coin");
var coin181 = createSprite(190, 152);
coin181.setAnimation("coin");
var coin182 = createSprite(205, 152);
coin182.setAnimation("coin");
var coin183 = createSprite(220, 152);
coin183.setAnimation("coin");
var coin184 = createSprite(235, 152);
coin184.setAnimation("coin");
var coin185 = createSprite(160, 166);
coin185.setAnimation("coin");
var coin186 = createSprite(175, 166);
coin186.setAnimation("coin");
var coin187 = createSprite(190, 166);
coin187.setAnimation("coin");
var coin188 = createSprite(205, 166);
coin188.setAnimation("coin");
var coin189 = createSprite(220, 166);
coin189.setAnimation("coin");
var coin190 = createSprite(235, 166);
coin190.setAnimation("coin");

var ghost1 = createSprite(49, 50);
ghost1.setAnimation("ghost1");
ghost1.scale = 1.2;
ghost1.velocityY = 5;

var ghost2 = createSprite(135, 43);
ghost2.setAnimation("ghost2");
ghost2.scale = 1.2;
ghost2.velocityY = 5;

var ghost3 = createSprite(77, 73);
ghost3.setAnimation("ghost3");
ghost3.scale = 1.2;
ghost3.velocityY = 5;

var ghost4 = createSprite(320, 193);
ghost4.setAnimation("ghost4");
ghost4.scale = 1.2;
ghost4.velocityY = -5;

var blue1 = createSprite(-490, 50);
blue1.scale = 1.2;
var blue2 = createSprite(-135, 43);
blue2.scale = 1.2;
var blue3 = createSprite(-77, 73);
blue3.scale = 1.2;
var blue4 = createSprite(-320, 193);
blue4.scale = 1.2;

pacman.debug = false;
ghost1.debug = false;
ghost2.debug = false;
ghost3.debug = false;
ghost4.debug = false;
wall17.debug = false;

function draw() {
  // draw background
  background("black");
  fill("white");
  textSize(20);
  text(score1, 190, 385);

  // update sprites
  pacmanControls();
  spriteCollide();
  loopEnds();
  
  //call winnerScore, coinScore, ghostCollide, ghostControls and heartLives
  winnerScore();
  coinScore();
  ghostControls();
  ghostCollide();
  heartLives();
  ghostTime1();
  ghostTime2();
  ghostTime3();
  ghostTime4();

  drawSprites();
}

// Create your functions here
function ghostTime1() {
  if (pacman.isTouching(coin73)) {
    timer = 5;
    blue1.setAnimation("blueghost");
    blue2.setAnimation("blueghost");
    blue3.setAnimation("blueghost");
    blue4.setAnimation("blueghost"); 
    
    blue1.visible = true;
    blue2.visible = true;
    blue3.visible = true;
    blue4.visible = true;
    
    ghost1.x = -100;
    ghost1.y = 100;
    ghost2.x = -100;
    ghost2.y = 100;
    ghost3.x = -100;
    ghost3.y = 100;
    ghost4.x = -100;
    ghost4.y = 100;
    
    ghost1.velocityX = 0;
    ghost1.velocityY = 0;
    ghost2.velocityX = 0;
    ghost2.velocityY = 0;
    ghost3.velocityX = 0;
    ghost3.velocityY = 0;
    ghost4.velocityX = 0;
    ghost4.velocityY = 0;
    
    blue1.velocityY = 5;
    blue2.velocityY = 5;
    blue3.velocityY = 5;
    blue4.velocityY = 5;
    
    blue1.x = 49;
    blue1.y = 50;
    blue2.x = 135;
    blue2.y = 43;
    blue3.x = 77;
    blue3.y = 73;
    blue4.x = 320;
    blue4.y = 193;
    
    coin73.visible = false;
    
    score = score + 10;
    score1 = score1 + 10;
    coin73.y = 400;
    coin73.x = 400;
  }
  if (blue1.x > 200) {
    timer = timer - 1;
  }
  if (timer == 0) {
    ghost1.x = 49;
    ghost1.y = 50;
    ghost1.velocityY = 5;
    ghost2.x = 135;
    ghost2.y = 43;
    ghost2.velocityY = 5;
    ghost3.x = 77;
    ghost3.y = 73;
    ghost3.velocityY = 5;
    ghost4.x = 320;
    ghost4.y = 193;
    ghost4.velocityY = 5;
    
    blue1.x = 400;
    blue1.y = 400;
    blue2.x = 400;
    blue2.y = 400;
    blue3.x = 400;
    blue3.y = 400;
    blue4.x = 400;
    blue4.y = 400;
   
    blue1.visible = false;
    blue2.visible = false;
    blue3.visible = false;
    blue4.visible = false;
  }
  if (blue1.y >= 284) {
    blue1.velocityY = 0;
    blue1.velocityX = 5;
  }
  if (blue1.x >= 350) {
    blue1.velocityY = -5;
    blue1.velocityX = 0;
  }
  if ((blue1.y) <= 40) {
    blue1.velocityY = 0;
    blue1.velocityX = -5;
  }
  if (blue1.isTouching(wall5)) {
    blue1.velocityY = 5;
    blue1.velocityX = 0;
  }
  if (blue2.isTouching(wall17)) {
    blue2.velocityX = 0;
    blue2.velocityY = -5;
  }
  if (blue2.isTouching(wall39)) {
    blue2.velocityY = 5;
    blue2.velocityX = 0;
  }
  if (blue2.y == 258) {
    blue2.velocityY = 0;
    blue2.velocityX = 5;
  }
  if (blue2.isTouching(wall23)) {
    blue2.velocityX = 0;
    blue2.velocityY = -5;
  }
  if (blue2.isTouching(wall19)) {
    blue2.velocityX = 5;
    blue2.velocityY = 0;
  }
  if (blue2.isTouching(wall20)) {
    blue2.velocityX = 0;
    blue2.velocityY = 5;
  }
  if (blue2.isTouching(wall26)) {
    blue2.velocityX = 0;
    blue2.velocityY = -5;
  }
  if (blue2.isTouching(wall7)) {
    blue2.velocityX = -5;
    blue2.velocityY = 0;
  }
  if (blue2.isTouching(wall41)) {
    blue2.velocityX = 0;
    blue2.velocityY = 5;
  }
  if (blue3.isTouching(wall16)) {
    blue3.velocityX = -5;
    blue3.velocityY = 0;
  }
  if (blue3.isTouching(wall3)) {
    blue3.velocityY = 5;
    blue3.velocityX = 0;
  }
  if (blue3.isTouching(wall43)) {
    blue3.velocityY = 0;
    blue3.velocityX = 5;
  }
  if (blue3.isTouching(wall15)) {
    blue3.velocityY = 5;
    blue3.velocityX = 0;
  }
  if (blue3.isTouching(wall29)) {
    blue3.velocityY = 0;
    blue3.velocityX = 5;
  }
  if (blue3.isTouching(wall42)) {
    blue3.velocityY = -5;
    blue3.velocityX = 0;
  }
  if ((blue3.y) <= 69) {
    blue3.velocityY = 0;
    blue3.velocityX = -5;
  }
  if (blue3.isTouching(wall8)) {
    blue3.velocityY = 5;
    blue3.velocityX = 0;
  }
  if (blue4.isTouching(wall18)) {
    blue4.velocityX = 5;
    blue4.velocityY = 0;
  }
  if (blue4.isTouching(wall44)) {
    blue4.velocityY = -5;
    blue4.velocityX = 0;
  }
  if (blue4.isTouching(wall2)) {
    blue4.velocityY = 0;
    blue4.velocityX = -5;
  }
  if (blue4.isTouching(wall17)) {
    blue4.velocityY = -5;
    blue4.velocityX = 0;
  }
  if (blue4.isTouching(wall40)) {
    blue4.velocityY = 0;
    blue4.velocityX = -5;
  }
  if (blue4.isTouching(wall11)) {
    blue4.velocityY = 5;
    blue4.velocityX = 0;
  }
  if (blue4.y >= 210) {
    blue4.velocityY = 0;
    blue4.velocityX = 5;
  }
  if (blue4.isTouching(wall22)) {
    blue4.velocityY = -5;
    blue4.velocityX = 0;
  }
  if (pacman.isTouching(blue1)) {
    blue1.visible = false;
    score1 = score1 + 10;
  }
  if (pacman.isTouching(blue2)) {
    blue2.visible = false;
    score1 = score1 + 10;
  }
  if (pacman.isTouching(blue3)) {
    blue3.visible = false;
    score1 = score1 + 10;
  }
  if (pacman.isTouching(blue4)) {
    blue4.visible = false;
    score1 = score1 + 10;
  }
  
}
function ghostTime2() {
  if (pacman.isTouching(coin173)) {
    timer = 5;
    blue1.setAnimation("blueghost");
    blue2.setAnimation("blueghost");
    blue3.setAnimation("blueghost");
    blue4.setAnimation("blueghost");
    
    blue1.visible = true;
    blue2.visible = true;
    blue3.visible = true;
    blue4.visible = true;
    
    ghost1.x = -100;
    ghost1.y = 100;
    ghost2.x = -100;
    ghost2.y = 100;
    ghost3.x = -100;
    ghost3.y = 100;
    ghost4.x = -100;
    ghost4.y = 100;
    
    ghost1.velocityX = 0;
    ghost1.velocityY = 0;
    ghost2.velocityX = 0;
    ghost2.velocityY = 0;
    ghost3.velocityX = 0;
    ghost3.velocityY = 0;
    ghost4.velocityX = 0;
    ghost4.velocityY = 0;
    
    blue1.velocityY = 5;
    blue2.velocityY = 5;
    blue3.velocityY = 5;
    blue4.velocityY = 5;
    
    blue1.x = 49;
    blue1.y = 50;
    blue2.x = 135;
    blue2.y = 43;
    blue3.x = 77;
    blue3.y = 73;
    blue4.x = 320;
    blue4.y = 193;
    
    coin173.visible = false;
    score = score + 10;
    score1 = score1 + 10;
    coin173.y = 400;
    coin173.x = 400;
  }
  if (blue1.x > 200) {
    timer = timer - 1;
  }
  if (timer == 0) {
    ghost1.x = 49;
    ghost1.y = 50;
    ghost1.velocityY = 5;
    ghost2.x = 135;
    ghost2.y = 43;
    ghost2.velocityY = 5;
    ghost3.x = 77;
    ghost3.y = 73;
    ghost3.velocityY = 5;
    ghost4.x = 320;
    ghost4.y = 193;
    ghost4.velocityY = 5;
    
    blue1.x = 400;
    blue1.y = 400;
    blue2.x = 400;
    blue2.y = 400;
    blue3.x = 400;
    blue3.y = 400;
    blue4.x = 400;
    blue4.y = 400;
    
    blue1.visible = false;
    blue2.visible = false;
    blue3.visible = false;
    blue4.visible = false;
   
  }
  if (blue1.y >= 284) {
    blue1.velocityY = 0;
    blue1.velocityX = 5;
  }
  if (blue1.x >= 350) {
    blue1.velocityY = -5;
    blue1.velocityX = 0;
  }
  if ((blue1.y) <= 40) {
    blue1.velocityY = 0;
    blue1.velocityX = -5;
  }
  if (blue1.isTouching(wall5)) {
    blue1.velocityY = 5;
    blue1.velocityX = 0;
  }
  if (blue2.isTouching(wall17)) {
    blue2.velocityX = 0;
    blue2.velocityY = -5;
  }
  if (blue2.isTouching(wall39)) {
    blue2.velocityY = 5;
    blue2.velocityX = 0;
  }
  if (blue2.y == 258) {
    blue2.velocityY = 0;
    blue2.velocityX = 5;
  }
  if (blue2.isTouching(wall23)) {
    blue2.velocityX = 0;
    blue2.velocityY = -5;
  }
  if (blue2.isTouching(wall19)) {
    blue2.velocityX = 5;
    blue2.velocityY = 0;
  }
  if (blue2.isTouching(wall20)) {
    blue2.velocityX = 0;
    blue2.velocityY = 5;
  }
  if (blue2.isTouching(wall26)) {
    blue2.velocityX = 0;
    blue2.velocityY = -5;
  }
  if (blue2.isTouching(wall7)) {
    blue2.velocityX = -5;
    blue2.velocityY = 0;
  }
  if (blue2.isTouching(wall41)) {
    blue2.velocityX = 0;
    blue2.velocityY = 5;
  }
  if (blue3.isTouching(wall16)) {
    blue3.velocityX = -5;
    blue3.velocityY = 0;
  }
  if (blue3.isTouching(wall3)) {
    blue3.velocityY = 5;
    blue3.velocityX = 0;
  }
  if (blue3.isTouching(wall43)) {
    blue3.velocityY = 0;
    blue3.velocityX = 5;
  }
  if (blue3.isTouching(wall15)) {
    blue3.velocityY = 5;
    blue3.velocityX = 0;
  }
  if (blue3.isTouching(wall29)) {
    blue3.velocityY = 0;
    blue3.velocityX = 5;
  }
  if (blue3.isTouching(wall42)) {
    blue3.velocityY = -5;
    blue3.velocityX = 0;
  }
  if ((blue3.y) <= 69) {
    blue3.velocityY = 0;
    blue3.velocityX = -5;
  }
  if (blue3.isTouching(wall8)) {
    blue3.velocityY = 5;
    blue3.velocityX = 0;
  }
  if (blue4.isTouching(wall18)) {
    blue4.velocityX = 5;
    blue4.velocityY = 0;
  }
  if (blue4.isTouching(wall44)) {
    blue4.velocityY = -5;
    blue4.velocityX = 0;
  }
  if (blue4.isTouching(wall2)) {
    blue4.velocityY = 0;
    blue4.velocityX = -5;
  }
  if (blue4.isTouching(wall17)) {
    blue4.velocityY = -5;
    blue4.velocityX = 0;
  }
  if (blue4.isTouching(wall40)) {
    blue4.velocityY = 0;
    blue4.velocityX = -5;
  }
  if (blue4.isTouching(wall11)) {
    blue4.velocityY = 5;
    blue4.velocityX = 0;
  }
  if (blue4.y >= 210) {
    blue4.velocityY = 0;
    blue4.velocityX = 5;
  }
  if (blue4.isTouching(wall22)) {
    blue4.velocityY = -5;
    blue4.velocityX = 0;
  }
  if (pacman.isTouching(blue1)) {
    blue1.visible = false;
    score1 = score1 + 10;
  }
  if (pacman.isTouching(blue2)) {
    blue2.visible = false;
    score1 = score1 + 10;
  }
  if (pacman.isTouching(blue3)) {
    blue3.visible = false;
    score1 = score1 + 10;
  }
  if (pacman.isTouching(blue4)) {
    blue4.visible = false;
    score1 = score1 + 10;
  }
}

function ghostTime3() {
  if (pacman.isTouching(coin57)) {
    timer = 5;
    blue1.setAnimation("blueghost");
    blue2.setAnimation("blueghost");
    blue3.setAnimation("blueghost");
    blue4.setAnimation("blueghost");
    
    blue1.visible = true;
    blue2.visible = true;
    blue3.visible = true;
    blue4.visible = true;
    
    ghost1.x = -100;
    ghost1.y = 100;
    ghost2.x = -100;
    ghost2.y = 100;
    ghost3.x = -100;
    ghost3.y = 100;
    ghost4.x = -100;
    ghost4.y = 100;
    
    ghost1.velocityX = 0;
    ghost1.velocityY = 0;
    ghost2.velocityX = 0;
    ghost2.velocityY = 0;
    ghost3.velocityX = 0;
    ghost3.velocityY = 0;
    ghost4.velocityX = 0;
    ghost4.velocityY = 0;
    
    blue1.velocityY = 5;
    blue2.velocityY = 5;
    blue3.velocityY = 5;
    blue4.velocityY = 5;
    
    blue1.x = 49;
    blue1.y = 50;
    blue2.x = 135;
    blue2.y = 43;
    blue3.x = 77;
    blue3.y = 73;
    blue4.x = 320;
    blue4.y = 193;
    
    coin57.visible = false;
    score = score + 10;
    score1 = score1 + 10;
    coin57.y = 400;
    coin57.x = 400;
  }
  if (blue1.x > 200) {
    timer = timer - 1;
  }
  if (timer == 0) {
    ghost1.x = 49;
    ghost1.y = 50;
    ghost1.velocityY = 5;
    ghost2.x = 135;
    ghost2.y = 43;
    ghost2.velocityY = 5;
    ghost3.x = 77;
    ghost3.y = 73;
    ghost3.velocityY = 5;
    ghost4.x = 320;
    ghost4.y = 193;
    ghost4.velocityY = 5;
    
    blue1.x = 400;
    blue1.y = 400;
    blue2.x = 400;
    blue2.y = 400;
    blue3.x = 400;
    blue3.y = 400;
    blue4.x = 400;
    blue4.y = 400;
    
    blue1.visible = false;
    blue2.visible = false;
    blue3.visible = false;
    blue4.visible = false;
    
  }
  if (blue1.y >= 284) {
    blue1.velocityY = 0;
    blue1.velocityX = 5;
  }
  if (blue1.x >= 350) {
    blue1.velocityY = -5;
    blue1.velocityX = 0;
  }
  if ((blue1.y) <= 40) {
    blue1.velocityY = 0;
    blue1.velocityX = -5;
  }
  if (blue1.isTouching(wall5)) {
    blue1.velocityY = 5;
    blue1.velocityX = 0;
  }
  if (blue2.isTouching(wall17)) {
    blue2.velocityX = 0;
    blue2.velocityY = -5;
  }
  if (blue2.isTouching(wall39)) {
    blue2.velocityY = 5;
    blue2.velocityX = 0;
  }
  if (blue2.y == 258) {
    blue2.velocityY = 0;
    blue2.velocityX = 5;
  }
  if (blue2.isTouching(wall23)) {
    blue2.velocityX = 0;
    blue2.velocityY = -5;
  }
  if (blue2.isTouching(wall19)) {
    blue2.velocityX = 5;
    blue2.velocityY = 0;
  }
  if (blue2.isTouching(wall20)) {
    blue2.velocityX = 0;
    blue2.velocityY = 5;
  }
  if (blue2.isTouching(wall26)) {
    blue2.velocityX = 0;
    blue2.velocityY = -5;
  }
  if (blue2.isTouching(wall7)) {
    blue2.velocityX = -5;
    blue2.velocityY = 0;
  }
  if (blue2.isTouching(wall41)) {
    blue2.velocityX = 0;
    blue2.velocityY = 5;
  }
  if (blue3.isTouching(wall16)) {
    blue3.velocityX = -5;
    blue3.velocityY = 0;
  }
  if (blue3.isTouching(wall3)) {
    blue3.velocityY = 5;
    blue3.velocityX = 0;
  }
  if (blue3.isTouching(wall43)) {
    blue3.velocityY = 0;
    blue3.velocityX = 5;
  }
  if (blue3.isTouching(wall15)) {
    blue3.velocityY = 5;
    blue3.velocityX = 0;
  }
  if (blue3.isTouching(wall29)) {
    blue3.velocityY = 0;
    blue3.velocityX = 5;
  }
  if (blue3.isTouching(wall42)) {
    blue3.velocityY = -5;
    blue3.velocityX = 0;
  }
  if ((blue3.y) <= 69) {
    blue3.velocityY = 0;
    blue3.velocityX = -5;
  }
  if (blue3.isTouching(wall8)) {
    blue3.velocityY = 5;
    blue3.velocityX = 0;
  }
  if (blue4.isTouching(wall18)) {
    blue4.velocityX = 5;
    blue4.velocityY = 0;
  }
  if (blue4.isTouching(wall44)) {
    blue4.velocityY = -5;
    blue4.velocityX = 0;
  }
  if (blue4.isTouching(wall2)) {
    blue4.velocityY = 0;
    blue4.velocityX = -5;
  }
  if (blue4.isTouching(wall17)) {
    blue4.velocityY = -5;
    blue4.velocityX = 0;
  }
  if (blue4.isTouching(wall40)) {
    blue4.velocityY = 0;
    blue4.velocityX = -5;
  }
  if (blue4.isTouching(wall11)) {
    blue4.velocityY = 5;
    blue4.velocityX = 0;
  }
  if (blue4.y >= 210) {
    blue4.velocityY = 0;
    blue4.velocityX = 5;
  }
  if (blue4.isTouching(wall22)) {
    blue4.velocityY = -5;
    blue4.velocityX = 0;
  }
  if (pacman.isTouching(blue1)) {
    blue1.visible = false;
    score1 = score1 + 10;
  }
  if (pacman.isTouching(blue2)) {
    blue2.visible = false;
    score1 = score1 + 10;
  }
  if (pacman.isTouching(blue3)) {
    blue3.visible = false;
    score1 = score1 + 10;
  }
  if (pacman.isTouching(blue4)) {
    blue4.visible = false;
    score1 = score1 + 10;
  }
}

function ghostTime4() {
  if (pacman.isTouching(coin20)) {
    timer = 5;
    blue1.setAnimation("blueghost");
    blue2.setAnimation("blueghost");
    blue3.setAnimation("blueghost");
    blue4.setAnimation("blueghost");
    
    blue1.visible = true;
    blue2.visible = true;
    blue3.visible = true;
    blue4.visible = true;
    
    ghost1.x = -100;
    ghost1.y = 100;
    ghost2.x = -100;
    ghost2.y = 100;
    ghost3.x = -100;
    ghost3.y = 100;
    ghost4.x = -100;
    ghost4.y = 100;
    
    ghost1.velocityX = 0;
    ghost1.velocityY = 0;
    ghost2.velocityX = 0;
    ghost2.velocityY = 0;
    ghost3.velocityX = 0;
    ghost3.velocityY = 0;
    ghost4.velocityX = 0;
    ghost4.velocityY = 0;
    
    blue1.velocityY = 5;
    blue2.velocityY = 5;
    blue3.velocityY = 5;
    blue4.velocityY = 5;
    
    blue1.x = 49;
    blue1.y = 50;
    blue2.x = 135;
    blue2.y = 43;
    blue3.x = 77;
    blue3.y = 73;
    blue4.x = 320;
    blue4.y = 193;
    
    coin20.visible = false;
    score = score + 10;
    score1 = score1 + 10;
    coin20.y = 400;
    coin20.x = 400;
  }
  if (blue1.x > 200) {
    timer = timer - 1;
  }
  if (timer == 0) {
    ghost1.x = 49;
    ghost1.y = 50;
    ghost1.velocityY = 5;
    ghost2.x = 135;
    ghost2.y = 43;
    ghost2.velocityY = 5;
    ghost3.x = 77;
    ghost3.y = 73;
    ghost3.velocityY = 5;
    ghost4.x = 320;
    ghost4.y = 193;
    ghost4.velocityY = 5;
    
    blue1.x = 400;
    blue1.y = 400;
    blue2.x = 400;
    blue2.y = 400;
    blue3.x = 400;
    blue3.y = 400;
    blue4.x = 400;
    blue4.y = 400;
    
    blue1.visible = false;
    blue2.visible = false;
    blue3.visible = false;
    blue4.visible = false;
    
  }
  if (blue1.y >= 284) {
    blue1.velocityY = 0;
    blue1.velocityX = 5;
  }
  if (blue1.x >= 350) {
    blue1.velocityY = -5;
    blue1.velocityX = 0;
  }
  if ((blue1.y) <= 40) {
    blue1.velocityY = 0;
    blue1.velocityX = -5;
  }
  if (blue1.isTouching(wall5)) {
    blue1.velocityY = 5;
    blue1.velocityX = 0;
  }
  if (blue2.isTouching(wall17)) {
    blue2.velocityX = 0;
    blue2.velocityY = -5;
  }
  if (blue2.isTouching(wall39)) {
    blue2.velocityY = 5;
    blue2.velocityX = 0;
  }
  if (blue2.y == 258) {
    blue2.velocityY = 0;
    blue2.velocityX = 5;
  }
  if (blue2.isTouching(wall23)) {
    blue2.velocityX = 0;
    blue2.velocityY = -5;
  }
  if (blue2.isTouching(wall19)) {
    blue2.velocityX = 5;
    blue2.velocityY = 0;
  }
  if (blue2.isTouching(wall20)) {
    blue2.velocityX = 0;
    blue2.velocityY = 5;
  }
  if (blue2.isTouching(wall26)) {
    blue2.velocityX = 0;
    blue2.velocityY = -5;
  }
  if (blue2.isTouching(wall7)) {
    blue2.velocityX = -5;
    blue2.velocityY = 0;
  }
  if (blue2.isTouching(wall41)) {
    blue2.velocityX = 0;
    blue2.velocityY = 5;
  }
  if (blue3.isTouching(wall16)) {
    blue3.velocityX = -5;
    blue3.velocityY = 0;
  }
  if (blue3.isTouching(wall3)) {
    blue3.velocityY = 5;
    blue3.velocityX = 0;
  }
  if (blue3.isTouching(wall43)) {
    blue3.velocityY = 0;
    blue3.velocityX = 5;
  }
  if (blue3.isTouching(wall15)) {
    blue3.velocityY = 5;
    blue3.velocityX = 0;
  }
  if (blue3.isTouching(wall29)) {
    blue3.velocityY = 0;
    blue3.velocityX = 5;
  }
  if (blue3.isTouching(wall42)) {
    blue3.velocityY = -5;
    blue3.velocityX = 0;
  }
  if ((blue3.y) <= 69) {
    blue3.velocityY = 0;
    blue3.velocityX = -5;
  }
  if (blue3.isTouching(wall8)) {
    blue3.velocityY = 5;
    blue3.velocityX = 0;
  }
  if (blue4.isTouching(wall18)) {
    blue4.velocityX = 5;
    blue4.velocityY = 0;
  }
  if (blue4.isTouching(wall44)) {
    blue4.velocityY = -5;
    blue4.velocityX = 0;
  }
  if (blue4.isTouching(wall2)) {
    blue4.velocityY = 0;
    blue4.velocityX = -5;
  }
  if (blue4.isTouching(wall17)) {
    blue4.velocityY = -5;
    blue4.velocityX = 0;
  }
  if (blue4.isTouching(wall40)) {
    blue4.velocityY = 0;
    blue4.velocityX = -5;
  }
  if (blue4.isTouching(wall11)) {
    blue4.velocityY = 5;
    blue4.velocityX = 0;
  }
  if (blue4.y >= 210) {
    blue4.velocityY = 0;
    blue4.velocityX = 5;
  }
  if (blue4.isTouching(wall22)) {
    blue4.velocityY = -5;
    blue4.velocityX = 0;
  }
  if (pacman.isTouching(blue1)) {
    blue1.visible = false;
    score1 = score1 + 10;
  }
  if (pacman.isTouching(blue2)) {
    blue2.visible = false;
    score1 = score1 + 10;
  }
  if (pacman.isTouching(blue3)) {
    blue3.visible = false;
    score1 = score1 + 10;
  }
  if (pacman.isTouching(blue4)) {
    blue4.visible = false;
    score1 = score1 + 10;
  }
}

//add function to winnerScore
function winnerScore() {
 if(score>=2000){
   pacman.x = 4000;
   pacman.y = 4000;
   var winner = createSprite(200,200);
   winner.setAnimation("winner");
   winner.scale = 5;
   ghost1.visible = false;
   ghost2.visible = false;
   ghost3.visible = false;
   ghost4.visible = false;
   pacman.visible = false;
   heart1.visible = false;
   heart2.visible = false;
   heart3.visible = false;
   blue1.visible = false;
   blue2.visible = false;
   blue3.visible = false;
   blue4.visible = false;
 }
}

//write function for coinScore from coin to coin190
function coinScore() {
  if(pacman.isTouching(coin)){
    coin.visible= false;
    score+= 10;
    score1+= 10;
    coin.x = 400;
    coin.y = 400;
  }
  
  if(pacman.isTouching(coin2)){
    coin2.visible= false;
    score+= 10;
    score1+= 10;
    coin2.x = 400;
    coin2.y = 400;
  }
  
  if(pacman.isTouching(coin3)){
    coin3.visible= false;
    score+= 10;
    score1+= 10;
    coin3.x = 400;
    coin3.y = 400;
  }
  
  if(pacman.isTouching(coin4)){
    coin4.visible= false;
    score+= 10;
    score1+= 10;
    coin4.x = 400;
    coin4.y = 400;
  }
  
  if(pacman.isTouching(coin5)){
    coin5.visible= false;
    score+= 10;
    score1+= 10;
    coin5.x = 400;
    coin5.y = 400;
  }
  
  if(pacman.isTouching(coin6)){
    coin6.visible= false;
    score+= 10;
    score1+= 10;
    coin6.x = 400;
    coin6.y = 400;
  }
  
  if(pacman.isTouching(coin7)){
    coin7.visible= false;
    score+= 10;
    score1+= 10;
    coin7.x = 400;
    coin7.y = 400;
  }
  
  if(pacman.isTouching(coin8)){
    coin8.visible= false;
    score+= 10;
    score1+= 10;
    coin8.x = 400;
    coin8.y = 400;
  }
  
  if(pacman.isTouching(coin9)){
    coin9.visible= false;
    score+= 10;
    score1+= 10;
    coin9.x = 400;
    coin9.y = 400;
  }
  
  if(pacman.isTouching(coin10)){
    coin10.visible= false;
    score+= 10;
    score1+= 10;
    coin10.x = 400;
    coin10.y = 400;
  }
  
  if(pacman.isTouching(coin11)){
    coin11.visible= false;
    score+= 10;
    score1+= 10;
    coin11.x = 400;
    coin11.y = 400;
  }
  
  if(pacman.isTouching(coin12)){
    coin12.visible= false;
    score+= 10;
    score1+= 10;
    coin12.x = 400;
    coin12.y = 400;
  }
  
  if(pacman.isTouching(coin13)){
    coin13.visible= false;
    score+= 10;
    score1+= 10;
    coin13.x = 400;
    coin13.y = 400;
  }
  
  if(pacman.isTouching(coin14)){
    coin14.visible= false;
    score+= 10;
    score1+= 10;
    coin14.x = 400;
    coin14.y = 400;
  }
  
  if(pacman.isTouching(coin15)){
    coin15.visible= false;
    score+= 10;
    score1+= 10;
    coin15.x = 400;
    coin15.y = 400;
  }
  
  if(pacman.isTouching(coin16)){
    coin16.visible= false;
    score+= 10;
    score1+= 10;
    coin16.x = 400;
    coin16.y = 400;
  }
  
  if(pacman.isTouching(coin17)){
    coin17.visible= false;
    score+= 10;
    score1+= 10;
    coin17.x = 400;
    coin17.y = 400;
  }
  
  if(pacman.isTouching(coin18)){
    coin18.visible= false;
    score+= 10;
    score1+= 10;
    coin18.x = 400;
    coin18.y = 400;
  }
  
  if(pacman.isTouching(coin19)){
    coin19.visible= false;
    score+= 10;
    score1+= 10;
    coin19.x = 400;
    coin19.y = 400;
  }
  
  if(pacman.isTouching(coin20)){
    coin20.visible= false;
    score+= 10;
    score1+= 10;
    coin20.x = 400;
    coin20.y = 400;
  }
  
  if(pacman.isTouching(coin21)){
    coin21.visible= false;
    score+= 10;
    score1+= 10;
    coin21.x = 400;
    coin21.y = 400;
  }
  
  if(pacman.isTouching(coin22)){
    coin22.visible= false;
    score+= 10;
    score1+= 10;
    coin22.x = 400;
    coin22.y = 400;
  }
  
  if(pacman.isTouching(coin23)){
    coin23.visible= false;
    score+= 10;
    score1+= 10;
    coin23.x = 400;
    coin23.y = 400;
  }
  
  if(pacman.isTouching(coin24)){
    coin24.visible= false;
    score+= 10;
    score1+= 10;
    coin24.x = 400;
    coin24.y = 400;
  }
  
  if(pacman.isTouching(coin25)){
    coin25.visible= false;
    score+= 10;
    score1+= 10;
    coin25.x = 400;
    coin25.y = 400;
  }
  
  if(pacman.isTouching(coin26)){
    coin26.visible= false;
    score+= 10;
    score1+= 10;
    coin26.x = 400;
    coin26.y = 400;
  }
  
  if(pacman.isTouching(coin27)){
    coin27.visible= false;
    score+= 10;
    score1+= 10;
    coin27.x = 400;
    coin27.y = 400;
  }
  
  if(pacman.isTouching(coin28)){
    coin28.visible= false;
    score+= 10;
    score1+= 10;
    coin28.x = 400;
    coin28.y = 400;
  }
  
  if(pacman.isTouching(coin29)){
    coin29.visible= false;
    score+= 10;
    score1+= 10;
    coin29.x = 400;
    coin29.y = 400;
  }
  
  if(pacman.isTouching(coin30)){
    coin30.visible= false;
    score+= 10;
    score1+= 10;
    coin30.x = 400;
    coin30.y = 400;
  }
  
  if(pacman.isTouching(coin31)){
    coin31.visible= false;
    score+= 10;
    score1+= 10;
    coin31.x = 400;
    coin31.y = 400;
  }
  
  if(pacman.isTouching(coin32)){
    coin32.visible= false;
    score+= 10;
    score1+= 10;
    coin32.x = 400;
    coin32.y = 400;
  }
  
  if(pacman.isTouching(coin33)){
    coin33.visible= false;
    score+= 10;
    score1+= 10;
    coin33.x = 400;
    coin33.y = 400;
  }
  
  if(pacman.isTouching(coin34)){
    coin34.visible= false;
    score+= 10;
    score1+= 10;
    coin34.x = 400;
    coin34.y = 400;
  }
  
  if(pacman.isTouching(coin35)){
    coin35.visible= false;
    score+= 10;
    score1+= 10;
    coin35.x = 400;
    coin35.y = 400;
  }
  
  if(pacman.isTouching(coin36)){
    coin36.visible= false;
    score+= 10;
    score1+= 10;
    coin36.x = 400;
    coin36.y = 400;
  }
  
  if(pacman.isTouching(coin37)){
    coin37.visible= false;
    score+= 10;
    score1+= 10;
    coin37.x = 400;
    coin37.y = 400;
  }
  
  if(pacman.isTouching(coin38)){
    coin38.visible= false;
    score+= 10;
    score1+= 10;
    coin38.x = 400;
    coin38.y = 400;
  }
  
  if(pacman.isTouching(coin39)){
    coin39.visible= false;
    score+= 10;
    score1+= 10;
    coin39.x = 400;
    coin39.y = 400;
  }
  
  if(pacman.isTouching(coin40)){
    coin40.visible= false;
    score+= 10;
    score1+= 10;
    coin40.x = 400;
    coin40.y = 400;
  }
  
  if(pacman.isTouching(coin41)){
    coin41.visible= false;
    score+= 10;
    score1+= 10;
    coin42.x = 400;
    coin42.y = 400;
  }
  
  if(pacman.isTouching(coin43)){
    coin44.visible= false;
    score+= 10;
    score1+= 10;
    coin44.x = 400;
    coin44.y = 400;
  }
  
  if(pacman.isTouching(coin45)){
    coin45.visible= false;
    score+= 10;
    score1+= 10;
    coin45.x = 400;
    coin45.y = 400;
  }
  
  if(pacman.isTouching(coin46)){
    coin46.visible= false;
    score+= 10;
    score1+= 10;
    coin46.x = 400;
    coin46.y = 400;
  }
  
  if(pacman.isTouching(coin47)){
    coin47.visible= false;
    score+= 10;
    score1+= 10;
    coin47.x = 400;
    coin47.y = 400;
  }
  
  if(pacman.isTouching(coin48)){
    coin48.visible= false;
    score+= 10;
    score1+= 10;
    coin48.x = 400;
    coin48.y = 400;
  }
  if(pacman.isTouching(coin49)){
    coin49.visible= false;
    score+= 10;
    score1+= 10;
    coin49.x = 400;
    coin49.y = 400;
  }
  
  if(pacman.isTouching(coin50)){
    coin50.visible= false;
    score+= 10;
    score1+= 10;
    coin50.x = 400;
    coin50.y = 400;
  }
  
  if(pacman.isTouching(coin51)){
    coin51.visible= false;
    score+= 10;
    score1+= 10;
    coin51.x = 400;
    coin51.y = 400;
  }
  if(pacman.isTouching(coin52)){
    coin52.visible= false;
    score+= 10;
    score1+= 10;
    coin52.x = 400;
    coin52.y = 400;
  }
  
  if(pacman.isTouching(coin53)){
    coin53.visible= false;
    score+= 10;
    score1+= 10;
    coin53.x = 400;
    coin53.y = 400;
  }
  
  if(pacman.isTouching(coin54)){
    coin54.visible= false;
    score+= 10;
    score1+= 10;
    coin54.x = 400;
    coin54.y = 400;
  }
  
  if(pacman.isTouching(coin55)){
    coin55.visible= false;
    score+= 10;
    score1+= 10;
    coin55.x = 400;
    coin55.y = 400;
  }
  
  if(pacman.isTouching(coin56)){
    coin56.visible= false;
    score+= 10;
    score1+= 10;
    coin56.x = 400;
    coin56.y = 400;
  }
  
  if(pacman.isTouching(coin57)){
    coin57.visible= false;
    score+= 10;
    score1+= 10;
    coin57.x = 400;
    coin57.y = 400;
  }
  
  if(pacman.isTouching(coin58)){
    coin58.visible= false;
    score+= 10;
    score1+= 10;
    coin58.x = 400;
    coin58.y = 400;
  }
  if(pacman.isTouching(coin59)){
    coin59.visible= false;
    score+= 10;
    score1+= 10;
    coin59.x = 400;
    coin59.y = 400;
  }
  
  if(pacman.isTouching(coin60)){
    coin60.visible= false;
    score+= 10;
    score1+= 10;
    coin60.x = 400;
    coin60.y = 400;
  }
  
  if(pacman.isTouching(coin61)){
    coin61.visible= false;
    score+= 10;
    score1+= 10;
    coin61.x = 400;
    coin61.y = 400;
  }
  
  if(pacman.isTouching(coin62)){
    coin62.visible= false;
    score+= 10;
    score1+= 10;
    coin62.x = 400;
    coin62.y = 400;
  }
  
  if(pacman.isTouching(coin63)){
    coin63.visible= false;
    score+= 10;
    score1+= 10;
    coin63.x = 400;
    coin63.y = 400;
  }
  
  if(pacman.isTouching(coin64)){
    coin64.visible= false;
    score+= 10;
    score1+= 10;
    coin64.x = 400;
    coin64.y = 400;
  }
  
  if(pacman.isTouching(coin65)){
    coin65.visible= false;
    score+= 10;
    score1+= 10;
    coin65.x = 400;
    coin65.y = 400;
  }
  
  if(pacman.isTouching(coin66)){
    coin66.visible= false;
    score+= 10;
    score1+= 10;
    coin66.x = 400;
    coin66.y = 400;
  }
  
  if(pacman.isTouching(coin67)){
    coin67.visible= false;
    score+= 10;
    score1+= 10;
    coin67.x = 400;
    coin67.y = 400;
  }
  
  if(pacman.isTouching(coin68)){
    coin68.visible= false;
    score+= 10;
    score1+= 10;
    coin68.x = 400;
    coin68.y = 400;
  }
  
  if(pacman.isTouching(coin69)){
    coin69.visible= false;
    score+= 10;
    score1+= 10;
    coin69.x = 400;
    coin69.y = 400;
  }
  
  if(pacman.isTouching(coin70)){
    coin70.visible= false;
    score+= 10;
    score1+= 10;
    coin70.x = 400;
    coin70.y = 400;
  }
  
  if(pacman.isTouching(coin71)){
    coin71.visible= false;
    score+= 10;
    score1+= 10;
    coin71.x = 400;
    coin71.y = 400;
  }
  
  if(pacman.isTouching(coin72)){
    coin72.visible= false;
    score+= 10;
    score1+= 10;
    coin72.x = 400;
    coin72.y = 400;
  }
  
  if(pacman.isTouching(coin73)){
    coin73.visible= false;
    score+= 10;
    score1+= 10;
    coin73.x = 400;
    coin73.y = 400;
  }
  
  if(pacman.isTouching(coin74)){
    coin74.visible= false;
    score+= 10;
    score1+= 10;
    coin74.x = 400;
    coin74.y = 400;
  }
  
  if(pacman.isTouching(coin75)){
    coin75.visible= false;
    score+= 10;
    score1+= 10;
    coin75.x = 400;
    coin75.y = 400;
  }
  
  if(pacman.isTouching(coin76)){
    coin76.visible= false;
    score+= 10;
    score1+= 10;
    coin76.x = 400;
    coin76.y = 400;
  }
  
  if(pacman.isTouching(coin77)){
    coin77.visible= false;
    score+= 10;
    score1+= 10;
    coin77.x = 400;
    coin77.y = 400;
  }
  
  if(pacman.isTouching(coin78)){
    coin78.visible= false;
    score+= 10;
    score1+= 10;
    coin78.x = 400;
    coin78.y = 400;
  }
  
  if(pacman.isTouching(coin79)){
    coin79.visible= false;
    score+= 10;
    score1+= 10;
    coin79.x = 400;
    coin79.y = 400;
  }
  
  if(pacman.isTouching(coin80)){
    coin80.visible= false;
    score+= 10;
    score1+= 10;
    coin80.x = 400;
    coin80.y = 400;
  }
  if(pacman.isTouching(coin81)){
    coin81.visible= false;
    score+= 10;
    score1+= 10;
    coin81.x = 400;
    coin81.y = 400;
  }
  
  if(pacman.isTouching(coin82)){
    coin82.visible= false;
    score+= 10;
    score1+= 10;
    coin82.x = 400;
    coin82.y = 400;
  }
  
  if(pacman.isTouching(coin83)){
    coin83.visible= false;
    score+= 10;
    score1+= 10;
    coin83.x = 400;
    coin83.y = 400;
  }
  
  if(pacman.isTouching(coin84)){
    coin84.visible= false;
    score+= 10;
    score1+= 10;
    coin84.x = 400;
    coin84.y = 400;
  }
  
  if(pacman.isTouching(coin85)){
    coin85.visible= false;
    score+= 10;
    score1+= 10;
    coin85.x = 400;
    coin85.y = 400;
  }
  
  if(pacman.isTouching(coin86)){
    coin86.visible= false;
    score+= 10;
    score1+= 10;
    coin86.x = 400;
    coin86.y = 400;
  }
  
  if(pacman.isTouching(coin87)){
    coin87.visible= false;
    score+= 10;
    score1+= 10;
    coin87.x = 400;
    coin87.y = 400;
  }
  
  if(pacman.isTouching(coin88)){
    coin88.visible= false;
    score+= 10;
    score1+= 10;
    coin88.x = 400;
    coin88.y = 400;
  }
  
  if(pacman.isTouching(coin89)){
    coin89.visible= false;
    score+= 10;
    score1+= 10;
    coin89.x = 400;
    coin89.y = 400;
  }
  
  if(pacman.isTouching(coin90)){
    coin90.visible= false;
    score+= 10;
    score1+= 10;
    coin90.x = 400;
    coin90.y = 400;
  }
  
  if(pacman.isTouching(coin91)){
    coin91.visible= false;
    score+= 10;
    score1+= 10;
    coin91.x = 400;
    coin91.y = 400;
  }
  
  if(pacman.isTouching(coin92)){
    coin92.visible= false;
    score+= 10;
    score1+= 10;
    coin92.x = 400;
    coin92.y = 400;
  }
  
  if(pacman.isTouching(coin93)){
    coin93.visible= false;
    score+= 10;
    score1+= 10;
    coin93.x = 400;
    coin93.y = 400;
  }
  
  if(pacman.isTouching(coin94)){
    coin94.visible= false;
    score+= 10;
    score1+= 10;
    coin94.x = 400;
    coin94.y = 400;
  }
  
  if(pacman.isTouching(coin95)){
    coin95.visible= false;
    score+= 10;
    score1+= 10;
    coin95.x = 400;
    coin95.y = 400;
  }
  
  if(pacman.isTouching(coin96)){
    coin96.visible= false;
    score+= 10;
    score1+= 10;
    coin96.x = 400;
    coin96.y = 400;
  }
  
  if(pacman.isTouching(coin97)){
    coin97.visible= false;
    score+= 10;
    score1+= 10;
    coin97.x = 400;
    coin97.y = 400;
  }
  
  if(pacman.isTouching(coin98)){
    coin98.visible= false;
    score+= 10;
    score1+= 10;
    coin98.x = 400;
    coin98.y = 400;
  }
  
  if(pacman.isTouching(coin99)){
    coin99.visible= false;
    score+= 10;
    score1+= 10;
    coin99.x = 400;
    coin99.y = 400;
  }
  
  
  if(pacman.isTouching(coin100)){
    coin100.visible= false;
    score+= 10;
    score1+= 10;
    coin100.x = 400;
    coin100.y = 400;
  }
  
  if(pacman.isTouching(coin101)){
    coin101.visible= false;
    score+= 10;
    score1+= 10;
    coin101.x = 400;
    coin101.y = 400;
  }
  
  if(pacman.isTouching(coin102)){
    coin102.visible= false;
    score+= 10;
    score1+= 10;
    coin102.x = 400;
    coin102.y = 400;
  }
  
  if(pacman.isTouching(coin103)){
    coin103.visible= false;
    score+= 10;
    score1+= 10;
    coin103.x = 400;
    coin103.y = 400;
  }
  
  if(pacman.isTouching(coin104)){
    coin104.visible= false;
    score+= 10;
    score1+= 10;
    coin104.x = 400;
    coin104.y = 400;
  }
  
  if(pacman.isTouching(coin105)){
    coin105.visible= false;
    score+= 10;
    score1+= 10;
    coin105.x = 400;
    coin105.y = 400;
  }
  
  if(pacman.isTouching(coin106)){
    coin106.visible= false;
    score+= 10;
    score1+= 10;
    coin106.x = 400;
    coin106.y = 400;
  }
  
  if(pacman.isTouching(coin107)){
    coin107.visible= false;
    score+= 10;
    score1+= 10;
    coin107.x = 400;
    coin107.y = 400;
  }
  
  if(pacman.isTouching(coin108)){
    coin108.visible= false;
    score+= 10;
    score1+= 10;
    coin108.x = 400;
    coin108.y = 400;
  }
  
  if(pacman.isTouching(coin109)){
    coin109.visible= false;
    score+= 10;
    score1+= 10;
    coin109.x = 400;
    coin109.y = 400;
  }
  
  if(pacman.isTouching(coin110)){
    coin110.visible= false;
    score+= 10;
    score1+= 10;
    coin110.x = 400;
    coin110.y = 400;
  }
  
  if(pacman.isTouching(coin111)){
    coin111.visible= false;
    score+= 10;
    score1+= 10;
    coin111.x = 400;
    coin111.y = 400;
  }
  
  if(pacman.isTouching(coin112)){
    coin112.visible= false;
    score+= 10;
    score1+= 10;
    coin112.x = 400;
    coin112.y = 400;
  }
  
  if(pacman.isTouching(coin113)){
    coin113.visible= false;
    score+= 10;
    score1+= 10;
    coin113.x = 400;
    coin113.y = 400;
  }
  
  if(pacman.isTouching(coin114)){
    coin114.visible= false;
    score+= 10;
    score1+= 10;
    coin114.x = 400;
    coin114.y = 400;
  }
  
  if(pacman.isTouching(coin115)){
    coin115.visible= false;
    score+= 10;
    score1+= 10;
    coin115.x = 400;
    coin115.y = 400;
  }
  
  if(pacman.isTouching(coin116)){
    coin116.visible= false;
    score+= 10;
    score1+= 10;
    coin116.x = 400;
    coin116.y = 400;
  }
  
  if(pacman.isTouching(coin117)){
    coin117.visible= false;
    score+= 10;
    score1+= 10;
    coin117.x = 400;
    coin117.y = 400;
  }
  
  if(pacman.isTouching(coin118)){
    coin118.visible= false;
    score+= 10;
    score1+= 10;
    coin118.x = 400;
    coin118.y = 400;
  }
  
  if(pacman.isTouching(coin119)){
    coin119.visible= false;
    score+= 10;
    score1+= 10;
    coin119.x = 400;
    coin119.y = 400;
  }
  
  if(pacman.isTouching(coin120)){
    coin120.visible= false;
    score+= 10;
    score1+= 10;
    coin120.x = 400;
    coin120.y = 400;
  }
  
  if(pacman.isTouching(coin121)){
    coin121.visible= false;
    score+= 10;
    score1+= 10;
    coin121.x = 400;
    coin121.y = 400;
  }
  
  if(pacman.isTouching(coin122)){
    coin122.visible= false;
    score+= 10;
    score1+= 10;
    coin122.x = 400;
    coin122.y = 400;
  }
  
  if(pacman.isTouching(coin123)){
    coin23.visible= false;
    score+= 10;
    score1+= 10;
    coin123.x = 400;
    coin123.y = 400;
  }
  
  if(pacman.isTouching(coin124)){
    coin124.visible= false;
    score+= 10;
    score1+= 10;
    coin124.x = 400;
    coin124.y = 400;
  }
  
  if(pacman.isTouching(coin125)){
    coin125.visible= false;
    score+= 10;
    score1+= 10;
    coin125.x = 400;
    coin125.y = 400;
  }
  
  if(pacman.isTouching(coin126)){
    coin126.visible= false;
    score+= 10;
    score1+= 10;
    coin126.x = 400;
    coin126.y = 400;
  }
  
  if(pacman.isTouching(coin127)){
    coin127.visible= false;
    score+= 10;
    score1+= 10;
    coin127.x = 400;
    coin127.y = 400;
  }
  
  if(pacman.isTouching(coin128)){
    coin128.visible= false;
    score+= 10;
    score1+= 10;
    coin128.x = 400;
    coin128.y = 400;
  }
  
  if(pacman.isTouching(coin129)){
    coin129.visible= false;
    score+= 10;
    score1+= 10;
    coin129.x = 400;
    coin129.y = 400;
  }
  
  if(pacman.isTouching(coin130)){
    coin130.visible= false;
    score+= 10;
    scor1e1+= 10;
    coin30.x = 400;
    coin130.y = 400;
  }
  
  if(pacman.isTouching(coin131)){
    coin131.visible= false;
    score+= 10;
    score1+= 10;
    coin131.x = 400;
    coin131.y = 400;
  }
  
  if(pacman.isTouching(coin132)){
    coin132.visible= false;
    score+= 10;
    score1+= 10;
    coin132.x = 400;
    coin132.y = 400;
  }
  
  if(pacman.isTouching(coin133)){
    coin133.visible= false;
    score+= 10;
    score1+= 10;
    coin33.x = 400;
    coin133.y = 400;
  }
  
  if(pacman.isTouching(coin134)){
    coin134.visible= false;
    score+= 10;
    score1+= 10;
    coin134.x = 400;
    coin134.y = 400;
  }
  
  if(pacman.isTouching(coin135)){
    coin135.visible= false;
    score+= 10;
    score1+= 10;
    coin135.x = 400;
    coin135.y = 400;
  }
  
  if(pacman.isTouching(coin136)){
    coin136.visible= false;
    score+= 10;
    score1+= 10;
    coin136.x = 400;
    coin136.y = 400;
  }
  
  if(pacman.isTouching(coin137)){
    coin137.visible= false;
    score+= 10;
    score1+= 10;
    coin137.x = 400;
    coin137.y = 400;
  }
  
  if(pacman.isTouching(coin138)){
    coin138.visible= false;
    score+= 10;
    score1+= 10;
    coin138.x = 400;
    coin138.y = 400;
  }
  
  if(pacman.isTouching(coin139)){
    coin139.visible= false;
    score+= 10;
    score1+= 10;
    coin139.x = 400;
    coin139.y = 400;
  }
  
  if(pacman.isTouching(coin140)){
    coin140.visible= false;
    score+= 10;
    score1+= 10;
    coin140.x = 400;
    coin140.y = 400;
  }
  
  if(pacman.isTouching(coin141)){
    coin141.visible= false;
    score+= 10;
    score1+= 10;
    coin142.x = 400;
    coin142.y = 400;
  }
  
  if(pacman.isTouching(coin142)){
    coin142.visible= false;
    score+= 10;
    score1+= 10;
    coin142.x = 400;
    coin142.y = 400;
  }
  
  if(pacman.isTouching(coin143)){
    coin143.visible= false;
    score+= 10;
    score1+= 10;
    coin143.x = 400;
    coin143.y = 400;
  }
  
  if(pacman.isTouching(coin144)){
    coin144.visible= false;
    score+= 10;
    score1+= 10;
    coin144.x = 400;
    coin144.y = 400;
  }
  
  if(pacman.isTouching(coin145)){
    coin145.visible= false;
    score+= 10;
    score1+= 10;
    coin145.x = 400;
    coin145.y = 400;
  }
  
  if(pacman.isTouching(coin146)){
    coin146.visible= false;
    score+= 10;
    score1+= 10;
    coin146.x = 400;
    coin146.y = 400;
  }
  
  if(pacman.isTouching(coin147)){
    coin147.visible= false;
    score+= 10;
    score1+= 10;
    coin147.x = 400;
    coin147.y = 400;
  }
  
  if(pacman.isTouching(coin148)){
    coin148.visible= false;
    score+= 10;
    score1+= 10;
    coin148.x = 400;
    coin148.y = 400;
  }
  if(pacman.isTouching(coin149)){
    coin149.visible= false;
    score+= 10;
    score1+= 10;
    coin149.x = 400;
    coin149.y = 400;
  }
  
  if(pacman.isTouching(coin150)){
    coin150.visible= false;
    score+= 10;
    score1+= 10;
    coin150.x = 400;
    coin150.y = 400;
  }
  
  if(pacman.isTouching(coin151)){
    coin151.visible= false;
    score+= 10;
    score1+= 10;
    coin151.x = 400;
    coin151.y = 400;
  }
  if(pacman.isTouching(coin152)){
    coin152.visible= false;
    score+= 10;
    score1+= 10;
    coin152.x = 400;
    coin152.y = 400;
  }
  
  if(pacman.isTouching(coin153)){
    coin153.visible= false;
    score+= 10;
    score1+= 10;
    coin153.x = 400;
    coin153.y = 400;
  }
  
  if(pacman.isTouching(coin154)){
    coin154.visible= false;
    score+= 10;
    score1+= 10;
    coin154.x = 400;
    coin154.y = 400;
  }
  
  if(pacman.isTouching(coin155)){
    coin155.visible= false;
    score+= 10;
    score1+= 10;
    coin155.x = 400;
    coin155.y = 400;
  }
  
  if(pacman.isTouching(coin156)){
    coin156.visible= false;
    score+= 10;
    score1+= 10;
    coin156.x = 400;
    coin156.y = 400;
  }
  
  if(pacman.isTouching(coin157)){
    coin157.visible= false;
    score+= 10;
    score1+= 10;
    coin157.x = 400;
    coin157.y = 400;
  }
  
  if(pacman.isTouching(coin158)){
    coin158.visible= false;
    score+= 10;
    score1+= 10;
    coin158.x = 400;
    coin158.y = 400;
  }
  if(pacman.isTouching(coin159)){
    coin159.visible= false;
    score+= 10;
    score1+= 10;
    coin159.x = 400;
    coin159.y = 400;
  }
  
  if(pacman.isTouching(coin160)){
    coin160.visible= false;
    score+= 10;
    score1+= 10;
    coin160.x = 400;
    coin160.y = 400;
  }
  
  if(pacman.isTouching(coin161)){
    coin161.visible= false;
    score+= 10;
    score1+= 10;
    coin161.x = 400;
    coin161.y = 400;
  }
  
  if(pacman.isTouching(coin162)){
    coin162.visible= false;
    score+= 10;
    score1+= 10;
    coin162.x = 400;
    coin162.y = 400;
  }
  
  if(pacman.isTouching(coin163)){
    coin163.visible= false;
    score+= 10;
    score1+= 10;
    coin163.x = 400;
    coin163.y = 400;
  }
  
  if(pacman.isTouching(coin164)){
    coin164.visible= false;
    score+= 10;
    score1+= 10;
    coin164.x = 400;
    coin164.y = 400;
  }
  
  if(pacman.isTouching(coin165)){
    coin165.visible= false;
    score+= 10;
    score1+= 10;
    coin165.x = 400;
    coin165.y = 400;
  }
  
  if(pacman.isTouching(coin166)){
    coin166.visible= false;
    score+= 10;
    score1+= 10;
    coin166.x = 400;
    coin166.y = 400;
  }
  
  if(pacman.isTouching(coin167)){
    coin167.visible= false;
    score+= 10;
    score1+= 10;
    coin167.x = 400;
    coin167.y = 400;
  }
  
  if(pacman.isTouching(coin168)){
    coin168.visible= false;
    score+= 10;
    score1+= 10;
    coin168.x = 400;
    coin168.y = 400;
  }
  
  if(pacman.isTouching(coin169)){
    coin169.visible= false;
    score+= 10;
    score1+= 10;
    coin169.x = 400;
    coin169.y = 400;
  }
  
  if(pacman.isTouching(coin170)){
    coin170.visible= false;
    score+= 10;
    score1+= 10;
    coin170.x = 400;
    coin170.y = 400;
  }
  
  if(pacman.isTouching(coin171)){
    coin171.visible= false;
    score+= 10;
    score1+= 10;
    coin171.x = 400;
    coin171.y = 400;
  }
  
  if(pacman.isTouching(coin172)){
    coin172.visible= false;
    score+= 10;
    score1+= 10;
    coin172.x = 400;
    coin172.y = 400;
  }
  
  if(pacman.isTouching(coin173)){
    coin173.visible= false;
    score+= 10;
    score1+= 10;
    coin173.x = 400;
    coin173.y = 400;
  }
  
  if(pacman.isTouching(coin174)){
    coin174.visible= false;
    score+= 10;
    score1+= 10;
    coin174.x = 400;
    coin174.y = 400;
  }
  
  if(pacman.isTouching(coin175)){
    coin175.visible= false;
    score+= 10;
    score1+= 10;
    coin175.x = 400;
    coin175.y = 400;
  }
  
  if(pacman.isTouching(coin176)){
    coin176.visible= false;
    score+= 10;
    score1+= 10;
    coin176.x = 400;
    coin176.y = 400;
  }
  
  if(pacman.isTouching(coin177)){
    coin177.visible= false;
    score+= 10;
    score1+= 10;
    coin177.x = 400;
    coin177.y = 400;
  }
  
  if(pacman.isTouching(coin178)){
    coin178.visible= false;
    score+= 10;
    score1+= 10;
    coin178.x = 400;
    coin178.y = 400;
  }
  
  if(pacman.isTouching(coin179)){
    coin179.visible= false;
    score+= 10;
    score1+= 10;
    coin179.x = 400;
    coin179.y = 400;
  }
  
  if(pacman.isTouching(coin180)){
    coin180.visible= false;
    score+= 10;
    score1+= 10;
    coin180.x = 400;
    coin180.y = 400;
  }
  if(pacman.isTouching(coin181)){
    coin181.visible= false;
    score+= 10;
    score1+= 10;
    coin181.x = 400;
    coin181.y = 400;
  }
  
  if(pacman.isTouching(coin182)){
    coin182.visible= false;
    score+= 10;
    score1+= 10;
    coin182.x = 400;
    coin182.y = 400;
  }
  
  if(pacman.isTouching(coin183)){
    coin183.visible= false;
    score+= 10;
    score1+= 10;
    coin183.x = 400;
    coin183.y = 400;
  }
  
  if(pacman.isTouching(coin184)){
    coin184.visible= false;
    score+= 10;
    score1+= 10;
    coin184.x = 400;
    coin184.y = 400;
  }
  
  if(pacman.isTouching(coin185)){
    coin185.visible= false;
    score+= 10;
    score1+= 10;
    coin185.x = 400;
    coin185.y = 400;
  }
  
  if(pacman.isTouching(coin186)){
    coin186.visible= false;
    score+= 10;
    score1+= 10;
    coin186.x = 400;
    coin186.y = 400;
  }
  
  if(pacman.isTouching(coin187)){
    coin187.visible= false;
    score+= 10;
    score1+= 10;
    coin187.x = 400;
    coin187.y = 400;
  }
  
  if(pacman.isTouching(coin188)){
    coin188.visible= false;
    score+= 10;
    score1+= 10;
    coin188.x = 400;
    coin188.y = 400;
  }
  
  if(pacman.isTouching(coin189)){
    coin189.visible= false;
    score+= 10;
    score1+= 10;
    coin189.x = 400;
    coin189.y = 400;
  }
  
  if(pacman.isTouching(coin190)){
    coin190.visible= false;
    score+= 10;
    score1+= 10;
    coin190.x = 400;
    coin190.y = 400;
  }
}

//write function for heartLives
function heartLives() {
  if(lives == 2){
    heart1.visible = false;
  }
  
  if(lives == 1){
    heart2.visible = false;
  }
  
  if(lives == 0){
    heart3.visible = false;
    pacman.visible = false;
    ghost1.visible = false;
    ghost2.visible = false;
    ghost3.visible = false;
    ghost4.visible = false;
    blue1.visible = false;
    blue2.visible = false;
    blue3.visible = false;
    blue4.visible = false;
    
    var gameOver = createSprite(200,200);
    gameOver.setAnimation("Game Over");
    gameOver.scale = 10;
  }
}

//write function for ghostCollide
function ghostCollide() {
  if(ghost1.isTouching(pacman)){
    lives-= 1;
    pacman.x =20;
    pacman.y =122;
    pacman.setVelocity(0,0);
    score1-= 100;
  }
  
  if(ghost2.isTouching(pacman)){
    lives-= 1;
    pacman.x =20;
    pacman.y =122;
    pacman.setVelocity(0,0);
    score1-= 100;
  }
  
  if(ghost3.isTouching(pacman)){
    lives-= 1;
    pacman.x =20;
    pacman.y =122;
    pacman.setVelocity(0,0);
    score1-= 100;
  }
  
  if(ghost4.isTouching(pacman)){
    lives-= 1;
    pacman.x =20;
    pacman.y =122;
    pacman.setVelocity(0,0);
    score1-= 100;
  }
}


function ghostControls() {
  if (ghost1.y >= 284) {
    ghost1.velocityY = 0;
    ghost1.velocityX = 5;
  }
  if (ghost1.x >= 350) {
    ghost1.velocityY = -5;
    ghost1.velocityX = 0;
  }
  if ((ghost1.y) <= 40) {
    ghost1.velocityY = 0;
    ghost1.velocityX = -5;
  }
  if (ghost1.isTouching(wall5)) {
    ghost1.velocityY = 5;
    ghost1.velocityX = 0;
  }
  if (ghost2.y == 258) {
    ghost2.velocityY = 0;
    ghost2.velocityX = 5;
  }
  if (ghost2.isTouching(wall23)) {
    ghost2.velocityX = 0;
    ghost2.velocityY = -5;
  }
  if (ghost2.isTouching(wall19)) {
    ghost2.velocityX = 5;
    ghost2.velocityY = 0;
  }
  if (ghost2.isTouching(wall20)) {
    ghost2.velocityX = 0;
    ghost2.velocityY = 5;
  }
  if (ghost2.isTouching(wall26)) {
    ghost2.velocityX = 0;
    ghost2.velocityY = -5;
  }
  if (ghost2.isTouching(wall7)) {
    ghost2.velocityX = -5;
    ghost2.velocityY = 0;
  }
  if (ghost2.isTouching(wall41)) {
    ghost2.velocityX = 0;
    ghost2.velocityY = 5;
  }
  if (ghost3.isTouching(wall16)) {
    ghost3.velocityX = -5;
    ghost3.velocityY = 0;
  }
  if (ghost3.isTouching(wall3)) {
    ghost3.velocityY = 5;
    ghost3.velocityX = 0;
  }
  if (ghost3.isTouching(wall43)) {
    ghost3.velocityY = 0;
    ghost3.velocityX = 5;
  }
  if (ghost3.isTouching(wall15)) {
    ghost3.velocityY = 5;
    ghost3.velocityX = 0;
  }
  if (ghost3.isTouching(wall29)) {
    ghost3.velocityY = 0;
    ghost3.velocityX = 5;
  }
  if (ghost3.isTouching(wall42)) {
    ghost3.velocityY = -5;
    ghost3.velocityX = 0;
  }
  if (ghost3.y <= 69) {
    ghost3.velocityY = 0;
    ghost3.velocityX = -5;
  }
  if (ghost3.isTouching(wall8)) {
    ghost3.velocityY = 5;
    ghost3.velocityX = 0;
  }
  
  if (ghost4.isTouching(wall18)) {
    ghost4.velocityX = 5;
    ghost4.velocityY = 0;
  }
  if (ghost4.isTouching(wall44)) {
    ghost4.velocityY = -5;
    ghost4.velocityX = 0;
  }
  if (ghost4.isTouching(wall2)) {
    ghost4.velocityY = 0;
    ghost4.velocityX = -5;
  }
  if (ghost4.isTouching(wall17)) {
    ghost4.velocityY = -5;
    ghost4.velocityX = 0;
  }
  if (ghost4.isTouching(wall40)) {
    ghost4.velocityY = 0;
    ghost4.velocityX = -5;
  }
  if (ghost4.isTouching(wall11)) {
    ghost4.velocityY = 5;
    ghost4.velocityX = 0;
  }
  if (ghost4.y >= 210) {
    ghost4.velocityY = 0;
    ghost4.velocityX = 5;
  }
  if (ghost4.isTouching(wall22)) {
    ghost4.velocityY = -5;
    ghost4.velocityX = 0;
  }
}

function loopEnds() {
  if (pacman.x < 0) {
    pacman.x = 400;
  }
  if (pacman.x > 400) {
    pacman.x = 0;
  }
}

function spriteCollide() {
  pacman.collide(wall);
  //add pacman coolide from wall2 to wall42
  pacman.collide(wall2);
  pacman.collide(wall3);
  pacman.collide(wall4);
  pacman.collide(wall5);
  pacman.collide(wall6);
  pacman.collide(wall7);
  pacman.collide(wall8);
  pacman.collide(wall9);
  pacman.collide(wall10);
  pacman.collide(wall11);
  pacman.collide(wall12);
  pacman.collide(wall13);
  pacman.collide(wall14);
  pacman.collide(wall15);
  pacman.collide(wall16);
  pacman.collide(wall17);
  pacman.collide(wall18);
  pacman.collide(wall19);
  pacman.collide(wall20);
  pacman.collide(wall21);
  pacman.collide(wall22);
  pacman.collide(wall23);
  pacman.collide(wall24);
  pacman.collide(wall25);
  pacman.collide(wall26);
  pacman.collide(wall27);
  pacman.collide(wall28);
  pacman.collide(wall29);
  pacman.collide(wall30);
  pacman.collide(wall31);
  pacman.collide(wall32);
  pacman.collide(wall33);
  pacman.collide(wall34);
  pacman.collide(wall35);
  pacman.collide(wall36);
  pacman.collide(wall37);
  pacman.collide(wall38);
  pacman.collide(wall39);
  pacman.collide(wall40);
  pacman.collide(wall41);
  pacman.collide(wall42);
}

function pacmanControls() {
  if (keyWentDown("right")) {
    pacman.setVelocity(4,0);
    pacman.setAnimation("pacmanR");
  }
  if (keyWentDown("left")) {
    pacman.setVelocity(-4,0);
    pacman.setAnimation("pacmanL");
  }
  if (keyWentDown("up")) {
    pacman.setVelocity(0,-4);
    pacman.setAnimation("pacmanU");
  }
  if (keyWentDown("down")) {
    pacman.setVelocity(0,4);
    pacman.setAnimation("pacmanD");
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
