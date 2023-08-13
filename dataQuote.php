<?php

if ($_POST["id"] == "quote"){

    $name = $_POST['name'];
    $companyName = $_POST['companyName'];
    $email = $_POST['email'];
    $phoneNum = $_POST['phoneNum'];
    $industry = $_POST['industry'];
    $location = $_POST['location'];
    $message = $_POST['message'];

    $to = "rusira.pathum20@gmail.com";
    $mailSubject =  "Secure Security New Quote..";

    $emailBody = "";

    $emailBody .= "Client <b>Name :</b> $name <br>";
    $emailBody .= "Client <b>Company Name :</b> $companyName <br>";
    $emailBody .= "Client <b>Phone Number :</b> $phoneNum <br>";
    $emailBody .= "Inquiry <b>Industry :</b> $industry <br>";
    $emailBody .= "Inquiry <b>Location :</b> $location <br>";
    $emailBody .= "Client <b>Message :</b> $message <br>Thank You !";

    $header = "From:$email\r\nContent-Type: text/html;";

    $sen = mail($to, $mailSubject, $emailBody, $header);

    if ($sen){
        echo "1";
    }else{
        echo "2";
    }

}