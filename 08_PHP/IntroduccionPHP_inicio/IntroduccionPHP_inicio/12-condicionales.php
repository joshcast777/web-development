<?php include 'includes/header.php';


$authenticated = true;
$admin = false;

if ($authenticated && $admin) {
	echo "Usuario autenticado";
} else {
	echo "Usuario no autenticado";
}

echo "<br>";

// switch
$tech = "HTML";

switch ($tech) {
	case 'PHP':
		echo "Es PHP";
		break;
	case 'JavaScript':
		echo "Es PHJavaScript";
		break;
	case 'HTML':
		echo "Es HTML";
		break;
	case 'CSS':
		echo "Es CSS";
		break;
	default:
		echo "No sé qué lenguaje sea";
		break;
}

include 'includes/footer.php';