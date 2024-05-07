class Product {
    constructor(name, price, description, rewardPoints, quantity) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.rewardPoints = rewardPoints;
        this.quantity = quantity;
        this.inStock = quantity > 0;
    }

    display() {
        return `Name: ${this.name}, Price: $${this.price}, Description: ${this.description}`;
    }
}

module.exports = Product;
