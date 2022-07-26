// ASYNC - AWAIT - TOW CALSS

function downloadNewClients() {
	return new Promise(function (resolve) {
		console.log("Descargando clientes, espere...");

		setTimeout(() => {
			console.log("Los clientes fueron descargados");
		}, 5000);
	});
}

function downloadLastOrders() {
	return new Promise(function (resolve) {
		console.log("Descargando pedidos, espere...");

		setTimeout(() => {
			console.log("Los pedidos fueron descargados");
		}, 3000);
	});
}

// This is an async function
async function app() {
	try {
		// const clients = await downloadNewClients();
		// const orders = await downloadLastOrders();

		// console.log(clients);
		// console.log(orders);

		// To make tow petitions with async - await - neither depends on the other
		const result = await Promise.all([downloadNewClients(), downloadLastOrders()]);

		// Returns an array with the result of the functions
		console.log(result[0]);
		console.log(result[1]);
	} catch (ex) {
		console.log(ex);
	}
}

app();
