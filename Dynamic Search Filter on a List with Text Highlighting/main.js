const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
];
const inp = document.getElementById("inp");
let elemBlock = document.getElementById("elemBlock");

function submit() {
  setTimeout(() => {
    elemBlock.textContent = "";

    //search elem
    for (let i = 0; i < books.length; ++i) {
      for (let key in books[i]) {
        if (
          books[i][key].toString().slice(0, inp.value.length) ==
          inp.value.trim()
        ) {
          createElem(books[i], key);
          break;
        }
      }
    }
    // inp.value = "";
  }, 1000);
}

function createElem(obj, searchKey) {
  const div = document.createElement("div");
  div.setAttribute("class", "elem");

  for (let key in obj) {
    const label = document.createElement("label");

    if (searchKey == key) {
      label.style.background = "#ff9c00ed";
    }

    const p = document.createElement("p");
    label.textContent = key + ": ";
    p.textContent = obj[key];
    label.append(p);
    div.append(label);
  }

  elemBlock.append(div);
}

function showAll() {
  elemBlock.textContent = "";
  inp.value = "";
  
  for (let i = 0; i < books.length; ++i) {
    createElem(books[i]);
  }
}
showAll();
