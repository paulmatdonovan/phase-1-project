
function renderOneProduct(product) {
    // build product 
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
    <div class="content">
    <img src="${product.image}">
<h4>${product.title}</h4>
<p>${product.description}<p>
<div class="buttons">
<button id="addToCart"> Add to Cart </button>
</div>
</div>
`
    card.querySelector('#addToCart').addEventListener('click', () => {

        console.log('Item added to cart!');
        alert('Item added to cart!');

    });


    document.querySelector('#product-list').appendChild(card)
}

// fetch request 
function getAllProducts() {
    fetch('http://localhost:3000/menswear')
        .then(res => res.json())
        .then(menswear => menswear.forEach(product => renderOneProduct(product)))

}


function initialise() {
    getAllProducts()
}
initialise();



// Search functionality
function searchProducts(query) {
    // Convert the query to lowercase for case-insensitive search
    const searchTerm = query.toLowerCase();

    // Clear existing products from the list
    const productList = document.querySelector('#product-list');
    productList.innerHTML = '';

    // Fetch products matching the search query
    fetch('http://localhost:3000/menswear')
        .then(res => res.json())
        .then(menswear => {
            menswear.forEach(product => {
                // Check if the product's title contains the search term
                if (product.title.toLowerCase().includes(searchTerm)) {
                    renderOneProduct(product);
                }
            });
        });
}

// Event listener for search input
document.querySelector('#search-input').addEventListener('input', event => {
    const searchQuery = event.target.value.trim(); // Trim any leading or trailing whitespace
    searchProducts(searchQuery);
});

// Initialize the page
initialize();
