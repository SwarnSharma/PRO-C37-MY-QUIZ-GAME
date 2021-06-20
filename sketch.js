var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(1000,600);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  background("brown");
}


function draw(){
  
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState==1){
    clear();
    quiz.play();
  }
}
