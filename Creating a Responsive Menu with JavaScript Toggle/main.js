const block = document.getElementById("adaptiv_block");
const img = document.getElementById("img");

let boo = false;
img.addEventListener("click", () => {
  block.style.display = boo ? "none" : "block";
  boo = !boo;
});
