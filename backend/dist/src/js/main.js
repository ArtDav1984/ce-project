/**
 * Created by User on 29.08.2019.
 */

$(document).ready(function () {
    setInterval(getAllJobs, 300000);
    setInterval(getAllCompletedJobs, 300000);
    setInterval(getOpenJobs, 300000);
    setInterval(getOpenJobsCompleted, 300000);


    function getAllJobs() {
        $.ajax({
            url    : '../includes/setjob.php',
            type   : 'POST',
            data   : {
                'action': 'getAllJobs'
            },
            success: function (response) {
                $("#job-items").html(response);
            }
        })
    }

    function getAllCompletedJobs() {
        $.ajax({
            url    : '../includes/setjob.php',
            type   : 'POST',
            data   : {
                'action': 'getAllCompletedJobs'
            },
            success: function (response) {
                $("#ready-job-items").html(response);
            }
        })
    }

    function getOpenJobs() {
        $.ajax({
            url    : '../includes/setjob.php',
            type   : 'POST',
            data   : {
                'status': 0
            },
            success: function (response) {
                $("#open__jobs").html(response);
            }
        })
    }

    function getOpenJobsCompleted() {
        $.ajax({
            url    : '../includes/setjob.php',
            type   : 'POST',
            data   : {
                'status': 1
            },
            success: function (response) {
                $("#open__jobs-completed").html(response);
            }
        })
    }

    $("#post-edit__create").on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url    : '../includes/setjob.php',
            type   : 'POST',
            data   : $("#setJob__form").serialize() + "&action=create",
            success: function (response) {
                if (response) {
                    getAllJobs();
                    getOpenJobs();
                }
            }
        })
    });

    $("#post-edit__edit").on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url    : '../includes/setjob.php',
            type   : 'POST',
            data   : $("#setJob__form").serialize() + "&action=update",
            success: function (response) {
                if (response) {
                    getAllJobs();
                    getOpenJobs();
                }
            }
        })
    });


    $(".delete-delete").on('click', function (e) {
        e.preventDefault();
        var parent = $(this).parent('div');
        var id     = $(parent).find('input[name=post-edit-id]').val();
        $.ajax({
            url    : '../includes/setjob.php',
            type   : 'POST',
            data   : {
                id: id
            },
            success: function (response) {
                if (response) {
                    getAllJobs();
                    getOpenJobs();
                }
            }
        })
    });
});


