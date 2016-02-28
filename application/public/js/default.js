var originElement = document.getElementById('origin');
var autocomplete;



var placeSearch, autocomplete;

function loadGoogleStuff() {
  setTimeout(mainFunction,5000);
  function mainFunction() {
    initAutocomplete();
  }
}

function initAutocomplete() {
  var input = (document.getElementById('treeLocation'),
      {types: ['geocode']});

  autocomplete = new google.maps.places.Autocomplete(input);
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