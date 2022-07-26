<?php include 'includes/header.php';

// in_array - check if an element exists in an array
$cart = ["Tablet", "Computadora", "Televeisión"];

var_dump(in_array("Tablet", $cart));

// Order elements in an array
$nums =[1, 3, 4, 5, 1, 2];
sort($nums);
echo "<pre>";
var_dump($nums);
echo "</pre>";

// Order in reverse
rsort($nums);
echo "<pre>";
var_dump($nums);
echo "</pre>";

// Order an associative array
$client = [
	"amount" => 200,
	"type" => "premieum",
	"name" => "Joshua"
];
asort($client); // Order by values, first numbers and then strings - arsort for order in reverse
echo "<pre>";
var_dump($client);
echo "</pre>";

ksort($client); // Order by keys - krsort for order in reverse
echo "<pre>";
var_dump($client);
echo "</pre>";

include 'includes/footer.php';