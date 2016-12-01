<?php
$email = filter_input(INPUT_POST, "email");
$mobile = filter_input(INPUT_POST, "mobile");
$name = filter_input(INPUT_POST, "name");
$subject = filter_input(INPUT_POST, "subject");
$message = filter_input(INPUT_POST, "message");
$to = "sanuma02@gmail.com";

$messagebody = "Mensaje desde travelwithfriendscr.com Contactenos.\n\n";
$messagebody .= "Desde: $email \n\n";
$messagebody .= "Nombre: $name \n\n";
$messagebody .= "Telefono: $mobile .\n\n";
$messagebody .= "Mensaje: $message \n\n";


$enter = "\r\n";
$headers = "From: donotreply@travelwithfreindscr.com $enter";
$headers .= "MIME-Version: 1.0 $enter";
$headers .= "Content-type: text/plain; charset=utf-8 $enter";
$result = mail($to, $subject, $messagebody, $headers);
header("Location: http://travelwithfriendscr.com/dist/#/");

