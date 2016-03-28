
cartodb.createLayer(map, 'https://rm2765.cartodb.com/api/v2/viz/8eaea626-f055-11e5-ac8f-0e5db1731f59/viz.json', { https: true })
.addTo(map)
.on('done', function(layer) {

}).on('error', function() {
  //log the error
});


cartodb.createVis(
  'map', 
  'https://rm2765.cartodb.com/api/v2/viz/8eaea626-f055-11e5-ac8f-0e5db1731f59/viz.json');


div.cartodb-layer-selector-box div.cartodb-dropdown ul li a.layer {
    display: -moz-inline-stack;
    display: inline-block;
    vertical-align: middle;
    width: 104px;
    padding: 13px 13px 15px;
    zoom: 1;
    color: #666;
    font: 400 10px "Helvetica Neue",Helvetica,Arial;
    text-decoration: none;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-user-select: none;