document.addEventListener("DOMContentLoaded", function(event) { 
	
	//layers
	var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {});
	
	var map = L.map('map', {
		center: [51, 6.3],
		zoom: 10,
		layers: [osm],
	});

	L.control.layers({
		'mapnik': osm,
	}).addTo(map);
	
});
