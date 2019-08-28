import CustomCounter from '../../CustomCounter';
import MACItem from './MACItem';

const urgentJobAlert = document.querySelector('#urgent-job-alert');
const helperNotificationAlert = document.querySelector('#helper-notification-alert');
const macItems = document.querySelectorAll('#block-mac-wrapper .element__wrapper');
const macInput = document.querySelector('input[name="block-mac"]');
const addMacBtn = document.querySelector('#addMac');

if (urgentJobAlert !== null) {
  new CustomCounter(urgentJobAlert, true);
}

if (helperNotificationAlert !== null) {
  new CustomCounter(helperNotificationAlert, true);
}

if (macItems.length > 0 || macItems !== null) {
  for (let i = 0; i < macItems.length; i++) {
    new MACItem(macItems[i], false);
  }
}

if (macInput !== null && addMacBtn !== null) {
  addMacBtn.addEventListener('click', e => {
    let val = macInput.value;
    if (val.length === 17) {
      new MACItem(false, val);
      // macInput.value = '';
    }
  });
  macInput.addEventListener('keyup', formatMAC);
}

function formatMAC(e) {
  var r = /([a-f0-9]{2})([a-f0-9]{2})/i,
    str = e.target.value.replace(/[^a-f0-9]/gi, '');

  while (r.test(str)) {
    str = str.replace(r, '$1' + '-' + '$2');
  }

  e.target.value = str.slice(0, 17);
}

$(".delete-blocked-address").click(function () {
  var addressId = $(this).data("id");
  $.ajax({
    url: 'includes/setAdminSettings.php',
    type: 'POST',
    data: {
      deleteMacAddressId: addressId
    },
    success: function (data) {},
    error: (error) => {
      console.log(JSON.stringify(error));
    }
  });
});
