// Get references to the elements we'll be updating
const latitudeElement = document.getElementById('latitude');
const longitudeElement = document.getElementById('longitude');
const altitudeElement = document.getElementById('altitude');
const mapElement = document.getElementById('map');

// Check if geolocation is supported by the browser
if ('geolocation' in navigator) {
  // Request the current position from the user
  navigator.geolocation.getCurrentPosition(
    position => {
      // Update the latitude, longitude, and altitude elements
      latitudeElement.textContent = `Latitude: ${position.coords.latitude}`;
      longitudeElement.textContent = `Longitude: ${position.coords.longitude}`;
      altitudeElement.textContent = `Altitude: ${position.coords.altitude}`;

      // Create a new Google Maps object centered on the user's location
      const map = new google.maps.Map(mapElement, {
        center: { lat: position.coords.latitude, lng: position.coords.longitude },
        zoom: 12,
      });

      // Add a marker to the map at the user's location
      const marker = new google.maps.Marker({
        position: { lat: position.coords.latitude, lng: position.coords.longitude },
        map,
        title: 'Your location',
      });
    },
    error => {
      // Handle any errors that occur when trying to get the user's location
      console.error(error);
      alert('Unable to retrieve your location');
    }
  );
} else {
  // Handle the case where geolocation is not supported by the browser
  alert('Geolocation is not supported by your browser');
}
