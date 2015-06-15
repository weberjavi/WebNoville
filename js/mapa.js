var map = L.map('map', {
			center: [43.438116, -8.234969],
			zoom: 10,
		});

		


		//desconectar el zoom al accionar la rueda del ratón.
		map.scrollWheelZoom.disable();
		// add Stamen Watercolor to map. En caso de querer solamente la capa de Stamen
        //habría que borrar las tres últimas lineas y (var stamen=) y descomentar (.addTo(map))
		var stamen= L.tileLayer.provider('Stamen.TonerLite').addTo(map);
        /*var ggl = new L.Google();
        map.addLayer(stamen, ggl);
        map.addControl(new L.Control.Layers( {'Gris':stamen, 'Satélite':ggl}, {}));*/

        // create a tile layer sourced from mapbox
		//L.tileLayer('https://{s}.tiles.mapbox.com/v4/<javiabia.ce15f303>/{z}/{x}/{y}.png?access_token=<pk.eyJ1IjoiamF2aWFiaWEiLCJhIjoiS1ZyQ3BQYyJ9.v8yJTbF879AQ_t6j5XafiQ').addTo(map);
		var noville_icono = L.icon({
    		iconUrl: 'img/icono_noville.svg',
		    iconSize:     [100, 100], // size of the icon
		    //shadowSize:   [50, 64],  size of the shadow
		    iconAnchor:   [24.4, 45], // point of the icon which will correspond to marker's location
		    //shadowAnchor: [4, 62],   the same for the shadow
		    popupAnchor:  [150, 0] // point from which the popup should open relative to the iconAnchor
		});


		var noville_popup = "<h1>Noville</h1><br>Prueba de elemento personalizado";

		L.marker([42.455999, -8.226850], {icon: noville_icono}).bindPopup(noville_popup).addTo(map);



/*rutas comerciales romanas. Crear unos iconos en movimiento y los distintos puertos de atraque, utilizar el libro de naveiro 
		var londonParisRomeBerlinBucarest = [[51.507222, -0.1275], [48.8567, 2.3508], [41.9, 12.5], [52.516667, 13.383333], [44.4166,26.1]];
		var londonParisRomeBerlinBucarest = [[51.507222, -0.1275], [48.8567, 2.3508], [41.9, 12.5], [52.516667, 13.383333], [44.4166,26.1]];
		var londonParisRomeBerlinBucarest = [[51.507222, -0.1275], [48.8567, 2.3508], [41.9, 12.5], [52.516667, 13.383333], [44.4166,26.1]];
		var londonParisRomeBerlinBucarest = [[51.507222, -0.1275], [48.8567, 2.3508], [41.9, 12.5], [52.516667, 13.383333], [44.4166,26.1]];*/