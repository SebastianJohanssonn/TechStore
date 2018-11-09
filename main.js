var listOfProducts;

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


function initSite() {
    loadProducts();
    // This would also be a good place to initialize other parts of the UI kjgjfg,
}
/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
        var productDivs = document.createElement("div");
        productDivs.className = "productContainers";
        for (var i = 0; i < listOfProducts.length; i++){
            var productInfo = createProductInfo(listOfProducts[i]);
            productDivs.appendChild(productInfo);      
        }
        
        document.querySelector("main").appendChild(productDivs);
    
        console.log(listOfProducts);
        
        // Add your code here, remember to brake your code in to smaller function blocks
        // to reduce complexity and increase readability. Each function should have
        // an explainetory comment like the one for this function, see row 22.
        
        // TODO: Remove the console.log and these comments when you've read them.
    }

    function createProductInfo(product){
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
        cartButton.addEventListener("click", function() { addProduct(product) });
        var cartIcon = document.createElement("i");
        cartIcon.className = "cart2 fas fa-cart-arrow-down";
        cartButton.appendChild(cartIcon);
        var buttonText = document.createTextNode(" Lägg till i kundvagnen");
        cartButton.appendChild(buttonText);
        productInfoContainer.appendChild(cartButton);
        var clickcounter = document.createAttribute("onclick");
        clickcounter.className = "clickcounter";
        
        return productInfoContainer;
    }

    function calculator(price) {
        var price = listOfProducts.price
        document.getElementById("numberOfProducts").innerHTML = "total Price" + price
        console.log()
    }


console.log(localStorage);
var numberOfProducts = 1;
var shoppingcart = [];

function cartCounter(){
    document.getElementById("numberOfProducts").innerText = numberOfProducts;
    numberOfProducts++;
    if (localStorage.productArray){
        productArray = JSON.parse(localStorage.productArray);
    }
    addProduct();
}

function addProduct(product){
    shoppingcart.push(product);
    var shoppingcartString = JSON.stringify(shoppingcart);
    localStorage.shoppingcart = shoppingcartString;
    console.log(localStorage.shoppingcart);
}

console.log(shoppingcart);




    
