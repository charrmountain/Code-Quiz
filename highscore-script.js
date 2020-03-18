var initialInput = document.getElementById("initialInput");
var userHighscore = document.getElementById("userScore");
var submitBtn = document.querySelector(".btn btn-primary");
var initialDisplay=document.getElementById("initialDisplay");

// get the list from storage
var userScore = JSON.parse(localStorage.getItem("newScore"));

//take sore and put initials
userHighscore.textContent="Your final score is " + userScore ;

var userInitials = [];

//when user clicks submit
submitBtn.addEventListener("click",function(event) {
    event.preventDefault();
    
    userInitials.push(initialInput)

    localStorage.setItem("initials", JSON.stringify(userInitials))

    // // get user from local storage
    // var list = JSON.parse(localStorage.getItem("initials", "newScore"))
    // var listElement = document.getElementById("initialDisplay");

    // // display the list
    // for (var i = 0; i < list.length; i++) {
    // var newLiElement = document.createElement("li");
    // newLiElement.textContent = list[i];
    // listElement.appendChild(newLiElement);
    // }

    // if (list.length === 0) {
    // var messageElement = document.createElement("h2");
    // messageElement.textContent = "No items yet!"
    // document.body.appendChild(messageElement)
    // }
});
