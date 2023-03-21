document.addEventListener("DOMContentLoaded", () => {
  
    const filterButtons = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".col-photo");
    

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.dataset.id;
  
        items.forEach((item) => {
          if (category === "all" || item.dataset.category === category) {
            item.classList.remove("d-none");
          } else {
            item.classList.add("d-none");
          }
        });
      });
    });
    document.querySelectorAll('.container img').forEach(image => {
      image.onclick = () => {
        document.querySelector('.enlarge').style.display = "block";
        document.querySelector('.enlarge img').src = image.getAttribute('src');
      }
    });
    document.querySelector('.enlarge span').onclick = () => {
      document.querySelector('.enlarge').style.display = "none";
    };
  });
 
