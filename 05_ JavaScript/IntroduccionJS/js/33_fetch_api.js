// FETCH API

// Fetch API with promises
function getEmployees1() {
	const url_file = "employees.json";

	fetch(url_file) // To get the file
		.then((result) => result.json()) // Say that the result is in JSON format - text() for text format
		.then((data) => {
			// Can show the data
			console.log(data.employees); // It's an array

			// Destructuring
			const { employees } = data;
			console.log(employees);

			employees.forEach(function (employe) {
				console.log(employe);
				console.log("Empleado id -> " + employe.id);
				console.log("Empleado nombre -> " + employe.name);
				console.log("Empleado cargo -> " + employe.job);
			});
		});
}

// Fetch API with async - await
async function getEmployees2() {
	const url_file = "employees.json";

	const result = await fetch(url_file); // To get the file
	const data = await result.json(); // Say that the result is in JSON format - text() for text format - await cause it depends on the previous function
	console.log(data);
}

getEmployees1();
getEmployees2();
