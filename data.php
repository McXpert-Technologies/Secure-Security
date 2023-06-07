<?php

if ($_POST["id"] == "contact"){

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "rusira.pathum20@gmail.com";
    $mailSubject =  "Secure Security New Inquiry..";

    $emailBody = "";

    $emailBody .= "Client <b>Name :</b> $name <br>";
    $emailBody .= "Client <b>Email :</b> $email <br>";
    $emailBody .= "Inquiry <b>Subject :</b> $subject <br>";
    $emailBody .= "Client <b>Message :</b> $message <br>Thank You !";

    $header = "From:$email\r\nContent-Type: text/html;";

    $sen = mail($to, $mailSubject, $emailBody, $header);

    if ($sen){
        echo "1";
    }else{
        echo "2";
    }

}