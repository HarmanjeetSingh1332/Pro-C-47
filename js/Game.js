class Game {
  constructor() {
    this.resetTitle = createElement("h2");
    this.resetButton = createButton("");

    this.leadeboardTitle = createElement("h2");

    this.leader1 = createElement("h2");
    this.leader2 = createElement("h2");
  }
  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })
    console.log("gameState In getState" + gameState);
  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    console.log("start" + gameState);
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();


    }
  }

  play() {

    
    if (gameState === 1) {
      form.hide();
     if(playerIndex===1 && questionState1){
       background("pink");
       question = new Question();
       question.display();
     }
     else{
      background("pink");
      question = new Question();
      question.display();
    }
     if(playerIndex===1 && questionState2){
       background("lightblue");
       question = new Question();
       question.display();
     }
     else{
      background("lightblue");
      question = new Question2();
      question.display();
    }

    }


    if (gameState === 2) {
      background("Yellow");
      fill(0);
      textSize(30);
      text("Result of the Quiz", 340, 50);
      text("----------------------------", 320, 65);
      Player.getPlayerInfo();
      if (allPlayers !== undefined) {
        debugger;
        var display_Answers = 230;
        fill("Blue");
        textSize(20);
        text("*NOTE: Players who answered correct are highlighted in green color!", 130, 230);

        for (var plr in allPlayers) {
          debugger;
          var correctAns = "2";


          if (correctAns === allPlayers[plr].answer) {
            fill("Green")
          }
          else {
            fill("red");
          }


          display_Answers += 30;
          textSize(20);
          text(allPlayers[plr].name + ": " + allPlayers[plr].answer, 250, display_Answers)
        }
      }
    }
  }
} 