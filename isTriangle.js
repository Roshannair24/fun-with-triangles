let inputs = document.querySelectorAll(".angles");
let buttonisTriangle = document.querySelector(".button-isTriangle");
let outputheadingisTriangle = document.querySelector(
  ".output-heading-isTriangle"
);

let sum = null;
let sumOfAngles = null;

function calculateSumOfAngles(angleA, angleB, angleC) {
  angleA = Number(angleA);
  angleB = Number(angleB);
  angleC = Number(angleC);

  sum = angleA + angleB + angleC;

  return sum;
}

buttonisTriangle.addEventListener("click", isTriangle);

function isTriangle() {
  sumOfAngles = calculateSumOfAngles(
    inputs[0].value,
    inputs[1].value,
    inputs[2].value
  );

  console.log("sumOfAngles: " + sumOfAngles);

  if (sumOfAngles === 180) {
    console.log("The angles form a triangle");

    outputheadingisTriangle.innerText = "Yes,The angles form a triangle.";
  } else {
    console.log("The angles dont form a triangle");

    outputheadingisTriangle.innerText = "The angles dont form a triangle.";
  }
}
