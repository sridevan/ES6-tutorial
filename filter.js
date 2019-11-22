var products = [
    {name: 'banana', type: 'fruit', quantity: 6, price: 7},
    {name: 'kale', type: 'vegetable', quantity: 10, price: 9},
    {name: 'apple', type: 'fruit', quantity: 6, price: 15},
    {name: 'asparagus', type: 'vegetable', quantity: 6, price: 20}
]

// classic implementation of filter
var filteredProducts = [];
for (var i = 0; i < products.length; i++) {
    if (products[i].type === 'vegetable') {
        filteredProducts.push(products[i])
    }
}

// filter array values where type is equal to vegetable
var filteredProducts2 = products.filter(function(product) {
                            return product.type === 'vegetable';
                        });

// filter array values where type is equal to vegetable, quantity is more than 0 and price is less than 10
var filteredProducts3 = products.filter(function(product) {
                            return product.type === 'vegetable'
                                   && product.quantity > 0
                                   && product.price < 10;
                        });

// filteredProducts3


