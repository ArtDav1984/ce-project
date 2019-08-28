import AddDay from './AddDay';
import {date, timeFrom, timeTo} from './index';

class DayPopup {
  constructor(el) {
    this.el = el;
    this.cl = el.querySelector('.close-el');
    this.addEventBtn = el.querySelector('#p-add-event-btn');
    this.saveEventBtn = el.querySelector('#p-edit-event-btn');
    this.addDayBtn = el.querySelector('#p-add-day-btn');
    this.addDayEditBtn = el.querySelector('#p-add-day-edit-btn');
    this.datepicker1 = el.querySelector('#datepicker1');
    this.datepickerTime1 = el.querySelector('#datepicker-time1');
    this.datepickerTime2 = el.querySelector('#datepicker-time2');
    this.eventName = el.querySelector('textarea[name="event-value[]"]');
    this.eventsListEl = el.querySelector('.events-list');
    this.eventsListArr = [];
    this.eventId = 0;
    this.editContId = el.querySelector('.add-new-date');
    this.editObjItem;

    // events
    this.cl.addEventListener('click', this.close.bind(this));
    this.datepickerTime1.addEventListener('change', this.valueEv.bind(this));
    this.datepickerTime2.addEventListener('change', this.valueEv.bind(this));
    this.eventName.addEventListener('keyup', this.valueEv.bind(this));
    this.addEventBtn.addEventListener('click', this.addEvent.bind(this));
    this.saveEventBtn.addEventListener('click', this.saveEditItem.bind(this));
    this.addDayBtn.addEventListener('click', this.addDay.bind(this));
    this.addDayEditBtn.addEventListener('click', this.saveEdit.bind(this));
  }

  open() {
    this.clear();
    this.eventsListEl.innerHTML = '';
    date.setDate('', true, 'l d/m/Y');
    this.eventsListArr = [];
    this.eventId = 0;
    this.addDayBtn.classList.remove('hidden');
    this.addDayEditBtn.classList.add('hidden');
    this.el.style.display = 'flex';
  }

  editCurrentEl(obj, el, arg) {
    this.clear();
    this.editObjItem = obj;
    date.setDate(arg.day, true, 'l d/m/Y');
    this.eventsListEl.innerHTML = '';
    this.eventsListArr = arg.eventList;
    this.eventId = arg.eventList.length === 0 ? 0 : arg.eventList.length;
    if (arg.eventList.length > 0) {
      let fragm = document.createDocumentFragment();
      for (let i = 0; i < arg.eventList.length; i++) {
        let el = document.createElement('li');
        let id = arg.eventList[i].id;
        el.dataset.id = arg.eventList[i].id;
        el.innerHTML = `<div class="time-cont">
                          <span class="time-from-ls">${arg.eventList[i].timeFrom}</span>
                          <input type="hidden" class="time-from-ls-hidden" value="${arg.eventList[i].timeFrom}" name="day-create-time-from[]"/>
                          <span class="time-to-ls">${arg.eventList[i].timeTo}</span>
                          <input type="hidden" class="time-to-ls-hidden" value="${arg.eventList[i].timeTo}" name="day-create-time-to[]"/>
                        </div>
                        <div>
                          <p class="event-name-ls font-5">${arg.eventList[i].eventName}</p>
                          <input type="hidden" class="event-name-ls-hidden" value="${arg.eventList[i].eventName},${arg.eventList[i].eventId}" name="event-value[]"/>
                        </div>
                        <div class="controll-el">
                          <svg class="edit-event-item" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7823 3.73047C14.7458 3.60286 14.6638 3.52995 14.5362 3.51172C14.4268 3.47526 14.3266 3.5026 14.2354 3.59375L12.1846 5.61719L10.3253 5.31641L10.0245 3.45703L12.0479 1.40625C12.1391 1.3151 12.1664 1.21484 12.1299 1.10547C12.1117 0.977865 12.0388 0.895833 11.9112 0.859375C11.2549 0.695312 10.5896 0.704427 9.9151 0.886719C9.24062 1.06901 8.65729 1.40625 8.1651 1.89844C7.63646 2.42708 7.2901 3.05599 7.12604 3.78516C6.96198 4.51432 6.99844 5.22526 7.23542 5.91797L1.4112 11.7695C1.06484 12.1159 0.891666 12.526 0.891666 13C0.891666 13.4922 1.05573 13.9023 1.38385 14.2305C1.73021 14.5768 2.14036 14.75 2.61432 14.75C3.10651 14.75 3.52578 14.5768 3.87214 14.2305L9.69635 8.40625C10.4073 8.64323 11.1182 8.67969 11.8292 8.51562C12.5583 8.35156 13.1964 8.00521 13.7432 7.47656C14.2354 6.96615 14.5727 6.38281 14.7549 5.72656C14.9372 5.05208 14.9464 4.38672 14.7823 3.73047ZM2.64167 13.6562C2.45937 13.6562 2.30443 13.5924 2.17682 13.4648C2.04922 13.3372 1.98542 13.1823 1.98542 13C1.98542 12.8177 2.04922 12.6628 2.17682 12.5352C2.30443 12.4076 2.45937 12.3438 2.64167 12.3438C2.82396 12.3438 2.97891 12.4076 3.10651 12.5352C3.23411 12.6628 3.29792 12.8177 3.29792 13C3.29792 13.1823 3.23411 13.3372 3.10651 13.4648C2.97891 13.5924 2.82396 13.6562 2.64167 13.6562Z" fill="#FD6060"/>
                          </svg>
                          <svg class="remove-event-item delete-course-by-id" id="id-${arg.eventList[i].eventId}" data-id="${arg.eventList[i].eventId}" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4185 1.97665L7.0967 6.29848L11.1923 10.394L10.0835 11.5028L5.98795 7.40723L1.66612 11.7291L0.557373 10.6203L4.85658 6.32111L0.783647 2.24818L1.91502 1.11681L5.98795 5.18974L10.3098 0.867904L11.4185 1.97665Z" fill="#FD6060"/>
                          </svg>
                        </div>
                        `;

        el.querySelector('.edit-event-item').addEventListener('click', () => {
          this.editEventItem({
            id: id,
            timeFrom: arg.eventList[i].timeFrom,
            timeTo: arg.eventList[i].timeTo,
            eventName: arg.eventList[i].eventName,
            el,
          });
        });
        el.querySelector('.remove-event-item').addEventListener('click', () => {
          var courseId = $('.delete-course-by-id').data("id");
          $.ajax({
            url: 'includes/setCourse.php',
            type: 'POST',
            data: {
              deleteCourseById: courseId
            },
            success: function (data) {
              $("#id-" + courseId).parent().parent().remove();
            },
            error: (error) => {
              console.log(JSON.stringify(error));
            }
          });
          this.removeEventItem({id: arg.eventList[i].id, el});
        });


        fragm.appendChild(el);
      }

      this.eventsListEl.appendChild(fragm);
    }

    this.addDayBtn.classList.add('hidden');
    this.addDayEditBtn.classList.remove('hidden');
    this.el.style.display = 'flex';
  }

