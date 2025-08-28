<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name'] ?? '');
  $email = htmlspecialchars($_POST['email'] ?? '');
  $message = htmlspecialchars($_POST['message'] ?? '');

  if (isset($_FILES['screenshot']) && $_FILES['screenshot']['error'] === UPLOAD_ERR_OK) {
    $uploadDir = __DIR__ . '/uploads/';
    if (!is_dir($uploadDir)) {
      mkdir($uploadDir, 0777, true);
    }

    $extension = pathinfo($_FILES['screenshot']['name'], PATHINFO_EXTENSION);
    $allowed = ['png','jpg','jpeg','gif','bmp','webp'];

    if (!in_array(strtolower($extension), $allowed)) {
      http_response_code(400);
      echo "Invalid file type";
      exit;
    }

    $filename = uniqid('screenshot_', true) . '.' . $extension;
    move_uploaded_file($_FILES['screenshot']['tmp_name'], $uploadDir . $filename);
  }

  http_response_code(200);
  echo "✅ Your form has been successfully submitted";
} else {
  http_response_code(405);
  echo "Method Not Allowed";
}
