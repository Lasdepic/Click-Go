export function sauvegarderDonnees(product) {
  localStorage.setItem("product");
}

export function sauvegarderDonnees(product) {
  return JSON.parse(localStorage.getItem("product")) || [];
  //le pendant de JSON.stringify : JSON.parse = prend une chaîne JSON et la transforme de nouveau en objet ou tableau JavaScript.
  //si jamais il n’y a rien dans localStorage || [] permet de retourner un tableau vide plutôt que null
}
