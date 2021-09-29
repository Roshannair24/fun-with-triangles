let sides = document.querySelectorAll(".sides");

let outputheading = document.querySelector(".output-heading");

let CalculateHypotenusebtn = document.querySelector(
  ".Calculate-Hypotenuse-btn"
);

CalculateHypotenusebtn.addEventListener("click", calculateHypotenuse);

function sumsquaredofsides(sideA, sideB) {
  console.log(typeof sideA);

  console.log(typeof sideB);

  let sumsquared = sideA * sideA + sideB * sideB;

  return sumsquared;
}

function calculateHypotenuse() {
  console.log("clicked");

  console.log(sides[0].value);
  console.log(typeof sides[0].value);

  console.log(sides[1].value);
  console.log(typeof sides[1].value);

  if (sides[0].value < 0 || sides[1].value < 0) {
    console.log("negative values");

    outputheading.innerText = "Please input valid numerals";
  } else if (sides[0].value == 0 || sides[1].value == 0) {
    console.log("zero values");

    outputheading.innerText = "Please input valid numerals";
  } else {
    let mastersquredsum = sumsquaredofsides(
      Number(sides[0].value),
      Number(sides[1].value)
    );

    let mastersum = Math.sqrt(mastersquredsum);
    mastersum = mastersum.toFixed(2);
    console.log(mastersum);

    outputheading.innerText = "Hypotenuse length is: " + mastersum + " units";
  }
}
