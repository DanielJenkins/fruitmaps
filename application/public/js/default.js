var originElement = document.getElementById('origin');
var autocomplete;

google.maps.event.addDomListener(window, 'load', loadGoogleStuff);

function loadGoogleStuff() {
  initAutocomplete();
}

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById('location')),
    {types: ['geocode']});
}

function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}