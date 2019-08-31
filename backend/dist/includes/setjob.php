<?php
include_once './crud.class.php';
include_once './job.class.php';

// TODO organize CRUD here

    $crud = new Crud();
	if (isset($_POST['action']) && $_POST['action'] == 'create') {
    	echo $crud->insert();
    }
	if (isset($_POST['action']) && $_POST['action'] == 'update') {
    	echo $crud->update();
    }
	if (isset($_POST['id'])) {
    	echo $crud->delete($_POST['id']);
    }
	
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

?>
