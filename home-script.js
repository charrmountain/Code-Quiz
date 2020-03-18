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
        correct: "2. Curly Brackets"
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
var currentQuestion = 0;
var lastQuestion = questions.length - 1;
var timeleft = 0;
var score = 0;

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


function checkAnswer(answer, choicePicked){
    if(answer === choicePicked){ 
        //get +10 score
        score += 10;
    }else{
        // answer is wrong -10 sec
        timeleft -= 10;
    }
    
    if(currentQuestion < lastQuestion){
        currentQuestion++;
        displayQuestion();
    }else{
        newScore=[]
 
         // add score to list
        newScore.push(score)

         // add to local storage
        localStorage.setItem("newScore", JSON.stringify(newScore))

        // end the quiz and show the score
        //can't go back --NO CHEATING!
        window.location.replace("./highscores.html");
        ;
    }
}

function storeAnswer(event){
    if (event.target.matches("button")) {
    //  console.log(event.target.textContent)
      }
      checkAnswer(questions[currentQuestion].correct, event.target.textContent);
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
     choiceList.addEventListener('click',storeAnswer);
     //goes to check answer once button is clicked
    //  newBtn.addEventListener('click',checkAnswer);
  }  
}


function startQuiz() {
    //get rid of homepage
    homepage.style.display = "none";
    //start questions
    displayQuestion();
    //start timer
    startTimer()
}