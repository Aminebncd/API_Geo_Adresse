// Sélectionne les éléments HTML
const inputCP = document.querySelector(".cp");
const selectVille = document.querySelector("#ville");
const mapContainer = document.querySelector("#map");

// Ajoute un écouteur d'événement 'input' au champ de code postal
inputCP.addEventListener("input", () => {
  // Récupère la valeur entrée dans le code postal
  let value = inputCP.value;
  // Vide le contenu actuel de la liste de sélection de ville
  selectVille.innerHTML = "<option>Chargement...</option>";

  // Effectue une requête fetch vers l'API de géolocalisation avec le CP saisi
  fetch(
    `https://geo.api.gouv.fr/communes?codePostal=${value}&fields=code,nom,codeRegion,codeDepartement,centre,region,codesPostaux&format=json&geometry=centre`
  )
    // Convertit la réponse au format JSON
    .then((response) => {
      return response.json();
    })
    // Une fois que les données JSON sont disponibles
    .then((data) => {
      // Vide le contenu de la liste de sélection de ville
      selectVille.innerHTML = "";

      // Vérifie si des données ont été trouvées pour le code postal spécifié
      if (data.length > 0) {
        const firstCity = data[0];
        // Vérifie si les coordonnées de la ville sont disponibles

        if (
          firstCity &&
          firstCity.centre &&
          firstCity.centre.coordinates &&
          firstCity.centre.coordinates.length === 2
        ) {
          // Centre la carte sur les coordonnées de la première ville
          map.setView(
            [firstCity.centre.coordinates[1], firstCity.centre.coordinates[0]],
            13
          );
          console.log(
            "Carte centrée sur les coordonnées de la ville :",
            firstCity.centre.coordinates
          );
        } else {
          console.error("Coordonnées de la ville non disponibles ou invalides");
        }

        // Parcourt chaque objet "ville" dans les données récupérées
        data.forEach((ville) => {
          // Crée un nouvel élément d'option HTML
          let option = document.createElement("option");
          // Définit la valeur de l'option comme le code de la ville
          option.value = ville.code;
          // Définit le texte affiché de l'option comme le nom de la ville
          option.innerHTML = ville.nom;
          // Ajoute l'option à la liste de sélection de ville
          selectVille.appendChild(option);
        });
        // Affiche les données dans la console (pour déboguer si besoin)
        console.log(data);
      } else {
        throw new Error("Aucune ville trouvée pour le code postal spécifié");
      }
    });
});

// Initialise la carte Leaflet
var map = L.map(mapContainer).setView([46.603354, 1.888334], 6);

// Ajoute une couche de tuiles OpenStreetMap à la carte
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
