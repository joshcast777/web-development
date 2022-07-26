// THIS - refers to the object on which you are working

const reservation1 = {
	name: "Miguel",
	last_name: "Castillo",
	total: 5000,
	payed: false,
	info: function () {
		console.log("El cliente "+this.name+" reservó y su cantidad a pagar es de "+this.total);
	}
};

const reservation2 = {
	name: "Joshua",
	last_name: "Riofrío",
	total: 5000,
	payed: false,
	info: function () {
		console.log("El cliente "+reservation2.name+" reservó y su cantidad a pagar es de "+reservation2.total);
	}
};

console.log(reservation1.info());
console.log(reservation2.info());