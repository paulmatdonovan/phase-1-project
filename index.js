
function renderOneProduct(product) {
    // /build product 
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
<img src="${product.image}">
<div class="content">
<h4>${product.title}</h4>
<p>${product.description}<p>
</div>
<div class="buttons">
<button> Add to Cart</button>
</div>
`
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
initialise()

document.getElementById("searchInput").addEventListener('input', function () {
    const filter = this.value.toUpperCase();
    const clothingList = document.getElementById("clothingList")
    const items = clothingList.getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
        if (text.toUpperCase().indexOf(filter) > -1) {
            items.style.display = "";
        } else {
            items.style.display = "none";
        }
    }
})

