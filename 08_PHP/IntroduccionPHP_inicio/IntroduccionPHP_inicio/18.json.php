<?php include 'includes/header.php';


$products = [
	[
		"name" => "Tablet",
		"price" => 200,
		"avaliable" => true
	],
	[
		"name" => "Televisor",
		"price" => 300,
		"avaliable" => true
	],
	[
		"name" => "Monitor",
		"price" => 200,
		"avaliable" => false
	]
];

echo "<pre>";
var_dump($products);
// Convert an array to string in JSON format - JSON_UNESCAPED_UNICODE for UTF8
$json = json_encode($products, JSON_UNESCAPED_UNICODE);
var_dump($json);
// Convert a string in JSON format  to associative array
$array = json_decode($json);
var_dump($array);
echo "</pre>";


include 'includes/footer.php';