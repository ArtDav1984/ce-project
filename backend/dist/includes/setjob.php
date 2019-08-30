<?php
include_once './conn.class.php';
include_once './job.class.php';

$object = new Jobs;

if (isset($_POST['action']) && $_POST['action'] == 'getAllJobs') {
	 $object->getAllJobs();
}

if (isset($_POST['action']) && $_POST['action'] == 'getAllCompletedJobs') {
	$object->getAllCompletedJobs();
}

if (isset($_POST['status']) && $_POST['status'] == 0) {
	echo $object->getOpenJobs($_POST['status']);
}

if (isset($_POST['status']) && $_POST['status'] == 1) {
	echo $object->getOpenJobs($_POST['status']);
}

// TODO organize CRUD here

class Crud {
	private $title;
	private $hand;
	private $urgent;
	private $categoryId;
	private $date;
	private $from;
	private $to;
	private $active;
	private $meetPlace;
	private $meetTime;
	private $contactPerson;
	private $db;
	
	public function __construct()
	{
		$connect = new Dbh();
		$this->db = $connect->connect();
		$this->title = !empty($_POST['post-edit-title']) ? $_POST['post-edit-title'] : '';
		$this->hand = !empty($_POST['post-edit-hand']) ? $_POST['post-edit-hand'] : '';
		$this->urgent = !isset($_POST['post-edit-urgent']) ? 0 : 1;
		$this->categoryId = !empty($_POST['post-edit-categoryId']) ? $_POST['post-edit-categoryId'] : '';
		$this->date = !empty($_POST['post-edit-date']) ? $_POST['post-edit-date'] : '';
		$this->from = !empty($_POST['post-edit-from']) ? $_POST['post-edit-from'] : '';
		$this->to = !empty($_POST['post-edit-to']) ? $_POST['post-edit-to'] : '';
		$this->active = !isset($_POST['post-edit-active']) ? 0 : 1;
		$this->meetPlace = !empty($_POST['post-edit-meetPlace']) ? $_POST['post-edit-meetPlace'] : '';
		$this->meetTime = !empty($_POST['post-edit-meetTime']) ? $_POST['post-edit-meetTime'] : '';
		$this->contactPerson = !empty($_POST['post-edit-contactPerson']) ? $_POST['post-edit-contactPerson'] : '';
	}
	
	public function insert()
	{
		$time_from = date_format(date_create("$this->date $this->from"),"Y-m-d H:i:s");
		$time_to = date_format(date_create("$this->date $this->to"),"Y-m-d H:i:s");
		$courseid = $_SESSION["courseid"];
		$persons_found = 0;
		$alert = '00:00:00';
		$notification_alert = '00:00:00';
		$message = '';
		$repeat = 1;
		$completed = 0;

		$sql = 'INSERT INTO jobs (`jobcategoryid`, `courseid`, `jobname`, `timefrom`, `timeto`, `period`,
                  `contactperson`, `persons`, `persons_found`, `alert`, `notification_alert`, `urgent`, 
                  `urgentmessage`, `repeat`, `location`, `active`, `completed`)
		          VALUES (:jobcategoryid, :courseid, :jobname, :timefrom, :timeto, :period, 
		          :contactperson, :persons, :persons_found, :alert, :notification_alert, :urgent, 
		          :urgentmessage, :repeat, :location, :active, :completed)';
		
		$result = $this->db->prepare($sql);
		$result->bindParam(':jobcategoryid', $this->categoryId, PDO::PARAM_INT);
		$result->bindParam(':courseid', $courseid, PDO::PARAM_INT);
		$result->bindParam(':jobname', $this->title, PDO::PARAM_STR);
		$result->bindParam(':timefrom', $time_from, PDO::PARAM_STR);
		$result->bindParam(':timeto', $time_to, PDO::PARAM_STR);
		$result->bindParam(':period', $this->meetTime, PDO::PARAM_STR);
		$result->bindParam(':contactperson', $this->contactPerson, PDO::PARAM_STR);
		$result->bindParam(':persons', $this->hand, PDO::PARAM_INT);
		$result->bindParam(':persons_found', $persons_found, PDO::PARAM_INT);
		$result->bindParam(':alert', $alert, PDO::PARAM_STR);
		$result->bindParam(':notification_alert', $notification_alert, PDO::PARAM_STR);
		$result->bindParam(':urgent', $this->urgent, PDO::PARAM_INT);
		$result->bindParam(':urgentmessage', $message, PDO::PARAM_STR);
		$result->bindParam(':repeat', $repeat, PDO::PARAM_INT);
		$result->bindParam(':location', $this->meetPlace, PDO::PARAM_STR);
		$result->bindParam(':active', $this->active, PDO::PARAM_INT);
		$result->bindParam(':completed', $completed, PDO::PARAM_INT);
		if ($result->execute()) {
			return 'success';
		}
		return 'error';
	}
}

$crud = new Crud();

if (isset($_POST['action']) && $_POST['action'] == 'create') {
	echo $crud->insert();
}

?>
