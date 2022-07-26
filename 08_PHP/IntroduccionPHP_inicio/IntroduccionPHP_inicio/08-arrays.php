<?php include 'includes/header.php';

// Indexed arrays
$cart = ["Tablet", "Televisión", "Computadora"]; // 1
echo "<pre>";
var_dump($cart);
echo "</pre>";

echo "Primer elemento {$cart[0]}";

// Add an element with the index
$cart[3] = "Nuevo producto...";

// Add an element to the end
array_push($cart, "Audífonos");

// Add an element to the beggin
array_push($cart, "Smartwatch");

echo "<pre>";
var_dump($cart);
echo "</pre>";

// Indexed arrays
$client = array("Cliente 1", "Cliente 2", "Cliente 3"); // 2 - it works the same as the other way
echo "<pre>";
var_dump($client);
echo "</pre>";

include 'includes/footer.php';
