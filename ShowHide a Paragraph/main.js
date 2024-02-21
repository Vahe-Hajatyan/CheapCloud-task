const btn = document.getElementById("btn");
const p = document.getElementById("p");

let boo = true;
btn.addEventListener("click", () => {
  btn.innerHTML = boo ? "hide" : "show";
  p.style.display = boo ? "none" : "block";
  boo = !boo;
});
