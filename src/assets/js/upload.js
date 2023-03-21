const apiKey = "0Bf_opYd_KWc1yHxSnp0LmfboGG8vERSzM3zSSA7M20";
const siteId = "73a8ffb3-4ae5-424d-8e54-2800763d9735";

const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}/files`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    body: formData,
  });

  const data = await response.json();
  console.log(data);
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const files = Array.from(document.getElementById("file-input").files);
  files.forEach((file) => {
    uploadFile(file);
  });
};

const form = document.getElementById("upload-form");
form.addEventListener("submit", handleFormSubmit);
