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
  });
  