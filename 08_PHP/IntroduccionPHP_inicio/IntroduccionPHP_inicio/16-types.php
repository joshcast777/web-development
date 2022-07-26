<?php

declare(strict_types=1);

include 'includes/header.php';


function userAthenticated (bool $auth) : string { // ! ?string -> an optional string returned - void -> nothing or null returned - string|int -> string or int returned
	if ($auth) {
		return "Usuario autenticado";
	} else {
		return "Usuario no autenticado";
	}
}

echo userAthenticated(false);


include 'includes/footer.php';