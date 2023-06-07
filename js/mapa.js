window.onload = function(){
    var json =[
        {
        "title": "Plaza del Ayuntamiento",
        "lat": "39.4698",
        "lng": "-0.376364",
        "description": "<h2>Plaza del Ayuntamiento</h2><p>Dirección: Pl. de L'Ajuntament, 46002 Valéncia, Valencia</p>"
        },
        {
        "title": "Torres de Serrano",
        "lat": "39.4793",
        "lng": "-0.375933",
        "description": "<h2>Torres de Serrano</h2><p>Dirección: Plaça dels Furs, s/n, 46003 València, Valencia</p>"
        },
        {
        "title": "Plaza de la Virgen",
        "lat": "39.476364",
        "lng": "-0.375292",
        "description": "<h2>Plaza de la Virgen</h2><p>Dirección: Plaça de la Verge, 4, 46001 València, Valencia</p>"
        },
        {
        "title": "Ciudad de las Artes y las Ciencias",
        "lat": "39.454527777778",
        "lng": "-0.35036388888889",
        "description": "<h2>Ciudad de las Artes y las Ciencias</h2><p>Dirección: Av. del Professor López Piñero, 7, 46013 València, Valencia</p>"
        }
    ];

var mapaValencia = new google.maps.Map(document.getElementById("mapa"),{
    center: new google.maps.LatLng(39.4699075,-0.3762881),
    zoom:13,
    mapTypeId:google.maps.MapTypeId.ROADMAP
});

var infoWindow = new google.maps.InfoWindow();
for (var i = 0, length = json.length; i < length; i++) {
    var data = json[i], // Vamos obteniendo un objeto en cada iteración
    latLng = new google.maps.LatLng(data.lat, data.lng);
    var marker = new google.maps.Marker({
        position: latLng,
        map: mapaValencia,
        title: data.title
    });
    (function(marker,data){
        google.maps.event.addListener(marker, "click", function() {
            infoWindow.setContent(data.description);
            infoWindow.open(mapaValencia, marker);
            });
            })(marker, data);
    }
}