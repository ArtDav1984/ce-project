import {Popup} from './dashboard';

const jobsCont = document.querySelector('#job-items');

class Job {
  constructor(arg, el) {
    this.arg = arg;
    if (el !== undefined) {
      this.el = el;
      this.editB = el.querySelector('.job-item__edb');
      this.editBtn = el.querySelector('.job-edit');
      this.editEditDeleteWr = el.querySelector('.job-item__edit');
      this.editDeleteDeleteWr = el.querySelector('.job-item__confirm');
      this.editDeleteDeleteBtn = el.querySelector('.job-delete');
      this.editDeleteDeleteBtnConf = el.querySelector('.delete-delete');
      this.editDeleteDeleteBtnCancle = el.querySelector('.delete-cancel');

      this.addListener(el);
    } else {
      this.create.call(this, arg);
    }
  }

  addListener(el, create) {
    if (create) {
      this.editB = el.querySelector('.job-item__edb');
      this.editBtn = el.querySelector('.job-edit');
      this.editEditDeleteWr = el.querySelector('.job-item__edit');
      this.editDeleteDeleteWr = el.querySelector('.job-item__confirm');
      this.editDeleteDeleteBtn = el.querySelector('.job-delete');
      this.editDeleteDeleteBtnConf = el.querySelector('.delete-delete');
      this.editDeleteDeleteBtnCancle = el.querySelector('.delete-cancel');
    }
    this.editB.addEventListener('click', this.editWindow.bind(this));
    this.editDeleteDeleteBtn.addEventListener('click', this.delete.bind(this));
    this.editBtn.addEventListener('click', this.editPopup.bind(this, el));
    if (create) {
      this.editDeleteDeleteBtnConf.addEventListener(
        'click',
        this.deleteConf.bind(this, this.el, true)
      );
    } else {
      // this.editDeleteDeleteBtnConf.addEventListener(
      //   'click',
      //   this.deleteConf.bind(this, this.el, false)
      // );
    }
    this.editDeleteDeleteBtnCancle.addEventListener('click', this.deleteCancle.bind(this));
  }

