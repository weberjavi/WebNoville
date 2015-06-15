//Situar los marcadores, añadirlos al mapa y definir el texto a mostrar por el popup.
		//Intentar crear una tabla (ya sea con shapes en gvSIG o en postGIS y crar un geoJSON para mostrarlo en el mapa y un CSV para descargar.)



    	//L.marker([43.369742, -8.394135]).addTo(map)
    	//.bindPopup('Rúa Santiago 19.')


          //En estas variables se crea cada una de las cartelas de manera individual y se añaden al mapa.
        //El nombre entre comillas dentro de la variable hace referencia al id del mismo nombre del código html
        //Dentro de ese id (en el html) es donde se determinará el contenido de la cartela (al que se le dará forma en css)

        var sidebar_cidadela = L.control.sidebar('sidebar_cidadela', {
            closeButton: true,
            position: 'left'
        });
        map.addControl(sidebar_cidadela);

        var sidebar_centrona = L.control.sidebar('sidebar_centrona', {
            closeButton: true,
            position: 'left'
        });
        map.addControl(sidebar_centrona);

        var sidebar_torre = L.control.sidebar('sidebar_torre', {
            closeButton: true,
            position: 'left'
        });
        map.addControl(sidebar_torre);

        var sidebar_canton = L.control.sidebar('sidebar_canton', {
            closeButton: true,
            position: 'left'
        });
        map.addControl(sidebar_canton);

        var sidebar_noville = L.control.sidebar('sidebar_noville', {
            closeButton: true,
            position: 'left'
        });
        map.addControl(sidebar_noville);

        var sidebar_caldoval = L.control.sidebar('sidebar_caldoval', {
            closeButton: true,
            position: 'left'
        });
        map.addControl(sidebar_caldoval);

        var sidebar_teatro = L.control.sidebar('sidebar_teatro', {
            closeButton: true,
            position: 'left'
        });
        map.addControl(sidebar_teatro);

        var sidebar_santiago19 = L.control.sidebar('sidebar_santiago19', {
            closeButton: true,
            position: 'left'
        });
        map.addControl(sidebar_santiago19);

        //En estas variables se crearán los marcadores en las coordenadas dadas y se añadirán al mapa.
        //También se les proporcionará una acción al clicar en el marcador. Está acción hará aparecer
        //en la pantalla la cartela correspondiente, definidas en las variables sobre estas lineas.

        var marker = L.marker([43.084098, -8.042884]).addTo(map).on('click', function () {
            sidebar_cidadela.toggle();
        });

        var marker = L.marker([43.410926, -8.193118]).addTo(map).on('click', function () {
            sidebar_centrona.toggle();
        });

        var marker = L.marker([43.385935, -8.406526]).addTo(map).on('click', function () {
            sidebar_torre.toggle();
        });

        var marker = L.marker([43.368044, -8.403286]).addTo(map).on('click', function () {
            sidebar_canton.toggle();
        });

        /*var marker = L.marker([43.455999, -8.226850]).addTo(map).on('click', function () {
            sidebar_noville.toggle();
        });*/

        var marker = L.marker([43.460159, -8.243352]).addTo(map).on('click', function () {
            sidebar_caldoval.toggle();
        });

        var marker = L.marker([43.370352, -8.398460]).addTo(map).on('click', function () {
            sidebar_teatro.toggle();
        });

        var marker = L.marker([43.369742, -8.394135]).addTo(map).on('click', function () {
            sidebar_santiago19.toggle();
        });
