var undergroundImg, underground;
var invisibleGround;
var alien, alien_move, alien_move2, alien_move3, alien_move4, alien_move5, alienJumping, alienJumping2, alienJumping3, alienJumping4, alienJumping5;
var obstacle1, obstacle2, obstaclesGroup;
var flyObstacle, flyingObstaclesGroup;
var gameState;
var gameOver, gameOverImg, gameOverSound;
var reset, resetImg;
var jumpSound;
var score, scoreSound;
var playButton, playButtonImg, pauseButton, pauseButtonImg, pause, pauseImg;
var getReady, getReadyImg;
var homeButton, homeButtonImg;
var highScoreImg;
var console, consoleImg;
var arrow, arrowImg;
var press, pressImg;
var coinImg, coinsGroup, coinCount, coinStack, coinStackImg;
var cloth, clothImg;
var alien1, alien1Img, alien2, alien2Img, alien3, alien3Img, alien4, alien4Img, alien5, alien5Img;
var bubble, bubbleImg, bubblesGroup;
var bubbleIconImg, bubbleIconsGroup;
var lock, lock2, lock3, lock4, lockImg;

var selectAlien;

localStorage["HighestScore"] = 0;

function preload() {
  
  //background image
  undergroundImg = loadImage("underground.png");
  
  //loading moving animations for the alien
  alien_move = loadAnimation("alien_1.png", "alien_2.png");
  alien_move2 = loadAnimation("alien_2_1.png", "alien_2_2.png");
  alien_move3 = loadAnimation("alien_3_1.png", "alien_3_2.png");
  alien_move4 = loadAnimation("alien_4_1.png", "alien_4_2.png");
  alien_move5 = loadAnimation("alien_5_1.png", "alien_5_2.png");
  
  //loading obstacle animations
  obstacle1 = loadAnimation("obs_1_1.png", "obs_1_2.png");
  obstacle2 = loadAnimation("obs_2_1.png", "obs_2_2.png");
  flyObstacle = loadAnimation("fly1.png", "fly2.png");
  
  //loading jumping animations for the alien
  alienJumping = loadAnimation("alienJump.png");
  alienJumping2 = loadAnimation("alienJump2.png");
  alienJumping3 = loadAnimation("alienJump3.png");
  alienJumping4 = loadAnimation("alienJump4.png");
  alienJumping5 = loadAnimation("alienJump5.png");
  
  playButtonImg = loadImage("playButton1.png");
  pauseButtonImg = loadImage("pauseButton.png");
  pauseImg = loadImage("pauseBlack.png");
  getReadyImg = loadImage("getReady.png");
  gameOverImg = loadImage("gameOver.png");
  resetImg = loadImage("restart2.png");
  homeButtonImg = loadImage("home.png");
  gameOverSound = loadSound("gameOverSound.wav");
  jumpSound = loadSound("jumpSound.wav");
  highScoreImg = loadImage("high-score.png");
  consoleImg = loadImage("CONSOLE.png");
  arrowImg = loadImage("leftArrow.png");
  pressImg = loadImage("pressSpace.jpg");
  coinImg = loadImage("coin.gif");
  coinStackImg = loadImage("coinStack.png");
  scoreSound = loadSound("score.wav");
  clothImg = loadImage("cloth.png");
  
  alien1Img = loadImage("alien1.png");
  alien2Img = loadImage("alien2.png");
  alien3Img = loadImage("alien3.png");
  alien4Img = loadImage("alien4.png");
  alien5Img = loadImage("alien5.png");
  
  bubbleImg = loadImage("bubble.png");
  bubbleIconImg = loadImage("bubbleIcon.png");
  
  lockImg = loadImage("lock1.png");

}

