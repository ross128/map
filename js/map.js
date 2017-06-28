document.addEventListener("DOMContentLoaded", function(event) { 
	
	//layers
	var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {});
	var tranchot = L.tileLayer.wms("http://www.wms.nrw.de/geobasis/wms_nw_tranchot", {
		layers: 'nw_tranchot',
		format: 'image/png',
	});
	var tranchot_info = L.tileLayer.wms("http://www.wms.nrw.de/geobasis/wms_nw_tranchot", {
		layers: 'nw_tranchot_info',
		format: 'image/png',
	});

	var map = L.map('map', {
		center: [51, 6.3],
		zoom: 10,
		layers: [osm],
	});

	L.control.layers({
		'Mapnik': osm,
		'Tranchot': tranchot,
		'Tranchot Info': tranchot_info,
	}).addTo(map);
	
});
