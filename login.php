<?php

$username = $_POST['username'];
$password = $_POST['password'];



$allowUsername = ['chenchen','XF Kuang'];
$allowPass = array('laopo','admin');



//var_dump($allowPass);



if(in_array($username,$allowUsername)&&in_array($password,$allowPass)){
	header('Location: lebenslauf.html');
	//echo '1111111';
	
}else{
	echo 'the username or password are invalid';
}