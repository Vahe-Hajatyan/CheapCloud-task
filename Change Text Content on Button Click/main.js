const btn = document.getElementById("btn");
const p = document.getElementById("paragraph");

let boo = true;
btn.addEventListener("click", () => {
  p.innerHTML = boo ? "hello" : "Goodbye";
  boo = !boo;
});
