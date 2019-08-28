<?php
session_start();
include_once 'includes/conn.class.php';
include_once 'includes/signup.class.php';

$signup = new Signup;
$signup->getSignup();
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="icon" type="image/png" href="./src/img/logo.png">
    <title>Home</title>
  <link href="src/css/main.css" rel="stylesheet"></head>
  <body>
    <section class="login-form__wrapper">
      <div class="login-form">
        <a class="login" href="./">
                 <?php
              include_once 'includes/loginsvgs.inc.php';
              ?>
        </a>
        <h1 class="font-1 login-form__head">Joy center app</h1>
        <p class="font-2 login-form__title">
             <?php
             if (isset($signup->message))
             {
               echo $signup->message;
             }
             else
             {
             echo "Login with your ADMIN credentials";
             }

             ?>
        </p>
        <form class="login-form__form" action="./" method="POST">
          <input class="font-3" type="text" name="username" placeholder="email" />
          <input class="font-3" type="password" name="password" placeholder="password" />
          <div class="login-form__options">

            <a class="font-4" href="">forgot password</a>
          </div>
          <button type="submit" class="button button-login" name="login">Let the joy begin</button>
        </form>
      </div>
    </section>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="src/js/bundle.js"></script></body>
</html>
