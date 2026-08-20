<?php

$name = $_POST["name"] ?? "";
$costume = $_POST["costume"] ?? "";

$data = "Name: $name\nEmail: $costume\n\n";

file_put_contents("formdata.txt", $data, FILE_APPEND);

echo "Data saved!";

?>