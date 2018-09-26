<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail_form = new PHPMailer;

$mail_form->CharSet = 'utf-8';

$name_form = $_POST['user_name_form'];
$tel_form = $_POST['user_tel_form'];
$email_form = $_POST['user_email_form'];
$message_form = $_POST['user_message_form'];

$mail_form->isSMTP();
$mail_form->Host = 'smtp.mail.ru';
$mail_form->SMTPAuth = true;
$mail_form->Username = 'elena_work-box@mail.ru';
$mail_form->Password = '$smtp2109$';
$mail_form->SMTPSecure = 'ssl';
$mail_form->Port = 465;
$mail_form->setFrom('elena_work-box@mail.ru');
$mail_form->addAddress('vakulenko2410@mail.ru');

$mail_form->isHTML(true);

$mail_form->Subject = 'Сообщение с сайта avtools.ru';
$mail_form->Body    = 'Пользователь <b>' .$name_form . '</b><br>Почта этого пользователя: <b>' .$email_form . '</b><br>Телефон этого пользователя: <b>' .$tel_form . '</b><br>Текст сообщения:<br>'  .$message_form;
$mail_form->AltBody = '';

if(!$mail_form->send()) {
    echo 'Произошла ошибка! (((';
} else {
    header('location: thank_form.html');
}
?>
