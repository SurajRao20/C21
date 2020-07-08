var  wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1500,800);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  
  bullet = createSprite(400, 400, 40, 30);
  bullet.shapeColor = "orange";

  wall = createSprite(1200, 400, thickness, height/2);
  wall.shapeColor = "DarkTurquoise";

}

function draw() {
  background("teal"); 
  
  bullet.velocityX = speed;

  if (hasCollided (bullet, wall)) {
      
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if (damage > 10) {
      bullet.shapeColor = color(255,0,0);
    }

    if (damage < 10) {
      bullet.shapeColor = color(00,255,0);
    }

    
  }

  console.log(damage);

  drawSprites();
}

function hasCollided (bullet, wall){

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  
  if (bulletRightEdge >= wallLeftEdge ){
  
     return true
  }
     return false 
  }