function setup() {

  createCanvas(400, 400);

  //creating the background in the form of an underground tunnel
  underground = createSprite(200, 200);
  underground.addImage("tunnel img", undergroundImg);
  
  //creating an invisible ground for the alien to stand on
  invisibleGround = createSprite(200, 380, 200, 10);
  invisibleGround.width = underground.width;
  invisibleGround.visible = false;
  
  //creating the alien
  alien = createSprite(50, 370, 10, 10);
  
  //adding animations to the alien
  alien.addAnimation("movement", alien_move);
  alien.addAnimation("movement2", alien_move2);
  alien.addAnimation("movement3", alien_move3);
  alien.addAnimation("movement4", alien_move4);
  alien.addAnimation("movement5", alien_move5);
  alien.addAnimation("jumping", alienJumping);
  alien.addAnimation("jumping2", alienJumping2);
  alien.addAnimation("jumping3", alienJumping3);
  alien.addAnimation("jumping4", alienJumping4);
  alien.addAnimation("jumping5", alienJumping5);
  alien.scale = 0.8;
  alien.visible = true;
  
  //creating the play button
  playButton = createSprite(200, 250);
  playButton.addImage(playButtonImg);
  playButton.scale = 0.1;
  
  getReady = createSprite(200, 150);
  getReady.addImage(getReadyImg);
  getReady.scale = 0.8;
  
  gameOver = createSprite(200, 200, 50, 50);
  gameOver.addImage("game over img", gameOverImg);
  gameOver.scale = 0.8;

  //creating the reset button
  reset = createSprite(200, 270);
  reset.addImage(resetImg);
  reset.scale = 0.2;
  
  //creating the pause button
  pause = createSprite(200, 150);
  pause.addImage(pauseImg);
  pause.scale = 1.5;
  pause.visible = false;
  
  //creating the home button
  homeButton = createSprite(370, 40);
  homeButton.addImage(homeButtonImg);
  homeButton.scale = 0.8;
  
  highScore = createSprite(50, 60);
  highScore.addImage(highScoreImg);
  highScore.scale = 0.1;
  

  console = createSprite(40, 370);
  console.addImage(consoleImg);
  console.scale = 0.5;

  arrow = createSprite(40, 100);
  arrow.addImage(arrowImg);
  arrow.scale = 0.05;
  
  press = createSprite(220, 250);
  press.addImage(pressImg);
  press.scale = 0.2;
  
  cloth = createSprite(370, 370);
  cloth.addImage(clothImg);
  cloth.scale = 0.05;
  
  alien1 = createSprite(120, 125);
  alien1.addImage(alien1Img);
  alien1.scale = 0.8;
  
  alien2 = createSprite(220, 125);
  alien2.addImage(alien2Img);
  alien2.scale = 0.8;

  alien3 = createSprite(320, 125);
  alien3.addImage(alien3Img);
  alien3.scale = 0.8;
  
  alien4 = createSprite(172, 225);
  alien4.addImage(alien4Img);
  alien4.scale = 0.8;
  
  alien5 = createSprite(272, 225);
  alien5.addImage(alien5Img);
  alien5.scale = 0.8;
  
  lock4 = createSprite(272, 225);
  lock4.addImage(lockImg);
  lock4.scale = 0.25;
  lock4.visible = false;
  

  coinStack = createSprite(240, 40);
  coinStack.addImage(coinStackImg);
  coinStack.scale = 0.08;
  
  pauseButton = createSprite(320, 40);
  pauseButton.addImage(pauseButtonImg);
  pauseButton.scale = 0.08;

  coinsGroup = new Group();
  bubblesGroup = new Group();
  bubbleIconsGroup = new Group();
  obstaclesGroup = new Group();
  flyingObstaclesGroup = new Group();

  score = 0;
  coinCount = 0;
  selectAlien = 1;
  
  gameState = "start";
  
    /*if(bubbleIconsGroup.isTouching(alien)){
    
      bubble = createSprite(alien.x, 340, 10, 10);
      bubble.addImage(bubbleImg);
      bubble.scale = 0.6;
      bubble.lifetime = 100;
      bubble.y = alien.y;
      //bubbleIcon.velocityX = -2;
      bubbleIconsGroup.destroyEach();

    if (obstaclesGroup.isTouching(bubble) || flyingObstaclesGroup.isTouching(bubble)) {
      obstaclesGroup.destroyEach();
      flyingObstaclesGroup.destroyEach();
    }
    

      bubblesGroup.add(bubble);
    
  }*/

}

