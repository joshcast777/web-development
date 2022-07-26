// THESE METHODS WORK ONLY WITH ARRAYS - it iterates for every element in array

const cart = [
	{
		name: "Monitor 20 pulgadas",
		price: 500
	}, {
		name: "Televisión 50 pulgadas",
		price: 700
	}, {
		name: "Tablet",
		price: 300
	}, {
		name: "Audífonos",
		price: 200
	}, {
		name: "Teclado",
		price: 50
	}, {
		name: "Celular",
		price: 500
	}, {
		name: "Bocinas",
		price: 300
	}, {
		name: "Laptop",
		price: 800
	}
];

// forEach - only for work with elements in array, like show them, but not create a new array
console.log("----------FOREACH");
cart.forEach((c) => console.log(c.name));

// map - this can return a new array
console.log("----------MAP");
cart.map((c) => console.log(c.name));