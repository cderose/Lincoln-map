window.onload = function () {
    var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  });

    $.getJSON('data/lincoln-1858-1859.geojson', function(data) {

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
        layer.bindPopup(feature.properties.Location);
      }
    });

    var map = L.map('my-map',{scrollWheelZoom:false})

    .fitBounds(geojson.getBounds());
    //.setView([42, -89.5], 6);

    basemap.addTo(map);
    geojson.addTo(map);
  });
};
