window.onload = function () {
    var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  });

    L.mapbox.accessToken = 'pk.eyJ1IjoiY2Rlcm9zZSIsImEiOiJjajc1MjVqMHExNTZlMzJwOGhrMXQ4bXB6In0.e8XlrmKw9bAJS77PGgh-6g';

    var basemap = L.tileLayer('https://api.mapbox.com/styles/v1/cderose/cjhutwv5j0bbt2rr02wfhwldh/tiles/256/{z}/{x}/{y}?access_token=' + L.mapbox.accessToken,{ 
      attribution: '<a href="https://www.mapbox.com/tos/">Mapbox</a>'
      });

    $.getJSON('lincoln-nov-1858-1859.geojson', function(data) {

    var geojson = L.geoJson(data, {

      pointToLayer: function (feature, latlng) {
       var smallIcon = L.icon({
                          iconSize: [35, 35],
                          iconAnchor: [13, 27],
                          popupAnchor:  [1, -24],
                          iconUrl: 'pin.png'
                  });

         return L.marker(latlng, {icon: smallIcon});
        },

      onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.location);
      }
    });

    var map = L.map('my-map',{scrollWheelZoom:false})

//    .fitBounds(geojson.getBounds());
    .setView([42, -89.5], 6);

    basemap.addTo(map);
    geojson.addTo(map);
  });
};
