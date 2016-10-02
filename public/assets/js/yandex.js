$(document).ready(function() {
    if (document.getElementById('map')) {
        ymaps.ready(function() {
            var myMap = new ymaps.Map('map', {
                center: [55.159086, 61.376002],
                zoom: 16,
                controls: []
            })
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
                preset: 'islands#redDotIcon'
            });
            myMap.behaviors.disable(['drag','scrollZoom']);
            myMap.geoObjects.add(myPlacemark);
        });
    }
});
