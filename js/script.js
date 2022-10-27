const squareInput = document.querySelector("#square-input");
const squareRange = document.querySelector("#square-range");
const inputs = document.querySelectorAll("input");

const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioBuildin = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');

const ceiling = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');

const basePrise = 5000;

const totalPriseElement = document.querySelector("#total-price");

squareRange.addEventListener("input", function () {
  squareInput.value = squareRange.value;
});

squareInput.addEventListener("input", function () {
  squareRange.value = squareInput.value;
});

function calculate() {
  let totalPrise = basePrise * parseInt(squareInput.value);

  for (const radio of radioType) {
    if (radio.checked) {
      totalPrise = totalPrise * parseFloat(radio.value);
    }
  }

  for (const radio of radioBuilding) {
    if (radio.checked) {
      totalPrise = totalPrise * parseFloat(radio.value);
    }
  }

  for (const radio of radioRooms) {
    if (radio.checked) {
      totalPrise = totalPrise * parseFloat(radio.value);
    }
  }

  if (ceiling.checked) {
    totalPrise = totalPrise * parseFloat(ceiling.value);
  }

  if (walls.checked) {
    totalPrise = totalPrise * parseFloat(walls.value);
  }

  if (floor.checked) {
    totalPrise = totalPrise * parseFloat(floor.value);
  }

  const formatter = new Intl.NumberFormat("ru");

  totalPriseElement.innerText = formatter.format(totalPrise);
}

// calculate();

// for (const input of inputs) {
//   input.addEventListener("input", function () {
//     calculate();
//   });
// }
