// INHERITANCE - "extends" for inheritance

class Product {
	// Constructor
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	formatProduct() {
		return "El producto " + this.name + " tiene un precio de " + this.price;
	}
}

const product1 = new Product("Monitor", 800, true);

class Book extends Product {
	constructor(name, price, isbn) {
		super(name, price);
		this.isbn = isbn;
	}

	formatProduct() {
		return super.formatProduct() + " y su ISBN es " + this.isbn;
	}
}

const book1 = new Book("JavaScript, la revolución", 120, "0987654321");

console.log(product1.formatProduct());

console.log(book1.formatProduct());