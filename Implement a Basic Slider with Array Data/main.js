const prev = document.getElementById("prev");
const next = document.getElementById("next");
const p = document.getElementById("p");

let indexElement = 1;

prev.addEventListener("click", () => {
  if (indexElement !== 1) {
    const imgForHide = document.getElementById(`${indexElement}`);
    imgForHide.style.display = "none";

    --indexElement;
    const img = document.getElementById(`${indexElement}`);
    img.style.display = "block";
  } else {
    const imgForHide = document.getElementById(`${indexElement}`);
    imgForHide.style.display = "none";

    indexElement = 3;
    const img = document.getElementById(`${indexElement}`);
    img.style.display = "block";
  }
  p.innerHTML = indexElement;
});

next.addEventListener("click", () => {
  if (indexElement !== 3) {
    const imgForHide = document.getElementById(`${indexElement}`);
    imgForHide.style.display = "none";

    ++indexElement;
    const img = document.getElementById(`${indexElement}`);
    img.style.display = "block";
  } else {
    const imgForHide = document.getElementById(`${indexElement}`);
    imgForHide.style.display = "none";

    indexElement = 1;
    const img = document.getElementById(`${indexElement}`);
    img.style.display = "block";
  }
  p.innerHTML = indexElement;
});
