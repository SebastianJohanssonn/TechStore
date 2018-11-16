var listOfProducts;
var shoppingcart = [];

/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        addProductsToWebpage();
    });
}

//Onload function for displaying phones.
function initSite() {
    loadProducts();
    
}

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
        var productDivs = document.createElement("div");
        productDivs.className = "productContainers";
        for (var i = 0; i < listOfProducts.length; i++) {
            var productInfo = createProductInfo(listOfProducts[i]);
            productDivs.appendChild(productInfo);      
        }
        
        document.querySelector("main").appendChild(productDivs);
        
}

//Creating each individual phone.
function createProductInfo(product) {
    var productInfoContainer = document.createElement("div");
    productInfoContainer.className = "productInfoContainer";
    
    var getProductTitle = document.createElement("h1");
    getProductTitle.innerText = product.title;
    productInfoContainer.appendChild(getProductTitle);
    
    var getProductDescription = document.createElement("p");
    getProductDescription.innerText = product.description;
    productInfoContainer.appendChild(getProductDescription);
    
    var getProductImage = document.createElement("img");
    getProductImage.src = "./assets/" + product.image;
    productInfoContainer.appendChild(getProductImage);
        
    var getProductPrice = document.createElement("p");
    getProductPrice.innerText = product.price + " kr";
    productInfoContainer.appendChild(getProductPrice);
    
    var cartButton = document.createElement("button");
    cartButton.className = "btn btn-primary";
    cartButton.setAttribute("id", "addProduct");
    cartButton.addEventListener("click", function() { 
        addProduct(product) 
    });
    var cartIcon = document.createElement("i");
    cartIcon.className = "cart2 fas fa-cart-arrow-down";
    cartButton.appendChild(cartIcon);
    var buttonText = document.createTextNode(" Lägg till i kundvagnen");
    cartButton.appendChild(buttonText);
    productInfoContainer.appendChild(cartButton);
        
    return productInfoContainer;
}

//Parsing localstorage if there is one.
if (localStorage.shoppingcart) {
    shoppingcart = JSON.parse(localStorage.shoppingcart);
}

//Adding phone to cart, array and saves it to localstorage.
function addProduct(product) {
    var numberOfProducts = 1;
    document.getElementById("numberOfProducts").innerHTML = numberOfProducts + shoppingcart.length;
    shoppingcart.push(product);
    var shoppingcartString = JSON.stringify(shoppingcart);
    localStorage.shoppingcart = shoppingcartString;
    console.log(localStorage.shoppingcart);
} 
