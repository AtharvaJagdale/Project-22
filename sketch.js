var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  for(i=0;i<6;i++){
var bottomGrass=createSprite(683,height-50-(i*400),width,grassHeight)
if(i%2===0){
  var road=createSprite(683,height-150-(i*400)-grassHeight,width,300)
  road.shapeColor="black"
}
}
player=new Player(width/2,height-25)


for(i=0;i<40;i++){
  Cars=new Car(2);
carGroup1.add(Cars.spt);
}
for(i=0;i<40;i++){
 Logs=new Log(2);
 logGroup1.add(Logs.spt)
  }
  for(i=1;i<logGroup1.lenght;i++){
if(logGroup1[i].x<0){
logGroup1[i].x=width

}
for(i=1;i<carGroup1.lenght;i++){
  if(carGroup1[i].x<0){
  carGroup1[i].x=width
  
  }
  
    }


}


  }
  

function draw() {
  background("skyblue");
   translate(0,-player.spt.y+height-150)
  
 

  drawSprites();

  Pressed();
}
function Pressed(){
if(keyDown("UP_ARROW")){
  player.move(0,-2)
}
 if (keyDown("DOWN_ARROW")){
  player.move(0,2)
}
 if(keyDown("LEFT_ARROW")){
  player.move(-2,0)
}
 if(keyDown("RIGHT_ARROW")){
player.move(2,0)
}



}





