export let buttonAddCart = document.getProducts("add-to-cart");
// on click, save, add, product selected by ID in local Storage //
buttonAddCart.addEventListener("click", () => {
  // display in local storage all the data we need to make an order //
  let optionsProduct = {
    productId: productId,
    producttitle: producttitle,
    productprice: productprice,
    productstock: productstock,
  };
  let productInLocalStorage = JSON.parse(localStorage.getItem("product"));
  // s'il y a un produit dans le local storage  //
  // if there's product(s) in local Storage, pusht in json format //
  if (productInLocalStorage) {
    productInLocalStorage.push(optionsProduct);
    localStorage.setItem("product", JSON.stringify(productInLocalStorage));
  }
});
