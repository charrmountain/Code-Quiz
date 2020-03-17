var homepage =document.getElementById("homepage");
var question =document.getElementById("question");
var choiceList = document.getElementById("choices");
var timer=document.getElementById("countdown");

var questions = [
    { 
        q :"Commonly used data types DO NOT include:",
        choices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        correct: "3. Alerts"
    },{ 
        q :"The condition in an if / else statement is enclosed within ___.",
        choices: ["1. Quotes", "2. Curly Brackets", "3. Parentheses", "4. Square Brackets"],
        correct: "3. Curly Brackets"
    },{ 
        q :"Arrays in JavaScript can be used to store ___.",
        choices: ["1. Numbers and Strings", "2. Other Arrays", "3. Booleans", "4. All of the Above"],
        correct: "4. All of the Above"
    },{ 
        q :"String values must be enclosed within ___ when being assigned to variables.",
        choices: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parentheses"],
        correct: "3. Quotes"
    },{ 
        q :"Commonly used data types DO NOT include:",
        choices: ["1. JavaScript", "2. Terminal/Bash", "3. For Loops", "4. Console Log"],
        correct: "4. Console Log"
    }
];

//time on homepage=0
var currentQuestion=0;
var lastQuestion = questions.length - 1;
var score=0;
timeleft = 0;

function startTimer() {
    // startTime.style.display = "none";
    timeleft = 75;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdown").textContent = timeleft;
    if(timeleft <= 0){
        window.location.replace("./highscores.html");
        clearInterval(downloadTimer);}
    },1000);
}

function startQuiz() {
    //get rid of homepage
    homepage.style.display = "none";
    //start questions
    displayQuestion();
    //start timer
    startTimer()
}


function displayQuestion(){
  //display question1
  question.textContent=questions[currentQuestion].q 
  //loop through choices
  choiceList.innerHTML = ""
  for(let choice of questions[currentQuestion].choices){
      // each choice is one of the choices
     var newBtn = document.createElement("BUTTON");
     //append words
     choiceList.append(newBtn);
     newBtn.textContent = choice;
     //set values to the button
     newBtn.setAttribute("value", choice);
     //goes to check answer once button is clicked
     newBtn.addEventListener('click',checkAnswer);
  }  
}

var answer= [];
console.log(answer)

function checkAnswer(answer){
    if( answer == questions[currentQuestion].correct){
        // answer is correct
        score++;
        currentQuestion++;
        displayQuestion();
     console.log(score)

    }else{
        // answer is wrong
        timeleft-10;
    }
    
    if(currentQuestion < lastQuestion){
        currentQuestion++;
        displayQuestion();
    }else{
        // end the quiz and show the score
        window.location.replace("./highscores.html");
        ;
    }
}

function answerIsWrong(){

}