  saveEdit() {
    let arg = {
      day: this.datepicker1.value,
      events: this.eventsListArr,
    };
    this.editObjItem.saveEdit(this.editObjItem, arg);
    this.close();
  }

  clear() {
    this.datepickerTime1.value = '';
    this.datepickerTime2.value = '';
    this.eventName.value = '';
    this.addEventBtn.classList.add('block');
  }

  valueEv() {
    let timeFrom = this.datepickerTime1.value,
      timeTo = this.datepickerTime2.value,
      eventName = this.eventName.value;

    if (timeFrom !== '' && timeTo !== '' && eventName !== '') {
      this.addEventBtn.classList.remove('block');
    } else {
      this.addEventBtn.classList.add('block');
    }
  }

  addEvent() {
    if (this.addEventBtn.classList.contains('block')) return false;
    let timeFrom = this.datepickerTime1.value,
      timeTo = this.datepickerTime2.value,
      eventName = this.eventName.value;

    let el = document.createElement('li');
    let id = this.eventId;
    el.dataset.id = this.eventId;
    el.innerHTML = `<div class="time-cont">
      <span class="time-from-ls">${timeFrom}</span>
      <input type="hidden" name="day-create-time-from[]" value="${timeFrom}"/>
      <span class="time-to-ls">${timeTo}</span>
      <input type="hidden" name="day-create-time-to[]" value="${timeTo}"/>
    </div>
    <div>
      <p class="event-name-ls font-5">${eventName}</p>
      <input type="hidden" name="event-value[]" value="${eventName}"/>
    </div>
    <div class="controll-el">
      <svg class="edit-event-item" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7823 3.73047C14.7458 3.60286 14.6638 3.52995 14.5362 3.51172C14.4268 3.47526 14.3266 3.5026 14.2354 3.59375L12.1846 5.61719L10.3253 5.31641L10.0245 3.45703L12.0479 1.40625C12.1391 1.3151 12.1664 1.21484 12.1299 1.10547C12.1117 0.977865 12.0388 0.895833 11.9112 0.859375C11.2549 0.695312 10.5896 0.704427 9.9151 0.886719C9.24062 1.06901 8.65729 1.40625 8.1651 1.89844C7.63646 2.42708 7.2901 3.05599 7.12604 3.78516C6.96198 4.51432 6.99844 5.22526 7.23542 5.91797L1.4112 11.7695C1.06484 12.1159 0.891666 12.526 0.891666 13C0.891666 13.4922 1.05573 13.9023 1.38385 14.2305C1.73021 14.5768 2.14036 14.75 2.61432 14.75C3.10651 14.75 3.52578 14.5768 3.87214 14.2305L9.69635 8.40625C10.4073 8.64323 11.1182 8.67969 11.8292 8.51562C12.5583 8.35156 13.1964 8.00521 13.7432 7.47656C14.2354 6.96615 14.5727 6.38281 14.7549 5.72656C14.9372 5.05208 14.9464 4.38672 14.7823 3.73047ZM2.64167 13.6562C2.45937 13.6562 2.30443 13.5924 2.17682 13.4648C2.04922 13.3372 1.98542 13.1823 1.98542 13C1.98542 12.8177 2.04922 12.6628 2.17682 12.5352C2.30443 12.4076 2.45937 12.3438 2.64167 12.3438C2.82396 12.3438 2.97891 12.4076 3.10651 12.5352C3.23411 12.6628 3.29792 12.8177 3.29792 13C3.29792 13.1823 3.23411 13.3372 3.10651 13.4648C2.97891 13.5924 2.82396 13.6562 2.64167 13.6562Z" fill="#FD6060"/>
      </svg>
      <svg class="remove-event-item" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.4185 1.97665L7.0967 6.29848L11.1923 10.394L10.0835 11.5028L5.98795 7.40723L1.66612 11.7291L0.557373 10.6203L4.85658 6.32111L0.783647 2.24818L1.91502 1.11681L5.98795 5.18974L10.3098 0.867904L11.4185 1.97665Z" fill="#FD6060"/>
      </svg>
    </div>
    `;

    el.querySelector('.edit-event-item').addEventListener('click', () => {
      this.editEventItem({id: id, timeFrom, timeTo, eventName, el});
    });
    el.querySelector('.remove-event-item').addEventListener('click', () => {
      this.removeEventItem({id: id, el});
    });

    this.eventsListEl.appendChild(el);
    this.eventsListArr.push({id: id, timeFrom, timeTo, eventName, el});
    this.eventId++;
    this.clear();
  }

