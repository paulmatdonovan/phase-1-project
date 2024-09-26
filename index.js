const searchForm = document.querySelector(".search")
let products = null;
const productList = document.getElementById('product-list');

function renderOneProduct(product) {
    // build product 
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
<div class="content">
<img id="photo" src="${product.image}">
<h4 id="store-product">${product.title}</h4>
<p id="store-product">${product.description}<p>
<h2 id="store-product">$ ${product.price}</h2>
<div class="buttons">
<button id="addToCart">Add to Cart</button>
</div>
</div>
`
    card.querySelector('#addToCart').addEventListener('click', () => {

        alert('Item added to cart!');

    });

    document.querySelector('#product-list').appendChild(card)
}

// fetch request 

function getAllProducts() {
    let url = 'https://server-2-4eqe.onrender.com/menswear';

    fetch(url)
        .then(res => res.json())
        .then(menswear => {
            products = menswear;
            menswear.forEach(product => renderOneProduct(product))
        })

}
// Initialize the page

function initialise() {
    getAllProducts()
}


// Search feature
function searchProducts(query) {
    // Convert the query to lowercase 
    const searchWords = query.toLowerCase();
    // Clear existing products from the list

    productList.innerHTML = '';

    // Fetch products matching the search query
    // fetch('https://json-server-template-hn7g.onrender.com/menswear')
    //     .then(res => res.json())
    //     .then(menswear => {

    products.forEach(product => {
        // Check if the product's title contains the search term
        if (product.title.toLowerCase().includes(searchWords)) {
            renderOneProduct(product);
        }
    });

}

// Event listener for search input
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#search-input').addEventListener('input', event => {
        const searchQuery = event.target.value.trim();
        // Trim any  whitespace
        searchProducts(searchQuery);
    });


    // Product filter 
    const btns = document.querySelectorAll(".btn");

    for (i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;
            // const storeProducts = Array.from(document.querySelectorAll(".card"));
            productList.innerHTML = '';
            products.forEach((product) => {
                if (filter === 'all') {
                    renderOneProduct(product)
                } else {
                    if (product.title.toLowerCase().includes(filter)) {
                        renderOneProduct(product);
                    }
                }
            }
            )


            // console.log(filter)
            // storeProducts.forEach((product) => {
            //     if (filter === "all") {
            //         product.style.display = "inline-block"
            //     } else {
            //         if (product.querySelector("#store-product").textContent.toLowerCase().includes(filter)) {
            //             product.style.display = "inline-block"
            //         } else {
            //             product.style.display = "none"
            //         }
            //     }
            // })

        })
    }

    initialise();


});



const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const emailData = document.getElementById('email-input');
    const email = emailData.value;

    handleSubscription(email)
})

function handleSubscription(email) {
    alert('Your email has been added to our list!')

}
