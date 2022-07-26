<?php


function getService () : array {
	try {
		// Import a connexion
		require "database.php";

		// Write the SQL code
		$sql = "SELECT * FROM service";
		$result = mysqli_query($db, $sql);
		// Empty array
		$services = [];
		$i = 0;

		// Get the results
		while ($row = mysqli_fetch_assoc($result)) {
			$services[$i]["id_service"] = $row["id_service"];
			$services[$i]["name"] = $row["name"];
			$services[$i]["price"] = $row["price"];
			$i++;
		}

		return $services;
	} catch (\Throwable $th) {
		var_dump($th);
	}
}

getService();