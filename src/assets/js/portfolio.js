
const sectionCenter = document.querySelector(".maincontent");
const container = document.querySelector(".container-btn");
//load items
onload = (event) => {
  fetch('/assets/displayPictures.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
      return response.json();
    })
    .then(display => {
      displayPhotoItems(display);
      displayPhotoBttons(display);
      
      const images = document.querySelectorAll('.col-photo');
      images.forEach(image => {
        image.addEventListener('click', () => {
          const value = image.dataset.value;
          const selectedImage = document.querySelector(`[data-value='${value}']`);
          if (window.innerWidth > 576) {
            if (selectedImage.classList.contains('enlarge')) {
              selectedImage.classList.remove('enlarge');
              return;
            }
            selectedImage.classList.add('enlarge');
          }
        });
      });

    })
    .catch(error => console.error(error));
};


function displayPhotoItems(displayItems) {
  let displayPhoto = displayItems.map(function (item) {
    return `<div class="col-photo col d-flex justify-content-center">
    <div class="card border border-0 shadow h-25 w-75">
      <img src="${item.img}" class="card-img" alt="${item.alt}">
    </div>
  </div>`;

  });
  displayPhoto = displayPhoto.join("");
  sectionCenter.innerHTML = displayPhoto;
}
function displayPhotoBttons(display) {
  const categories = display.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="btn btn-primary-outline filter-btn me-sm-3 me-md-4 w-auto" data-id=${category}>${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filtreBtns = document.querySelectorAll(".filter-btn");
  filtreBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const displaycategory = display.filter(function (displayItems) {
        if (displayItems.category === category) {
          return displayItems;
        }
      });
      if (category === "All") {
        displayPhotoItems(display);
      } else {
        displayPhotoItems(displaycategory);
      }
    });
  });
}
