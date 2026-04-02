export default class Product {
  constructor(name, price, description, imageUrl, stock, id) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = imageUrl;
    this.stock = stock;
    this.id = id;
  }
}
