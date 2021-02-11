mapboxgl.accessToken = 'pk.eyJ1Ijoic2l0YW5zaHUxMyIsImEiOiJja2t4djZvNnAybnAyMnVzMTU3c2Z6d3F5In0.irDdb9UviWNpw-p5veIVwg';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
});
const nav = new mapboxgl.NavigationControl();
map.addControl(nav);

var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    });
    
map.addControl(directions);
