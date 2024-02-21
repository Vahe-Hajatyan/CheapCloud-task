const btn = document.getElementById("btn");
const num = document.getElementById("num");

btn.addEventListener("click", () => {
  ++num.innerHTML;
});
