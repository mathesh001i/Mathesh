PRODUCT CATALOG WITH FILTERS
A simple, responsive **Product Catalog Web App** built using **HTML**, **CSS**, and **JavaScript**.  
This project allows users to **filter products** by category and price range dynamically, showcasing interactive UI behavior suitable for small e-commerce sites or online portfolios.
 Live Demo
*(You can host this project on GitHub Pages or Netlify and add your demo link here.)*
 Project Structure
 product-catalog/
├── index.html # Main HTML structure
├── style.css # Styling for layout and design
└── script.js # JavaScript for filtering functionality
Features
**Dynamic Filtering** — Filter products by category (e.g., Electronics, Fashion).  
**Price Range Slider** — Adjust max price dynamically to limit visible products.  
**Real-time Updates** — Product list updates instantly without page reload.  
**Responsive Design** — Works on desktops, tablets, and mobile devices.  
**Clean UI** — Minimalist, modern card-style layout.
 **HTML5** — for structure and semantic layout  
**CSS3** — for styling, grid/flexbox layout, and hover effects  
**JavaScript (ES6)** — for filtering logic and DOM manipulation  
How It Works
1. All product data is stored in a JavaScript array:
   ```js
   const products = [
     { id: 1, name: "Laptop", category: "electronics", price: 900, image: "https://via.placeholder.com/200" },
     { id: 2, name: "Smartphone", category: "electronics", price: 600, image: "https://via.placeholder.com/200" },
     { id: 3, name: "Jeans", category: "fashion", price: 40, image: "https://via.placeholder.com/200" },
     { id: 4, name: "Jacket", category: "fashion", price: 80, image: "https://via.placeholder.com/200" }
   ];
Future Improvements
Add a search bar to filter by product name
Include sorting options (by price or name)
Connect to a real product API for dynamic data
Add pagination for large catalogs
