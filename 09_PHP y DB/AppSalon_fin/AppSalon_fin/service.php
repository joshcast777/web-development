<?php

require "includes/functions.php";

$services = getService();

// Convert $services from array to JSON
echo json_encode($services);