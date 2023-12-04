var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Ortofotocolor2023provisional_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_provisional",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofoto color 2023 (provisional)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofotocolor2023provisional_1, 0]);
var format_Desapareguts2023_2 = new ol.format.GeoJSON();
var features_Desapareguts2023_2 = format_Desapareguts2023_2.readFeatures(json_Desapareguts2023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desapareguts2023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desapareguts2023_2.addFeatures(features_Desapareguts2023_2);
var lyr_Desapareguts2023_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Desapareguts2023_2, 
                style: style_Desapareguts2023_2,
                interactive: true,
                title: '<img src="styles/legend/Desapareguts2023_2.png" /> Desapareguts 2023'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                title: "Mapas de fondo"});

lyr_GoogleSatellite_0.setVisible(true);lyr_Ortofotocolor2023provisional_1.setVisible(true);lyr_Desapareguts2023_2.setVisible(true);
var layersList = [group_Mapasdefondo,lyr_Ortofotocolor2023provisional_1,lyr_Desapareguts2023_2];
lyr_Desapareguts2023_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Desapareguts2023_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_Desapareguts2023_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Desapareguts2023_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});