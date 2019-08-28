<?php
include_once 'includes/login.inc.php';
include_once 'includes/conn.class.php';
include_once 'includes/job.class.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
  <link rel="icon" type="image/png" href="./src/img/logo.png">
  <title>Dashboard</title>
  <link href="src/css/main.css" rel="stylesheet">
</head>
<body>

<?php
$object = new Jobs;
?>
<div class="dashboard">
  <section class="side-menu">
        <span id="mobileMenuBtn"
        ><svg
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <line
                x1="1"
                y1="1"
                x2="8"
                y2="1"
                stroke="#3D3636"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <line
                x1="1"
                y1="5"
                x2="12"
                y2="5"
                stroke="#3D3636"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <line
                x1="1"
                y1="9"
                x2="5"
                y2="9"
                stroke="#3D3636"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
          </svg>
        </span>
    <header>
      <?php
      include_once 'includes/header.inc.php';
      ?>
    </header>
    <section class="dashboard__nav-wrapper">
      <?php
      include_once 'includes/nav.inc.php';
      ?>
    </section>
    <footer>
      <?php
      include_once 'includes/footer.inc.php';
      ?>
    </footer>
  </section>
  <section class="dashboard__content-space">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="dashboard__header-bar">
            <button id="createJob" class="button button-dashboard">
              + create a job
            </button>

            <div class="filter">
                  <span class="font-3">
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                          d="M13.5927 0.118408H0.932531C0.330969 0.118408 0.0301876 0.829346 0.467688 1.2395L5.52628 6.2981V11.9309C5.52628 12.1497 5.60831 12.3684 5.79972 12.4778L7.98722 14.009C8.42472 14.3098 9.02628 14.009 9.02628 13.4622V6.2981L14.0575 1.2395C14.495 0.829346 14.1943 0.118408 13.5927 0.118408Z"
                          fill="#FD6060"
                      />
                    </svg>
                    Filter by
                  </span>
              <!-- custom select -->
              <div class="custom-select" id="filterTeam">
                <span>All</span>
                <ul>
                  <?php
                  echo $object->getTeams();
                  ?>
                </ul>
              </div>
              <!-- custom select -->
            </div>
          </div>
        </div>
      </div>
      <div id="job-items" class="row job-items job-items-active">
        <!-- xmlns -->

        <?php
        echo $object->getAllJobs();
        ?>

        <!-- xmlns -->
      </div>
      <div class="row">
        <div class="col-12">
          <div class="dashboard__header-bar">

          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 completed-job__header">
          <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M15.0938 2.5H12.25V1.40625C12.25 1.05078 11.9492 0.75 11.5938 0.75H4.15625C3.77344 0.75 3.5 1.05078 3.5 1.40625V2.5H0.65625C0.273438 2.5 0 2.80078 0 3.15625V4.6875C0 5.67188 0.601562 6.68359 1.66797 7.44922C2.54297 8.07812 3.58203 8.46094 4.67578 8.59766C5.55078 10.0195 6.5625 10.5938 6.5625 10.5938V12.5625H5.25C4.26562 12.5625 3.5 13.1367 3.5 14.0938V14.4219C3.5 14.6133 3.63672 14.75 3.82812 14.75H11.9219C12.0859 14.75 12.25 14.6133 12.25 14.4219V14.0938C12.25 13.1367 11.457 12.5625 10.5 12.5625H9.1875V10.5938C9.1875 10.5938 10.1719 10.0195 11.0469 8.59766C12.1406 8.46094 13.1797 8.07812 14.0547 7.44922C15.1211 6.68359 15.75 5.67188 15.75 4.6875V3.15625C15.75 2.80078 15.4492 2.5 15.0938 2.5ZM2.70703 6.02734C2.02344 5.5625 1.75 5.01562 1.75 4.6875V4.25H3.5C3.52734 5.15234 3.66406 5.94531 3.85547 6.62891C3.41797 6.46484 3.03516 6.27344 2.70703 6.02734ZM14 4.6875C14 5.15234 13.5078 5.69922 13.0156 6.02734C12.6875 6.27344 12.3047 6.46484 11.8672 6.62891C12.0586 5.94531 12.1953 5.15234 12.2227 4.25H14V4.6875Z"
                fill="#FD6060"
            />
          </svg>
          <span class="font-1">Completed jobs</span>
        </div>
      </div>
      <div id="ready-job-items" class="row job-items job-items-completed">
        <?php
        echo $object->getAllCompletedJobs();
        ?>
      </div>

    </div>
  </section>

</div>

<!-- popup -->

<aside id="postEdit" class="post-edit__wrapper">
  <?php echo $object->setJob(); ?>
</aside>

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="src/js/bundle.js"></script>


</body>
</html>
