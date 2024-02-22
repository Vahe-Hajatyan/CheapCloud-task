const btn = document.getElementById("btn");
const impName = document.getElementById("name");
const impEmail = document.getElementById("email");

const block = document.getElementById("block");
const p_block = document.getElementById("p_block");

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");

btn.addEventListener("click", () => {
  const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (reg.test(email.value)) {
    localStorage.setItem("name", impName.value);
    localStorage.setItem("email", impEmail.value);

    block.style.display = "none";
    btn.style.display = "none";
    p_block.style.display = "flex";

    p1.innerHTML = "name = " + localStorage.getItem("name");
    p2.innerHTML = "email = " + localStorage.getItem("email");
  } else {
    alert("email is not valid");
  }
});
