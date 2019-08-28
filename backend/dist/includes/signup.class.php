<?php
class Signup extends Dbh
{
 public $message;

  public function getSignup()
    {
      if (isset($_POST['login']))
      {
          if(empty($_POST["username"]) || empty ($_POST["password"]))
         {
         $this->message = '<label class=danger>All fields are required</label>';
         }
         else
         {
          $query = "Select * from settings where admin= :username AND pass = :password and active=1";
          $stmt = $this->connect()->prepare($query);
          $stmt->execute
          (
              array(
                     'username' => $_POST["username"],'password'  => $_POST ["password"]
                  )
          );
          $count =  $stmt->rowCount();
            if($count > 0)
            {
            $_SESSION["username"] = $_POST["username"];

           //get the right courseid
            $data = $stmt->fetchAll();
              foreach ($data as $row) {
                $_SESSION["courseid"] = $row['courseid'];
                  $_SESSION["coursename"] = $row['coursename'];
              }
               header("location:dashboard.php");
            }
            else
            {
            $this->message = '<label class=danger>Wrong Data entered</label>';
           }
        }

     }
  }
}
