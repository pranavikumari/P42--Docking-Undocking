var iss, issImg;
var spacecraft, spacecraft1, spacecraft2, spacecraft3, spacecraft4;
var  spacecraft1Img, spacecraft2Img, spacecraft3Img, spacecraft4Img; 
var hasDocked=false;
var spacebg, spacebgImg;
var box;

function preload(){
  spacecraft1Img= loadImage("images/spacecraft1.png");
  spacecraft2Img= loadImage("images/spacecraft2.png");
  spacecraft3Img= loadImage("images/spacecraft3.png");
  spacecraft4Img= loadImage("images/spacecraft4.png");
  issImg= loadImage("images/iss.png");
  spacebgImg= loadImage("images/spacebg.jpg");
}

function setup() {
  createCanvas(600,350);
  
  iss= createSprite(330,130);
  iss.addImage(issImg);
  iss.scale=0.6;

  spacecraft= createSprite(300,240);
  spacecraft.addImage(spacecraft1Img);
  spacecraft.scale=0.15;

 
  
}



function draw() {
  background(spacebgImg);
  spacecraft.addImage(spacecraft1Img);
  
  if(!hasDocked){

    if(keyIsDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraft4Img);
      spacecraft.x=spacecraft.x+1;
    }

    if(keyIsDown(LEFT_ARROW)){
      spacecraft.addImage(spacecraft3Img);
      spacecraft.x=spacecraft.x-1;
    }

    if(keyIsDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraft2Img);
    }

    if(keyIsDown(UP_ARROW)){
      spacecraft.y= spacecraft.y-2;
    }
  }

      if(spacecraft.y<=(iss.y+50) && spacecraft.x<=(iss.x-10)){
      hasDocked=true;
      textSize(30);
      fill("red");
      text("Docking Successful!",200,300);
    }
  
  drawSprites();
}