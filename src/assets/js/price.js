
const slideContainer = document.getElementById('slides-container');
const prevButton = document.getElementById('slide-arrow-prev');
const nextButton = document.getElementById('slide-arrow-next');
onload = () => {
      displayData();
}

function displayData() {
  // Ajout des écouteurs d'événements pour les boutons prev/next
  nextButton.addEventListener("click", ()=>{
      const slide = document.querySelector('.slide');
      const slideWidth = slide.clientWidth;
      slideContainer.scrollLeft += slideWidth;
  });
  prevButton.addEventListener("click", () => {
      const slide = document.querySelector('.slide');
      const slideWidth = slide.clientWidth;
      slideContainer.scrollLeft -= slideWidth;
  });
};


