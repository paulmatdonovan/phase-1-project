



fetch('https://fakestoreapi.com/products/category/electronics')
    .then(res => res.json())
    .then((products) => {

        const containerDiv = document.getElementById("container")

        for (const product of products) {
            const postTitle = document.createElement("h4");
            postTitle.textContent = product.title;

            const postDescription = document.createElement("p");
            postDescription.textContent = product.description;

            containerDiv.appendChild(postTitle);
            containerDiv.appendChild(postDescription);

            const productImage = document.createElement('img');
            productImage.src = product.image;
            console.log(productImage)
            containerDiv.appendChild(productImage);

        }
    });




