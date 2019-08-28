import Team from './Team';
import TeamAddPopup from './TeamAddPopup';

const teamPopup = document.querySelector('#teamEdit');
const addTeamMember = document.querySelector('#add-team-member');
const teams = document.querySelectorAll('#teams-members .element__wrapper');

if (teamPopup !== null) {
  const popup = new TeamAddPopup(teamPopup);
  addTeamMember.addEventListener('click', () => {
    popup.open();
  });
}

if (teams.length > 0) {
  for (let i = 0; i < teams.length; i++) {
    new Team(teams[i]);
  }
}

$(".delete-team").click(function () {
    var teamId = $(this).data("id");
    $.ajax({
        url: 'includes/setTeam.php',
        type: 'POST',
        data: {
            deleteTeam:true,
            postTeamId: teamId
        },
        success: function (data) {},
        error: (error) => {
            console.log(JSON.stringify(error));
        }
    });
});

$(".delete-station").click(function () {
    var stationId = $(this).data("id");
    $.ajax({
        url: 'includes/setStation.php',
        type: 'POST',
        data: {
            deleteStation:true,
            postStationId: stationId
        },
        success: function (data) {},
        error: (error) => {
            console.log(JSON.stringify(error));
        }
    });
});
