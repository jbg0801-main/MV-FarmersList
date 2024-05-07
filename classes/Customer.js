class Customer {
    constructor(name, email, shippingAddress) {
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
        this.orderHistory = [];
        this.rewardPoints = 0;
    }

    addToOrderHistory(cart) {
        this.orderHistory.push(cart);
        this.getRewardPoints();
    }

    getRewardPoints() {
        this.rewardPoints = this.orderHistory.reduce((totalPoints, cart) => {
            return totalPoints + cart.products.reduce((points, item) => points + item.product.rewardPoints * item.quantity, 0);
        }, 0);
    }
}

module.exports = Customer;
