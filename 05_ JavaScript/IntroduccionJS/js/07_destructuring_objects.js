// DESTRUCTURING A OBJECT

const product = {
	name_product: "Monitor 20 pulgadas",
	price: 300,
	avilable: true
};

// Returning a property of an object - old way
// const price_product = product.price;
// const name_product = product.name_product;

// console.log(price_product);
// console.log(name_product);

// Destructuring - Returning several properties - new way
const { price, name_product } = product; // The same name as property
console.log(price);
console.log(name_product);