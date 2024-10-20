document.getElementById("generateBtn").addEventListener("click", generateBusinessCard);

function generateBusinessCard() {
  const businessName = document.getElementById("nameofb").value;
  const subtitle = document.getElementById("subt").value;
  const description = document.getElementById("descrption").value;
  const operation = document.getElementById("opertaion").value;
  const location = document.getElementById("location").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const fontChoice = document.getElementById("font").value;

  // Save user input in sessionStorage
  sessionStorage.setItem("businessName", businessName);
  sessionStorage.setItem("subtitle", subtitle);
  sessionStorage.setItem("description", description);
  sessionStorage.setItem("operation", operation);
  sessionStorage.setItem("location", location);
  sessionStorage.setItem("phone", phone);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("fontChoice", fontChoice);

  // Redirect to the card display page
  window.location.href = "card.html";  // Redirect to card.html page
}
