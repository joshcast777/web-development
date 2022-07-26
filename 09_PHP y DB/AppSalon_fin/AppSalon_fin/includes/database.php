<?php

// Connect to the database with mysqli
$db = mysqli_connect("localhost", "root", "Laaguila99", "appsalon");

if (!$db) {
	echo "Error en la conexión";
	exit; // Close execution if comes into if
}

// echo "Conexión correcta";