let display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
}

function appendOperator(op) {
  if (display.value.length === 0) return;
  const lastChar = display.value.slice(-1);
  if ("+-*/".includes(lastChar)) {
    display.value = display.value.slice(0, -1) + op;
  } else {
    display.value += op;
  }
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
