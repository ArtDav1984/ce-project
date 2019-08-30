/**
 * Created by User on 29.08.2019.
 */

$(document).ready(function () {
    setInterval(getAllJobs, 60000);
    setInterval(getAllCompletedJobs, 60000);
    setInterval(getOpenJobs, 60000);
    setInterval(getOpenJobsCompleted, 60000);
});

function getAllJobs() {
   $.ajax({
       url: '../includes/setjob.php',
       type: 'POST',
       data: {
           'action': 'getAllJobs'
       },
       success: function (response) {
           $("#job-items").html(response);
       }
   })
}

function getAllCompletedJobs() {
    $.ajax({
        url: '../includes/setjob.php',
        type: 'POST',
        data: {
            'action': 'getAllCompletedJobs'
        },
        success: function (response) {
            $("#ready-job-items").html(response);
        }
    })
}

function getOpenJobs() {
    $.ajax({
        url: '../includes/setjob.php',
        type: 'POST',
        data: {
            'status': 0
        },
        success: function (response) {
            $("#open__jobs").html(response);
        }
    })
}

function getOpenJobsCompleted() {
    $.ajax({
        url: '../includes/setjob.php',
        type: 'POST',
        data: {
            'status': 1
        },
        success: function (response) {
            $("#open__jobs-completed").html(response);
        }
    })
}

$("#post-edit__create").click(function (e) {
    e.preventDefault();
    $.ajax({
        url: '../includes/setjob.php',
        type: 'POST',
        data: $("#setJob__form").serialize() + "&action=create",
        success: function (response) {
            if (response == 'success') {
                getAllJobs();
                getOpenJobs();
            }
        }
    })
});


