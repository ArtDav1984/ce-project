const teamCont = document.querySelector('#teams-members');

class Team {
  constructor(el, arg) {
    this.arg = arg;
    if (el) {
      this.el = el;
      this.optBtn = el.querySelector('.close-el');
      this.optWrapper = el.querySelector('.element__option');
      this.deleteCancel = el.querySelector('.delete-cancel');
      this.deleteBtn = el.querySelector('.delete-delete');

      this.addListener(el);
    } else {
      this.create.call(this, arg);
    }
  }

  addListener(el, create) {
    if (create) {
      this.optBtn = el.querySelector('.close-el');
      this.optWrapper = el.querySelector('.element__option');
      this.deleteCancel = el.querySelector('.delete-cancel');
      this.deleteBtn = el.querySelector('.delete-delete');
    }
    this.optBtn.addEventListener('click', this.editWindow.bind(this));
    this.deleteCancel.addEventListener('click', this.deleteCancle.bind(this));
    this.deleteBtn.addEventListener('click', this.delete.bind(this, el));
  }

  create(arg) {
    this.el = document.createElement('section');
    this.el.classList = 'col-12 col-sm-6 col-md-6 col-lg-4 element__wrapper';
    this.el.innerHTML = `<div class="element__cont">
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
    <ul>
      <li>
        <svg
          width="13"
          height="15"
          viewBox="0 0 13 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66412 7.75C8.57819 7.75 10.1641 6.19141 10.1641 4.25C10.1641 2.33594 8.57819 0.75 6.66412 0.75C4.72272 0.75 3.16412 2.33594 3.16412 4.25C3.16412 6.19141 4.72272 7.75 6.66412 7.75ZM9.09772 8.625H8.63287C8.03131 8.92578 7.37506 9.0625 6.66412 9.0625C5.95319 9.0625 5.26959 8.92578 4.66803 8.625H4.20319C2.17975 8.625 0.539124 10.293 0.539124 12.3164V13.4375C0.539124 14.1758 1.11334 14.75 1.85162 14.75H11.4766C12.1876 14.75 12.7891 14.1758 12.7891 13.4375V12.3164C12.7891 10.293 11.1212 8.625 9.09772 8.625Z"
            fill="#FD6060"
          />
        </svg>
        <p class="font-1">${arg.name}</p>
      </li>
      <li>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.9624 1.43359L11.1187 0.777344C10.8179 0.695312 10.4898 0.859375 10.3531 1.16016L9.04057 4.22266C8.9312 4.49609 9.01323 4.79688 9.23198 4.98828L10.8999 6.35547C9.91557 8.43359 8.19292 10.1836 6.0601 11.1953L4.69292 9.52734C4.50151 9.30859 4.20073 9.22656 3.92729 9.33594L0.864791 10.6484C0.56401 10.7852 0.427291 11.1133 0.481978 11.4141L1.13823 14.2578C1.22026 14.5586 1.46635 14.75 1.79448 14.75C8.79448 14.75 14.482 9.08984 14.482 2.0625C14.482 1.76172 14.2632 1.51562 13.9624 1.43359Z"
            fill="#FD6060"
          />
        </svg>
        <p class="font-5">${arg.phone}</p>
      </li>
    </ul>
    <div class="element__option hidden">
      <p class="font-5">Are you sure to delete it?</p>
      <div>
        <button class="delete-cancel button button-border">cancel</button>
        <button class="delete-delete button button-dashboard">delete</button>
      </div>
    </div>
  </div>`;

    teamCont.appendChild(this.el);

    this.addListener(this.el, true);
  }

  editWindow() {
    this.optWrapper.classList.remove('hidden');
  }

  delete(el) {
    teamCont.removeChild(el);
    // db save change
  }

  deleteCancle() {
    this.optWrapper.classList.add('hidden');
  }
}

export default Team;
