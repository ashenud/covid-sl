$(document).ready(function () {
    var mapSettings = {
        districtData: "https://raw.githubusercontent.com/arimacdev/covid19-srilankan-data/master/Districts/districts_lk.csv",
        MapBocToken: 'pk.eyJ1IjoiYXNoZW51ZCIsImEiOiJjazlsZG83ZDQwM2g0M2dxdTJ5OTQ4OHh1In0.j_bRFfw78u98EwF_pTaNWw',
    }

    if (mapboxgl.supported()) {
        getDistrictData();
    } else {
        var errorUI = "<div class='error-state-ui-outer'>" +
            "<div class='error-state-ui'>" +
            "<img class='error-image' src='./assets/img/browser_not_supported.jpg' />" +
            "<h2 class='error-title'>" +
            "Browser Not Supported!" +
            "</h2>" +
            "<p class='error-description'>Your browser does not support features required for this application.Please update your browser for better experience.</p>" +
            "</div>" +
            "</div>";

        $("#map-wrapper").html(errorUI);
    }

    function getDistrictData() {

        Papa.parse(mapSettings.districtData, {
            download: true,
            complete: function (results) {
                var data = results.data;
                data.shift();
                buildFeaturesObj(data);
            }
        });

        
    }

    function buildFeaturesObj(csvData) {

        var features = [];

        $.each(csvData, function (index, value) {
            var featureOBJ = {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": []
                }
            };

            if (value[0] != null && value[1] != null && value[2] != null && value[3] != null) {

                featureOBJ.properties.District = value[0];
                featureOBJ.geometry.coordinates.push(value[2]);
                featureOBJ.geometry.coordinates.push(value[1]);
                featureOBJ.properties.count = parseInt(value[3]);
    
                features.push(featureOBJ)
            }
        });

        drawStaticMap(features);

    }

    function drawStaticMap(featuresObj) {
        

        var mapData = {
            type: 'geojson',
            // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
            // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
            data: {
                'type': 'FeatureCollection',
            }
        };

        mapData.data.features = featuresObj;

        

        mapboxgl.accessToken = mapSettings.MapBocToken;

        

            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/ashenud/ck9lulkm62x0l1irzqu1pedgy',
                center: [80.6715, 7.8],
                zoom: 6.7
            });


            // Define a new navigation control.
            var navigation = new mapboxgl.NavigationControl();
            // Add zoom and rotation controls to the map.
            map.addControl(navigation);


            // Remove zoom and rotation controls from the map.
            map.removeControl(navigation);
            map.scrollZoom.disable();
            map.boxZoom.disable();
            map.dragRotate.disable();
            map.dragPan.disable();
            map.keyboard.disable();
            map.doubleClickZoom.disable();
            map.touchZoomRotate.disable();


            map.on('load', function () {
                map.addSource('patients', mapData);

                map.addLayer({
                    id: 'clusters',
                    type: 'circle',
                    source: 'patients',
                    paint: {
                        // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
                        // with three steps to implement three types of circles:
                        //   * Blue, 20px circles when point count is less than 100
                        //   * Yellow, 30px circles when point count is between 100 and 750
                        //   * Pink, 40px circles when point count is greater than or equal to 750
                        'circle-color': [
                            'step',
                            ['get', 'count'],
                            '#51bbd6',
                            20,
                            '#f1f075',
                            50,
                            '#f28cb1'
                        ],
                        'circle-radius':30
                    }
                });

                map.addLayer({
                    id: 'cluster-count',
                    type: 'symbol',
                    source: 'patients',
                    layout: {
                        'text-field': ['get', 'count'],
                        'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                        'text-size': 12
                    }
                });
               

                /* map.addLayer({
                    id: 'unclustered-point',
                    type: 'circle',
                    source: 'patients',
                    paint: {
                        'circle-color': '#000',
                        'circle-radius': 20,
                        'circle-stroke-width': 1,
                        'circle-stroke-color': '#fff'
                    }
                }); */
                
            });

    }

    /* mapboxgl.accessToken = 'pk.eyJ1IjoiYXNoZW51ZCIsImEiOiJjazlsZG83ZDQwM2g0M2dxdTJ5OTQ4OHh1In0.j_bRFfw78u98EwF_pTaNWw';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/ashenud/ck9lulkm62x0l1irzqu1pedgy',
        center: [80.6350,7.2932],
        maxZoom: 16,
        minZoom: 9,
        zoom: 9.68
    });

    var title = document.getElementById('location-title');
    var description = document.getElementById('location-description');

    var locations = [{
            'id': '1',
            'title': 'Kandy',
            'description': "This is where hip-hop was born, where the Yankees became a dynasty and where you can find New York City's leading zoo and botanical garden.",
            'camera': {
                center: [80.6350, 7.2932],
                zoom: 12.21,
                pitch: 50
            }
        },
        {
            'id': '2',
            'title': 'Colombo',
            'description': "No matter how hip it looks on TV, NYC's most populous borough is best experienced in person. Read on to find out about live music, Prospect Park, Nets basketball and more.",
            'camera': {
                center: [79.8612, 6.9271],
                bearing: -8.9,
                zoom: 11.68
            }
        },
        {
            'id': '4',
            'title': 'Ampara',
            'description': "No matter how hip it looks on TV, NYC's most populous borough is best experienced in person. Read on to find out about live music, Prospect Park, Nets basketball and more.",
            'camera': {
                center: [81.149084, 7.1240286],
                bearing: -8.9,
                zoom: 11.68
            }
        },
        {
            'id': '5',
            'title': 'Jaffna',
            'description': "No matter how hip it looks on TV, NYC's most populous borough is best experienced in person. Read on to find out about live music, Prospect Park, Nets basketball and more.",
            'camera': {
                center: [80.0109171, 9.6699994],
                bearing: -8.9,
                zoom: 11.68
            }
        }
    ];

   

    function playback(index) {
        title.textContent = locations[index].title;
        description.textContent = locations[index].description;

        // Animate the map position based on camera properties
        map.flyTo(locations[index].camera);

        map.once('moveend', function () {
            // Duration the slide is on screen after interaction
            window.setTimeout(function () {
                // Increment index
                index = index + 1 === locations.length ? 0 : index + 1;
                playback(index);
            }, 3000); // After callback, show the location for 3 seconds.
        });
    }

    // Display the last title/description first
    title.textContent = locations[locations.length - 1].title;
    description.textContent = locations[locations.length - 1].description;

    map.on('load', function () {
               // Start the playback animation for each borough
        playback(0);
    }); */

});