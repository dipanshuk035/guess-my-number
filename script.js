"use strict";
let randomNumber = Math.trunc(Math.random() * 21);
let guessedNumber,
  highScore = 0,
  Score = 20;
function displayMessage(messege) {
  document.querySelector(".message").textContent = messege;
}
document.querySelector(".check").addEventListener("click", function () {
  guessedNumber = Number(document.querySelector(".guess").value);
  if (guessedNumber == randomNumber) {
    displayMessage("🎉 Correct Answer ");
    document.querySelector(".number").textContent = guessedNumber;
    document.querySelector("body").style.backgroundColor = "green";
    if (Score > highScore) {
      highScore = Score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (!guessedNumber) {
    displayMessage("❗Please Enter a Number ");
  } else {
    if (
      document.querySelector(".score").textContent == "0" &&
      document.querySelector(".highscore").textContent == "0"
    ) {
      displayMessage("You Have Lost!, Try Again");
    } else {
      document.querySelector(".message").textContent =
        guessedNumber > randomNumber
          ? "❌ Number is Too High!"
          : "❌ Number is Too Low!";
      Score--;
    }
    document.querySelector(".score").textContent = Score;
  }
  document.querySelector(".guess").addEventListener("doubleclick", function () {
    document.querySelector(".guess").value = "";
  });
});
document.querySelector(".again").addEventListener("click", function () {
  Score = 20;
  randomNumber = Math.trunc(Math.random() * 21);
  document.querySelector(".check").textContent = "Check";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = Score;
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = null;
});
