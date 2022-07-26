// LOOPS

// for
console.log("FOR");
for (let i = 0; i < 10; i++) {
	console.log(i);
}

for (let i = 0; i < 10; i++) {
	if (i % 2 === 0) {
		console.log("Número", i, "par");
	} else {
		console.log("Número", i, "impar");
	}
}

const cart = [
	{
		name: "Monitor 20 pulgadas",
		price: 500
	},
	{
		name: "Televisión 50 pulgadas",
		price: 700
	},
	{
		name: "Tablet",
		price: 300
	},
	{
		name: "Audífonos",
		price: 200
	},
	{
		name: "Teclado",
		price: 50
	},
	{
		name: "Celular",
		price: 500
	},
	{
		name: "Bocinas",
		price: 300
	},
	{
		name: "Laptop",
		price: 800
	}
];

for (let i = 0; i < cart.length; i++) {
	console.log(cart[i].name);
}

// while
console.log("WHILE");

let i = 1;
while (i < 10) {
	console.log(i);
	i++;
}

i = 1;
while (i < 10) {
	if (i % 2 === 0) {
		console.log("Número", i, "es par");
	} else {
		console.log("Número", i, "es impar");
	}
	i++;
}

i = 0;
while (i < cart.length) {
	console.log(cart[i].name);
	i++;
}


// do - while
console.log("DO - WHILE");
i = 0;
do {
	console.log(i);
	i++;
} while (i < 10)

i = 1;
do {
	if (i % 2 === 0) {
		console.log("Número", i, "es par");
	} else {
		console.log("Número", i, "es impar");
	}
	i++;
} while (i < 10);

i = 0;
do {
	console.log(cart[i].name);
	i++;
} while (i < cart.length);