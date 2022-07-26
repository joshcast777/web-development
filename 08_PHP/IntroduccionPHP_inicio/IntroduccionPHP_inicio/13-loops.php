<?php include 'includes/header.php';

// while
echo "WHILE <br>";
$i = 0;

while ($i <= 10) {
	echo $i . "<br>";
	$i++;
}

// do-while
echo "DO - WHILE <br>";
$i = 0;

do {
	echo $i . "<br>";
	$i++;
} while ($i <= 10);

// for
echo "FOR <br>";
for ($i=0; $i <= 10; $i++) { 
	echo $i . "<br>";
}

/**
 * EJEMPLO DE FIZZ BUZZ
 * Múltiplo de 3 - imprimir Fizz
 * Múltiplo de 5 - imprimir Buzz
 * Múltiplo de 3 y 5 - imprimir FizzBuzz
 */
echo "EJEMPLO FIZZ - BUZZ";
$fizz = "FIZZ";
$buzz = "BUZZ";
for ($i=0; $i < 31; $i++) {
	if ($i % 3 == 0 && $i % 5 == 0) {
		echo $i . " - " . $fizz . $buzz . "<br>";
	} else if ($i % 5 == 0) {
		echo $i . " - " . $buzz . "<br>";
	} else if ($i % 3 == 0) {
		echo $i . " - " . $fizz . "<br>";
	} else {
		echo $i . "<br>";
	}
	
}

include 'includes/footer.php';