
const slideContainer = document.getElementById('slides-container');
const prevButton = document.getElementById('slide-arrow-prev');
const nextButton = document.getElementById('slide-arrow-next');
onload = () => {
  fetch('/assets/priceCardData.json')
  .then(response => response.json())
  .then(data => {
      // une fois que les données sont chargées, appelez la fonction displayData()
      displayData(data);
  })
  .catch(err => console.log(err));
}

function displayData(displayItems) {
  let displayCards = displayItems.map(function(item){
      return `<div class="card slide">
      <img
        src=${item.img}
        class="card-img-top"
        alt=${item.alt}
      />
      <div class="card-body text-center text-center">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">
          ${item.description}
        </p>
        <a href="../HTML/contact.html" class="btn">${item.price}€ <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg></a>
      </div>
    </div>`;
  });
  displayCards = displayCards.join("");
  slideContainer.innerHTML = displayCards;

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

