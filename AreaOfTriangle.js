let sides = document.querySelectorAll(".sides");

let output = document.querySelector(".output");

let calculateAreaBtn = document.querySelector(".calculate-area-btn");

calculateAreaBtn.addEventListener("click", calculateAreaofTriangle);

function calcproduct(a, b) {
  console.log(a);

  console.log(typeof a);
  console.log(b);

  console.log(typeof b);

  let prod = a * b;
  console.log(prod);

  return prod;
}

function calculateAreaofTriangle() {
  console.log("clicked");

  let masterprod = calcproduct(Number(sides[0].value), Number(sides[1].value));

  let areaofTriangle = masterprod / 2;

  areaofTriangle = areaofTriangle.toFixed(2);

  console.log("areaofTriangle=" + areaofTriangle);

  output.innerText = "Area of Triangle: " + areaofTriangle + "units";
}
