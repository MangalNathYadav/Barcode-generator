# Product Barcode Generator

## Overview
The **Product Barcode Generator** is a simple web-based application that allows users to generate barcodes for products. Users can input product details such as Product ID, Product Name, Manufacturing Date, and Price, and the application will generate a barcode that can be downloaded as an image.

## Features
- **Generate Barcodes**: Create barcodes using product details.
- **Download Barcodes**: Save the generated barcode as a PNG image.
- **User-Friendly Interface**: Clean and responsive design for ease of use.

## Technologies Used
- **HTML5**: For structuring the web page.
- **CSS3**: For styling the application.
- **JavaScript**: For barcode generation and download functionality.
- **JsBarcode Library**: To generate barcodes in the CODE128 format.

## How to Use
1. Open the `index.html` file in any modern web browser.
2. Fill in the following fields:
   - **Product ID**: A unique identifier for the product.
   - **Product Name**: The name of the product.
   - **Manufacturing Date**: The date the product was manufactured.
   - **Price**: The price of the product (e.g., ₹49.00).
3. Click the **Generate** button to create the barcode.
4. Click the **Download** button to save the barcode as a PNG image.

## Project Structure
```
Barcode-generator/
├── index.html   # Main HTML file
├── LICENSE      # License file
```

## License
This project is licensed under the terms of the MIT License. See the `LICENSE` file for details.

## Acknowledgments
- [JsBarcode](https://github.com/lindell/JsBarcode): A barcode generation library used in this project.
- [Google Fonts](https://fonts.google.com/): For the Poppins font used in the design.

## Screenshots
![Screenshot of the Barcode Generator](screenshot.png)
