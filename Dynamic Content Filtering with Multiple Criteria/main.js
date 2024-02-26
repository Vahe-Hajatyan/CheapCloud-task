const products = [
  {
    id: 1,
    name: "Eco-friendly Water Bottle",
    category: "Home",
    price: 15,
    tags: ["eco-friendly", "new"],
  },
  {
    id: 2,
    name: "Organic Cotton T-shirt",
    category: "Apparel",
    price: 25,
    tags: ["eco-friendly"],
  },
  {
    id: 3,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 200,
    tags: ["new", "sale"],
  },
];

const block = document.getElementById("block");
const elemBlock = document.getElementById("elemBlock");
const buttonBlock = document.getElementById("buttonBlock");
const all = document.getElementById("all");

const setArr = new Set();

function ShowProducts(clicked) {
  if (clicked) {
    elemBlock.textContent = "";
  }
  for (let i = 0; i < products.length; ++i) {
    const div = document.createElement("div");
    div.setAttribute("class", "elem");

    for (let key in products[i]) {
      const label = document.createElement("label");
      const p = document.createElement("p");

      if (typeof products[i][key] === "object" && !clicked) {
        for (let el of products[i][key]) {
          setArr.add(el);
        }
        setArr.add(products[i].category);
      }

      label.textContent = key + ": ";
      p.textContent = products[i][key];

      label.append(p);
      div.append(label);
    }
    elemBlock.append(div);
  }

  // create button
  if (!clicked) {
    for (let val of setArr) {
      const button = document.createElement("button");
      button.textContent = val;

      button.setAttribute("onclick", `filter('${val}')`);

      buttonBlock.append(button);
    }
  }
}
ShowProducts();

all.addEventListener("click", ShowProducts);

function filter(tag) {
  console.log(elemBlock);
  elemBlock.textContent = "";

  for (let i = 0; i < products.length; ++i) {
    const div = document.createElement("div");
    for (let key in products[i]) {
      if (products[i].tags.includes(tag) || products[i].category === tag) {
        div.setAttribute("class", "elem");

        const label = document.createElement("label");
        const p = document.createElement("p");

        label.textContent = key + ": ";
        p.textContent = products[i][key];

        label.append(p);
        div.append(label);
      }
    }
    elemBlock.append(div);
  }
}
