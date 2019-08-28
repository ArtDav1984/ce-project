class Counter {
  constructor (el, cr) {
    this.el = el;
    this.cr = cr;
    if (cr) {
      this.input = el.children[0].children[0];
    } else {
      this.input = el.children[0];
    }
    this.plusBtn = el.children[1];
    this.minusBtn = el.children[2];

    this.plusBtn.addEventListener ('click', this.plus.bind (this));
    this.minusBtn.addEventListener ('click', this.minus.bind (this));
    this.input.addEventListener ('keypress', this.number.bind (this));
  }

  number (e) {
    e = e || event;

    if (e.ctrlKey || e.altKey || e.metaKey) return;

    let chr = (e => {
      if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode (event.keyCode);
      }

      if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode (event.which);
      }

      return null;
    }) (e);

    if (chr == null) return;

    if (chr < '0' || chr > '9') {
      e.preventDefault ();
    }
  }

  plus () {
    let val;
    if (this.cr) {
      val = +this.el.children[0].children[0].value;
      this.el.children[0].children[0].value = val + 1;
    } else {
      val = +this.el.children[0].value;
      this.el.children[0].value = val + 1;
    }
  }

  minus () {
    let val;
    if (this.cr) {
      val = +this.el.children[0].children[0].value;
      if (val > 0) {
        this.el.children[0].children[0].value = val - 1;
      }
    } else {
      val = +this.el.children[0].value;
      if (val > 0) {
        this.el.children[0].value = val - 1;
      }
    }
  }
}

export default Counter;
