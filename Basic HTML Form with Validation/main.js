const btn = document.getElementById("btn");
const email = document.getElementById("email");

btn.addEventListener("click", () => {
  const regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (regexp.test(email.value)) {
    alert("success");
  } else {
    alert("not success");
  }
});
