const products = [
  { id: 1, name: "Laptop", category: "electronics", price: 900, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Smartphone", category: "electronics", price: 600, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Jeans", category: "fashion", price: 40, image: "https://via.placeholder.com/200" },
  { id: 4, name: "Jacket", category: "fashion", price: 80, image: "https://via.placeholder.com/200" },
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

function displayProducts(filteredProducts) {
  productList.innerHTML = '';
  filteredProducts.forEach(product => {
    productList.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" />
        <h4>${product.name}</h4>
        <p>Price: $${product.price}</p>
      </div>
    `;
  });
}

function filterProducts() {
  const selectedCategory = categoryFilter.value;
  const maxPrice = parseInt(priceRange.value);

  priceValue.textContent = `$0 - $${maxPrice}`;

  const filtered = products.filter(p => {
    return (selectedCategory === "all" || p.category === selectedCategory) && p.price <= maxPrice;
  });

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", filterProducts);
priceRange.addEventListener("input", filterProducts);

// Initial display
displayProducts(products);
