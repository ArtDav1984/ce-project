<nav>
    <ul class="dashboard__nav">
        <li class="<?php if (basename($_SERVER['PHP_SELF']) == "dashboard.php") { ?>active<?php } ?>">
            <a class="font-2" href="./dashboard.php">job overview</a>
        </li>
        <li class="<?php if (basename($_SERVER['PHP_SELF']) == "course-shedule.php") { ?>active<?php } ?>">

            <a class="font-2" href="./course-shedule.php">course schedule</a>
        </li>

        <li class="<?php if (basename($_SERVER['PHP_SELF']) == "radiostations.php") { ?>active<?php } ?>">

            <a class="font-2" href="./radiostations.php">radio stations</a>
        </li>
        <!-- inactive
        <li>
          <a class="font-2" href="./misc-settings.php">misc settings</a>
        </li>
        -->
        <li class="<?php if (basename($_SERVER['PHP_SELF']) == "admin-settings.php" ||
          basename($_SERVER['PHP_SELF']) == "set-up-teams.php" ||
          basename($_SERVER['PHP_SELF']) == "phone-numbers.php" ||
          basename($_SERVER['PHP_SELF']) == "venue-map.php") { ?>active<?php } ?>">
            <a class="font-2" href="./admin-settings.php">admin settings</a>
            <ul class="dashboard__sub-nav">

                <li>
                    <a class="dashboard__sub-link font-3" href="./set-up-teams.php"
                    >Set up teams</a
                    >
                </li>
                <li>
                    <a class="dashboard__sub-link font-3" href="./phone-numbers.php"
                    >Phone numbers</a
                    >
                </li>
                <li>
                    <a class="dashboard__sub-link font-3" href="./venue-map.php">Venue map</a>
                </li>
            </ul>
        </li>
    </ul>
</nav>
<button class="button button-dashboard"  onclick="window.location.href='./messages.php'" >send urgent message</button>
