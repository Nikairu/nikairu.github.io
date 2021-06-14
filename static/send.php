<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';

$mail = new PHPMailer(true);

try{
  $toEmail = 'diogosilvaoliveirawork@gmail.com';

  $mail->CharSet = 'UTF-8';
  $mail->setFrom($toEmail);
  $mail->addAddress($toEmail);

$Name = $_POST['inputName'];
$Phone = $_POST['number'];
$Mail = $_POST['email'];
$Description = $_POST['question'];


$message = '<html><body>';
$message .= '<table>';
$message .= '<tr>';
$message .= '<td>Name and Last Name:</td><td>'.$Name.'</td>';
$message .= '</tr>';
$message .= '<tr>';
$message .= '<td>Phone Number:</td><td>'.$Phone.'</td>';
$message .= '</tr>';
$message .= '<tr>';
$message .= '<td>`E-mail`:</td><td>'.$Mail.'</td>';
$message .= '</tr>';
$message .= '<tr>';
$message .= '<td>Issue:</td><td>'.$Description.'</td>';
$message .= '</tr>';
$message .= '</table>';
$message .= "</body></html>";


$mail->isHTML(true);
$mail->Body = $message;
$mail->Subject = 'My page Contact';

$mail->send();
echo '1';

} catch (Exception $e) {
  echo '0';
}

?>