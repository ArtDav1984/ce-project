<?php
session_start();
if(isset($_SESSION["username"]) AND isset($_SESSION["courseid"]))
{

}
else
{
  header("location:index.php");
}
?>
