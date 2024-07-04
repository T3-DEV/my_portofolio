// send-email.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Sesuaikan dengan logika pengiriman email yang Anda miliki
    $to = 'fendilagusta@gmail.com';
    $subject = 'Pesan dari Portofolio: ' . $name;
    $body = "Nama: $name\n\nEmail: $email\n\nPesan:\n$message";

    $headers = array(
        'From' => $email,
        'Reply-To' => $email,
        'X-Mailer' => 'PHP/' . phpversion()
    );

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(array('message' => 'Pesan berhasil terkirim!'));
    } else {
        http_response_code(500);
        echo json_encode(array('message' => 'Terjadi kesalahan saat mengirim pesan.'));
    }
} else {
    http_response_code(405);
    echo json_encode(array('message' => 'Metode request tidak diizinkan.'));
}
