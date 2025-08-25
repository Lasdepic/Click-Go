const btnCart = document.querySelector("#btnCartCheckout");
const mainBody = document.querySelector("main");

export function clickCart() {
  function createCardsCart() {
    btnCart.addEventListener("click", () => {
      // POur créé le panier qu'une fois
      if (document.querySelector(".cardsCart")) {
        return;
      }
      //   --------------------------------------------------------------------
      const cardsCart = document.createElement("div");
      const cardsDrop = document.createElement("div");
      const btnDiv = document.createElement("div");
      const btnCheckout = document.createElement("button");

      mainBody.appendChild(cardsCart);
      cardsCart.appendChild(cardsDrop);
      cardsCart.appendChild(btnDiv);
      btnDiv.appendChild(btnCheckout);
      btnCheckout.textContent = "Paiement";
      btnDiv.className = "btnDiv";
      btnCheckout.className = "btnValid";
      cardsCart.className = "cardsCart";
      cardsDrop.className = "cardsDrop";

      // -------------------------------------------------------------------Panier------------------------------------------------------------
      const titrePanier = document.createElement("h2");
      titrePanier.className = "titrePanier";
      titrePanier.textContent = "Votre Panier";
      cardsCart.appendChild(titrePanier);

      // --------------------------------Input dans cards--------------------

      const inMyList = document.createElement("ul");
      const listDrop = document.createElement("li");
      listDrop.className = "listDrop";
      listDrop.textContent = "Coucou";
      inMyList.appendChild(listDrop);
      cardsDrop.appendChild(inMyList);
      //   ---------------------------------------------Creation des btn dans chaque liste ajouté------------------------------

      const btnAddCount = document.createElement("button");
      const btnRetiredCount = document.createElement("button");
      const btnDeleteProd = document.createElement("button");

      // Ajout d'un span pour afficher la quantité
      const quantitySpan = document.createElement("span");
      quantitySpan.className = "cart-quantity";
      let count = 1;
      quantitySpan.textContent = count;

      //-----------------------------------------------------------------------------Ajout des éléments dans les listes btnAdd, Suppr--------------------------------------------------------
      listDrop.appendChild(btnAddCount);
      listDrop.appendChild(quantitySpan);
      listDrop.appendChild(btnRetiredCount);
      listDrop.appendChild(btnDeleteProd);

      // --------------------------------------------------Contenu BTN-------------------------------------------------

      btnAddCount.textContent = "+";
      btnRetiredCount.textContent = "-";
      btnDeleteProd.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';

      // -------------------------------------------------------------Ajouter ou Enlever 1-----------------------------------------------
      btnAddCount.addEventListener("click", () => {
        count++;
        quantitySpan.textContent = count;
      });
      btnRetiredCount.addEventListener("click", () => {
        if (count > 1) {
          count--;
          quantitySpan.textContent = count;
        }
      });
      // ----------------------------------------------------------Supp Liste------------------------------------------------------
      btnDeleteProd.addEventListener("click", () => {
        listDrop.remove();
      });

      // ---------------------- Btn Paiement pour joindre la page checkout ----------------------
      btnCheckout.addEventListener('click', () => {
        window.location.href = '../../pages/cartCheckout.html';
      });
    });
  }
  createCardsCart();
}
