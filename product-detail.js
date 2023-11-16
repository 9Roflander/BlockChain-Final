document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id'); // Assuming the URL contains a query param ?id=0 for Product 1, ?id=1 for Product 2, etc.

    if (productId && products[productId]) {
        const product = products[productId];
        const container = document.getElementById('productDetailContainer');

        container.innerHTML = `
            <div class="product-detail">
                <img src="${product.image}" alt="${product.name}" class="product-detail-image">
                <div class="product-detail-info">
                    <h1>${product.name}</h1>
                    <p class="product-detail-price">${product.price}</p>
                    <p class="product-detail-rating">Rating: ${product.rating} / 5</p>
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        `;
    } else {
        // Handle case where product ID is invalid or not passed
        document.getElementById('productDetailContainer').innerHTML = '<p>Product not found.</p>';
    }
});
