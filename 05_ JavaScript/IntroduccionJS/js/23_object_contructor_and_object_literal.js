// OBJECT CONSTRUCTOR AND OBJECT LITERAL

// Object literal
const product = {
	name: "Tablet",
	price: 5000
}

// Object constructor - this behave like a class - old way to create objects
function Product(name, price, available) {
	this.name = name;
	this.price = price;
	this.available = available;
}

const product2 = new Product("Monitor curvo 49 pulgadas", 800, true);
const product3 = new Product("Laptop", 800, false);

console.log(product2);
console.log(product3);