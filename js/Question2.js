class Question2 {
    constructor() {
      this.input = createInput("").attribute("placeholder", "Enter your answer");
      this.submitButton =  createButton("Submit");
      this.question = createElement('h1');
      this.option1 = createElement('h2');
      this.option2 = createElement('h2');
      this.option3 = createElement('h2');
      this.option4 = createElement('h2');
    }

   


    setElementsStyle(){
      this.input.class("customInput");
      this.submitButton.class("customButton");
    }
    setElementPosition(){
      this.input.position(150,260);
      this.submitButton.position(150,300);
    }

    handleMousePressed() {
      this.submitButton.mousePressed(() => {
        this.input.hide();
        this.submitButton.hide();
        player.update();
        this.question.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide(); 
      });
    }

    display(){
    
        this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
        this.question.position(150, 80);
        this.option1.html("1: Everyone " );
        this.option1.position(150, 120);
        this.option2.html("2: Envelope" );
        this.option2.position(150, 140);
        this.option3.html("3: Estimate " );
        this.option3.position(150, 160);
        this.option4.html("4: Example" );
        this.option4.position(150, 180);
        this.setElementsStyle();
        this.setElementPosition();
        this.handleMousePressed();
    }
}