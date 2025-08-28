<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  http_response_code(200);
  echo "✅ Your form has been successfully submitted";
} else {
  http_response_code(405);
  echo "Method Not Allowed";
}
