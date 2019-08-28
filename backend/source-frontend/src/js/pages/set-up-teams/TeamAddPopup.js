import Team from './Team';

class PhoneAddPopup {
  constructor(el) {
    this.el = el;
    this.cl = el.querySelector('#phone-popup__close');
    this.addPhoneBtn = el.querySelector('#phone-add');

    this.cl.addEventListener('click', this.close.bind(this));
    this.addPhoneBtn.addEventListener('click', this.create.bind(this));
  }

  open() {
    this.clear();
    this.el.style.display = 'flex';
  }

  clear() {
    this.el.querySelector('input[name="phone-contact-name"]').value = '';
    this.el.querySelector('input[name="phone-contact-number"]').value = '';
  }

  create() {
    let arg = {
      name: this.el.querySelector('input[name="phone-contact-name"]').value,
      phone: this.el.querySelector('input[name="phone-contact-number"]').value,
    };

    new Team(false, arg);

    this.close();
  }

  close() {
    this.el.style.display = 'none';
  }
}

export default PhoneAddPopup;
