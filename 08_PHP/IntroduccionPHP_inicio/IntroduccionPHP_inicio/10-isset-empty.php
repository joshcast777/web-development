<?php include 'includes/header.php';

$client1 = [];
$client2 = array();
$client3 = array("Pedro", "Juan", "Karen");

// Empty - check if array is empty
var_dump(empty($client1));
var_dump(empty($client3));
var_dump(empty($client2));

echo "<br>";

// isset - check if a property have been created or defined
var_dump(isset($client4));
var_dump(isset($client1));
var_dump(isset($client2));
var_dump(isset($client3));

include 'includes/footer.php';