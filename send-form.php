<?php
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];

$addUser ="{Имя: '$name',\nПочта: '$email',\nТелефон: '$tel'},
    \n";

$users = fopen("leads.txt", "a");
fputs($users, $addUser); 
fclose($users);

?>