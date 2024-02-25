
const firebaseConfig = {
    apiKey: "AIzaSyDtEi9xblQ9jLmu1hiBgzQxFo4MG3Kw5oc",
    authDomain: "example-ef896.firebaseapp.com",
    projectId: "example-ef896",
    storageBucket: "example-ef896.appspot.com",
    messagingSenderId: "423848112349",
    appId: "1:423848112349:web:7166d9d2b69f8265b8eb34",
    measurementId: "G-KTYLB362X7"
  };

let products = {
    data: [
        {
            productName: "TVs & Home Theaters",
            
            image: "https://i.pinimg.com/474x/94/74/3f/94743fffacb6fd97982390e173579ae7.jpg"
        },

        {
            productName: "Smart Home & Security",
            
            image: "https://i.pinimg.com/474x/13/8a/81/138a81db311a8c4cd2134c456a9ab91f.jpg"
        },

        {
            productName: "Wearable Tech",
            
            image: "https://i.pinimg.com/474x/32/99/54/329954b1007d0c5de2cc5dfe380bd383.jpg"
        },

        {
            productName: "Tablets",
            
            image: "https://i.pinimg.com/474x/e1/ff/40/e1ff40249dac202cd4afe82d9378ea30.jpg"
        },

        {
            productName: "Camera & Drones",
            image: "https://i.pinimg.com/474x/2a/3a/c1/2a3ac1c6a09c2470d9974417f50764ae.jpg"
        },

        {
            productName: "Headphones",
            image: "https://i.pinimg.com/564x/99/4c/38/994c383053af8f1643ff9231311ccad1.jpg"
        },
    ]
}

for (let i of products.data) {
    let div = document.getElementById("sec-post");
    let wrapper = document.createElement("ul");
    wrapper.classList.add('box-product');
    div.appendChild(wrapper);

    let link = document.createElement("a");
    link.href = "#";
    wrapper.appendChild(link)

    let box = document.createElement("li");
    box.classList.add("box-man");
    link.appendChild(box);

    let name = document.createElement('h4');
    name.classList.add("sub-title");
    name.textContent = i.productName;
    box.appendChild(name);

    let background = document.createElement("img");
    background.setAttribute("src", i.image);
    box.appendChild(background);
}




  
 
const product = [
    { name: "", price: 99.99, image: "https://i.pinimg.com/474x/3a/86/8e/3a868e6da65b63e10506922ec8a4974b.jpg" },
    { name: "", price: 129.99, image: "https://i.pinimg.com/474x/58/6b/01/586b010189e55d7737bbedba7ef32690.jpg" },
    { name: "", price: 79.99, image: "https://i.pinimg.com/474x/27/e5/20/27e5201bb2220754c8165a38b72516b3.jpg" }
    
  ];
  
  
  function createProductCard(product) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    div.classList.add('product-card');
  
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
  
    const h3 = document.createElement('h3');
    h3.textContent = product.name;
  
    const p = document.createElement('p');
    p.textContent = '$' + product.price;
  
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = 'Buy Now';
    a.classList.add('btn');
  
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(a);
    li.appendChild(div);
  
    return li;
  }
  
  
  function renderProductList() {
    const productList = document.getElementById('productList');
    product.forEach(product => {
      const productCard = createProductCard(product);
      productList.appendChild(productCard);
    });
  }
  renderProductList();
  

function loopProductList() {
    const productList = document.getElementById('productList');
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
    function handleLoginFormSubmit() {
        var loginForm = document.getElementById('login-form');
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var email = document.getElementById('login-email').value;
            var password = document.getElementById('login-password').value;
            var errorMessage = document.getElementById('login-error-message');
    
            // Đăng nhập bằng Firebase Auth
            signInWithEmailAndPassword(getAuth(), email, password)
                .then(function (userCredential) {
                    // Đăng nhập thành công
                    var user = userCredential.user;
                    alert('Đăng nhập thành công: ' + user.email)
                    console.log('Đăng nhập thành công: ' + user.email);
                    window.location.replace('main.html'); // Chuyển hướng sau khi đăng nhập
                })
                .catch(function (error) {
                    // Xử lý lỗi đăng nhập
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log('Lỗi đăng nhập: ' + errorMessage);
                    errorMessage.textContent = errorMessage;
                });
        });
    }
    
    // Gọi function để xử lý sự kiện khi biểu mẫu đăng nhập được gửi
    handleLoginFormSubmit();
    
    function handleSignUpFormSubmit() {
        var SignUpForm = document.getElementById('signup-form');
        SignUpForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var email = document.getElementById('signup-email').value;
            var password = document.getElementById('signup-password').value;
            var errorMessage = document.getElementById('signup-error-message');
    
            // Đăng kí bằng Firebase Auth
            createUserWithEmailAndPassword(getAuth(), email, password)
                .then(function (userCredential) {
                    // Đăng kí thành công
                    var user = userCredential.user;
                    alert('Đăng kí thành công: ' + user.email)
                    console.log('Đăng kí thành công: ' + user.email);
                    window.location.replace('main.html'); // Chuyển hướng sau khi đăng kí
                })
                .catch(function (error) {
                    // Xử lý lỗi đăng kí
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log('Lỗi đăng kí: ' + errorMessage);
                    errorMessage.textContent = errorMessage;
                });
        });
    }
    
    // Gọi function để xử lý sự kiện khi biểu mẫu đăng kí đư
    handleSignUpFormSubmit();