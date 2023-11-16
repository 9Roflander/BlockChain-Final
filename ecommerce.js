document.addEventListener('DOMContentLoaded', function() {
    var productGrid = document.getElementById('productGrid');

    products.forEach(function(product, index) {
        var productDiv = document.createElement('div');
        productDiv.className = 'product-container';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Rating: ${product.rating} / 5</p>
        `;
        // Make the whole container clickable
        productDiv.addEventListener('click', function() {
            window.location.href = `product-detail.html?id=${index}`;
        });
        productGrid.appendChild(productDiv);
    });
});
