
var mouse,mouseCheese,mouseDance,mouseCollide;
var cat,catSit,catWalk,catCollide;
var bg,bgImg;
function preload() {
    //load the images here
    mouseCheese = loadImage("images/mouse1.png");

    mouseDance = loadAnimation("images/mouse2.png","images/mouse3.png");
  
    mouseCollide = loadImage("images/mouse4.png");
  
  
    catSit = loadImage("images/cat1.png");
  
    catWalk = loadAnimation("images/cat2.png","images/cat3.png");
  
    catCollide = loadImage("images/cat4.png");
  
  
      bgImg = loadImage("images/garden.png");
}

function setup(){
    //createCanvas(1000,800);
    //create tom and jerry sprites here
   createCanvas(1400,700);

    bg = createSprite(200,200,20,20);

    bg.addImage("bg",bgImg);

    mouse = createSprite(100,420,20,20);

    mouse.addAnimation("mouse1",mouseCheese);



    mouse.addAnimation("mouse4",mouseCollide);

    mouse.addAnimation("mouse2,mouse3",mouseDance);

    mouse.scale = 0.1;


    cat = createSprite(580,420,20,20);

    cat.addAnimation("cat1",catSit);



    cat.addAnimation("cat4",catCollide);

    cat.addAnimation("cat2,cat3",catWalk);


    cat.scale = 0.16;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width/2 - mouse.width/2)+20
    ){

      mouse.changeAnimation("mouse4",mouseCollide);

      cat.velocityX = 0;

      cat.changeAnimation("cat4",catCollide);

  }

  keyPressed();


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left")) {

    cat.velocityX = -2;

    cat.changeAnimation("cat2,cat3",catWalk);

    mouse.changeAnimation("mouse2,mouse3",mouseDance);

 }


}
