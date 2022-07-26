<?php include 'includes/header.php';

$clients = array("Pedro", "Juan", "Karen");

foreach ($clients as $client) {
	echo $client . "<br>";
}

$client = [
	"name" => "Joshua",
	"amount" => 200,
	"type" => "premium"
];

foreach ($client as $cl => $cl_v) {
	echo $cl . " => " . $cl_v . "<br>";
}



// EXAMPLE
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

foreach ($products as $product ) {
?>
	<li>
		<p>Producto: <?= $product["name"] ?></p>
		<p>Precio: $<?= $product["price"] ?></p>
		<p><?= $product["avaliable"] ? "Disponible" : "No disponible" ?></p>
	</li>
<?php
}

include 'includes/footer.php';