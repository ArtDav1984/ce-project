import UploadMap from './UploadMap';
import MapImage from './MapImage';

const venueMapItems = document.querySelectorAll('#venue-map .element__wrapper');
const uploadMapBtn = document.querySelector('#upload-map');
const uploadMapInp = document.querySelector('#post-photos');

if (uploadMapBtn !== null && uploadMapInp !== null) {
  new UploadMap(uploadMapBtn, uploadMapInp);
}

if (venueMapItems.length > 0) {
  for (let i = 0; i < venueMapItems.length; i++) {
    new MapImage(venueMapItems[i], false);
  }
}

$(".delete-map").click(function () {
    var imageId = $(this).data("id");
    $.ajax({
        url: 'venue-map.php',
        type: 'POST',
        data: {
            deleteImage:true,
            postImageId: imageId
        },
        success: function (data) {},
        error: (error) => {
            console.log(JSON.stringify(error));
        }
    });
});