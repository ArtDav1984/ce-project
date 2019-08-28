import Select from '../../CustomSelect';
import PostEdit from './PostEdit';
import Job from './Jobs';
import ReadyJobs from './ReadyJobs';
import flatpickr from 'flatpickr';
import Counter from '../../CustomCounter';
import confirmDatePlugin from 'flatpickr/dist/plugins/confirmDate/confirmDate';

let select = document.querySelectorAll('.custom-select');
const createJob = document.querySelector('#createJob');
const postEdit = document.querySelector('#postEdit');
const counterBlock = document.querySelector('#post-edit-hand');
const filter = document.querySelector('#filterTeam');

let popup, date, timeFrom, timeTo;

function invokeJobs() {
  const jobItems = document.querySelectorAll('#job-items .job-item__wrapper');
  const readyJobItems = document.querySelectorAll('#ready-job-items .job-item__wrapper');

  if (jobItems.length > 0) {
    for (let i = 0; i < jobItems.length; i++) {
      let arg = {
        urgent: jobItems[i].classList.contains('job-item__wrapper--urgent'),
        title: jobItems[i].querySelector('.job-item__title').innerText,
        hand: jobItems[i].querySelector('.job-item__hand').innerText,
        team: jobItems[i].querySelector('.job-item__team').innerHTML,
        active: !jobItems[i].querySelector('.job-item__repeat').classList.contains('hidden'),
        date: jobItems[i].querySelector('.job-item__date_full').innerText,
        timeFrom: jobItems[i].querySelector('.job-item__time').dataset.from,
        timeTo: jobItems[i].querySelector('.job-item__time').dataset.to,
        jobId: jobItems[i].querySelector('.job-item__id').innerText,
        meetPlace: jobItems[i].querySelector('.job-item__meet-place').innerText,
        meetTime: jobItems[i].querySelector('.job-item__meet-time').innerText,
        contactPerson: jobItems[i].querySelector('.job-item__contact-person').innerText,
      };

      new Job(arg, jobItems[i]);
    }
  }

  if (readyJobItems.length > 0) {
    for (let i = 0; i < readyJobItems.length; i++) {
      let arg = {
        urgent: readyJobItems[i].classList.contains('job-item__wrapper--urgent'),
        title: readyJobItems[i].querySelector('.job-item__title').innerText,
        hand: readyJobItems[i].querySelector('.job-item__hand').innerText,
        team: readyJobItems[i].querySelector('.job-item__team').innerHTML,
        repeat: !readyJobItems[i].querySelector('.job-item__repeat').classList.contains('hidden'),
        date: readyJobItems[i].querySelector('.job-item__date').innerText,
        timeFrom: readyJobItems[i].querySelector('.job-item__time').dataset.from,
        timeTo: readyJobItems[i].querySelector('.job-item__time').dataset.to,
        jobId: readyJobItems[i].querySelector('.job-item__id').innerText,
      };

      new ReadyJobs(arg, readyJobItems[i]);
    }
  }
}

invokeJobs();

if (filter !== null) {
  new Select(filter, changeTeam);
}

if (createJob !== null && postEdit !== null) {
  let datePicker = document.querySelector('#datetimepicker1');
  let timePicker1 = document.querySelector('#timepicker1');
  let timePicker2 = document.querySelector('#timepicker2');
  let selectPopup = document.querySelector('#popup-comm-select');

  if (datePicker !== null) {
    date = flatpickr(datePicker, {
      disableMobile: false,
      altInput: true,
      // enableTime: true,
      dateFormat: 'l, F j',
      static: true,
      // minuteIncrement: 1,
      altFormat: 'l, F j',
      defaultHour: 1,
      plugins: [
        new confirmDatePlugin({
          confirmText: '',
          confirmIcon: '<span>ok</span>',
        }),
      ],
    });
  }
  if (timePicker1 !== null) {
    timeFrom = flatpickr(timePicker1, {
      disableMobile: false,
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
      static: true,
      minuteIncrement: 1,
      defaultHour: 1,
      time_24hr: true,
    });
  }
  if (timePicker2 !== null) {
    timeTo = flatpickr(timePicker2, {
      disableMobile: false,
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
      static: true,
      minuteIncrement: 1,
      defaultHour: 1,
      time_24hr: true,
    });
  }

  if (counterBlock !== null) {
    new Counter(counterBlock);
  }

  new Select(selectPopup);

  popup = new PostEdit(postEdit);

  createJob.addEventListener('click', () => {
    popup.open();
  });
}

function changeTeam(val) {
  let job = document.querySelectorAll('.job-item__wrapper');

  if (job.length > 0 || job !== null) {
    for (let i = 0; i < job.length; i++) {
      if (val === 'All') {
        job[i].parentNode.classList.remove('hidden');
      } else {
        job[i].parentNode.classList.remove('hidden');
        if (job[i].querySelector('.job-item__team').innerText.toLowerCase() === val.toLowerCase()) {
          job[i].parentNode.classList.remove('hidden');
        } else {
          job[i].parentNode.classList.add('hidden');
        }
      }
    }
  }
}

// TODO add ajax here

export const Popup = popup;
export {date, timeFrom, timeTo};
