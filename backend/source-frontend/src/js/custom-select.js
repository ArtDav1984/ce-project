class Select {
  constructor(el, func = false) {
    this.el = el;
    this.func = func;
    this.selectVal = el.children[0];
    this.itemList = el.children[1];

    el.addEventListener('click', this.open.bind(this, this.el, this.selectVal, this.itemList));
  }

  open(el, selectVal, itemList, e) {
    let target = e.target;
    if (!el.classList.contains('active')) {
      let x = document.querySelector('.custom-select.active');
      if (x) x.classList.remove('active');
    }

    if (target.nodeName === 'SPAN') {
      el.classList.toggle('active');
    }

    if (target.nodeName === 'LI') {
      let val = target.innerText;
      selectVal.innerText = val;
      for (let item of itemList.children) {
        item.classList.remove('current');
        if (val === item.innerText) {
          item.classList.add('current');
        }
      }
      if (this.func) {
        this.func(val);
      }
      el.classList.remove('active');
    }
  }
}

export default Select;
