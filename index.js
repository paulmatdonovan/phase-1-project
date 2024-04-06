document.addEventListener("DOMContentLoaded", (event) => {


    console.log("DOM fully loaded and parsed");



});

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
// event listener uses the input value 
document.getElementById('search-input').addEventListener('input', event => {
    const searchQuery = event.target.value.trim().toLowerCase();
    // Trim any leading or trailing whitespace
    console.log(searchQuery);

    searchProducts(searchQuery);
});



// Event listener for search input
document.getElementById('search-input').addEventListener('submit', event => {
    const searchQuery = event.target.value.trim();
    console.log(searchQuery)// Trim any leading or trailing whitespace
    searchProducts(searchQuery);
});
function searchProducts(query) {
    fetch('http://localhost:3000/menswear')
        .then(res => res.json())
        .then(menswear => {
            const filteredProducts = menswear.filter(product => product.title.toLowerCase().includes(query));
            const productList = document.querySelector('#product-list');
            productList.innerHTML = ''; // Clear existing products
            filteredProducts.forEach(product => renderOneProduct(product)); // Render filtered products
        });
}


