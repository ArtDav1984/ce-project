import Phone from './Phone';
import PhoneAddPopup from './PhoneAddPopup';

const phonePopup = document.querySelector('#phoneEdit');
const addPhoneNumbers = document.querySelector('#add-phone-numbers');
const phones = document.querySelectorAll('#phone-numbers .element__wrapper');

if (phonePopup !== null) {
  const popup = new PhoneAddPopup(phonePopup);
  addPhoneNumbers.addEventListener('click', () => {
    popup.open();
  });
}

if (phones.length > 0) {
  for (let i = 0; i < phones.length; i++) {
    new Phone(phones[i]);
  }
}

$(".delete-phone").click(function () {
    var phoneId = $(this).data("id");
    $.ajax({
        url: 'includes/setPhoneNumbers.php',
        type: 'POST',
        data: {
            phoneDelete:true,
            deletePhoneNumberId: phoneId
        },
        success: function (data) {},
        error: (error) => {
            console.log(JSON.stringify(error));
        }
    });
});