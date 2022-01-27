var map = L.map('stlmap').setView([38.627,-90.19789], 10);
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 4,
	maxZoom: 15,
	ext: 'png'
}).addTo(map);

var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Restaurants ": "Ranoush",
        "Food": "Mediterranean"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.30467748641968,
          38.656133287592816
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurants ": "Chava's",
        "Food": "Mexican"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.20545184612274,
          38.60884345149645
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurants ": "Sultan",
        "Food": "Mediterranean"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.25432705879211,
          38.62716908366011
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurants ": "Rigazzi's",
        "Food": "Italian"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.26869162917137,
          38.61654353266676
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurants ": "Pad Thai",
        "Food": "Thai"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.37795543670654,
          38.50437489947319
        ]
      }
    }
  ]
};
var feat = L.geoJSON(geojsonFeature).addTo(map);
