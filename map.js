/*
    Script name: meme.js
    Description: Used to alter the contents of the meme.html page to suit the meme selected
    Author: Ednest Petario
    Date Created: April 16, 2017
*/

/*
  Embeds the google map containing the location of the MemeDB HQ
*/
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


/*
  Loads the map into the HTML
*/
function load(){
	initMap();
}

// Checks if the html has fully loaded
document.addEventListener("DOMContentLoaded", load, false);