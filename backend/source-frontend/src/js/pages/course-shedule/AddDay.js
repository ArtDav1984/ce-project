const eventDayContainer = document.querySelector('#day-list');
import {Popup} from './index';

class AddDay {
  constructor(el, create) {
    if (create) {
      this.create(el);
    } else {
      this.el = el;
      this.addEvents(el);
    }
  }

  addEvents(el) {
    let deleteBtn = el.querySelector('.close-el'),
      editBtn = el.querySelector('.edit-event-item');

    deleteBtn.addEventListener('click', this.delete.bind(this, el));
    editBtn.addEventListener('click', this.edit.bind(this, el));
  }

  create(arg) {
    const el = document.createElement('section');
    el.classList = 'col-12 col-sm-6 col-md-6 col-lg-4 element__wrapper';
    el.innerHTML = `<div class="element__cont">
    <svg
      class="edit-event-item"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.7823 3.73047C14.7458 3.60286 14.6638 3.52995 14.5362 3.51172C14.4268 3.47526 14.3266 3.5026 14.2354 3.59375L12.1846 5.61719L10.3253 5.31641L10.0245 3.45703L12.0479 1.40625C12.1391 1.3151 12.1664 1.21484 12.1299 1.10547C12.1117 0.977865 12.0388 0.895833 11.9112 0.859375C11.2549 0.695312 10.5896 0.704427 9.9151 0.886719C9.24062 1.06901 8.65729 1.40625 8.1651 1.89844C7.63646 2.42708 7.2901 3.05599 7.12604 3.78516C6.96198 4.51432 6.99844 5.22526 7.23542 5.91797L1.4112 11.7695C1.06484 12.1159 0.891666 12.526 0.891666 13C0.891666 13.4922 1.05573 13.9023 1.38385 14.2305C1.73021 14.5768 2.14036 14.75 2.61432 14.75C3.10651 14.75 3.52578 14.5768 3.87214 14.2305L9.69635 8.40625C10.4073 8.64323 11.1182 8.67969 11.8292 8.51562C12.5583 8.35156 13.1964 8.00521 13.7432 7.47656C14.2354 6.96615 14.5727 6.38281 14.7549 5.72656C14.9372 5.05208 14.9464 4.38672 14.7823 3.73047ZM2.64167 13.6562C2.45937 13.6562 2.30443 13.5924 2.17682 13.4648C2.04922 13.3372 1.98542 13.1823 1.98542 13C1.98542 12.8177 2.04922 12.6628 2.17682 12.5352C2.30443 12.4076 2.45937 12.3438 2.64167 12.3438C2.82396 12.3438 2.97891 12.4076 3.10651 12.5352C3.23411 12.6628 3.29792 12.8177 3.29792 13C3.29792 13.1823 3.23411 13.3372 3.10651 13.4648C2.97891 13.5924 2.82396 13.6562 2.64167 13.6562Z"
        fill="#FD6060"
      />
    </svg>
    <span class="close-el">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.4185 1.97659L7.0967 6.29842L11.1923 10.394L10.0835 11.5027L5.98795 7.40717L1.66612 11.729L0.557373 10.6203L4.85658 6.32105L0.783647 2.24812L1.91502 1.11674L5.98795 5.18968L10.3098 0.867843L11.4185 1.97659Z"
          fill="#FD6060"
        />
      </svg>
    </span>
    <header>
      <p class="day-day-r font-1">
        ${arg.day}
      </p>
    </header>
    <ul class="events-list-wrapper-f">
      ${this.formListEvent(arg.events)}
    </ul>
  </div>`;
    this.addEvents(el);
    eventDayContainer.appendChild(el);
    this.el = el;
  }

  formListEvent(list) {
    let listEl = '';
    if (list.length > 0) {
      for (let i = 0; i < list.length; i++) {
        listEl += `<li data-id="${list[i].id}">
        <div class="time-cont">
          <span class="time-from-ls">${list[i].timeFrom}</span>
          <span class="time-to-ls">${list[i].timeTo}</span>
        </div>
        <div>
          <p class="event-name-ls font-5">${list[i].eventName}</p>
        </div>
      </li>`;
      }
    }
    return listEl;
  }

  edit(el) {
    let eventList = el.querySelectorAll('.element__cont li');
    let eventListArr = [];
    if (eventList.length > 0) {
      for (let i = 0; i < eventList.length; i++) {
        let arr = {
          id: +eventList[i].dataset.id,
          timeFrom: eventList[i].querySelector('.time-from-ls').innerText,
          timeTo: eventList[i].querySelector('.time-to-ls').innerText,
          eventName: eventList[i].querySelector('.event-name-ls').innerText,
          eventId: eventList[i].querySelector('.course-event-id').innerText,
          el: eventList[i],
        };
        eventListArr.push(arr);
      }
    }
    let arg = {
      day: el.querySelector('.day-day-r').innerText,
      eventList: eventListArr,
    };
    Popup.editCurrentEl(this, el, arg);
  }

  saveEdit(obj, arg) {
    let el = obj.el,
      day = el.querySelector('.day-day-r'),
      eventsList = el.querySelector('.events-list-wrapper-f');

    eventsList.innerHTML = '';
    if (arg.events.length > 0) {
      eventsList.innerHTML = this.formListEvent(arg.events);
    }
    day.innerText = arg.day;
  }

  delete(el) {
    eventDayContainer.removeChild(el);
    // db save change
  }
}

export default AddDay;
