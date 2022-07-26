// GETTER & SETTER

class Product {
	name = "";
	price = 0.0;

	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	set setName(name) {
		this.name = name;
	}

	get getName() {
		return this.name;
	}

	set setPrice(price) {
		this.price = price;
	}

	get getPrice() {
		return this.price;
	}

	toString() {
		return "El producto " + this.name + " tiene un precio de " + this.price;
	}
}

const product = new Product("Monitor", 800, true);

console.log(product);
console.log(product.toString());

product.setName = "Laptop";
product.setPrice = 500;

console.log(product.toString());

console.log(product.getName);
console.log(product.getPrice);