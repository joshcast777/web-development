"use strict"; // To make JS use a strict syntax

const product = {
	name_product: "Monitor 20 pulgadas",
	price: 300,
	avilable: true
};

Object.freeze(product); // Like to make a const object - Prohibits adding, modifying or deleting a property

// product.image = "image.png";
console.log(Object.isFrozen(product)); // To know if object is frozen

console.log(product);


Object.seal(product); // Like to make a const object - Prohibits adding or deleting a property, but allows to modify it

product.price = 500;
console.log(Object.isSealed(product)); // To know if object is frozen

console.log(product);