  create(arg) {
    this.el = document.createElement('div');
    this.el.classList = 'col-12 col-sm-6	col-md-6	col-lg-4	col-xl-3';
    this.el.innerHTML = `<section class="job-item__wrapper ${arg.urgent &&
      'job-item__wrapper--urgent'}">
      <span class="job-item__repeat ${!arg.repeat && 'hidden'}"
        ><svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.89167 9.90625V14.8125L4.57917 15.8438C4.6625 15.9479 4.76667 16 4.89167 16C5.01667 16 5.12083 15.9479 5.20417 15.8438L5.89167 14.8125V9.90625C5.5375 9.96875 5.20417 10 4.89167 10C4.57917 10 4.24583 9.96875 3.89167 9.90625ZM4.89167 0C4.07917 0 3.32917 0.208333 2.64167 0.625C1.95417 1.02083 1.40208 1.5625 0.985416 2.25C0.589583 2.9375 0.391666 3.6875 0.391666 4.5C0.391666 5.3125 0.589583 6.0625 0.985416 6.75C1.40208 7.4375 1.95417 7.98958 2.64167 8.40625C3.32917 8.80208 4.07917 9 4.89167 9C5.70417 9 6.45417 8.80208 7.14167 8.40625C7.82917 7.98958 8.37083 7.4375 8.76667 6.75C9.18333 6.0625 9.39167 5.3125 9.39167 4.5C9.39167 3.6875 9.18333 2.9375 8.76667 2.25C8.37083 1.5625 7.82917 1.02083 7.14167 0.625C6.45417 0.208333 5.70417 0 4.89167 0ZM4.89167 2.375C4.30833 2.375 3.80833 2.58333 3.39167 3C2.975 3.41667 2.76667 3.91667 2.76667 4.5C2.76667 4.60417 2.725 4.69792 2.64167 4.78125C2.57917 4.84375 2.49583 4.875 2.39167 4.875C2.2875 4.875 2.19375 4.84375 2.11042 4.78125C2.04792 4.69792 2.01667 4.60417 2.01667 4.5C2.01667 3.70833 2.29792 3.03125 2.86042 2.46875C3.42292 1.90625 4.1 1.625 4.89167 1.625C4.99583 1.625 5.07917 1.66667 5.14167 1.75C5.225 1.8125 5.26667 1.89583 5.26667 2C5.26667 2.10417 5.225 2.19792 5.14167 2.28125C5.07917 2.34375 4.99583 2.375 4.89167 2.375Z"
            fill="#FD6060"
          />
        </svg>
      </span>
      <header>
        <svg
          class="job-item__edb"
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
        <p class="job-item__title font-7">${arg.title}</p>
      </header>
      <section class="job-item">
        <ul>
          <li>
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1836 4.25C11.8737 4.25 11.6094 4.35938 11.3906 4.57812C11.1719 4.79688 11.0625 5.0612 11.0625 5.37109V7.75H10.8438V2.9375C10.8438 2.6276 10.7344 2.36328 10.5156 2.14453C10.2969 1.92578 10.0326 1.81641 9.72266 1.81641C9.43099 1.81641 9.17578 1.92578 8.95703 2.14453C8.75651 2.36328 8.65625 2.61849 8.65625 2.91016V7.75H8.4375V1.87109C8.4375 1.5612 8.32812 1.29688 8.10938 1.07812C7.89062 0.859375 7.6263 0.75 7.31641 0.75C7.02474 0.75 6.76953 0.859375 6.55078 1.07812C6.35026 1.29688 6.25 1.55208 6.25 1.84375V7.75H6.03125V2.96484C6.03125 2.65495 5.92188 2.39062 5.70312 2.17188C5.48438 1.95312 5.22005 1.84375 4.91016 1.84375C4.61849 1.84375 4.36328 1.95312 4.14453 2.17188C3.94401 2.39062 3.84375 2.64583 3.84375 2.9375V9.39062L2.96875 8.1875C2.80469 7.95052 2.56771 7.8138 2.25781 7.77734C1.96615 7.72266 1.69271 7.78646 1.4375 7.96875C1.20052 8.13281 1.05469 8.36979 1 8.67969C0.963542 8.97135 1.03646 9.24479 1.21875 9.5L4.63672 14.2031C4.76432 14.3854 4.91927 14.5221 5.10156 14.6133C5.30208 14.7044 5.5026 14.75 5.70312 14.75H11.1172C11.4089 14.75 11.6732 14.6497 11.9102 14.4492C12.1654 14.2669 12.3203 14.0299 12.375 13.7383L13.1133 10.6484C13.2044 10.2656 13.25 9.86458 13.25 9.44531V5.34375C13.25 5.05208 13.1406 4.79688 12.9219 4.57812C12.7214 4.35938 12.4753 4.25 12.1836 4.25Z"
                fill="#FD6060"
              />
            </svg>
            <span class="job-item__hand font-5">${arg.hand}</span>
          </li>
          <li>
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.6172 6.92969L7.82031 1.13281C7.5651 0.877604 7.25521 0.75 6.89062 0.75H1.3125C0.947917 0.75 0.638021 0.877604 0.382812 1.13281C0.127604 1.38802 0 1.69792 0 2.0625V7.64062C0 8.00521 0.127604 8.3151 0.382812 8.57031L6.17969 14.3672C6.4349 14.6224 6.74479 14.75 7.10938 14.75C7.47396 14.75 7.78385 14.6224 8.03906 14.3672L13.6172 8.78906C13.8724 8.53385 14 8.22396 14 7.85938C14 7.49479 13.8724 7.1849 13.6172 6.92969ZM3.0625 5.125C2.69792 5.125 2.38802 4.9974 2.13281 4.74219C1.8776 4.48698 1.75 4.17708 1.75 3.8125C1.75 3.44792 1.8776 3.13802 2.13281 2.88281C2.38802 2.6276 2.69792 2.5 3.0625 2.5C3.42708 2.5 3.73698 2.6276 3.99219 2.88281C4.2474 3.13802 4.375 3.44792 4.375 3.8125C4.375 4.17708 4.2474 4.48698 3.99219 4.74219C3.73698 4.9974 3.42708 5.125 3.0625 5.125ZM17.1172 8.78906L11.5391 14.3672C11.2839 14.6224 10.974 14.75 10.6094 14.75C10.2448 14.75 9.9349 14.6224 9.67969 14.3672L14.4375 9.60938C14.9115 9.11719 15.1484 8.53385 15.1484 7.85938C15.1484 7.1849 14.9115 6.60156 14.4375 6.10938L9.05078 0.75H10.3906C10.7552 0.75 11.0651 0.877604 11.3203 1.13281L17.1172 6.92969C17.3724 7.1849 17.5 7.49479 17.5 7.85938C17.5 8.22396 17.3724 8.53385 17.1172 8.78906Z"
                fill="#FD6060"
              />
            </svg>
            <span class="job-item__team font-5">${arg.team}</span>
          </li>
          <li>
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0.96875C5.77865 0.96875 4.64844 1.27865 3.60938 1.89844C2.57031 2.5 1.74089 3.32031 1.12109 4.35938C0.519531 5.39844 0.21875 6.52865 0.21875 7.75C0.21875 8.97135 0.519531 10.1016 1.12109 11.1406C1.74089 12.1797 2.57031 13 3.60938 13.6016C4.64844 14.2214 5.77865 14.5312 7 14.5312C8.22135 14.5312 9.35156 14.2214 10.3906 13.6016C11.4297 13 12.25 12.1797 12.8516 11.1406C13.4714 10.1016 13.7812 8.97135 13.7812 7.75C13.7812 6.52865 13.4714 5.39844 12.8516 4.35938C12.25 3.32031 11.4297 2.5 10.3906 1.89844C9.35156 1.27865 8.22135 0.96875 7 0.96875ZM8.55859 10.5391L6.15234 8.78906C6.0612 8.71615 6.01562 8.625 6.01562 8.51562V3.92188C6.01562 3.83073 6.04297 3.75781 6.09766 3.70312C6.17057 3.63021 6.2526 3.59375 6.34375 3.59375H7.65625C7.7474 3.59375 7.82031 3.63021 7.875 3.70312C7.94792 3.75781 7.98438 3.83073 7.98438 3.92188V7.69531L9.73438 8.95312C9.80729 9.00781 9.84375 9.08073 9.84375 9.17188C9.86198 9.26302 9.84375 9.34505 9.78906 9.41797L9.02344 10.457C8.96875 10.5299 8.89583 10.5755 8.80469 10.5938C8.71354 10.612 8.63151 10.5938 8.55859 10.5391Z"
                fill="#FD6060"
              />
            </svg>
            <span class="job-item__date font-5">${arg.date}</span>
          </li>
          <li>
            <svg
              width="12"
              height="15"
              viewBox="0 0 12 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8125 9.0625C11.8125 10.1016 11.5573 11.0586 11.0469 11.9336C10.5365 12.7904 9.84375 13.474 8.96875 13.9844C8.11198 14.4948 7.16406 14.75 6.125 14.75C5.08594 14.75 4.12891 14.4948 3.25391 13.9844C2.39714 13.474 1.71354 12.7904 1.20312 11.9336C0.692708 11.0586 0.4375 10.1016 0.4375 9.0625C0.4375 8.13281 0.647135 7.26693 1.06641 6.46484C1.48568 5.64453 2.0599 4.97005 2.78906 4.44141C3.53646 3.91276 4.35677 3.58464 5.25 3.45703V2.5H4.48438C4.39323 2.5 4.3112 2.47266 4.23828 2.41797C4.18359 2.34505 4.15625 2.26302 4.15625 2.17188V1.07812C4.15625 0.986979 4.18359 0.914062 4.23828 0.859375C4.3112 0.786458 4.39323 0.75 4.48438 0.75H7.76562C7.85677 0.75 7.92969 0.786458 7.98438 0.859375C8.05729 0.914062 8.09375 0.986979 8.09375 1.07812V2.17188C8.09375 2.26302 8.05729 2.34505 7.98438 2.41797C7.92969 2.47266 7.85677 2.5 7.76562 2.5H7V3.42969C8.02083 3.59375 8.93229 4.00391 9.73438 4.66016L10.4727 3.92188C10.5456 3.84896 10.6276 3.8125 10.7188 3.8125C10.8099 3.8125 10.8828 3.84896 10.9375 3.92188L11.7305 4.6875C11.7852 4.74219 11.8125 4.8151 11.8125 4.90625C11.8125 4.9974 11.7852 5.07943 11.7305 5.15234L10.9102 5.97266C11.5117 6.90234 11.8125 7.93229 11.8125 9.0625ZM7 10.0469V5.89062C7 5.81771 6.96354 5.74479 6.89062 5.67188C6.83594 5.59896 6.76302 5.5625 6.67188 5.5625H5.57812C5.48698 5.5625 5.40495 5.59896 5.33203 5.67188C5.27734 5.74479 5.25 5.81771 5.25 5.89062V10.0469C5.25 10.138 5.27734 10.2201 5.33203 10.293C5.40495 10.3477 5.48698 10.375 5.57812 10.375H6.67188C6.76302 10.375 6.83594 10.3477 6.89062 10.293C6.96354 10.2201 7 10.138 7 10.0469Z"
                fill="#FD6060"
              />
            </svg>
            <span class="job-item__time font-5" data-from="${arg.timeFrom}" data-to="${arg.timeTo}"
              >${this.time(arg.timeFrom, arg.timeTo)}</span
            >
          </li>
        </ul>
        <div class="job-item__edit hidden">
          <button class="job-edit button button-dashboard">edit</button>
          <button class="job-delete button button-dashboard">delete</button>
        </div>
        <div class="job-item__confirm hidden">
          <p class="font-5">Are you sure to delete it?</p>
          <div>
            <button class="delete-cancel button button-border">cancel</button>
            <button class="delete-delete button button-dashboard">delete</button>
          </div>
        </div>
      </section>
    </section>`;
    this.addListener(this.el, true);

    // this.el.addEventListener('click', this.click.bind(this, this));
    jobsCont.appendChild(this.el);
  }

