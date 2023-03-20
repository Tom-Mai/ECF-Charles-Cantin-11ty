    // Sélection des éléments du DOM
    const filterButtons = document.querySelectorAll(".filter-btn");
    const photoItems = document.querySelectorAll(".col-photo");
    
    // Fonction pour filtrer les photos en fonction de la catégorie sélectionnée
    function filterPhotos(category) {
      photoItems.forEach((photoItem) => {
        const photoCategory = photoItem.querySelector("button").dataset.id;
        if (category === "All" || photoCategory === category) {
          photoItem.style.display = "block";
        } else {
          photoItem.style.display = "none";
        }
      });
    }
    
    // Ajout d'un écouteur d'événements sur chaque bouton pour gérer le filtrage
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.dataset.id;
        filterPhotos(category);
      });
    });
    
    // Initialisation: Afficher toutes les photos au chargement de la page
    filterPhotos("All");
    