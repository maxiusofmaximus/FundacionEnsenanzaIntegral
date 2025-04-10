<?php
require __DIR__ . '/../vendor/autoload.php'; // Ruta corregida para incluir el autoload de Composer

use Supabase\CreateClient;

// Configuración de Supabase
$url = 'https://nwtkoqzudxtrekpwprlh.supabase.co/rest/v1/contactos'; // URL correcta del proyecto
$key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53dGtvcXp1ZHh0cmVrcHdwcmxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyOTkwMDMsImV4cCI6MjA1OTg3NTAwM30.TL7nSyu4j4AQqcJFsym1o3EmJA7RAqB79TkXGHGrSNI'; // Clave anon correcta

// Recibe los datos del formulario
$nombre = $_POST['nombre'] ?? '';
$correo = $_POST['correo'] ?? '';
$telefono = $_POST['telefono'] ?? '';
$mensaje = $_POST['mensaje'] ?? '';

// Realizar una solicitud HTTP POST a la API REST de Supabase
$data = [
    'nombre' => $nombre,
    'correo' => $correo,
    'telefono' => $telefono,
    'mensaje' => $mensaje
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "$url"); // URL corregida para evitar duplicación de rutas
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    "apikey: $key",
    "Authorization: Bearer $key"
]);
curl_setopt($ch, CURLOPT_CAINFO, __DIR__ . '/../cacert.pem');

try {
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    if (curl_errno($ch)) {
        throw new Exception('cURL error: ' . curl_error($ch));
    }
    curl_close($ch);

    if ($http_code === 201) {
        echo json_encode(["mensaje" => "Mensaje enviado correctamente"]);
    } else {
        throw new Exception("HTTP code: $http_code, Response: $response");
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["mensaje" => "Error al guardar los datos", "detalle" => $e->getMessage()]);
}
?>
