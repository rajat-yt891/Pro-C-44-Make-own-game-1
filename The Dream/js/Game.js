class Game {
  constructor(){

  }
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    
  }
  play(){
    form.hide();
    background(groundimg);
   var ground = createSprite(displayWidth/2, displayHeight-20, displayWidth, 20);
   if(rightenergy<200)
   rightenergy=rightenergy+1;
   fill("yellow");
   textSize(20);
   text("Tower 2 Energy"+rightenergy, displayWidth-300, 50);
   if(leftenergy<200)
   leftenergy=leftenergy+1;
   fill("yellow");
   textSize(20);
   text("Tower 1 Energy"+leftenergy, 300, 50);
   //making towers of botth side
   lefttower = createSprite(displayWidth/12 - 40, displayHeight -300, 50, 100);
   lefttower.addImage("lt",lefttowerimg);
   righttower = createSprite(displayWidth-90, displayHeight - 300, 50, 100);
   righttower.addImage("rt", righttowerimg);
   
   //sprites for dsiplay
   leftboy = createSprite(displayWidth-70, displayHeight-430, 50, 100);
   leftboy.addImage("LB", leftboyimg);
   leftboy.scale=0.2;
   rightboy = createSprite(displayWidth/12-80, displayHeight-430, 50, 100);
   rightboy.addImage("RB", rightboyimg);
   rightboy.scale=0.2;

   leftcannon = createSprite(displayWidth/12-20, displayHeight-430, 50, 100);
   leftcannon.addImage("lc", rightcannonimg);
   leftcannon.scale=0.5;
   rightcannon = createSprite(displayWidth-130, displayHeight-430, 50, 100);
   rightcannon.addImage("rc", leftcannonimg);
   rightcannon.scale=0.5;
  
  //for deploying attackers of right tower
  rightbikespawn = createSprite(displayWidth/2+190, 300, 40, 40);
  rightbikespawn.addImage("bs", leftbikeimg);
  rightbikespawn.scale=0.1;   
  rightcarspawn = createSprite(displayWidth/2+300, 300, 40, 40);
  rightcarspawn.addImage("cs", leftcarimg);
  rightcarspawn.scale=0.1;
  righttruckspawn = createSprite(displayWidth/2+410, 300, 40, 40);
  righttruckspawn.addImage("ts", lefttruckimg);
  righttruckspawn.scale=0.1;

  //for deploying attackers for left tower
  leftbikespawn = createSprite(displayWidth/2-190, 300, 40, 40);
  leftbikespawn.addImage("bs", rightbikeimg);
  leftbikespawn.scale=0.1;   
  leftcarspawn = createSprite(displayWidth/2-300, 300, 40, 40);
  leftcarspawn.addImage("cs", rightcarimg);
  leftcarspawn.scale=0.1;
  lefttruckspawn = createSprite(displayWidth/2-410, 300, 40, 40);
  lefttruckspawn.addImage("ts", righttruckimg);
  lefttruckspawn.scale=0.1;
  if(mousePressedOver(rightcarspawn)){
  //bla = createSprite(displayWidth/2+200, 600, 50, 50);
  //bla.scale=0.4;
  rightenergy=rightenergy-40;
  //bla.velocityX=-4;
  }

  drawSprites();
  }
}
