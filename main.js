

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
        
        document.getElementById("card1").appendChild(productDivs);
    
        console.log(listOfProducts);
        
        // Add your code here, remember to brake your code in to smaller function blocks
        // to reduce complexity and increase readability. Each function should have
        // an explainetory comment like the one for this function, see row 22.
        
        // TODO: Remove the console.log and these comments when you've read them.
    }

    function createProductInfo(product){
        var productInfoContainer = document.createElement("div");
        productInfoContainer.className = "productInfoContainer";

        var getProductImage = document.createElement("img");
        getProductImage.src = "./assets/" + product.image;
        productInfoContainer.appendChild(getProductImage);

        return productInfoContainer;
    }