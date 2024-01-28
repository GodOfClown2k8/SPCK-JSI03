let products = {
    data: [
        {
            productName: "Mid Backpack",
            price: "400000",
            image: "https://product.hstatic.net/1000365849/product/balo_luoi_be_1_c4b57120089f4d0aae9abe982239789a_master.jpg"
        },

        {
            productName: "Slash Backpack",
            price: "500000",
            image: "https://product.hstatic.net/1000365849/product/slash_backpack_nau_1_cb0280190ff04f31b9fe581c5802b1fc_master.jpg"
        },

        {
            productName: "Mini Square",
            price: "400000",
            image: "https://product.hstatic.net/1000365849/product/mini_square_hong_1_46cdb167d7ca42d39d51e4892457737d_master.jpg"
        },

        {
            productName: "Flip Backpack",
            price: "400000",
            image: "https://product.hstatic.net/1000365849/product/flip_backpack__1__b0c4b95520b54afa8d3ab4b29673b75d_master.jpg"
        },

        {
            productName: "New Mini Backpack",
            price: "500000",
            image: "https://product.hstatic.net/1000365849/product/new_mini_backpack_hong_1_51a580ce4a7a483b883e95e592d921c5_master.jpg"
        },

        {
            productName: "New Original Backpack",
            price: "500000",
            image: "https://product.hstatic.net/1000365849/product/new_ori_cream_1.5_1bcd5cbc223947cfbdab487cc0285c0b_master.jpg"
        },
    ]
}

for(let i of products.data){
    let card = document.createElement("div")
    card.classList.add("khung")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("imgContainer")
    
    let img = document.createElement("img")
    img.setAttribute("src",i.image)
    imgContainer.appendChild(img)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("div")
    name.classList.add("product-name")
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6")
    price.innerText = i.price + "$";
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);

}

document.getElementById("button-search").addEventListener("click",() => {
    let searchInput = document.getElementById("search-inpt").value.toUpperCase();
    let card = document.querySelectorAll(".card")
    let productName = document.querySelectorAll(".product-name")
    let price = document.querySelectorAll("h6")
    productName.forEach((items, index) => {
        if (items.innerText.includes(searchInput)){
            card[index].classList.remove("hide")
        } else{
            card[index].classList.add("hide")
        }
    })
})