function draw() {

  background(180);
  
  
  
  if (gameState === "start") {
    
  homeButton.visible = false;
  gameOver.visible = false;
  reset.visible = false;
  alien.visible = false;
  arrow.visible = false;
  press.visible = false;
  alien1.visible = false;
  alien2.visible = false;
  alien3.visible = false;
  alien4.visible = false;
  alien5.visible = false;
  alien.visible = false;
    pauseButton.visible = false;
  coinStack.visible = true;  
  playButton.visible = true;
  getReady.visible = true;
  console.visible = true;
  cloth.visible = true;
    highScore.visible = true;
  coinsGroup.destroyEach();
    bubbleIconsGroup.destroyEach();
    bubblesGroup.destroyEach();
  obstaclesGroup.destroyEach();
  flyingObstaclesGroup.destroyEach();
  underground.velocityX = 0;
    
    
  if(localStorage["HighestScore"] < score){
    localStorage["HighestScore"] = score;
  }
    score = 0;
    coinCount = 0;
    
  }
  
  if (mousePressedOver(playButton) && gameState === "start") {
    gameState = "play";
  }
  
  if (mousePressedOver(console) && gameState === "start") {
    gameState = "about";
  }
  
  if (gameState === "about"){
  
    homeButton.visible = false;
    gameOver.visible = false;
    reset.visible = false;
    alien.visible = false;
    playButton.visible = false;
    getReady.visible = false;
    console.visible = false;
    cloth.visible = false;
    alien1.visible = false;
    alien2.visible = false;
    alien3.visible = false;
    alien4.visible = false;
    alien5.visible = false;
    coinStack.visible = false;
    highScore.visible = false;
    pauseButton.visible = false;
    pause.visible = false;
    alien.visible = false;
    arrow.visible = true;
    press.visible = true;
    coinsGroup.destroyEach();
    bubbleIconsGroup.destroyEach();
    bubblesGroup.destroyEach();
    obstaclesGroup.destroyEach();
    flyingObstaclesGroup.destroyEach();
    underground.velocityX = 0;
    
    
  }


  if (mousePressedOver(arrow) && gameState === "about") {
    gameState = "start";
  }
  
  if (mousePressedOver(cloth) && gameState === "start") {
    gameState = "clothing";
  }
  
  if (gameState === "clothing"){
  
    homeButton.visible = false;
    gameOver.visible = false;
    reset.visible = false;
    alien.visible = false;
    playButton.visible = false;
    getReady.visible = false;
    console.visible = false;
    cloth.visible = false;
    press.visible = false;
    coinStack.visible = false;
    highScore.visible = false;
    pauseButton.visible = false;
    pause.visible = false;
    alien.visible = false;
     arrow.visible = true;
    alien1.visible = true;
    alien2.visible = true;
    alien3.visible = true;
    alien4.visible = true;
    alien5.visible = true;
    
    coinsGroup.destroyEach();
    bubbleIconsGroup.destroyEach();
    bubblesGroup.destroyEach();
    obstaclesGroup.destroyEach();
    flyingObstaclesGroup.destroyEach();
    underground.velocityX = 0;
    
    
    
  }
  
  if (mousePressedOver(alien1) && gameState === "clothing") {
    
    selectAlien = 1;
    
  } 
  
  if (mousePressedOver(alien2) && gameState === "clothing") {
    
    selectAlien = 2;
    
  } 
  
  if (mousePressedOver(alien3) && gameState === "clothing") {
    
    selectAlien = 3;
    
  }
  
  if (mousePressedOver(alien4) && gameState === "clothing") {
    
    selectAlien = 4;
    
  } 
  
  if (mousePressedOver(alien5) && gameState === "clothing") {
    
    selectAlien = 5;
    
  }
  
  if (mousePressedOver(arrow) && gameState === "clothing") {
    gameState = "start";
  }
  
   
  if (mousePressedOver(pauseButton) && gameState === "play") {
    gameState = "pause";
  }
  
  if (gameState === "pause") {
    
  homeButton.visible = false;
  gameOver.visible = false;
  reset.visible = false;
  alien.visible = false;
  arrow.visible = false;
  press.visible = false;
  alien1.visible = false;
  alien2.visible = false;
  alien3.visible = false;
  alien4.visible = false;
  alien5.visible = false;
    pauseButton.visible = false;
  coinStack.visible = false;  
  playButton.visible = false;
  getReady.visible = false;
  console.visible = false;
  cloth.visible = false;
    coinStack.visible = true;
    pause.visible = true;
    highScore.visible = true;
    playButton.visible = true;
    alien.visible = true;
    

    alien.velocityY = 0;    
    
    obstaclesGroup.setLifetimeEach(-1);
    obstaclesGroup.setVelocityXEach(0);
    flyingObstaclesGroup.setLifetimeEach(-1);
    flyingObstaclesGroup.setVelocityXEach(0);
    coinsGroup.setLifetimeEach(-1);
    coinsGroup.setVelocityXEach(0);
    bubbleIconsGroup.setLifetimeEach(-1);
    bubbleIconsGroup.setVelocityXEach(0);
    underground.velocityX = 0;
    
  }
  
  if (mousePressedOver(playButton) && gameState === "pause") {
    gameState = "play";
      obstaclesGroup.setLifetimeEach(300);
    obstaclesGroup.setVelocityXEach(-(6 + score/100));
    flyingObstaclesGroup.setLifetimeEach(300);
    flyingObstaclesGroup.setVelocityXEach(-(3.5 + score/100));
    coinsGroup.setLifetimeEach(1000);
    coinsGroup.setVelocityXEach(-(6 + score/100));
    bubbleIconsGroup.setLifetimeEach(250);
    bubbleIconsGroup.setVelocityXEach(-(6 + score/100));
    alien.visible = true;
  }
  
  
  if (gameState === "play") {

    homeButton.visible = false;
    reset.visible = false;
    gameOver.visible = false;
    playButton.visible = false;
    getReady.visible = false;
    console.visible = false;
    press.visible = false;
    arrow.visible = false;
    cloth.visible = false;
    alien1.visible = false;
    alien2.visible = false;
    alien3.visible = false;
    alien4.visible = false;
    alien5.visible = false;
    coinStack.visible = true;
     highScore.visible = true;
    pauseButton.visible = true;
    pause.visible = false;
    alien.visible = true;
    

    score = score + Math.round(getFrameRate() / 60);
    
    underground.velocityX = -(4 + 3 * score/100);
    


    
    
    if (underground.x < 50) {
      underground.x = underground.width / 2;
    }

    if (keyDown("space") && alien.y >= 250) {
      alien.velocityY = -10;
      jumpSound.play();
    }

    if (selectAlien === 1){
      
    alien.changeAnimation("movement", alien_move);
      
    }
    
    
    if (selectAlien === 2){
      
    alien.changeAnimation("movement2", alien_move2);
      
    }
    
    if (selectAlien === 3){
      
    alien.changeAnimation("movement3", alien_move3);
      
    }
    
    if (selectAlien === 4){
      
    alien.changeAnimation("movement4", alien_move4);
      
    }
    
    if (selectAlien === 5){
      
    alien.changeAnimation("movement5", alien_move5);
      
    }
    
    alien.velocityY = alien.velocityY + 0.8;

    alien.collide(invisibleGround);
    
    spawnCoins();
    spawnObstacles();
    spawnFlyingObstacles();
    /*spawnBubbleIcon();
    spawnBubble();*/
    
  /*if(bubbleIconsGroup.isTouching(alien)){
    
      bubble = createSprite(alien.x, 340);
      bubble.addImage(bubbleImg);
      bubble.scale = 0.6;
      bubble.lifetime = 100;
      bubble.y = alien.y;
      //bubbleIcon.velocityX = -2;
      bubbleIconsGroup.destroyEach();

    if (obstaclesGroup.isTouching(bubble) || flyingObstaclesGroup.isTouching(bubble)) {
      obstaclesGroup.destroyEach();
      flyingObstaclesGroup.destroyEach();
    }
    

      bubblesGroup.add(bubble);
    
  }*/


    
    if (coinsGroup.isTouching(alien)){
      coinCount = coinCount + 1;
      coinsGroup.destroyEach();
      scoreSound.play();
    }
    


    if (obstaclesGroup.isTouching(alien) || flyingObstaclesGroup.isTouching(alien) && gameState === "play") {
      gameState = "end";
      gameOverSound.play();
    }

    /*if(obstaclesGroup.isTouching(bubblesGroup) || flyingObstaclesGroup.isTouching(bubblesGroup)){
      obstaclesGroup.destroyEach();
      flyingObstaclesGroup.destroyEach();
    }*/

  } else if (gameState === "end") {
    underground.velocityX = 0;
    alien.velocityY = 0;
    //obstaclesGroup.destroyEach();
    obstaclesGroup.setLifetimeEach(-1);
    obstaclesGroup.setVelocityXEach(0);
    flyingObstaclesGroup.setLifetimeEach(-1);
    flyingObstaclesGroup.setVelocityXEach(0);
    coinsGroup.setLifetimeEach(-1);
    coinsGroup.setVelocityXEach(0);
    bubbleIconsGroup.setLifetimeEach(-1);
    bubbleIconsGroup.setVelocityXEach(0);
    bubblesGroup.destroyEach();
    //alien.destroy();
    gameOver.visible = true;
    reset.visible = true;
    homeButton.visible = true;
  arrow.visible = false;
  press.visible = false;
  playButton.visible = false;
  getReady.visible = false;
  console.visible = false;
    cloth.visible = false;
    alien1.visible = false;
    alien2.visible = false;
    alien3.visible = false;
    alien4.visible = false;
    alien5.visible = false;
    pauseButton.visible = false;
    alien.visible = true;
    pause.visible = false;
    coinStack.visible = true;
     highScore.visible = true;
    
    if (selectAlien === 1){
      
      alien.changeAnimation("jumping", alienJumping);
      
    }
    
    if (selectAlien === 2){
      
      alien.changeAnimation("jumping2", alienJumping2);
      
    }
    
    if (selectAlien === 3){
      
      alien.changeAnimation("jumping3", alienJumping3);
      
    }
    
    if (selectAlien === 4){
      
      alien.changeAnimation("jumping4", alienJumping4);
      
    }
    
    if (selectAlien === 5){
      
      alien.changeAnimation("jumping5", alienJumping5);
      
    }
    
    
    
  }

  if (mousePressedOver(reset) && gameState === "end") {
    restart();
    
  }
  
  if (mousePressedOver(homeButton) && gameState === "end") {
    gameState = "start";
  }


  drawSprites();
  
  if (gameState === "start" || gameState === "play" || gameState === "end" || gameState === "pause"){
    
  fill("white");
  textSize(20);
  text("Score : " + score, 20, 40);
  
  fill("white");
  textSize(20);
  text(" : " + localStorage["HighestScore"], 95, 65);
  
  
  fill("white");
  textSize(20);
  text(" : " + coinCount, 260, 45);
    
  }
  
  if(gameState === "about") {
     fill("white");
     textSize(19);
     text("Avoid the obstacles to score higher 😉",  45, 350);
    
     fill("white");
     textSize(19);
     text("An alien came to visit Earth but ",  75, 90);
    
     fill("white");
     textSize(19);
     text("got lost inside an underground",  75, 120);
    
     fill("white");
     textSize(19);
     text("tunnel. Help the alien escape the ",  75, 150);
    
    fill("white");
     textSize(19);
     text("tunnel! ",  75, 180);
    
     fill("white");
     textSize(19);
     text("Collect coins on the way too 😄",  75, 380);
  }

    if(gameState === "start") {
     fill("black");
     textSize(20);
     text("<- Instructions",  75, 380);
  }

  if(gameState === "clothing") {
     fill("white");
     textSize(20);
     text("Didn't like the default color? 😐",  85, 350);
    
     fill("white");
     textSize(20);
     text("Change your Avatar here 😋",  95, 380);
    
    if (selectAlien === 1){
      
     fill("white");
     textSize(20);
     text("Current Color : BLUE",  100, 50);
      
    }
    
    
    if (selectAlien === 2){
      
         fill("white");
     textSize(20);
     text("Current Color : BEIGE",  100, 50);
      
    }
    
    if (selectAlien === 3){
      
         fill("white");
     textSize(20);
     text("Current Color : GREEN",  100, 50);
      
    }
    
    if (selectAlien === 4){
      
         fill("white");
     textSize(20);
     text("Current Color : PINK",  100, 50);
      
    }
    
    if (selectAlien === 5){
      
    fill("white");
     textSize(20);
     text("Current Color : YELLOW",  100, 50);
      
    }
  }
  
}

