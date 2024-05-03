const searchForm = document.querySelector(".search")


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

        console.log('Item added to cart!');
        alert('Item added to cart!');

    });


    document.querySelector('#product-list').appendChild(card)
}

// fetch request 

function getAllProducts() {
    let uri = 'https://json-server-template-hn7g.onrender.com/menswear';

    fetch(uri)
        .then(res => res.json())
        .then(menswear => menswear.forEach(product => renderOneProduct(product)))

}


function initialise() {
    getAllProducts()
}
// Initialize the page

// Search functionality
function searchProducts(query) {
    // Convert the query to lowercase for case-insensitive search
    const searchWords = query.toLowerCase();

    // Clear existing products from the list
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    // Fetch products matching the search query
    fetch('https://json-server-template-hn7g.onrender.com/menswear')
        .then(res => res.json())
        .then(menswear => {
            menswear.forEach(product => {
                // Check if the product's title contains the search term
                if (product.title.toLowerCase().includes(searchWords)) {
                    renderOneProduct(product);
                }
            });
        });
}

// Event listener for search input
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#search-input').addEventListener('input', event => {
        const searchQuery = event.target.value.trim();
        // Trim any leading or trailing whitespace
        searchProducts(searchQuery);
    });



    // Product filter 
    const btns = document.querySelectorAll(".btn");


    for (i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", (e) => {
            e.preventDefault();

            const filter = e.target.dataset.filter;
            const storeProducts = Array.from(document.querySelectorAll(".card"));

            // console.log(filter)
            storeProducts.forEach((product) => {
                if (filter === "all") {
                    product.style.display = "block"
                } else {
                    if (product.querySelector("#store-product").textContent.toLowerCase().includes(filter)) {
                        product.style.display = "block"

                    } else {
                        product.style.display = "none"

                    }
                }
            })

        })
    }

    initialise();


});


// create a mouseover event
// const cardList = document.querySelectorAll(".card");

// cardList.forEach(card => {
//     const img = card.querySelector("img");
//     img.addEventListener("mouseover", (e) => {
//         console.log(e)
//         e.target.style.height = "500px";
//         e.target.style.width = "500px";
//     });
// });

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
