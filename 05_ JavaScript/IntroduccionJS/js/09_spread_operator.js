// SPREAD OPERATOR - TO JOIN OBJECTS

const product = {
	name_product: "Monitor 20 pulgadas",
	price: 300,
	avilable: true
};

const measures = {
	weight: "1kg",
	product_lenght: "1m"
};

const new_prodcut = {
	...product,
	...measures
};

console.log(new_prodcut);