  editPopup() {
    this.editDeleteDeleteWr.classList.add('hidden');
    this.editEditDeleteWr.classList.add('hidden');

    Popup.editOpen(this);
  }

  edit(arg, create) {
    this.arg = arg;
    let el = this.el;
    if (el.classList.contains('col-12')) {
      if (arg.urgent) {
        el.querySelector('.job-item__wrapper').classList.add('job-item__wrapper--urgent');
      } else {
        el.querySelector('.job-item__wrapper').classList.remove('job-item__wrapper--urgent');
      }
    } else {
      if (arg.urgent) {
        el.classList.add('job-item__wrapper--urgent');
      } else {
        el.classList.remove('job-item__wrapper--urgent');
      }
    }

    if (arg.repeat) {
      el.querySelector('.job-item__repeat').classList.remove('hidden');
    } else {
      el.querySelector('.job-item__repeat').classList.add('hidden');
    }

    el.querySelector('.job-item__title').innerText = arg.title;
    el.querySelector('.job-item__hand').innerText = arg.hand || 0;
    el.querySelector('.job-item__team').innerText = arg.team;
    el.querySelector('.job-item__date').innerText = arg.date;
    el.querySelector('.job-item__time').dataset.from = arg.timeFrom;
    el.querySelector('.job-item__time').dataset.to = arg.timeTo;
    el.querySelector('.job-item__time').innerText = this.time(arg.timeFrom, arg.timeTo);

    // db send change
  }

