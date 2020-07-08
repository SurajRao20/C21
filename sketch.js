var fixedRect, movingRect, ob1, ob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  ob1 = createSprite (600,100,50,80)
  ob1.shapeColor = "yellow";

  ob2 = createSprite (900,100,50,80)
  ob2.shapeColor = "teal";

  ob1.velocityX = +5;
  ob2.velocityX = -5;
}

function draw() {
  background(0,0,0);  

  bounceoff(ob1, ob2);

  drawSprites();
}


