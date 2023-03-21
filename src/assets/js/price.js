
const slideContainer = document.getElementById('slides-container');
const prevButton = document.getElementById('slide-arrow-prev');
const nextButton = document.getElementById('slide-arrow-next');
onload = () => {
      displayData();
}

function displayData() {
 
  // Récupération de la largeur de chaque slide après qu'ils ont été ajoutés au DOM
  const slide = document.querySelector('.slide');
  const slideWidth = slide.clientWidth;

  // Ajout des écouteurs d'événements pour les boutons prev/next
  nextButton.addEventListener("click", ()=>{
      slideContainer.scrollLeft += slideWidth;
  });
  prevButton.addEventListener("click", () => {
      slideContainer.scrollLeft -= slideWidth;
  });
};

