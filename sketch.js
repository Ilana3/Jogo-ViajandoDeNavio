var ship, ship_animation
var fundo, fundoImg

function preload(){
  ship_animation = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  fundoImg = loadImage ("sea.png");
}

function setup(){
  createCanvas(400,400);

  fundo = createSprite(200,200,400,400);
  fundo.addImage("image de fundo", fundoImg)
  fundo.scale = 0.3;
  //criando o navio e sua animação
  ship = createSprite(150,205,100,100);
  ship.addAnimation("flutuando", ship_animation);
  ship.scale = 0.3;
}

function draw() {
  background("blue");

  drawSprites();
}
