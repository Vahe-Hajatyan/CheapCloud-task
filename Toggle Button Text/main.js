const btn = document.getElementById("btn");

let boo = true;
btn.addEventListener("click", () => {
  btn.innerHTML = boo ? "Goodbye" : "hello";
  boo = !boo;
});
