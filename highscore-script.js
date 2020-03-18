var formEl = document.querySelector("form");
var itemInput = document.querySelector("#item-input");
var userHighscore = document.getElementById("userScore");
var resetBtn = document.getElementById("reset");


// get the list from storage
var userScore = JSON.parse(localStorage.getItem("newScore"));

//take sore and put initials
userHighscore.textContent="Your final score is " + userScore ;

    var userInitials = [];
  
  formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    // get input
    var newItem = itemInput.value.trim();
   
    // add input to list
    userInitials.push(newItem)
  
    // add to local storage
    localStorage.setItem("userInitials", JSON.stringify(userInitials))
    
    var userInitialarr= JSON.parse(localStorage.getItem("userInitials"));
    console.log(userInitialarr)
    var newLiElement = document.createElement("li");
    newLiElement.textContent = userInitialarr + " " + userScore;
    userHighscore.appendChild(newLiElement);
    
});

//reset Button
resetBtn.addEventListener('click', function () {
    localStorage.clear();
    document.getElementById("form").reset();
}, false);