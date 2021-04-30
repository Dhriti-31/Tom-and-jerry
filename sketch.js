var garden;
var tom, tomImg1,tomImg2,tomImg3;
var jerry,jerryImg1,jerryImg2,jerryImg3;

function preload() {
    //load the images here
garden = loadImage("images/garden.png");
tomImg1= loadImage("images/cat1.png");
tomImg2= loadImage("images/cat2.png");
tomImg3= loadImage("images/cat4.png");

jerryImg1 = loadImage("images/mouse1.png");
jerryImg2 = loadImage("images/mouse2.png");
jerryImg3 = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(400,600);
    tom.addAnimation("tomsleeping",tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200,600)
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.2
}

function draw() {

    background(garden);
//tom.x = World.mouseX
//tom.y = World.mouseY

//jerry.x = World.mouseX
//jerry.x = World.mouseX
//console.log(tom.x-jerry.x)

//if(tom.x-jerry.x === tom.width/2+jerry.width/2)  ||
//jerry.x-tom.x === tom.width/2+jerry.width/2) {
  //tom.addAnimation("tomlastImage", tomImg3);
//}
//else {
 // tom.changeAnimation("tomlastImage")
//}


    //Write condition here to evalute if tom and jerry collide
  if(tom.x-jerry.x < (tom.width - jerry.width)/2)  {

    tom.velocityX = 0;
    tom.addAnimation("tomlastImage", tomImg3);
    tom.x = 300;
    tom.scale = 0.2;
    tom.changeAnimation("tomlastImage")

    jerry.addAnimation("jerrylastImage", jerryImg3);
    jerry.scale = 0.5;
    jerry.changeAnimation("jerrylastImage");
  }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW) {
     jerry.addAnimation("mouseTeasing",jerryImg2);
     jerry.changeAnimation("mouseTeasing");
     jerry.frameDelay = 25;

     tom.addAnimation("tomTeasing", tomImg2);
     tom.changeAnimation("tomTeasing");
     tom.frameDelay = 25;
 }



}