  editEventItem(arg) {
    this.editContId.dataset.currId = arg.id;
    this.addEventBtn.classList.add('hidden');
    this.saveEventBtn.classList.remove('hidden');
    this.datepickerTime1.value = arg.timeFrom;
    this.datepickerTime2.value = arg.timeTo;
    this.eventName.value = arg.eventName;
  }

  removeEventItem(arg) {
    this.addEventBtn.classList.remove('hidden');
    this.saveEventBtn.classList.add('hidden');
    this.eventsListEl.removeChild(arg.el);
    let index = this.eventsListArr.findIndex(item => {
      return item.id === arg.id;
    });
    if (index !== -1) {
      this.eventsListArr.splice(index, 1);
    }
    this.clear();
  }

  saveEditItem() {
    let currId = this.editContId.dataset.currId,
      el = this.eventsListEl.querySelector(`li[data-id="${currId}"]`);
    let index = this.eventsListArr.findIndex(item => {
      return item.id === +currId;
    });
    if (index !== -1) {
      let arg = {
        id: +currId,
        timeFrom: this.datepickerTime1.value,
        timeTo: this.datepickerTime2.value,
        eventName: this.eventName.value,
        el: el,
      };
      this.eventsListArr[index] = arg;
      el.querySelector('.time-from-ls').innerText = arg.timeFrom;
      el.querySelector('.time-to-ls').innerText = arg.timeTo;
      el.querySelector('.event-name-ls').innerText = arg.eventName;
      el.querySelector('.time-from-ls-hidden').value = arg.timeFrom;
      el.querySelector('.time-to-ls-hidden').value = arg.timeTo;
      var newName = (el.querySelector('.event-name-ls-hidden').value).split(",");
      el.querySelector('.event-name-ls-hidden').value = arg.eventName + ',' + newName[1];

      this.clear();
    }
    this.addEventBtn.classList.remove('hidden');
    this.saveEventBtn.classList.add('hidden');
  }

  addDay() {
    let arg = {
      day: this.datepicker1.value,
      events: this.eventsListArr,
    };
    new AddDay(arg, true);

    // this.close();
  }

  close() {
    this.clear();
    this.el.style.display = 'none';
  }
}

export default DayPopup;
