class Cart {
    constructor() {
        this.products = [];
        this.total = 0;
    }

    addProduct(product) {
        this.products.push(product);
        this.total += product.price;
    }

    removeProduct(productToRemove) {
        const indexToRemove = this.products.findIndex(product => product === productToRemove);
        if (indexToRemove !== -1) {
            const removedProduct = this.products.splice(indexToRemove, 1)[0];
            this.total -= removedProduct.price;
        }
    }
}

module.exports = Cart;
