var cartItems = JSON.parse(localStorage.getItem('shoppingcart'));

function listLoaded() {
    
    cartProducts();

}
function cartProducts(){
    
    var productDiv = document.createElement("div");
    var mainProductAll = document.getElementById("allProducts");
    productDiv.className = "allProducts";
    for(var i = 0; i < cartItems.length; i++) {
        var product = createCart(cartItems[i]);
        productDiv.appendChild(product);
    }

    mainProductAll.appendChild(productDiv);
}

function createCart(product){    

    var productContainer = document.createElement("div");
    productContainer.className = "product";

    var productimages = document.createElement("img");
    productimages.src = "./assets/" + product.image;
    productContainer.appendChild(productimages);
    
    var productTitles = document.createElement("h2");
    productTitles.innerText = product.title;
    productContainer.appendChild(productTitles);

    var productPrices = document.createElement("h5");
    productPrices.innerText = product.price + "kr";
    productContainer.appendChild(productPrices);

    var removeButton = document.createElement("button");
    removeButton.className = "btn btn-danger";
    var removeIcon = document.createElement("i");
    removeIcon.className = "fas fa-trash-alt";
    removeButton.appendChild(removeIcon);
    var buttonText = document.createTextNode(" Ta bort");
    removeButton.appendChild(buttonText);
    productContainer.appendChild(removeButton);
    
    
    return productContainer;
}



