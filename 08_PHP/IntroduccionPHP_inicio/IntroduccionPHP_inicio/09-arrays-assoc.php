<?php include 'includes/header.php';

$client = [
	"name" => "Joshua",
	"amount" => 200,
	"info" => [
		"type" => "premium",
		"available" => 100
	]
];

echo $client["name"];

echo "<pre>";
var_dump($client);
echo "</pre>";

// Add a new property
$client["code"] = 1234567890;

echo "<pre>";
var_dump($client);
echo "</pre>";

include 'includes/footer.php';