import Job from './Jobs';

const jobsCont = document.querySelector('#ready-job-items');

class ReadyJobs {
  constructor(arg, el) {
    this.arg = arg;
    this.el = el;
    this.editB = el.querySelector('.job-item__edb');
    this.repostbtn = el.querySelector('.repostJob');
    this.editEditDeleteWr = el.querySelector('.job-item__edit');

    this.addListener(el, arg);
  }

  addListener(el, arg) {
    this.editB.addEventListener('click', this.editWindow.bind(this));
    // this.repostbtn.addEventListener('click', this.repost.bind(this, el, arg));
  }

  // open edit windowba

  editWindow() {
    this.el.classList.toggle('active');
    this.editEditDeleteWr.classList.toggle('hidden');
  }

  // work remove method

  repost(el, arg, create, e) {
    // db send change

    new Job(arg);
    jobsCont.removeChild(el.parentNode);
  }
}

export default ReadyJobs;
