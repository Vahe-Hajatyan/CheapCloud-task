const btn = document.getElementById("btn");
const cube = document.getElementById("cube");

let boo = true;
btn.addEventListener("click", () => {
  cube.style.display = boo ? "block" : "none";
  btn.innerHTML = boo ? "hide" : "show";
  boo = !boo;
});
