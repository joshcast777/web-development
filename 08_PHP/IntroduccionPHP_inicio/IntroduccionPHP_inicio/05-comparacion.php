<?php include 'includes/header.php';

$num1 = 20;
$num2 = 30;
$num3 = 30;
$num4 = "30";

var_dump($num1 > $num2);

echo "<br>";


var_dump($num1 < $num2);

echo "<br>";

var_dump($num1 >= $num2);

echo "<br>";

var_dump($num1 <= $num2);

echo "<br>";

var_dump($num3 == $num4);

echo "<br>";

var_dump($num3 === $num4);

echo "<br>";

var_dump($num1 <=> $num2); // If the number on the left is less than the right one, will return -1 - if both are the same, will return 0 - if the number on the left is greater than the left one, will return

include 'includes/footer.php';