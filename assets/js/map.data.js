<<<<<<< HEAD
$(document).ready(function(){var e,t,s=!0,a={districtData:"/data/district/patients-data.csv",playbackLimit:10,MapBocToken:"pk.eyJ1IjoiYXNoZW51ZCIsImEiOiJjazlsZG83ZDQwM2g0M2dxdTJ5OTQ4OHh1In0.j_bRFfw78u98EwF_pTaNWw"};if(mapboxgl.supported())Papa.parse(a.districtData,{download:!0,complete:function(s){var r,i,n,c,p=s.data;p.shift(),i=p,n=[],$.each(i,function(e,t){var s={type:"Feature",properties:{camera:{center:[],bearing:-8.9,zoom:11.68}},geometry:{type:"Point",coordinates:[]}};null!=t[0]&&null!=t[1]&&null!=t[2]&&null!=t[3]&&(s.properties.DistrictEn=t[0],s.properties.DistrictSin=t[1],s.properties.Cases=parseInt(t[2]),s.properties.index=e-1,s.properties.Recovered=parseInt(t[3]),s.properties.Deaths=parseInt(t[4]),s.properties.camera.center.push(t[5]),s.properties.camera.center.push(t[6]),s.geometry.coordinates.push(t[5]),s.geometry.coordinates.push(t[6]),s.properties.type=t[7],n.push(s))}),r=n,(e={type:"geojson",data:{type:"FeatureCollection"}}).data.features=r,mapboxgl.accessToken=a.MapBocToken,(t=new mapboxgl.Map({container:"map",style:"mapbox://styles/ashenud/ck9n0r7ws2ih31ipd3q8dtjln",center:[80.6715,7.9],zoom:6.7,maxBounds:[[78.577325,5.771346],[83.106849,10.004859]]})).on("load",function(){t.addSource("patients",e),t.addLayer({id:"district-outer",type:"circle",source:"patients",paint:{"circle-color":["match",["get","type"],"dist","rgba(252, 197, 197,0.8)","qc","rgba(255, 236, 197,0.8)","uns","rgba(197, 255, 249,0.8)","rgba(179, 214, 227,0.8)"],"circle-radius":17}}),t.addLayer({id:"district",type:"circle",source:"patients",paint:{"circle-color":["match",["get","type"],"dist","#ff4040","qc","#ff6969","uns","#ff6969","#33b5e5"],"circle-radius":14}}),t.addLayer({id:"district-count",type:"symbol",source:"patients",layout:{"text-field":["get","Cases"],"text-font":["DIN Offc Pro Medium","Arial Unicode MS Bold"],"text-size":12}});var s=new mapboxgl.Popup({closeButton:!1,closeOnClick:!1});t.on("mouseenter","district",function(e){t.getCanvas().style.cursor="pointer";var a,o=e.features[0].geometry.coordinates.slice();for(a="si"==lang?'<p class="map-font-si">'+e.features[0].properties.DistrictSin+"</p>":'<p class="map-font-en">'+e.features[0].properties.DistrictEn+"</p>";Math.abs(e.lngLat.lng-o[0])>180;)o[0]+=e.lngLat.lng>o[0]?360:-360;s.setLngLat(o).setHTML(a).addTo(t)}),t.on("mouseleave","places",function(){t.getCanvas().style.cursor="",s.remove()}),o(0,e,t)}),c=p,$.each(c,function(e,t){var s;s="si"==lang?"<tr><td class='normal-sinhala fontsize3-si'>"+t[1]+"</td><td class='normal-sinhala fontsize3-si'>"+t[2]+"</td></tr>":"<tr><td>"+t[0]+"</td><td>"+t[2]+"</td></tr>",$("#district-table").find("table").find("tbody").append(s)})}});else{$("#map-wrapper").html("<div class='error-state-ui-outer'><div class='error-state-ui'><img class='error-image' src='./assets/img/browser_not_supported.jpg' /><h2 class='error-title'>Browser Not Supported!</h2><p class='error-description'>Your browser does not support features required for this application.Please update your browser for better experience.</p></div></div>")}function o(e,t,i){if(s){$("#animated-mapoverlaycontainer").fadeIn();var n=t.data.features;i.flyTo(n[e].properties.camera),"si"==lang?$("#location-title").find("span").text(n[e].properties.DistrictSin):$("#location-title").find("span").text(n[e].properties.DistrictEn),$("#location-description").find("span").text(n[e].properties.Cases),i.once("moveend",function(){window.setTimeout(function(){e=e+1===a.playbackLimit?0:e+1,s?o(e,t,i):r()},3e3)})}else r()}function r(){$("#animated-mapoverlaycontainer").fadeOut(),t.flyTo({center:[80.6715,7.9],zoom:6.7,pitch:0,bearing:0})}$("#map-switcher").change(function(){s=!$(this).prop("checked"),o(0,e,t)}),$("#district-tableshowmore").click(function(e){e.preventDefault(),$(this).hasClass("showmore")?($("#district-table").addClass("show-content"),$(this).removeClass("showmore"),$(this).addClass("showless"),$(this).html("<span>"+$(this).data("lesstext")+'</span><i class= "now-ui-icons arrows-1_minimal-up" ></i >')):($("#district-table").removeClass("show-content"),$(this).addClass("showmore"),$(this).removeClass("showless"),$(this).html("<span>"+$(this).data("moretext")+'</span><i class= "now-ui-icons arrows-1_minimal-down" ></i >'),$([document.documentElement,document.body]).animate({scrollTop:$("#district-table").offset().top-100},500))})});
=======

