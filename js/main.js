var edadRange = document.getElementById('edad');
var edadValor = document.getElementById('edadValor');

edadRange.addEventListener('input', function() {
  edadValor.textContent = this.value;
});


function initMap() {
    // Ubicación de los lugares en Valencia
    

    var plazaAyuntamiento = { 
      lat: 39.4700,
      lng: -0.3768
    };

    var torresSerrano = { 
      lat: 39.4754,
      lng: -0.3766
    };

    // Crear mapa
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: plazaAyuntamiento
    });

    

    // Marcador Plaza del Ayuntamiento
    var markerPlazaAyuntamiento = new google.maps.Marker({
      position: plazaAyuntamiento,
      map: map,
      title: 'Plaza del Ayuntamiento'
    });

    // Contenido para la ventana de información Plaza del Ayuntamiento
    var contentPlazaAyuntamiento = '<h4>Plaza del Ayuntamiento</h4>' +
      '<p>Tonto el que lo lea</p> ' ;

    // Ventana de información Plaza del Ayuntamiento
    var infoWindowPlazaAyuntamiento = new google.maps.InfoWindow({
      content: contentPlazaAyuntamiento
    });

    // Evento para mostrar la ventana de información al hacer clic en el marcador Plaza del Ayuntamiento
    markerPlazaAyuntamiento.addListener('click', function() {
      infoWindowPlazaAyuntamiento.open(map, markerPlazaAyuntamiento);
    });

    // Marcador Torres de Serrano
    var markerTorresSerrano = new google.maps.Marker({
      position: torresSerrano,
      map: map,
      title: 'Torres de Serrano'
    });

    // Contenido para la ventana de información Torres de Serrano
    var contentTorresSerrano = '<h4>Torres de Serrano</h4>' +
      '<p>Tonto el que lo lea</p>';

    // Ventana de información Torres de Serrano
    var infoWindowTorresSerrano = new google.maps.InfoWindow({
      content: contentTorresSerrano
    });

    // Evento para mostrar la ventana de información al hacer clic en el marcador Torres de Serrano
    markerTorresSerrano.addListener('click', function() {
      infoWindowTorresSerrano.open(map, markerTorresSerrano);
    });
  }


