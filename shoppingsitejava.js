var cartItems = JSON.parse(localStorage.getItem('shoppingcart'));

function listLoaded() {
    
    cartProducts();


}
function cartProducts(){
    
    var productDiv = document.createElement("div");
    var mainProductAll = document.getElementById("allProducts");

    console.log(cartItems)
    for(var i = 0; i < cartItems.length; i++) {
        var product = createCart(cartItems[i]);
        productDiv.appendChild(product);
    }

    mainProductAll.appendChild(productDiv);
}
/* function calculator() {
    var numOfProducts = document.getElementById("cart1");
    var stringcart = localStorage.getItem("shoppingcart");
    var JsonCart = JSON.parse(stringcart);
    numOfProducts.innerText = JsonCart.length;
    
} */
function createCart(product){
    console.log(product);
    var productContainer = document.createElement("div");
    productContainer.className = "product";

    var productTitles = document.createElement("h1");
    productTitles.innerText = product.title;
    productContainer.appendChild(productTitles);

    var productPrices = document.createElement("h5");
    productPrices.innerText = product.price + "kr";
    productContainer.appendChild(productPrices);
    
    var productimages = document.createElement("img");
    productimages.src = "./assets/" + product.image;
    productContainer.appendChild(productimages);
    
    return productContainer;
}



