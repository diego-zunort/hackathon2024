document.getElementById("generateBtn").addEventListener("click", generateBusinessCard);

function generateBusinessCard() {
  // Get user input
  const businessName = document.getElementById("nameofb").value;
  const subtitle = document.getElementById("subt").value;
  const description = document.getElementById("descrption").value;
  const operation = document.getElementById("opertaion").value;
  const location = document.getElementById("location").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const fontChoice = document.getElementById("font").value;

  // Random design elements
  const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12'];
  const fonts = ['Arial', 'Verdana', 'Helvetica', 'Courier New', 'Times New Roman'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const selectedFont = fonts[fontChoice - 1];

  // Generate the business card HTML
  const cardHtml = `
    <div style="border: 1px solid black; padding: 20px; width: 300px; background-color: ${randomColor}; font-family: ${selectedFont};">
      <h2>${businessName}</h2>
      <h3>${subtitle}</h3>
      <p>${description}</p>
      <p>Hours of Operation: ${operation}</p>
      <p>Location: ${location}</p>
      <p>Phone: ${phone}</p>
      <p>Email: ${email}</p>
    </div>
  `;

  // Open a new tab and write the generated content there
  const newTab = window.open('', '_blank');
  newTab.document.write(`
    <html>
    <head><title>Your Business Card</title></head>
    <body>
      ${cardHtml}
    </body>
    </html>
  `);
  newTab.document.close(); // Close the document to finish loading the new tab
}
