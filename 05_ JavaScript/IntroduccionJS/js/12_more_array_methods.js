// ARRAY METHODS

const months = ["January", "February", "March", "April", "May", "June", "July"];

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

// forEach
months.forEach((month) => {
	if (month == "March") console.log("Marzo sí existe");
});

// Includes - Return true if value exists in array, false otherwise
const result1 = months.includes("March");
console.log(result1);

// Some - For objects array
const result2 = cart.some((product) => product.name === "Celular");
console.log(result2);

// Reduce - Take every number and return the result
const result3 = cart.reduce((total, product) => total + product.price, 0);
console.log(result3);

// Filter - Filter an or some elements
const result4 = cart.filter((product) => product.price > 400); // Return every producto with price greater than 400
console.log(result4);