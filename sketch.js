var ship, ship_animation

function preload(){
ship_animation = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);

//criando o navio e sua animação
ship = createSprites(200,200,200,200);
ship.addAnimation("flutuando", ship_animation);
ship.scale = 50/100
}

function draw() {
  background("blue");

    drawSprites();
}
