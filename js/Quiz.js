  class Quiz {
  constructor(){}

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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  
  play(){

      question.hide();

      background("skyBlue");
      fill("orange");
      textSize(30);
      text("Result of the Quiz",380, 50);
      text("----------------------------",360, 65);

      Contestant.getPlayerInfo();

      if(allContestants !== undefined){
        var display_Answers = 430;
        fill("Blue");
        textSize(25);
        text("*NOTE: Contestants who answered correct are highlighted in green color!",100,400);
  
        for(var plr in allContestants){
          var correctAns = "3";
          if (correctAns === allContestants[plr].answer){
            fill("Green")}
          else{
            fill("red");
          }

          display_Answers+=50;

          textSize(25);
          text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
        }
      }
    }
  }
  