// ASYNC - AWAIT

function downloadNewClients() {
	return new Promise(function (resolve) {
		console.log("Descargando clientes, espere...");

		setTimeout(() => {
			console.log("Los clientes fueron descargados");
		}, 5000);
	});
}

// This is an async function
async function app() {
	try {
		const result = await downloadNewClients();
		console.log(result);

		console.log("Este código sí se bloquea"); // This code block does block itself - it must be wait for the return of the async - await
	} catch (ex) {
		console.log(ex);
	}
}

app();

console.log("Este código no se bloquea"); // This code block doesn't block itself
