 // PROMISES - is a value avaliable now, in the future or never

/**
 * When a promise is executed, it passes itself tow values automatically, one is resolve and the other one is reject - both are functions
 *
 * Resolve is executed when promise was fulfilled, otherwise, reject is executed
 *
 * Promises have three values
 * pending: when promise wasn't fulfilled and not rejected
 * fulfilled: when promise is fulfilled
 * reject: when promise was reject or wasn't be able to be fulfilled
 */

const userAuthenticated = new Promise((resolve, reject) => {
	const auth = false;

	if (auth) {
		resolve("Usuario autenticado"); // When promise comes true
	} else {
		reject("No se puedo iniciar sesión"); // When promise doesn't come true
	}
});

// "result" is what was passed to the promise
userAuthenticated
	// To access the promise's values when promise is fulfilled, use .then
	.then((result) => console.log(result))
	// To access the promise's values when promise is rejected or is pending, use .catch
	.catch((error) => console.log(error));

