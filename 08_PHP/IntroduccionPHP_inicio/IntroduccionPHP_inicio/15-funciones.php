<?php

declare(strict_types = 1); // For strict syntax

include 'includes/header.php';


function sumar(int $num1 = 0, int $num2 = 0) {
	echo $num1 + $num2;
}

sumar(2, 10);


include 'includes/footer.php';