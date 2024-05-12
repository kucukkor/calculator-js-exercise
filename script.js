const result = document.querySelector(".result");
let temp = 0;
let lastOperation = "";
let operationTime = 0;
let lastOpNumb = false;
let temp2 = 0;

const btnOperations = document.querySelectorAll(".operation");
btnOperations.forEach(function (btnOperation) {
  btnOperation.addEventListener("click", function () {
    if (btnOperation.innerText == "C") {
      clear();
    } else if (btnOperation.innerText == "←") {
      backspace();
    } else if (btnOperation.innerText == "÷") {
      operate("division");
    } else if (btnOperation.innerText == "×") {
      operate("multiplication");
    } else if (btnOperation.innerText == "-") {
      operate("substraction");
    } else if (btnOperation.innerText == "+") {
      operate("addition");
    } else if (btnOperation.innerText == "=") {
      equality();
    }
  });
});
const btnNumbers = document.querySelectorAll(".number");
btnNumbers.forEach(function (btnNumber) {
  btnNumber.addEventListener("click", function () {
    const num = this.innerText;
    number(num);
  });
});

const number = (num) => {
  if (lastOpNumb == false) {
    temp2 = temp;
    lastOpNumb = true;
  }

  if (result.innerText !== "0") {
    result.innerText += num;
  } else {
    result.innerText = num;
  }
  numberAndBackspaceOperation();
};

const backspace = () => {
  if (result.innerText.length == 1) {
    result.innerText = "0";
  } else if (result.innerText !== "0") {
    result.innerText = result.innerText.substring(
      0,
      result.innerText.length - 1
    );
  }
  numberAndBackspaceOperation();
};

const numberAndBackspaceOperation = () => {
  if (lastOperation == "addition") {
    temp = temp2 + +result.innerText;
  } else if (lastOperation == "substraction") {
    temp = temp2 - +result.innerText;
  } else if (lastOperation == "division") {
    temp = temp2 / +result.innerText;
  } else if (lastOperation == "multiplication") {
    temp = temp2 * +result.innerText;
  }
};

const clear = () => {
  result.innerText = "0";
  temp = 0;
};

const operate = (operation) => {
  lastOpNumb = false;
  operationTime++;
  if (operationTime == 1) {
    temp = +result.innerText;
  }
  result.innerText = "0";
  lastOperation = operation;
};

const equality = () => {
  result.innerText = temp.toString();
  lastOperation = "";
  operationTime = 0;
};
