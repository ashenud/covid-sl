$(document).ready(function () {

    mapboxgl.accessToken = 'pk.eyJ1IjoiYXNoZW51ZCIsImEiOiJjazlsZG83ZDQwM2g0M2dxdTJ5OTQ4OHh1In0.j_bRFfw78u98EwF_pTaNWw';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/ashenud/ck9lulkm62x0l1irzqu1pedgy',
        center: [80.6715, 7.9],
        zoom: 6.7
    });

});