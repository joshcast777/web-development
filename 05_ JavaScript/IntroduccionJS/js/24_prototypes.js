// PROTOTYPES - creates a function that will be able to be used only with the object on what was defined

function Product(name, price, available) {
	this.name = name;
	this.price = price;
	this.available = available;
}

// Function - it can be used with any type of object
function format(product) {
	return "El producto " + product.name + " tiene un precio de " + product.price;
}

// Prototype - it can be used only with the type of object on what was defined
Product.prototype.formatProduct = function () {
	return "El producto " + this.name + " tiene un precio de " + this.price;
};

const product2 = new Product("Monitor curvo 49 pulgadas", 800, true);
const product3 = new Product("Laptop", 800, false);

console.log(product2.formatProduct());
console.log(product3.formatProduct());
