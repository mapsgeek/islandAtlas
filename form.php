<?php

$Name = $_POST['Name'];
$Email = $_POST['Email'];
$Message = $_POST['Message'];

$message_content = "<h1>Name: $Name</h1>";
$message_content .= "<p>From: $Email</p>";
$message_content .= "<p>Message: $Message</p>";
$to_email = 'ibrahimmohammed1002@gmail.com,taborosi@gmail.com';
$subject = "Mail from islandatlas.org";
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'islandatlas.org';

mail($to_email, $subject, $message_content, implode("\r\n", $headers));

?>