  // open edit window

  editWindow() {
    this.editDeleteDeleteWr.classList.add('hidden');
    this.editEditDeleteWr.classList.toggle('hidden');
  }

  // work remove "firts window"

  delete() {
    this.editEditDeleteWr.classList.add('hidden');
    this.editDeleteDeleteWr.classList.remove('hidden');
  }

  // work remove "cancel"

  deleteCancle() {
    this.editEditDeleteWr.classList.add('hidden');
    this.editDeleteDeleteWr.classList.add('hidden');
  }

  // work remove method

  deleteConf(el, create, e) {
    // db send change

    if (create) {
      jobsCont.removeChild(el);
    } else {
      jobsCont.removeChild(el.parentNode);
    }
  }

  // time calculation method

  time(timeFrom, timeTo) {
    if (timeFrom === '' || timeTo === '') return 0 + ' min.';
    let getDate = string => new Date(0, 0, 0, string.split(':')[0], string.split(':')[1]);
    let different = getDate(timeTo) - getDate(timeFrom);
    let differentRes, hours, minutes;
    if (different > 0) {
      differentRes = different;
      hours = Math.floor((differentRes % 86400000) / 3600000);
      minutes = Math.round(((differentRes % 86400000) % 3600000) / 60000);
    } else {
      differentRes = Math.abs(getDate(timeTo) - getDate(timeFrom));
      hours = Math.floor(24 - (differentRes % 86400000) / 3600000);
      minutes = Math.round(60 - ((differentRes % 86400000) % 3600000) / 60000);
    }

    let result = hours + ':' + minutes + ' min.';
    return result;
  }
}

export default Job;
