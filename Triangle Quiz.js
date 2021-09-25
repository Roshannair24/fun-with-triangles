let quizForm = document.querySelector("#quiz-form");
let quizbuttonprimary = document.querySelector(".button-primary");
let outputheading = document.querySelector(".output-heading");

let correctAnswers = ["90°", "right angled", "one right angle"];

quizbuttonprimary.addEventListener("click", calculateScore);

function calculateScore() {
  let score = 0;

  let index = 0;

  const formData = new FormData(quizForm);

  console.log("Form data");

  console.log(formData);
  for (var entry of formData.entries()) {
    console.log(entry);
  }

  for (var value of formData.values()) {
    console.log(value);

    if (value === correctAnswers[index]) {
      score = score + 1;
    }

    index = index + 1;
  }

  console.log("score:" + score);

  outputheading.innerText = "Your score: " + score;
}
