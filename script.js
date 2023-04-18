// Select the elements from the HTML document
const wrapper = document.querySelector(".wrapper"); // Selects the element with class "wrapper"
const generateBtn = document.querySelector(".form button"); // Selects the button element inside the element with class "form"
const qrInput = document.querySelector(".form input"); // Selects the input element inside the element with class "form"
const qrImg = document.querySelector(".qr-code img"); // Selects the image element inside the element with class "qr-code"

// Add an event listener to the generate button
generateBtn.addEventListener("click", () => {
  // Get the value of the input field
  let qrValue = qrInput.value;
  // If there is no value, return and do nothing
  if (!qrValue) return;
  // Change the text of the button to indicate that the QR code is being generated
  generateBtn.innerText = "Generating QR Code...";
  // Generate the QR code by setting the source of the image element to a URL with the data from the input field
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  // Add an event listener to the image element for when it finishes loading
  qrImg.addEventListener("load", () => {
    // Add the "active" class to the wrapper element to show the QR code
    wrapper.classList.add("active");
    // Change the text of the button back to "Generate QR Code"
    generateBtn.innerText = "Generate QR Code";
  });
  // Add the "active" class to the wrapper element to show the loading indicator
  wrapper.classList.add("active");
});

// Add an event listener to the input field for when a key is released
qrInput.addEventListener("keyup", () => {
  // If there is no value in the input field, remove the "active" class from the wrapper element to hide the QR code
  if (!qrInput.value) {
    wrapper.classList.remove("active");
  }
});
