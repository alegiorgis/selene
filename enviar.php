<?php

if (isset($_POST ['enviar']))
{
    if ( !empty($_POST ['name'])&& !empty($_POST ['asunto']) && !empty($_POST ['msg'])&& !empty($_POST ['email']))
        {
            $name = $_POST ['name'];
            $asunto = $_POST ['asunto'];
            $message = $_POST ['msg'];
            $mail = $_POST ['mail'];

            $header = "From: alegiorgis22@gmail.com" ." \r\n";
            $header. = "Reply-to: alegiorgis22@gmail.com" ." \r\n";
            $header. = "X-Mailer: PHP/" .phpversion();

            $mail= @mail ($email, $asunto, $msg, $header);
            if ($mail)
            {
                echo "<h4> El mensaje se ha enviado correctamente! </h4>";
            }


        }
}

/*
$name = $_POST ['name'];
$mail = $_POST ['mail'];
$message = $_POST ['message'];

$header = 'From:' .$mail . " \r\n";
$header = 'X-Mailer: PHP/' .phpversion() . " \r\n";
$header = "Mime-Version: 1.0 \r\n";
$header = "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message = "Su e-mail es: " . $mail . " \r\n";
$message = "Mensaje: " . $_POST ['message'] . " \r\n";
$message = "Enviado el: " . date ('d/m/Y', time());

$para = 'alegiorgis22@gmail.com';
$asunto = 'Mensaje de pagina web SELENE';

mail ($para, $asunto; utf8_decode($message), $header);

echo 'mensaje enviado correctamente';


header("Location:index.html");

?>
*/