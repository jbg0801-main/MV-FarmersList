class Cart {
    constructor() {
        this.products = [];
        this.total = 0;
    }

    addProduct(product, quantity) {
        if (product.quantity < quantity) {
            return `I'm sorry, there are only ${product.quantity} of this product left.`;
        }
    
        const totalPrice = product.price * quantity;
        this.products.push({ product, quantity });
        this.total += totalPrice;
        product.quantity -= quantity;
    
        if (product.quantity === 0) {
            product.inStock = false;
        }
    
        return product;
    }
    

    removeProduct(productToRemove) {
        const indexToRemove = this.products.findIndex(item => item.product === productToRemove);
        if (indexToRemove !== -1) {
            const { product, quantity } = this.products.splice(indexToRemove, 1)[0];
            this.total -= product.price * quantity;
            product.quantity += quantity;
            product.inStock = true;
        }
    }

    getTotal() {
        return this.total;
    }

    clear() {
        this.products = [];
        this.total = 0;
    }

    removeItemByName(productName) {
        const indexToRemove = this.products.findIndex(item => item.product.name === productName);
        if (indexToRemove !== -1) {
            const { product, quantity } = this.products.splice(indexToRemove, 1)[0];
            this.total -= product.price * quantity;
            product.quantity += quantity;
            product.inStock = true;
        }
    }
}

module.exports = Cart;
