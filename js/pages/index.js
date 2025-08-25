import { getProducts } from "../shared/api.js"; 

const data = await getProducts();
const sectionProducts = document.querySelector(".section-div-products");

console.log(data)

export function productsList() {
    for (let i = 7 ; i < 15; i++){

    console.log(data[i].title) 

const div = document.createElement('div');
const pictureProduct = document.createElement("img");
// img.setAttribute('class','active');
const titleProduct = document.createElement("p");
titleProduct.textContent = data[i].title;

div.appendChild(titleProduct);
sectionProducts.appendChild(div);
div.appendChild(pictureProduct)

div.className = "images"
pictureProduct.src = data[i].thumbnail;

}
}




const carouselContainer = document.querySelector(".images-carousel");

export function loadCarouselImages(){
    for ( let i = 1 ; i < 30 ; i++ ){
        const img = document.createElement("img");
        img.src =data[i].images[0];
        img.alt = data[i].title;
        carouselContainer.appendChild(img);

    const btnRigth = document.querySelector(".carousel-btn-right");


    }
}
loadCarouselImages();















// const carouselContainer = document.querySelector(".images-carousel");

// export function loadCarouselImages(){
//     for ( let i = 1 ; i < 30 ; i++ ){
//         const img = document.createElement("img");
//         img.src =data[i].images[0];
//         img.alt = data[i].title;
//         carouselContainer.appendChild(img);

//     const btnRigth = document.querySelector(".carousel-btn-right");


//     }
// }
// loadCarouselImages();

