const inp = document.getElementById("inp");

let type = "";
let op1 = "";
let op2 = "";

function handle(val) {
  if (type !== "") {
    inp.value = op2;
    inp.value += val;
    op2 += val;
  } else {
    inp.value += val;
    op1 += val;
  }
}
function addType(str) {
  if (op2) {
    equal();
    inp.value = op1;
  } else {
    inp.value = "";
  }
  type = str;
}
function equal() {
  switch (type) {
    case "+":
      inp.value = +op1 + +op2;
      op1 = inp.value;
      op2 = "";
      type = "";
      break;
    case "-":
      inp.value = +op1 - +op2;
      op1 = inp.value;
      op2 = "";
      type = "";
      break;
    case "*":
      inp.value = +op1 * +op2;
      op1 = inp.value;
      op2 = "";
      type = "";
      break;
    case "/":
      inp.value = +op1 / +op2;
      op1 = inp.value;
      op2 = "";
      type = "";
      break;
    case "%":
      inp.value = +op1 % +op2;
      op1 = inp.value;
      op2 = "";
      type = "";
      break;
    default:
      alert("type is not defined");
      break;
  }
}

function ac() {
  inp.value = "";
  op1 = "";
  op2 = "";
  type = "";
}
function negate() {
  if (type !== "") {
    inp.value = +inp.value > 0 ? "-" + inp.value : inp.value.slice(1);
    op2 = inp.value;
  } else {
    inp.value = +inp.value > 0 ? "-" + inp.value : inp.value.slice(1);
    op1 = inp.value;
  }
}
function FloatingPoint() {
  if (!op2 && op1 && !Number.isInteger(op1)) {
    inp.value += ".";
    op1 += ".";
  } else if (op2 && !Number.isInteger(op2)) {
    inp.value += ".";
    op2 += ".";
  }
}
