<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail_newsletter = new PHPMailer;

$mail_newsletter->CharSet = 'utf-8';

$name_newsletter = $_POST['user_name_newsletter'];
$email_newsletter = $_POST['user_email_newsletter'];

//$mail->SMTPDebug = 3;            // Enable verbose debug output

$mail_newsletter->isSMTP();// Set mailer to use SMTP
$mail_newsletter->Host = 'smtp.mail.ru';// Specify main and backup SMTP servers
$mail_newsletter->SMTPAuth = true;// Enable SMTP authentication
$mail_newsletter->Username = 'elena_work-box@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail_newsletter->Password = '$smtp2109$'; // Ваш пароль от почты с которой будут отправляться письма
$mail_newsletter->SMTPSecure = 'ssl';// Enable TLS encryption, `ssl` also accepted
$mail_newsletter->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров
$mail_newsletter->setFrom('elena_work-box@mail.ru'); // от кого будет уходить письмо?
$mail_newsletter->addAddress('vakulenko2410@mail.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail_newsletter->isHTML(true);                                  // Set email format to HTML

$mail_newsletter->Subject = 'Подписка на рассылку с сайта avtools.ru';
$mail_newsletter->Body    = 'Пользователь <b>' .$name_newsletter . '</b> подписался на рассылку <br>Почта этого пользователя: <b>' .$email_newsletter . '</b>';
$mail_newsletter->AltBody = '';

if(!$mail_newsletter->send()) {
    echo 'Произошла ошибка! (((';
} else {
    header('location: thank_newsletter.html');
}

?>
