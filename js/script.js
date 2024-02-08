// Sélectionne les elements html
const inputCP = document.querySelector(".cp");
const selectVille = document.querySelector(".ville");

// Ajoute un ecouteur d'evenement 'input' au champ de code postal
inputCP.addEventListener("input", () => {
  // recupere la valeur entrée dans le code postal
  let value = inputCP.value;
  // vide le contenu actuel de la liste de selection de ville
  selectVille.innerText = null;

  // effectue une requete fetch vers l'API de géolocalisation avec le CP saisi
  fetch(
    `https://geo.api.gouv.fr/communes?codePostal=${value}&fields=code,nom,codeRegion,codeDepartement,region,codesPostaux&format=json&geometry=centre`
  )
    // convertit la reponse au format JSON
    .then((response) => response.json())
    // une fois que les données JSON sont disponibles
    .then((data) => {
      // affiche les données dans la console (pour debug si besoin)
      console.log(data);
      // parcours chaque objet "ville" dans les données recuperees
      data.forEach((ville) => {
        // crée un nouvel element d'option HTML
        let option = document.createElement("option");
        // definit la valeur de l'option comme le code de la ville
        option.value = `${ville.code}`;
        // definit le texte affiché de l'option comme le nom de la ville
        option.innerHTML = `${ville.nom}`;
        // ajoute l'option à la liste de selection de ville
        selectVille.appendChild(option);
      });
    });
});
