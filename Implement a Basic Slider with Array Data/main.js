const prev = document.getElementById("prev");
const next = document.getElementById("next");
const p = document.getElementById("p");
const img = document.getElementById("img");

let indexElement = 0;

const arr = ["./img/images.jpg", "./img/images.png", "./img/images2.png"];

prev.addEventListener("click", () => {
  if (indexElement !== 0) {
    img.setAttribute("src", arr[--indexElement]);
  } else {
    indexElement = 2;
    img.setAttribute("src", arr[indexElement]);
  }
  p.innerHTML = indexElement + 1;
});

next.addEventListener("click", () => {
  if (indexElement !== 2) {
    img.setAttribute("src", arr[++indexElement]);
  } else {
    indexElement = 0;
    img.setAttribute("src", arr[indexElement]);
  }
  p.innerHTML = indexElement + 1;
});
