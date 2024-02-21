const p = document.getElementById("paragraph");
const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  p.innerHTML = input.value;
  input.value = "";
});
