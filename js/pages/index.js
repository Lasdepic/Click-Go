import { getProducts } from "../shared/api.js"; 

const data = await getProducts();
const sectionProducts = document.querySelector(".section-div-products");

console.log(data)

export function productsList() {
    for (let i = 0; i < 8; i++){

    console.log(data[i].title) 

const div = document.createElement('div');
const pictureProduct = document.createElement("img");

sectionProducts.appendChild(div);
div.appendChild(pictureProduct)

div.className = "images"
pictureProduct.src = data[i].thumbnail;

}

}
