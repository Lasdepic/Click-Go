// /modules/api.js

/*Récupère tous les produits depuis l'API DummyJSON*/
export async function getProducts() {
  // Appel HTTP vers l'API avec la fonction FETCH, AWAIT est assynchrone
  const response = await fetch("https://dummyjson.com/products");

  // Conversion de la réponse en JSON en objet JavaScript
  const data = await response.json();

  // L'API retourne les{ products } avec tous leurs paramètres (prix, categorie, etc.)
  // Si rien n'est trouvé, la fonction retourne un tableau vide
  return data.products || [];
}

/*Récupère un produit spécifique par son ID */
export async function getProductById(id) {
  // Interroge l'API à l'endpoint spécifique grâce à son {id} = identifiant unique, variable ici avec les templates literals
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  //Condition pour retourner un résultat
  return response.ok ? await response.json() : null;
}

/* La même fonction sans l'opérateur ternaire ?
if (response.ok) {
  return await response.json();
} else {
  return null;
}*/
/*Lien vers la doc : https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch*/
