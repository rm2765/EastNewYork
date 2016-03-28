
 

  cartodb.createLayer(map, 'https://rm2765.cartodb.com/api/v2/viz/4c06f3d6-ecaa-11e5-9b95-0ef24382571b/viz.json', { https: true })
    .addTo(map)
    .on('done', function(layer) {

    }).on('error', function() {
      //log the error
    });



cartodb.createVis(
  'map', 
  'https://rm2765.cartodb.com/api/v2/viz/4c06f3d6-ecaa-11e5-9b95-0ef24382571b/viz.json');
