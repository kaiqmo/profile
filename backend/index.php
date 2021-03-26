<?php


if($_POST["message"]) {

    $name = $_POST['displayName'] ? '';
    $message = $_POST['Text'] ? '';
    $email = $_POST['Email'] ? '';

    mail("kaiqmo@gmail.com", "New Message From Profile Page!",$message."From:"$email);
}

?>