function spawnCoins() {
  if (frameCount % 70 === 0 && score > 50){
    var coin = createSprite(425, 370, 10, 10);
    coin.velocityX = -(6 + score/100);
    coin.y = Math.round(random(250, 360));
    coin.addImage(coinImg);
    coin.scale = 0.25;
    coin.lifetime = 1000;
    
    coinsGroup.add(coin);
  }
}

function spawnObstacles() {

  if (frameCount % 100 === 0) {
    var obstacle = createSprite(425, 370, 50, 50);
    obstacle.velocityX = -(6 + score/100);
    //obstacle.debug = true;
    //obstacle.setCollider("circle", 0, 0, 45);

    obstacle.y = Math.round(random(285, 370));

    var rand = Math.round(random(1, 2));
    switch (rand) {
      case 1:
        obstacle.addAnimation("obs 1 img", obstacle1);
        break;
      case 2:
        obstacle.addAnimation("obs 2 img", obstacle2);
        break;
    }

    obstacle.scale = 0.55;
    obstacle.lifetime = 300;

    obstaclesGroup.add(obstacle);
  }
}

function spawnFlyingObstacles() {

  if (score % 80 === 0 && score > 200) {
    var flyingObstacle = createSprite(425, 370, 10, 20);
    flyingObstacle.velocityX = -(3.5 + score/100);
    //obstacle.debug = true;
    //obstacle.setCollider("circle", 0, 0, 45);

    flyingObstacle.y = Math.round(random(100, 280));

    flyingObstacle.addAnimation("flying obs", flyObstacle);
        

    flyingObstacle.scale = 0.55;
    flyingObstacle.lifetime = 300;
    
    gameOver.depth = flyingObstacle.depth;
    flyingObstacle.depth = flyingObstacle.depth + 1;

    flyingObstaclesGroup.add(flyingObstacle);
  }
}

