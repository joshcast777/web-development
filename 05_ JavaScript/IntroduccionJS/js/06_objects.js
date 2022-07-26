// OBJECTS

// Variables
const name_product = "Monitor 20 pulgadas",
	price = 300,
	avilable = true;

// Object
const product = {
	name_product: "Monitor 20 pulgadas",
	price: 300,
	avilable: true
};

// console.log(product.price); // To access to a value - Point syntax

// console.log(product["price"]); // To access to a value - like an array

// Add a property
product.image = "image.png";
console.log(product);

// Delete a property
delete product.avilable;
console.log(product);