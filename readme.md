# API Geo Adresse

Ce mini-projet utilise l'API Geoportail du gouvernement français pour rechercher les villes associées à un code postal donné. Il affiche ensuite les résultats sur une carte à l'aide de Leaflet.

## Fonctionnalités

- L'utilisateur peut saisir un code postal dans un champ de texte.
- Une fois le code postal saisi, l'application récupère les villes correspondantes en utilisant l'API Geo Gouv.
- Les villes trouvées sont affichées dans une liste déroulante.
- La carte est centrée sur la première ville trouvée et affiche des marqueurs à l'emplacement des villes trouvées.
- cliquer sur un de ces marqueurs fera apparaitre un popup avec le nom de la ville.

## Développement

Le script JavaScript effectue les opérations suivantes :

1. Récupération des éléments HTML nécessaires.

2. Ajout d'un écouteur d'événements sur le champ de code postal pour détecter les saisies utilisateur.

3. Envoi d'une requête fetch vers l'API Geoportail pour obtenir les données des villes associées au code postal saisi.

4. Traitement des données JSON retournées :

   - Ajout de marqueurs pour chaque ville sur la carte.
   - Création des options de la liste déroulante avec les noms des villes.
   - Centrage de la carte sur les coordonnées de la première ville trouvée.

5. Gestion des erreurs en cas de code postal invalide ou si aucune ville n'est trouvée.

## Prérequis

Navigateur Web compatible avec JavaScript.
Connexion Internet pour accéder à l'API Geoportail.

## Technologies Utilisées

- HTML: Structure de la page web.
- CSS (& Bootstrap): Style et mise en forme.
- JavaScript: Logique de l'application.
- Leaflet: Bibliothèque JavaScript pour la cartographie interactive.
- API Geo Gouv: API gouvernementale française fournissant des données géographiques.

## Installation et Utilisation

1. Clonez ce dépôt sur votre machine locale:

```bash
git clone https://github.com/Aminebncd/API_Geo_Adresse.git
```
