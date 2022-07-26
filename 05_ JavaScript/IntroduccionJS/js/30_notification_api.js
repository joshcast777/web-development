// NOTIFICATION API

const button = document.querySelector("#button");

button.addEventListener("click", function () {
	// To request to the user for the notifications
	Notification.requestPermission()
		.then((result) => console.log("El resultado es " + result));
})

if (Notification.permission == "granted") {
	// If notification was accepted, we can send a notification with Notification(title, object{icon, body})
	new Notification("Esta es una notificación", {
		icon: "img/icon.jpg",
		body: "Código JavaScript"
	});
}
