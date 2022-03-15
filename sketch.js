var canvas;
var database, gameState = 0;
var form, player, playerCount, questionState1,questionState2;
var allPlayers,playerIndex;
var question;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  console.log("sketch.js"+gameState);
  game.start();
}

function draw() {
  background("navy");
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
