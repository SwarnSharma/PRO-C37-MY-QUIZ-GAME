class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h2');
    this.option1 = createElement('h3');
    this.option2 = createElement('h3');
    this.option3 = createElement('h3');
    this.option4 = createElement('h3');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(420, 0);

    this.question.html("Question:- The Java programming language is modeled after which language? " );
    this.question.position(100, 100);
    this.option1.html("1: C# " );
    this.option1.position(150, 150);
    this.option2.html("2: C" );
    this.option2.position(150, 200);
    this.option3.html("3: C++ " );
    this.option3.position(150, 250);
    this.option4.html("4: Python" );
    this.option4.position(150, 300);

    this.input1.position(200, 400);
    this.input2.position(600, 400);
    this.button.position(460, 480);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
