const container = document.querySelector ('#venue-map');

class MapImage {
  constructor (el, url = false, name) {
    this.el = el;
    this.url = url;
    if (this.el) {
      this.addListener (this.el);
    } else {
      this.create.call (this, this.url, name);
    }
  }

  addListener (el) {
    this.closeBtn = el.querySelector ('.close-el');
    this.closeBtn.addEventListener ('click', this.close.bind (this, el));
  }

  close (el) {
    const container = el.parentNode;
    container.removeChild (el);

    // db save change
  }

  create (url, name) {
    const el = document.createElement ('section');
    el.classList = 'col-12 col-md-6 element__wrapper';
    el.innerHTML = `
    <div class="element__cont">
      <span class="close-el">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.4185 1.97659L7.0967 6.29842L11.1923 10.394L10.0835 11.5027L5.98795 7.40717L1.66612 11.729L0.557373 10.6203L4.85658 6.32105L0.783647 2.24812L1.91502 1.11674L5.98795 5.18968L10.3098 0.867843L11.4185 1.97659Z" fill="#FD6060"/>
        </svg>
      </span>
      <header>
        <p class="font-2">${name}</p>
      </header>
      <div class="element__image-wrapper">
          <img src="${url}" alt="">
      </div>`;

    this.addListener (el);
    container.appendChild (el);

    // db save change
  }
}

export default MapImage;
