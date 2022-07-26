// CONTROL STRUCTRE

// if
const score = 1000;
if (score === 1000) {
	console.log("Sí, el puntaje es 1000");
} else {
	console.log("No, el puntaje no es 1000");
}


const rol = "EDITOR";

if (rol === "ADMINISTRADOR") {
	console.log("Acceso a todo el sistema");
} else if (rol === "EDITOR") {
	console.log("Acceso limitado");
} else {
	console.log("No tiene acceso");
}


// Switch

const paymentMethod = "efectivo";

switch (paymentMethod) {
	case "card":
		console.log("Pagaste con tarjeta");
		break;

	case "cheque":
		console.log("Pagaste con cheque");
		break;

	case "efectivo":
		console.log("Pagaste con efectivo");
		break;

	default:
		console.log("Aun no has pagado");
		break;
}
