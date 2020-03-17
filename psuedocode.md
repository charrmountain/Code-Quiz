create coding quiz home page
in one corner HighScores page **needs to be its own html
timer=0
start quiz button
when user clicks button and first question page pops up

timer starts gets +75 seconds

Coding Quiz Challenge
Try to answer the following code-related questions within the time limit. Keep it mind that incorrect answers will penalize your score/time by ten seconds!
-start quiz button-

pages refreshes with question appearing
*ALL BUTTONS NEED HOVER FEATURE!!!!*

question 1:
"Commonly used data types DO NOT include:
   button- 1. Strings
   button- 2. Booleans
   button- 3. Alerts
   button- 4. Numbers"

each button needs to be assigned a wrong and right value
there are in this question to be assigned correct
question 1{
    button1:false
    button2:false
    button3:true
    button4:false

when answer wrong button
timer gets -10 seconds

user gets next questions page every time questions get answered

alert saying "wrong!" or "correct!" on the bottom of the question for 1 second.

question 2:
"The condition in an if / else statement is enclosed within ___.
   button- 1. Quotes
   button- 2. Curly Brackets
   button- 3. Parentheses 
   button- 4. Square Brackets"

assign true and false booleans
question2{
    button1:false
    button2:true
    button3:false
    button4:false
}

question 3:
"Arrays in JavaScript can be used to store ___.
   button- 1. Numbers and Strings
   button- 2. Other Arrays
   button- 3. Booleans
   button- 4. All of the Above"

assign true of false
question3{
    button1:false
    button2:false
    button3:false
    button4:true
}

question 4:
"String values must be enclosed within ___ when being assigned to variables.
   button- 1. Commas
   button- 2. Curly Brackets
   button- 3. Quotes
   button- 4. Parentheses"

assign true of false
question4{
    button1:false
    button2:false
    button3:true
    button4:false
}

question 5:
"A very useful tool used during development and debugging for printing content to the debugger is:
   button- 1. JavaScript
   button- 2. Terminal/Bash
   button- 3. For Loops
   button- 4. Console Log"

assign true of false
question5{
    button1:false
    button2:false
    button3:false
    button4:true
}

After all 5 questions are done. 
You get send to the All Done!
final score : (displayed here)
Enter users initials: (here)
then they submit.

get taken to HighScores page **needs to be its own html
users score is logged into High Score page
shows the rankings of the scores.
Button 1- Go Back to homepage
Button 2- clear to high scores


var homepage= document.getElementById("titlepage");
var start = document.getElementById("startBtn");
var quiz = document.getElementById("quiz");
var questions = document.getElementById("question");
var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");


var questions = [
    {   question1: "Commonly used data types DO NOT include:",
        "1. Strings":false,
        "2. Booleans":false,
        "3. Alerts":true,
        "4. Numbers":false,
    },{
        question2:"The condition in an if / else statement is enclosed within ___.",
        "1. Quotes":false,
        "2. Curly Brackets":true,
        "3. Parentheses ":false,
        "4. Square Brackets":false,
    },{
        question3: "Arrays in JavaScript can be used to store ___.",
        "1. Numbers and Strings":false,
        "2. Other Arrays":false,
        "3. Booleans":false,
        "4. All of the Above":true,
    },{
        question4: "String values must be enclosed within ___ when being assigned to variables.",
        "1. Commas":false,
        "2. Curly Brackets":false,
        "3. Quotes":true,
        "4. Parentheses":false,
    },{
        question5: "A very useful tool used during development and debugging for printing content to the debugger is:",
        "1. JavaScript":false,
        "2. Terminal/Bash":false,
        "3. For Loops":false,
        "4. Console Log":true,
    }
];
