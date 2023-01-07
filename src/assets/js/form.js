const form = document.getElementById("form-contact");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("my-form-status");
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset();
   
    } else {
      response.json().then(data => {
        if (data.hasOwnProperty('errors')) {
          status.innerHTML = data.errors.map(error => error.message).join(", ");
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form";
        }
      });
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form";
  });
}
form.addEventListener("submit", handleSubmit);

// Focus input
function setFocusToNameInput() {
    document.querySelector("#nameInput").focus();
}
setFocusToNameInput();
const selectInput =  document.querySelector("#inputPrice");
const checkbox = document.querySelector("#gridCheck1");
const paragraph = document.querySelector(".showDiv");
const select = document.querySelectorAll('option');
console.log(select);

checkbox.addEventListener("change", () => {
  if(checkbox.checked === true) {
    selectInput.style.display = "block";
    paragraph.style.display = "block";
  } else {
    selectInput.style.display = "none";
    paragraph.style.display = "none";
    const showDivElements = document.querySelectorAll('.showDiv');
    for (let i = 0; i < showDivElements.length; i++) {
      showDivElements[i].style.display = 'none';
    }
  }
});

selectInput.addEventListener("change", () => {
  const showDivElements = document.querySelectorAll('.showDiv');
  for (let i = 0; i < showDivElements.length; i++) {
    showDivElements[i].style.display = 'none';
  }
  document.getElementById(selectInput.value).style.display = 'block';
});
