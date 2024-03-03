let products = {
  data: [
    {
      productName: "TVs & Home Theaters",

      image:
        "https://i.pinimg.com/474x/94/74/3f/94743fffacb6fd97982390e173579ae7.jpg",
    },

    {
      productName: "Smart Home & Security",

      image:
        "https://i.pinimg.com/474x/13/8a/81/138a81db311a8c4cd2134c456a9ab91f.jpg",
    },

    {
      productName: "Wearable Tech",

      image:
        "https://i.pinimg.com/474x/32/99/54/329954b1007d0c5de2cc5dfe380bd383.jpg",
    },

        {
            productName: "Tablets",
            
            image: "https://i.pinimg.com/474x/e1/ff/40/e1ff40249dac202cd4afe82d9378ea30.jpg"
        },

    {
      productName: "Camera & Drones",
      image:
        "https://i.pinimg.com/474x/2a/3a/c1/2a3ac1c6a09c2470d9974417f50764ae.jpg",
    },

    {
      productName: "Headphones",
      image:
        "https://i.pinimg.com/564x/99/4c/38/994c383053af8f1643ff9231311ccad1.jpg",
    },
  ],
};

for (let i of products.data) {
  let div = document.getElementById("sec-post");

  let wrapper = document.createElement("ul");
  wrapper.classList.add("box-product");

  let link = document.createElement("a");
  link.href = "#";
  wrapper.appendChild(link);

  let box = document.createElement("li");
  box.classList.add("box-man");
  link.appendChild(box);

  let name = document.createElement("h4");
  name.classList.add("sub-title");
  name.textContent = i.productName;
  box.appendChild(name);

  let background = document.createElement("img");
  background.setAttribute("src", i.image);
  box.appendChild(background);

  div.appendChild(wrapper);
}

const product = [
  {
    name: "Charger",
    price: 99.99,
    image:
      "https://i.pinimg.com/474x/3a/86/8e/3a868e6da65b63e10506922ec8a4974b.jpg",
  },
  {
    name: "Laptop",
    price: 129.99,
    image:
      "https://i.pinimg.com/474x/58/6b/01/586b010189e55d7737bbedba7ef32690.jpg",
  },
  {
    name: "Camera",
    price: 79.99,
    image:
      "https://i.pinimg.com/474x/27/e5/20/27e5201bb2220754c8165a38b72516b3.jpg",
  },
  {
    name: "Speaker",
    price: 49.99,
    image:
      "https://i.pinimg.com/474x/d5/70/1f/d5701f4ef61b5624ed96c90d158eb038.jpg",
  },
  {
    name: "???",
    price: 999.99,
    image:
      "https://i.pinimg.com/474x/35/18/c4/3518c47d7898c631ad864dd491ea9665.jpg",
  },
];

function createProductCard(product) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.classList.add("product-card");

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;

  const h3 = document.createElement("h3");
  h3.textContent = product.name;

  const p = document.createElement("p");
  p.textContent = "$" + product.price;

  const a = document.createElement("a");
  a.href = "#";
  a.textContent = "Buy Now";
  a.classList.add("btn");

  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(a);
  li.appendChild(div);

  return li;
}

function renderProductList() {
  const productList = document.getElementById("productList");
  product.forEach((product) => {
    const productCard = createProductCard(product);
    productList.appendChild(productCard);
  });
}
renderProductList();

function loopProductList() {
  const productList = document.getElementById("productList");
  const firstProduct = productList.children[0];
  productList.removeChild(firstProduct);
  productList.appendChild(firstProduct);
}
setInterval(loopProductList, 3000);

// document.getElementById("button-search").addEventListener("click",() => {
//     let searchInput = document.getElementById("search-inpt").value.toUpperCase();
//     let card = document.querySelectorAll(".card")
//     let productName = document.querySelectorAll(".product-name")
//     let price = document.querySelectorAll("h6")
//     productName.forEach((items, index) => {
//         if (items.innerText.includes(searchInput)){
//             card[index].classList.remove("hide")
//         } else{
//             card[index].classList.add("hide")
//         }
//     })
// })
// let imgContainer = document.createElement("div")
// imgContainer.classList.add("imgContainer")

// let container = document.createElement("div")
// container.classList.add("container")

// let name = document.createElement("div")
// name.classList.add("product-name")
// name.innerText = i.productName.toUpperCase();
// container.appendChild(name);

// let price = document.createElement("h6")
// price.innerText = i.price + "$";
// container.appendChild(price);

// card.appendChild(container);
// document.getElementById("products").appendChild(card);


