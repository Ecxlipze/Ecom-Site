<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {


$fName = $_POST['fname'];      
$Email = $_POST['email'];      
$password = $_POST['password']; 

echo $fName;     
echo $Email;     
echo $password;  
}
else{
    echo"nothing";
}
?>
