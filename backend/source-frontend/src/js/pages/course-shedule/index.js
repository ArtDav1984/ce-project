import AddDay from './AddDay';
import DayPopup from './DayPopup';
import flatpickr from 'flatpickr';
let date, timeFrom, timeTo, popup;

function invokeCourses() {
  const dayList = document.querySelectorAll('#day-list .element__wrapper');
  const dayCreateBtn = document.querySelector('#createDay');
  const dayPopup = document.querySelector('#dayPopup');
  const datepicker1 = document.querySelector('#datepicker1');
  const datepickerTime1 = document.querySelector('#datepicker-time1');
  const datepickerTime2 = document.querySelector('#datepicker-time2');

  if (dayList.length > 0) {
    for (let i = 0; i < dayList.length; i++) {
      new AddDay(dayList[i], false);
    }
  }

  if (dayPopup !== null) {
    popup = new DayPopup(dayPopup);
    dayCreateBtn.addEventListener('click', e => {
      popup.open();
    });

    if (datepicker1 !== null) {
      const datepickerMinValue = document.querySelector('.date-min-value').innerText;
      const datepickerMaxValue = document.querySelector('.date-max-value').innerText;
      date = flatpickr(datepicker1, {
        disableMobile: false,
        altInput: true,
        enableTime: false,
        dateFormat: 'm/d/Y',
        maxDate: datepickerMaxValue,
        minDate: datepickerMinValue,
        static: true,
        altFormat: 'l d/m/Y',
      });
    }

    if (datepickerTime1 !== null) {
      timeFrom = flatpickr(datepickerTime1, {
        disableMobile: false,
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
        static: true,
        minuteIncrement: 1,
        time_24hr: true,
      });
    }
    if (datepickerTime2 !== null) {
      timeTo = flatpickr(datepickerTime2, {
        disableMobile: false,
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
        static: true,
        minuteIncrement: 1,
        time_24hr: true,
      });
    }
  }
}

invokeCourses();

/*function ajaxCallCourses() {
  $.ajax({
    url: 'includes/setCourse.php',
    type: 'GET',
    data: {
      ajaxRequest: 'yes'
    },
    success: function (data) {
      $(".course-schedule-list").html(data);
    },
    error: (error) => {
      console.log(JSON.stringify(error));
    },
    complete: () => {
      invokeCourses();
    }
  });
}

setInterval(ajaxCallCourses, 60000);

$(document).ready(function () {
  $('.noEnterSubmit').bind('keypress', false);
  $(document).on('click','.delete-courses-by-date',function() {
    var courseDate = $(this).data("date");
    $.ajax({
      url: 'includes/setCourse.php',
      type: 'POST',
      data: {
        deleteCourseByDate: courseDate
      },
      success: function (data) {},
      error: (error) => {
        console.log(JSON.stringify(error));
      }
    });
  });
});*/

export const Popup = popup;
export {date, timeFrom, timeTo};
