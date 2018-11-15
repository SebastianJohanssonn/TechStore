var cartItems = JSON.parse(localStorage.getItem('shoppingcart'));

function listLoaded() {
    
    createHeader();
    cartProducts();
    createCheckout();
    totpris();
    
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

function createHeader(){

    var headerDiv = document.createElement("div");
    headerDiv.className = "headerDiv";
    var header = document.createElement("h1");
    var headerText = document.createTextNode(" Kundvagn");
    header.className = "cartHeader";
    var cartIcon = document.createElement("i");
    cartIcon.className = "cart2 fas fa-shopping-cart";
    
    header.appendChild(cartIcon);
    header.appendChild(headerText);
    headerDiv.appendChild(header);
    document.getElementById("allProducts").appendChild(headerDiv);
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

function createCheckout(){
    
    var checkoutText = document.createElement("p");
    checkoutText.id = "totalpris";
    checkoutText.innerText = "Totalpris:";
    document.getElementById("allProducts").appendChild(checkoutText);
    
    createPurchaseButton();
}

function createPurchaseButton(){
    var purchase = document.createElement("button");
    var purchaseIcon = document.createElement("i");
    purchaseIcon.className = "fas fa-check";
    var purchaseText = document.createTextNode(" Slutför ditt köp");
    purchase.className = "btn btn-primary";

    purchase.appendChild(purchaseIcon);
    purchase.appendChild(purchaseText);
    document.getElementById("allProducts").appendChild(purchase);
}

function totpris(){
    var total = 0;
    for(var i = 0; i < cartItems.length; i ++){
        total += cartItems[i].price;
    }
    document.getElementById("totalpris").append(total + "kr")

}



