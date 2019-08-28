let select = document.querySelectorAll ('.custom-select');

document.body.addEventListener ('click', e => {
  if (select.length > 0) {
    if (e.target.closest ('.custom-select.active') === null) {
      let x = document.querySelector ('.custom-select.active');
      if (x !== null) {
        x.classList.remove ('active');
      }
    }
  }
});
