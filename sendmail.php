<?php

echo "hello world";

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Additional headers
$headers .= 'To: Thatcher <thatcher@gmx.net>' . "\r\n";

$to = 'thatcher@gmx.net';
$subject = "test direct from html";
$message = "This mail is intented to see from which ip such a message originates";

// Mail it
mail($to, $subject, $message, $headers);

?>
