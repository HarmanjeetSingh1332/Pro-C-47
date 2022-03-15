class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.answer = 0;
    this.rank = 0;
    this.fuel = 185;
    this.life = 185;
    this.score = 0;
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;


    database.ref(playerIndex).set({
      name: this.name,
      answer:this.answer,
      rank: this.rank,
      questionState: 1,
      score: this.score
    });
  }

 

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  getQuestionState(){
  var playerIndex = "players/player" + this.index +"/questionState";
  var questionState = database.ref(playerIndex);
  questionState.on("value", data =>{
    if(this.index === 1){
      questionState1 = data.val();
    }
    else{
      questionState2 = data.val(); 
    }
  });
  }

  updateQuestionState(){
    database.ref(playerIndex).update({
      questionState1: questionState1,
      questionState2: questionState2
    })
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      rank: this.rank,
      score: this.score,
      
    });
  }

  static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
  }

  getplayersAtEnd() {
    database.ref("playersAtEnd").on("value", data => {
      this.rank = data.val();
    });
  }

  static updateplayersAtEnd(rank) {
    database.ref("/").update({
      playersAtEnd: rank
    });
  }
}