function spawnBubbleIcon() {
  
  if(frameCount % 250 === 0){
    
    var bubbleIcon = createSprite(425, 350, 10, 10);
    bubbleIcon.addImage(bubbleIconImg);
    bubbleIcon.scale = 0.6;
    bubbleIcon.lifetime = 250;
    bubbleIcon.velocityX = -(6 + score/100);
    
    bubbleIconsGroup.add(bubbleIcon);
    
  }
  
  
}

function spawnBubble() {
  
  if(bubbleIconsGroup.isTouching(alien)){
    
    var bubble = createSprite(alien.x, alien.y);
    bubble.addImage(bubbleImg);
    bubble.scale = 0.6;
    bubble.lifetime = 200;
    //bubble.y = alien.y;
    //bubbleIcon.velocityX = -2;
    bubbleIconsGroup.destroyEach();

  if (obstaclesGroup.isTouching(bubble) || flyingObstaclesGroup.isTouching(bubble)) {
      obstaclesGroup.destroyEach();
      flyingObstaclesGroup.destroyEach();
    }
    
    //bubblesGroup.add(bubble);
    
  }
  

  
}

function restart() {
  gameState = "play";
  gameOver.visible = false;
  reset.visible = false;
  homeButton.visible = false; 
  arrow.visible = false;
  press.visible = false;
  playButton.visible = false;
  getReady.visible = false;
  console.visible = false;
  cloth.visible = false;
  alien1.visible = false;
  alien2.visible = false;
  alien3.visible = false;
  alien4.visible = false;
  alien5.visible = false;
  pause.visible = false;
  pauseButton.visible = true;
  coinStack.visible = true;
   highScore.visible = true;
  
    if (selectAlien === 1){
      
    alien.changeAnimation("movement", alien_move);
      
    }
    
    
    if (selectAlien === 2){
      
    alien.changeAnimation("movement2", alien_move2);
      
    }
    
    if (selectAlien === 3){
      
    alien.changeAnimation("movement3", alien_move3);
      
    }
    
    if (selectAlien === 4){
      
    alien.changeAnimation("movement4", alien_move4);
      
    }
    
    if (selectAlien === 5){
      
    alien.changeAnimation("movement5", alien_move5);
      
    }
  
  obstaclesGroup.destroyEach();
  flyingObstaclesGroup.destroyEach();
  coinsGroup.destroyEach();
  bubbleIconsGroup.destroyEach();
  underground.velocityX = -4;
  
 if(localStorage["HighestScore"] < score){
    localStorage["HighestScore"] = score;
  }
  
  score = 0;
  coinCount = 0;
}