<?php
$file = fopen("file.txt","a+"); 
$text="Вам пришло письмо от пользователя $name\n";
$text="Текст сообщения:\n $email \n";
$text="Ответить можно на адрес электронной почты $tel \n"
flock($file, LOCK_EX);
fwrite($file, $text);
flock($file, LOCK_UN);
fclose($file);
echo "Сообщение отправленно.";
?>