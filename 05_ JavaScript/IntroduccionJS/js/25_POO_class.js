// POO - CLASS

class Product {
	// Constructor
	// constructor(name, price) {
	// 	this.name = name;
	// 	this.price = price;
	// }

	constructor(name, price) { }

	formatProduct() {
		return "El producto " + this.name + " tiene un precio de " + this.price;
	}
}

const product1 = new Product("Monitor curvo 49 pulgadas", 800, true);
const product2 = new Product("Laptop", 800, false);

console.log(product1);
console.log(product2.formatProduct());
