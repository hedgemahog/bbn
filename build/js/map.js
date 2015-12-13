var map;

function initialize() {
  var mapOptions = {
    mapTypeControlOptions: {
    mapTypeIds: [ '']
  },
  center: new google.maps.LatLng(55.7713,37.6202108),
  zoom: 16,
  mapTypeId: 'Styled'

  };
  var styles = [
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      { hue: '#F0F0EF' },
      { saturation: -88 },
      { lightness: 45 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      { hue: '#ffffff' },
      { saturation: -100 },
      { lightness: 100 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      { hue: '#E5E5E5' },
      { saturation: -100 },
      { lightness: 54 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'water',
    elementType: 'all',
    stylers: [
      { hue: '#F0F0EF' },
      { saturation: -93 },
      { lightness: 75 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'poi.business',
    elementType: 'all',
    stylers: [
      { hue: '#F0F0EF' },
      { saturation: -78 },
      { lightness: 59 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'poi.attraction',
    elementType: 'all',
    stylers: [
      { hue: '#F0F0EF' },
      { saturation: -92 },
      { lightness: 72 },
      { visibility: 'on' }
    ]
  }
];
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
  position: new google.maps.LatLng(55.771404,37.622416),
  map: map,
  title:"БСК" 
});
  var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
  map.mapTypes.set('Styled', styledMapType);
}

google.maps.event.addDomListener(window, 'load', initialize);


