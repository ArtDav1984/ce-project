import MapImage from './MapImage';

class UploadMap {
  constructor(el, uploadInp) {
    this.el = el;
    this.el.addEventListener('click', this.upload.bind(this, this.el));
    this.uploadInp = uploadInp;
    this.uploadInp.addEventListener('change', this.readyUrl.bind(this, this.uploadInp));
  }

  upload(el) {
    this.uploadInp.click();
    // db save change
  }

  readyUrl(inp, e) {
    let url = inp.value,
      ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase(),
      name = url.substring(url.lastIndexOf('\\') + 1);
    if (
      inp.files &&
      inp.files[0] &&
      (ext == 'gif' || ext == 'png' || ext == 'jpeg' || ext == 'jpg')
    ) {
      let reader = new FileReader();

      reader.onload = function(e) {
        new MapImage(false, e.target.result, name);
      };

      reader.readAsDataURL(inp.files[0]);
    }
  }
}

export default UploadMap;
