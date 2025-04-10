<?php
// Conexión a la base de datos
$host = "localhost";
$user = "root";
$password = ""; // pon tu contraseña
$dbname = "FUNDACIONFEI";

$conn = new mysqli($host, $user, $password, $dbname);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["mensaje" => "Error en la conexión"]);
    exit;
}

// Recibe los datos del formulario
$nombre = $_POST['nombre'] ?? '';
$correo = $_POST['correo'] ?? '';
$telefono = $_POST['telefono'] ?? '';
$mensaje = $_POST['mensaje'] ?? '';

// Inserta los datos
$stmt = $conn->prepare("INSERT INTO contacto (nombre, correo, telefono, mensaje) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $nombre, $correo, $telefono, $mensaje);

if ($stmt->execute()) {
    echo json_encode(["mensaje" => "Mensaje enviado correctamente"]);
} else {
    http_response_code(500);
    echo json_encode(["mensaje" => "Error al guardar los datos"]);
}

$stmt->close();
$conn->close();
?>
