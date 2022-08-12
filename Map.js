require([
            "esri/Map",
            "esri/views/MapView"
        ], function (Map, MapView) {

            changeMap("streets");

            $('select').on('change', function () {
                // alert(this.value);
                changeMap(this.value);
            });

            function changeMap(selectedBaseMap) {
                var map = new Map({
                    basemap: selectedBaseMap
                });

                var view = new MapView({
                    container: "viewDiv",
                    map: map,
                    center: [-118.71511, 34.09042],
                    zoom: 11
                });
            }

        });