import Customer from './customer.js';
import order from './order.js';
import Product from './product.js';

export default class Shop {
  constructor() {
    this.productsList = [];
  }

  Cart(product, quantity) {
    if (!this.productsList) {
      return alert('No products in cart');
    }

    const productItem = { product: product, quantity: quantity };
    this.productsList.push(productItem);
    return;
  }

  Order(List) {
    const newOrder = new order(List);
  }
}
