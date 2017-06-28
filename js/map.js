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

	var ortho = L.tileLayer.wms("http://www.wms.nrw.de/geobasis/wms_nw_dop20", {
		layers: 'nw_dop20',
		format: 'image/png',
	});

	var hist_ortho = L.tileLayer.wms("https://www.wms.nrw.de/geobasis/wms_nw_histortho_1988-1994", {
		layers: 'nw_histortho_1988-1994',
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
		'Orthophotos': ortho,
		'Orthophotos (1988-1994)': hist_ortho,
	}).addTo(map);
	
});
