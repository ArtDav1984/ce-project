<?php
include_once './conn.class.php';
include_once './job.class.php';

$object = new Jobs;

$connect = new Dbh();
$DB = $connect->connect();

// TODO organize CRUD here

?>
