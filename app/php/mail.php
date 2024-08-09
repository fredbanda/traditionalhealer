<?php
// Email Submit
// Note: filter_var() requires PHP >= 5.2.0
if ( isset($_POST['email'])  && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {
 
  // detect & prevent header injections
  $test = "/(content-type|bcc:|cc:|to:)/i";
  foreach ( $_POST as $key => $val ) {
    if ( preg_match( $test, $val ) ) {
      exit;
    }
  }

$headers = 'From: '  . '<' . $_POST["email"] . '>' . "\r\n" .
    'Reply-To: ' . $_POST["email"] . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

  //
  mail( "info@drmaiki.co.za.co.za",$_POST["info@drmaiki.co.za"], $headers );
 
  //      ^
  //  Replace with your email 
}

echo "Thank You! We will confirm the appointment shortly." . " -" . "<a href='https://www.drmaiki.co.za' style='text-decoration:none;color:#ff0099;'> Return Home</a>";

