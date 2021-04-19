var mario, ground;
var chunkLoader;
var turtle;
var distance=0;
var currentDistance=0;
var gamestate=0;
var enemy1//, enemy2;
function preload(){
  turtle = loadImage("Turtle.png")
}
function setup() {
  if(windowWidth<1200){
    if(windowHeight<800){
      createCanvas(windowWidth, windowHeight);
    } else{
      createCanvas(windowWidth, 800)}
  } else{
    if(windowHeight<800){
      createCanvas(1200, windowHeight);
    } else{
      createCanvas(1200, 800)
    }
  }
  mario = createSprite(100, 350, 50, 50);
  mario.addImage(turtle)
  console.log(mario.height)
  mario.scale = 1.78571428571
  ground = createSprite(2000, 450, 4000, 100)
  ground.shapeColor="yellow"
  chunkLoader = createSprite(0, 0, 1, 1)
  enemy1 = new Enemy1(mario.x+500, mario.y, 50, 50)
  //enemy2 = new Enemy2(mario.x+1000, mario.y, 50, 50)
}

function draw() {
  background(200,255,255);
  rect(200, -100, 10000, 1)
  if(gamestate === 0){
    chunkLoader.x = mario.x
    chunkLoader.y = mario.y
    //chunkLoader.visible = false
    mario.debug = true
    chunkLoader.setCollider("rectangle", 0, 0, width, height)
    if(mario.x>distance){distance=mario.x}
    currentDistance=mario.x;  
    console.log(distance+' '+currentDistance+" "+(ground.y-ground.height/2)+'and'+(mario.y+mario.height/2))
    mario.collide(ground)
    if(mario.velocityY>=25){
    
    } else{
      mario.velocityY=mario.velocityY+3
    }
    if(mario.y >= 350){
      ground.shapeColor = "yellow"
    } else{
      ground.shapeColor = "red"
    }
    move();
    camera.position.y=mario.y
    if(mario.x>camera.position.x){
      camera.position.x = mario.x
    }
    /**if(mario.y <= -100){
      mario.velocityY = 600
    }**/
    enemy1.exist()
  }
  drawSprites();
}
function move(){
  if(keyDown(RIGHT_ARROW)){
    mario.velocityX=10
  }
  if(keyDown(LEFT_ARROW)){
    mario.velocityX=-10
  }
  if(!keyDown(LEFT_ARROW)&&!keyDown(RIGHT_ARROW)){
    mario.velocityX=0
  }
  if(keyDown(UP_ARROW)&&mario.y >= 350){
    mario.velocityY=-30
  }
}
/**function keyPressed(){
  if(keyCode===32){
    mario.velocityY=-5
  }
}**/