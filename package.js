Package.describe({
  summary: "Esri Leaflet supports loading Esri basemaps and feature services, as well as tiled and dynamic map services."
});

Package.on_use(function (api) {
  api.add_files(['esri-leaflet.js', 'leaflet.js'], 'client');
});