const divBlock = document.getElementById("divBlock");

const btnArr = [
  {
    val: "AC",
    class: "btn bc",
    onclick: "ac()",
  },
  {
    val: "+/-",
    class: "btn bc",
    onclick: "negate()",
  },
  {
    val: "%",
    class: "btn bc",
    onclick: "addType('%')",
  },
  {
    val: "÷",
    class: "btn type",
    onclick: "addType('/')",
  },
  {
    val: "7",
    class: "btn",
    onclick: "handle(7)",
  },
  {
    val: "8",
    class: "btn",
    onclick: "handle(8)",
  },
  {
    val: "9",
    class: "btn",
    onclick: "handle(9)",
  },
  {
    val: "*",
    class: "btn type",
    onclick: "addType('*')",
  },
  {
    val: "4",
    class: "btn",
    onclick: "handle(4)",
  },
  {
    val: "5",
    class: "btn",
    onclick: "handle(5)",
  },
  {
    val: "6",
    class: "btn",
    onclick: "handle(6)",
  },
  {
    val: "-",
    class: "btn type",
    onclick: "addType('-')",
  },
  {
    val: "1",
    class: "btn",
    onclick: "handle(1)",
  },
  {
    val: "2",
    class: "btn",
    onclick: "handle(2)",
  },
  {
    val: "3",
    class: "btn",
    onclick: "handle(3)",
  },
  {
    val: "+",
    class: "btn type",
    onclick: "addType('+')",
  },
  {
    val: "0",
    class: "btn zero",
    onclick: "handle(0)",
  },
  {
    val: ".",
    class: "btn",
    onclick: "FloatingPoint()",
  },
  {
    val: "=",
    class: "btn type",
    onclick: "equal()",
  },
];

for (let el of btnArr) {
  const btn = document.createElement("button");
  btn.textContent = el.val;
  btn.setAttribute("class", el.class);
  btn.setAttribute("onclick", el.onclick);
  divBlock.append(btn);
}