$(document).ready(function () {
    var mapData, map , playMapAnimation = true;
    var mapSettings = {
        //districtData: "https://raw.githubusercontent.com/arimacdev/covid19-srilankan-data/master/Districts/districts_lk.csv",
        districtData: "/data/district/patients-data.csv",
        playbackLimit: 10,
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
                drawDistrictTable(data);
            }
        });


    }

    function buildFeaturesObj(csvData) {

        var features = [];

        $.each(csvData, function (index, value) {
            var featureOBJ = {
                "type": "Feature",
                "properties": {
                    'camera': {
                        center: [],
                        bearing: -8.9,
                        zoom: 11.68
                    }
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": []
                }
            };

            /* console.log(value); */

            if (value[0] != null && value[1] != null && value[2] != null && value[3] != null) {


                featureOBJ.properties.DistrictEn = value[0];
                featureOBJ.properties.DistrictSin = value[1];
                featureOBJ.properties.Cases = parseInt(value[2]);
                featureOBJ.properties.index = index - 1;
                featureOBJ.properties.Recovered = parseInt(value[3]);
                featureOBJ.properties.Deaths = parseInt(value[4]);

                featureOBJ.properties.camera.center.push(value[5]);
                featureOBJ.properties.camera.center.push(value[6]);

                featureOBJ.geometry.coordinates.push(value[5]);
                featureOBJ.geometry.coordinates.push(value[6]);
                featureOBJ.properties.type = value[7];

                features.push(featureOBJ)
            }
        });
        //features.shift();
        drawStaticMap(features);

    }

    function drawStaticMap(featuresObj) {


        mapData = {
            type: 'geojson',
            // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
            // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
            data: {
                'type': 'FeatureCollection',
            }
        };

        mapData.data.features = featuresObj;


        mapboxgl.accessToken = mapSettings.MapBocToken;

        var bounds = [
            [78.277325, 5.471346], // Southwest coordinates
            [83.106849, 10.004859] // Northeast coordinates
        ];


        map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/ashenud/ck9n0r7ws2ih31ipd3q8dtjln',
            center: [80.6715, 7.9],
            zoom: 6.7,
            maxBounds: bounds // Sets bounds as max
        });


        // Define a new navigation control.
       /*  var navigation = new mapboxgl.NavigationControl();
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
        map.touchZoomRotate.disable(); */


        map.on('load', function () {
            map.addSource('patients', mapData);

            map.addLayer({
                id: 'district-outer',
                type: 'circle',
                source: 'patients',
                paint: {
                    // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
                    // with three steps to implement three types of circles:
                    //   * Blue, 20px circles when point count is less than 100
                    //   * Yellow, 30px circles when point count is between 100 and 750
                    //   * Pink, 40px circles when point count is greater than or equal to 750
                    'circle-color': [
                        'match',
                        ['get', 'type'],
                        'dist',
                        'rgba(252, 197, 197,0.8)',
                        'qc',
                        'rgba(255, 236, 197,0.8)',
                        'uns',
                        'rgba(197, 255, 249,0.8)',
                        'rgba(179, 214, 227,0.8)'
                    ],
                    'circle-radius': 17
                }
            });

            map.addLayer({
                id: 'district',
                type: 'circle',
                source: 'patients',
                paint: {
                    // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
                    // with three steps to implement three types of circles:
                    //   * Blue, 20px circles when point count is less than 100
                    //   * Yellow, 30px circles when point count is between 100 and 750
                    //   * Pink, 40px circles when point count is greater than or equal to 750
                    'circle-color': [
                        'match',
                        ['get', 'type'],
                        'dist',
                        '#ff4040',
                        'qc',
                        '#ff6969',
                        'uns',
                        '#ff6969',
                        '#33b5e5'
                    ],
                    'circle-radius': 14
                }
            });


            map.addLayer({
                id: 'district-count',
                type: 'symbol',
                source: 'patients',
                layout: {
                    'text-field': ['get', 'Cases'],
                    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                    'text-size': 12
                }
            });

            var popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false
            });

            map.on('mouseenter', 'district', function (e) {
                // Change the cursor style as a UI indicator.
                map.getCanvas().style.cursor = 'pointer';

                var coordinates = e.features[0].geometry.coordinates.slice();
                var District;

                if (lang == "si") {
                    District = '<p class="map-font-si">' + e.features[0].properties.DistrictSin + '</p>';
                } else {
                    District = '<p class="map-font-en">' + e.features[0].properties.DistrictEn + '</p>';
                }

                
                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }

                // Populate the popup and set its coordinates
                // based on the feature found.

                popup
                    .setLngLat(coordinates)
                    .setHTML(District)
                    .addTo(map);
            });

            map.on('mouseleave', 'places', function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });

            playback(0, mapData, map);

        });


    }

    function playback(index, mapData, map) {

        if (playMapAnimation){

            $("#animated-mapoverlaycontainer").fadeIn();
            // Animate the map position based on camera properties
            var features = mapData.data.features;
    
            map.flyTo(features[index].properties.camera);
    
            if (lang == "si") {
                $("#location-title").find("span").text(features[index].properties.DistrictSin);
            } else {
                $("#location-title").find("span").text(features[index].properties.DistrictEn);
            }
            
            $("#location-description").find("span").text(features[index].properties.Cases);
            
    
            map.once('moveend', function () {
                // Duration the slide is on screen after interaction
                window.setTimeout(function () {
                    // Increment index
                    index = index + 1 === mapSettings.playbackLimit ? 0 : index + 1;

                    if (playMapAnimation) {
                        playback( index, mapData, map );
                    }else{
                        resetCamera();
                    }
                }, 3000); // After callback, show the location for 3 seconds.
            });
        }else{
            resetCamera();
        }
    }

    function resetCamera() {
        $("#animated-mapoverlaycontainer").fadeOut();
        map.flyTo({
            center: [80.6715, 7.9],
            zoom: 6.7,
            pitch: 0,
            bearing:0
        });
    }
    
    function drawDistrictTable(districtData){

        

        $.each(districtData, function (index, data) {

            var tableCol;

            //if (data[7] == "dist") {
                if (lang == "si") {
                    tableCol = "<tr><td class='normal-sinhala fontsize3-si'>" + data[1] + "</td><td class='normal-sinhala fontsize3-si'>" + data[2] + "</td></tr>";
                } else {
                    tableCol = "<tr><td>" + data[0] + "</td><td>" + data[2] + "</td></tr>";
                }
                $("#district-table").find("table").find("tbody").append(tableCol);
           // }
        });

       /*  <tr>
            <td>Ampara District</td>
            <td>3</td>
        </tr> */
            
    }

    $('#map-switcher').change(function () {
        
        playMapAnimation = !$(this).prop('checked');
        playback( 0, mapData, map );
        
    })
    
    $('#district-tableshowmore').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass("showmore")){

            $("#district-table").addClass("show-content");
            $(this).removeClass("showmore");
            $(this).addClass("showless");
            $(this).html('<span>' + $(this).data("lesstext") + '</span><i class= "now-ui-icons arrows-1_minimal-up" ></i >');

        }else{
            $("#district-table").removeClass("show-content");
            $(this).addClass("showmore");
            $(this).removeClass("showless");
            $(this).html('<span>'+ $(this).data("moretext") + '</span><i class= "now-ui-icons arrows-1_minimal-down" ></i >');

            $([document.documentElement, document.body]).animate({
                scrollTop: $("#district-table").offset().top - 100
            }, 500);
        }
    });
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
>>>>>>> develop
