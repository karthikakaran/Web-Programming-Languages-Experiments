<?php 
$name = $_POST["uname"];
$email = $_POST["emailId"];
$pass =  $_POST["fullname"];

if(!isset($_COOKIE[$name])){
setcookie($name, $name, time() + (86400 * 30), "/");
setcookie($pass, $pass, time() + (86400 * 30), "/");
setcookie($email, $email, time() + (86400 * 30), "/");
}
else{
$counter1 = ++$_COOKIE["counter".$name];
setcookie("counter".$name, $counter1, time() + (86400 * 30), "/");
}
?>
<html>
<body>
<center>
<h1>
Welcome <?php
echo $name.' <br>
Full Name: '.$pass.'<br>
Email address: '.$email.'<br>';
$num = rand(1, 5);
if(!isset($_COOKIE[$name])){
setcookie("animalImg".$name, $num, time() + (86400 * 30), "/");
setcookie("counter".$name, 1, time() + (86400 * 30), "/");
$src1 = $num;
$count = 1;
} else{
 $src1 = $_COOKIE["animalImg".$name];
 $count = $_COOKIE["counter".$name];
}

echo '<img src= "img'.$src1.'.jpg"/><br>
Number of page visits: '.$count;

?>
</h1>
</center>
</body>
</html>
