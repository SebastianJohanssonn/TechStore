function listLoaded() {
    if (!("shoppingcart" in localStorage)){
        localStorage.setItem("shoppingcart","[]");
    }
    var productInCart = localStorage.getItem("shoppingcart");
    var productCartList = JSON.parse(productInCart);

    
    cartProductsWeb(productCartList);
    calculator();
    


}
function cartProductsWeb(productInCart){
    
    var productDiv = document.createElement("div");
    var productsInRow = document.createElement("div");
    var mainProductAll = document.getElementById("allProducts");

    productsInRow = productsInline();

    for(var i = 0; i < productInCart; i++) {
        allproductdiv = (productInCart[i]);
        titlesList = (productInCart[i]);
        priceList = (productInCart[i]);
        imageList = (productInCart[i]);
        
        productsInRow.appendChild(allproductdiv);
    }
    productDiv.appendChild(productsInRow);
    mainProductAll.appendChild(productsInRow);

    

}
function calculator() {
    var numOfProducts = document.getElementById("cart1");
    var stringcart = localStorage.getItem("shoppingcart");
    var JsonCart = JSON.parse(stringcart);
    numOfProducts.innerText = JsonCart.length;
    
}
function productsInline(){
    inlineProducts = document.createElement("div");
    inlineProducts.classList.add("container", "justify-content-center", "divRow");
    return inlineProducts;
}
function titlesList(productInCart){
    var productTitles =documnet.createElement("h1");
    productTitles.innerText = productInCart.title;
    allproductdiv.appendChild(productTitles);
    return productTitles;
}
function priceList(productInCart){
    var productPrices = document.createElement("h5");
    productPrices.innerText = productInCart.price + "kr";
    allproductdiv.appendChild(productPrices);
    return productPrices;
}
function imageList(productInCart){
    var productimages = document.createElement("img");
    productimages.innerText = productInCart.images;
    allproductdiv.appendChild(productimages);
    return productimages
    
}
function addProduct(product){
    shoppingcart.push(product);
    var shoppingcartString = JSON.stringify(shoppingcart);
    localStorage.shoppingcart = shoppingcartString;
    console.log(localStorage.shoppingcart);
}



