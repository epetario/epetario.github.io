function initMap() {
        var hq = {lat: 49.900131, lng: -97.141351};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: hq
        });
        var marker = new google.maps.Marker({
          position: hq,
          map: map
        });
      }


function load(){
	initMap();
}

document.addEventListener("DOMContentLoaded", load, false);