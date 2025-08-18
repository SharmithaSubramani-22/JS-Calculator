let currentInput = "";
let operator = "";
let operand = "";

function append(value) {
  playClick();
  currentInput += value.toString();
  updateDisplay(currentInput);
}

function Operation(op) {
  playClick();
  if (currentInput === "") return;

  if (operand !== "") {
    calculate();
  }

  operator = op;
  operand = currentInput;
  currentInput = "";
}

function calculate() {
  if (operand === "" || currentInput === "") return;

  const num1 = parseFloat(operand);
  const num2 = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error";
      break;
    default:
      return;
  }

  animateResult();
  updateDisplay(result);
  currentInput = result.toString();
  operand = "";
  operator = "";
}

function clearresult() {
  playClick();
  currentInput = "";
  operator = "";
  operand = "";
  updateDisplay("");
}

function updateDisplay(value) {
  document.getElementById("result").value = value;
}

function animateResult() {
  const inputField = document.getElementById("result");
  inputField.style.transition = "all 0.3s ease";
  inputField.style.transform = "scale(1.1)";
  inputField.style.backgroundColor = "#d1ffe3";
  setTimeout(() => {
    inputField.style.transform = "scale(1)";
    inputField.style.backgroundColor = "#ecf0f1";
  }, 300);
}

// Optional: Add sound or click feedback
function playClick() {
  const audio = document.getElementById("cling_files");
  audio.currentTime = 0;
  audio.volume = 0.1;
  audio.play();
}