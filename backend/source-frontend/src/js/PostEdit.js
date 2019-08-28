import Job from './Jobs';
import {date, timeFrom, timeTo} from './dashboard';

class PostEdit {
  constructor(el) {
    this.el = el;

    this.cl = el.querySelector('#post-edit__close');
    this.createP = el.querySelector('#post-edit__create');
    this.editP = el.querySelector('#post-edit__edit');

    this.currentObj;

    // events
    this.cl.addEventListener('click', this.close.bind(this));
    this.editP.addEventListener('click', this.editSend.bind(this));
    this.createP.addEventListener('click', this.create.bind(this));
  }

  editOpen(obj) {
    this.currentObj = obj;
    this.el.querySelector('input[name="post-edit-title"]').value = obj.arg.title;
    this.el.querySelector('input[name="post-edit-hand"]').value = obj.arg.hand;
    this.el.querySelector('input[name="post-edit-urgent"]').checked = obj.arg.urgent;
    this.el.querySelector('#popup-comm-select > span').innerText = obj.arg.team;
    date.setDate(obj.arg.date, true, 'h:i K. l, F j');
    timeFrom.setDate(obj.arg.timeFrom, true, 'h:i');
    timeTo.setDate(obj.arg.timeTo, true, 'h:i');
    this.el.querySelector('input[name="post-edit-repeat"]').checked = obj.arg.repeat;

    this.createP.classList.add('hidden');
    this.editP.classList.remove('hidden');
    this.el.style.display = 'flex';
  }

  editSend() {
    let arg = {
      urgent: this.el.querySelector('input[name="post-edit-urgent"]').checked,
      title: this.el.querySelector('input[name="post-edit-title"]').value,
      hand: this.el.querySelector('input[name="post-edit-hand"]').value,
      team: this.el.querySelector('#popup-comm-select > span').innerText,
      repeat: this.el.querySelector('input[name="post-edit-repeat"]').checked,
      date: this.el.querySelector('#datetimepicker1').value,
      timeFrom: this.el.querySelector('#timepicker1').value,
      timeTo: this.el.querySelector('#timepicker2').value,
    };

    this.currentObj.edit(arg);
    this.clear();

    this.createP.classList.remove('hidden');
    this.editP.classList.add('hidden');
    this.el.style.display = 'none';
  }

  open() {
    this.clear();
    this.createP.classList.remove('hidden');
    this.editP.classList.add('hidden');
    this.el.style.display = 'flex';
  }

  clear() {
    this.el.querySelector('input[name="post-edit-title"]').value = '';
    this.el.querySelector('input[name="post-edit-hand"]').value = '';
    this.el.querySelector('input[name="post-edit-urgent"]').checked = false;
    // this.el.querySelector('#popup-comm-select > span').innerText = obj.arg.team;
    date.setDate('', true, 'h:i K. l, F j');
    timeFrom.setDate('', true, 'h:i');
    timeTo.setDate('', true, 'h:i');
    this.el.querySelector('input[name="post-edit-repeat"]').checked = false;
  }

  create() {
    let arg = {
      urgent: this.el.querySelector('input[name="post-edit-urgent"]').checked,
      title: this.el.querySelector('input[name="post-edit-title"]').value,
      hand: this.el.querySelector('input[name="post-edit-hand"]').value,
      team: this.el.querySelector('#popup-comm-select > span').innerText,
      repeat: this.el.querySelector('input[name="post-edit-repeat"]').checked,
      date: this.el.querySelector('#datetimepicker1').value,
      timeFrom: this.el.querySelector('#timepicker1').value,
      timeTo: this.el.querySelector('#timepicker2').value,
    };
    new Job(arg);

    this.clear();
    this.close();
  }

  close() {
    this.clear();
    this.el.style.display = 'none';
  }
}

export default PostEdit;
