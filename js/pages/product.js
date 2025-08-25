
/* Les champs JSON récupérés dans le script :
  id = via l’URL (getProductById(id))
  thumbnail = image principale
  title = titre du produit
  category = catégorie
  price = affichage prix
  stock = pour afficher la dispo et valider la quantité avant ajout panier
  rating = note du produit
  description = description texte
*/

import { getProductById } from "../shared/api.js";
import { categories } from "../shared/utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  const menu = document.querySelector(".menu");
  categories.forEach((categories) => {
    const li = document.createElement("li"); //création d'un élement <li> pour chaque catégorie
    const a = document.createElement("a"); //idem création d'un élément <a>
    a.href = `#${categories}`; // lien vers une page catégorie (non créée ici)
    a.textContent = categories;
    li.appendChild(a); // On ajoute le lien <a> à la balise <li>
    menu.appendChild(li); //On ajoute la balise <li> au menu déroulant
  });

  // Récupère l'ID du produit depuis l'URL (ex: ?id=3)
  const productId = new URLSearchParams(window.location.search).get("id");
  //Rappel : URLSearchParams est un objet JavaScript qui facilite la lecture des paramètres de l’URL.
  //window.location.search analyse tous les paramètres après le ? ici l'identifiant unique de notre produit
  if (!productId) return; // pas d'ID => on ne fait rien

  // puis, à cette étape, le script récupère TOUTES les infos du produit via l'API
  const product = await getProductById(productId);
  if (!product) return; // produit introuvable => arrêt du script

  // Injection dynamique des données produit dans la page en sélectionnant les champs JSON nécessaires
  document.querySelector(".product-image").src = product.thumbnail;
  document.querySelector(".product-image").alt = product.title;
  document.querySelector(".product-title").textContent = product.title;
  document.querySelector(".product-category").textContent = product.category;
  document.querySelector(
    ".product-price"
  ).textContent = `${product.price.toFixed(2)} €`; //Rappel : ne pas oublier l'arrondi ! .toFixed(2) => arrondit le prix à deux chiffres après la virgule
  document.querySelector(".product-stock").textContent =
    product.stock > 0
      ? `Disponibilité : ${product.stock} article(s) restant(s)`
      : "Produit en rupture de stock";
  document.querySelector(
    ".product-rating"
  ).textContent = `Avis clients : ${product.rating} / 5`;
  document.querySelector(".product-description").textContent =
    product.description;

  // Gestion de la section "achat" (div.purchase dans notre HTML)
  const addToCartButton = document.getElementById("add-to-cart");
  const quantityInput = document.getElementById("quantity");
  const message = document.getElementById("message");
  // création de l'événement "click" sur le bouton, on ajoute le produit au panier
  addToCartButton.addEventListener("click", () => {
    // Récupération de la quantité saisie
    const quantity = parseInt(quantityInput.value) || 0;

    // Ici on vérifie que la quantité est bien valide par rapport au stock
    if (quantity > 0 && quantity <= product.stock) {
      //si la quantité sélectionné est supérieur à zéro ET inférieur au stock disponible
      message.textContent = `${quantity} ${product.title} ajouté(s) au panier !`; //elle est ajoutée au panier
      message.style.color = "green"; //le message s'affiche en vert
    } else {
      //sinon
      message.textContent = "Quantité invalide."; //la quantité est invalide
      message.style.color = "red"; //lle message s'affiche en rouge
    }
  });
});