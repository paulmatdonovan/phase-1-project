



fetch('http://localhost:3000/menswear')
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

const menswearData =
    fetch('http://localhost:3000/menswear')
        .then(res => console.log(res))
// console.log('I have fetched')
// this is a GET request 


