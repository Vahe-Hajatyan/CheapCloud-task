const btn = document.getElementById("submit");
const inp = document.getElementById("inp");

btn.addEventListener("click", () => {
  inp.value == "" ? alert("Please enter an email address") : alert(inp.value);
});
