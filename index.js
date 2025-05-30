//STYlING =======================================================
//=================================================================


const para= document.querySelectorAll("p");
// This function applies CSS styles to all <p> elements
  for(let i =0 ; i<para.length; i++){
    para[i].style.textAlign = "left";
  }

// css for root
document.querySelectorAll('*').forEach(el => {
  el.style.boxSizing = 'border-box';
});


//body css
const bodyCss= document.body.style
bodyCss.margin= "20px";
bodyCss.marginTop="50px";
bodyCss.fontFamily=" 'Poppins',sans-serif";
bodyCss.background = "linear-gradient(135deg,#f0f4f8,#d9e2ec";
bodyCss.minHeight = "100vh";
bodyCss.overflowY= "auto";
bodyCss.display= "flex";
bodyCss.justifyContent= "center";
bodyCss.alignItems= "center";

//container css
const containerCss = document.querySelector(".container").style;
containerCss.background = "rgba(255, 255, 255, 0.9)";
containerCss.backdropFilter= "blur(10px)";
containerCss.borderRadius = "20px";
containerCss.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.1)";
containerCss.maxWidth = "500px";
containerCss.width = "100%";
containerCss.textAlign = "center";
containerCss.padding = "40px";
containerCss.marginTop = "5px";
containerCss.paddingTop = "5px";
// Make container responsive on small screens
if (window.innerWidth < 600) {
  containerCss.padding = "20px 15px";
  containerCss.width = "95%";
}


//h1 css
const h1Css = document.querySelector("h1").style;
h1Css.margin = "10px";
h1Css.paddingTop= "20px";
h1Css.fontSize = "28px";
h1Css.color = "#333";
      
// input css
const inputCss = document.querySelectorAll("input");
for(let i = 0; i < inputCss.length; i++) {
    const inpStyle = inputCss[i].style;
    inpStyle.width = "100%";
    inpStyle.padding = "12px 16px";
    inpStyle.margin = "10px 0";
    inpStyle.border = "2px solid #ccc";
    inpStyle.borderRadius = "10px";
    inpStyle.fontSize = "16px";
    inpStyle.transition = "border-color 0.3s ease, box-shadow 0.3s ease"
    // input focus css
    inputCss[i].addEventListener("focus", function() {
        this.style.outline = "none";
        this.style.borderColor = "#3f8efc";
        this.style.boxShadow = "0 0 5px rgba(63, 142, 252, 0.4)";
    }
    );}

// button css
const buttonCss = document.querySelectorAll("button");
for(let i = 0; i < buttonCss.length; i++) {
    const buttStyle = buttonCss[i].style;
    buttStyle.background = "#3f8efc";
    buttStyle.color = "white";
    buttStyle.padding = "12px 20px";
    buttStyle.border = "none";
    buttStyle.borderRadius = "8px";
    buttStyle.fontSize = "16px";
    buttStyle.cursor = "pointer";
    buttStyle.transition = "background 0.3s ease, transform 0.2s ease";
    buttStyle.margin = "10px 8px 0";
    buttStyle.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
    
    // button hover css
    buttonCss[i].addEventListener("mouseover", function() {
        this.style.transform = "scale(1.05)";
    });
    buttonCss[i].addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
    });
}

// canvas css
const canvasCss = document.querySelectorAll("canvas");
for(let i = 0; i < canvasCss.length; i++) {
    const canStyle = canvasCss[i].style;
    canStyle.margin = "20px auto"; // Center horizontally
    canStyle.background = "white";
    canStyle.borderRadius = "10px";
    canStyle.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
    canStyle.padding = "10px";
    canStyle.maxWidth = "100%"; // Ensure it doesn't overflow container
    canStyle.display = "block"; // Block display to respect container width
}
         
// footer css
const footerCss = document.querySelectorAll("footer");
for(let i = 0; i < footerCss.length; i++) {
    fooStyle= footerCss[i].style 
    fooStyle.margin = "20px";
    fooStyle.textAlign = "center";
    fooStyle.fontSize = "14px";
    fooStyle.color = "#555";
}


// Generate barcode function=======================================
//================================================================

function generateBarcode() {
  const bestBefore = document.getElementById('bestBefore').value.trim();
  const manufacturing= document.getElementById('manufacturing').value.trim();
  const netWeight = document.getElementById('netWeight').value;
  const price = document.getElementById('price').value.trim();
  const productId = document.getElementById('productId').value.trim();

  if (!bestBefore || !manufacturing || !netWeight || !price || !productId) {
    alert("Please fill in all fields.");
    return;
  }
  // Generate a unique serial number using the global barcodeSN
  const serialNumber = `SN${window.barcodeSN.toString().padStart(6, '0')}`;
  window.barcodeSN++; // Increment the serial number for the next barcode
  
  // Update the value in Firebase
  if (typeof window.updateBarcodeNumber === 'function') {
    window.updateBarcodeNumber(window.barcodeSN);
  }

  const data = `${serialNumber}|${bestBefore}|${manufacturing}|${netWeight}|${price}|${productId}`;
  
  // Store all barcode data in Firebase
  if (typeof window.storeBarcodeData === 'function') {
    window.storeBarcodeData(serialNumber, data);
  }
        
  JsBarcode("#barcodeCanvas", data, {
    format: "CODE128",
    lineColor: "#000",
    width:1.5,
    height: 100,
    displayValue: false
  });
  // Display the serial number below the barcode
  const serialNumberDisplay = document.getElementById('serialNumberDisplay');
  serialNumberDisplay.textContent = `Serial Number: ${serialNumber}`;  // Dynamically resize the canvas using CSS
  const canvas = document.getElementById('barcodeCanvas');
  // Make the canvas responsive
  canvas.style.width = "100%"; // Use percentage for responsiveness
  canvas.style.maxWidth = "350px"; // Maximum width on larger screens
  canvas.style.height = "auto"; // Maintain aspect ratio
}

function downloadBarcode() {
  const canvas = document.getElementById('barcodeCanvas');
  const link = document.createElement('a');
  link.download = 'barcode.png';
  link.href = canvas.toDataURL("image/png");
  link.click();
}

// Handle window resize for responsiveness
window.addEventListener('resize', function() {
  const containerCss = document.querySelector(".container").style;
  if (window.innerWidth < 600) {
    containerCss.padding = "20px 15px";
    containerCss.width = "95%";
  } else {
    containerCss.padding = "40px";
    containerCss.width = "100%";
  }
  
  // Adjust any canvas that exists
  const canvas = document.getElementById('barcodeCanvas');
  if (canvas) {
    canvas.style.maxWidth = window.innerWidth < 400 ? "90%" : "350px";
  }
});



