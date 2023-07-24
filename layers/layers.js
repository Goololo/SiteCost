var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Polygons_2 = new ol.format.GeoJSON();
var features_Polygons_2 = format_Polygons_2.readFeatures(json_Polygons_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polygons_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polygons_2.addFeatures(features_Polygons_2);
var lyr_Polygons_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Polygons_2, 
                style: style_Polygons_2,
                interactive: true,
    title: 'Polygons<br />\
    <img src="styles/legend/Polygons_2_0.png" /> eQa<br />\
    <img src="styles/legend/Polygons_2_1.png" /> eQat<br />\
    <img src="styles/legend/Polygons_2_2.png" /> eQdf<br />\
    <img src="styles/legend/Polygons_2_3.png" /> eQdp<br />\
    <img src="styles/legend/Polygons_2_4.png" /> eQk<br />\
    <img src="styles/legend/Polygons_2_5.png" /> Etw<br />\
    <img src="styles/legend/Polygons_2_6.png" /> Jk<br />\
    <img src="styles/legend/Polygons_2_7.png" /> Jm<br />\
    <img src="styles/legend/Polygons_2_8.png" /> Jma<br />\
    <img src="styles/legend/Polygons_2_9.png" /> Jmt<br />\
    <img src="styles/legend/Polygons_2_10.png" /> Jn<br />\
    <img src="styles/legend/Polygons_2_11.png" /> Kk<br />\
    <img src="styles/legend/Polygons_2_12.png" /> Kkh<br />\
    <img src="styles/legend/Polygons_2_13.png" /> Kkw<br />\
    <img src="styles/legend/Polygons_2_14.png" /> Kt<br />\
    <img src="styles/legend/Polygons_2_15.png" /> lJa<br />\
    <img src="styles/legend/Polygons_2_16.png" /> lJh<br />\
    <img src="styles/legend/Polygons_2_17.png" /> lQa<br />\
    <img src="styles/legend/Polygons_2_18.png" /> lQaf<br />\
    <img src="styles/legend/Polygons_2_19.png" /> lQd<br />\
    <img src="styles/legend/Polygons_2_20.png" /> Mca<br />\
    <img src="styles/legend/Polygons_2_21.png" /> Mcc<br />\
    <img src="styles/legend/Polygons_2_22.png" /> Mci<br />\
    <img src="styles/legend/Polygons_2_23.png" /> Mcm<br />\
    <img src="styles/legend/Polygons_2_24.png" /> Mco<br />\
    <img src="styles/legend/Polygons_2_25.png" /> Mcp<br />\
    <img src="styles/legend/Polygons_2_26.png" /> Mct<br />\
    <img src="styles/legend/Polygons_2_27.png" /> Mcu<br />\
    <img src="styles/legend/Polygons_2_28.png" /> Mhc<br />\
    <img src="styles/legend/Polygons_2_29.png" /> Mhm<br />\
    <img src="styles/legend/Polygons_2_30.png" /> mJr<br />\
    <img src="styles/legend/Polygons_2_31.png" /> Mkm<br />\
    <img src="styles/legend/Polygons_2_32.png" /> Mkt<br />\
    <img src="styles/legend/Polygons_2_33.png" /> Mkw<br />\
    <img src="styles/legend/Polygons_2_34.png" /> mQm<br />\
    <img src="styles/legend/Polygons_2_35.png" /> Mth<br />\
    <img src="styles/legend/Polygons_2_36.png" /> Mti<br />\
    <img src="styles/legend/Polygons_2_37.png" /> Mtk<br />\
    <img src="styles/legend/Polygons_2_38.png" /> Mtl<br />\
    <img src="styles/legend/Polygons_2_39.png" /> Mtn<br />\
    <img src="styles/legend/Polygons_2_40.png" /> Mtn+Mtp<br />\
    <img src="styles/legend/Polygons_2_41.png" /> Mto<br />\
    <img src="styles/legend/Polygons_2_42.png" /> Mtp<br />\
    <img src="styles/legend/Polygons_2_43.png" /> Mtp~<br />\
    <img src="styles/legend/Polygons_2_44.png" /> Mtr<br />\
    <img src="styles/legend/Polygons_2_45.png" /> Mtt<br />\
    <img src="styles/legend/Polygons_2_46.png" /> Mtu<br />\
    <img src="styles/legend/Polygons_2_47.png" /> Mtw<br />\
    <img src="styles/legend/Polygons_2_48.png" /> Mvm<br />\
    <img src="styles/legend/Polygons_2_49.png" /> Mvt<br />\
    <img src="styles/legend/Polygons_2_50.png" /> Mwa<br />\
    <img src="styles/legend/Polygons_2_51.png" /> Mwb<br />\
    <img src="styles/legend/Polygons_2_52.png" /> Mwc<br />\
    <img src="styles/legend/Polygons_2_53.png" /> Mwc~<br />\
    <img src="styles/legend/Polygons_2_54.png" /> Mwe<br />\
    <img src="styles/legend/Polygons_2_55.png" /> Mwe~<br />\
    <img src="styles/legend/Polygons_2_56.png" /> Mwh<br />\
    <img src="styles/legend/Polygons_2_57.png" /> Mwi<br />\
    <img src="styles/legend/Polygons_2_58.png" /> Mwk<br />\
    <img src="styles/legend/Polygons_2_59.png" /> Mwl<br />\
    <img src="styles/legend/Polygons_2_60.png" /> Mwm<br />\
    <img src="styles/legend/Polygons_2_61.png" /> Mwo<br />\
    <img src="styles/legend/Polygons_2_62.png" /> Mwp<br />\
    <img src="styles/legend/Polygons_2_63.png" /> Mwr<br />\
    <img src="styles/legend/Polygons_2_64.png" /> Mwt<br />\
    <img src="styles/legend/Polygons_2_65.png" /> Mwt+Mwr<br />\
    <img src="styles/legend/Polygons_2_66.png" /> Mwu<br />\
    <img src="styles/legend/Polygons_2_67.png" /> Mwv<br />\
    <img src="styles/legend/Polygons_2_68.png" /> Mww<br />\
    <img src="styles/legend/Polygons_2_69.png" /> Mwy<br />\
    <img src="styles/legend/Polygons_2_70.png" /> Om<br />\
    <img src="styles/legend/Polygons_2_71.png" /> Omm<br />\
    <img src="styles/legend/Polygons_2_72.png" /> Omp<br />\
    <img src="styles/legend/Polygons_2_73.png" /> Ota<br />\
    <img src="styles/legend/Polygons_2_74.png" /> Otg<br />\
    <img src="styles/legend/Polygons_2_75.png" /> Oth<br />\
    <img src="styles/legend/Polygons_2_76.png" /> Oti<br />\
    <img src="styles/legend/Polygons_2_77.png" /> Otm<br />\
    <img src="styles/legend/Polygons_2_78.png" /> Ott<br />\
    <img src="styles/legend/Polygons_2_79.png" /> Pad<br />\
    <img src="styles/legend/Polygons_2_80.png" /> Pho<br />\
    <img src="styles/legend/Polygons_2_81.png" /> Phr<br />\
    <img src="styles/legend/Polygons_2_82.png" /> Pk<br />\
    <img src="styles/legend/Polygons_2_83.png" /> Pup<br />\
    <img src="styles/legend/Polygons_2_84.png" /> Puw<br />\
    <img src="styles/legend/Polygons_2_85.png" /> Pvw<br />\
    <img src="styles/legend/Polygons_2_86.png" /> Q1ae<br />\
    <img src="styles/legend/Polygons_2_87.png" /> Q1af<br />\
    <img src="styles/legend/Polygons_2_88.png" /> Q1al<br />\
    <img src="styles/legend/Polygons_2_89.png" /> Q1as<br />\
    <img src="styles/legend/Polygons_2_90.png" /> Q1at<br />\
    <img src="styles/legend/Polygons_2_91.png" /> Q1b<br />\
    <img src="styles/legend/Polygons_2_92.png" /> Q1d<br />\
    <img src="styles/legend/Polygons_2_93.png" /> Q1df<br />\
    <img src="styles/legend/Polygons_2_94.png" /> Q1dm<br />\
    <img src="styles/legend/Polygons_2_95.png" /> Q1dp<br />\
    <img src="styles/legend/Polygons_2_96.png" /> Q1l<br />\
    <img src="styles/legend/Polygons_2_97.png" /> Q1nc<br />\
    <img src="styles/legend/Polygons_2_98.png" /> Q1nm<br />\
    <img src="styles/legend/Polygons_2_99.png" /> Q1nr<br />\
    <img src="styles/legend/Polygons_2_100.png" /> Q2ah<br />\
    <img src="styles/legend/Polygons_2_101.png" /> Qval<br />\
    <img src="styles/legend/Polygons_2_102.png" /> Qvas<br />\
    <img src="styles/legend/Polygons_2_103.png" /> Qvat<br />\
    <img src="styles/legend/Polygons_2_104.png" /> Qvhb<br />\
    <img src="styles/legend/Polygons_2_105.png" /> Qvhl<br />\
    <img src="styles/legend/Polygons_2_106.png" /> Qvmo<br />\
    <img src="styles/legend/Polygons_2_107.png" /> Qvmt<br />\
    <img src="styles/legend/Polygons_2_108.png" /> Qvn<br />\
    <img src="styles/legend/Polygons_2_109.png" /> Qvsl<br />\
    <img src="styles/legend/Polygons_2_110.png" /> Qvss<br />\
    <img src="styles/legend/Polygons_2_111.png" /> Qvst<br />\
    <img src="styles/legend/Polygons_2_112.png" /> TJw<br />\
    <img src="styles/legend/Polygons_2_113.png" /> TJwt<br />\
    <img src="styles/legend/Polygons_2_114.png" /> Untitled Polygon<br />\
    <img src="styles/legend/Polygons_2_115.png" /> water<br />\
    <img src="styles/legend/Polygons_2_116.png" /> <br />'
        });
var format_site_3 = new ol.format.GeoJSON();
var features_site_3 = format_site_3.readFeatures(json_site_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_site_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_site_3.addFeatures(features_site_3);
var lyr_site_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_site_3, 
                style: style_site_3,
                interactive: true,
    title: 'site<br />\
    <img src="styles/legend/site_3_0.png" /> 100k-1M<br />\
    <img src="styles/legend/site_3_1.png" /> 1Mmore<br />\
    <img src="styles/legend/site_3_2.png" /> less100k<br />\
    <img src="styles/legend/site_3_3.png" /> no value<br />\
    <img src="styles/legend/site_3_4.png" /> <br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Polygons_2.setVisible(true);lyr_site_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_Polygons_2,lyr_site_3];
lyr_Polygons_2.set('fieldAliases', {'OID': 'OID', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_site_3.set('fieldAliases', {'Unique ID': 'Unique ID', 'Area': 'Area', 'Suburb': 'Suburb', 'Road Name': 'Road Name', 'Road ID': 'Road ID', 'Fault RP': 'Fault RP', 'Failure ty': 'Failure ty', 'Road statu': 'Road statu', 'Descriptio': 'Descriptio', 'Start': 'Start', 'End': 'End', 'Notes': 'Notes', 'Stage': 'Stage', 'Estm Recov': 'Estm Recov', '$ Estm Cos': '$ Estm Cos', 'Estm Const': 'Estm Const', 'Start Date': 'Start Date', '% complete': '% complete', 'Completion': 'Completion', 'Recovery N': 'Recovery N', 'Event': 'Event', 'Dispatch I': 'Dispatch I', 'Structure': 'Structure', 'Asset ID': 'Asset ID', 'Project Ma': 'Project Ma', 'Consultant': 'Consultant', 'Contractor': 'Contractor', 'WBS': 'WBS', 'GPS Coordi': 'GPS Coordi', 'GPS Coor_1': 'GPS Coor_1', 'value': 'value', });
lyr_Polygons_2.set('fieldImages', {'OID': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'Range', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_site_3.set('fieldImages', {'Unique ID': 'TextEdit', 'Area': 'TextEdit', 'Suburb': 'TextEdit', 'Road Name': 'TextEdit', 'Road ID': 'TextEdit', 'Fault RP': 'TextEdit', 'Failure ty': 'TextEdit', 'Road statu': 'TextEdit', 'Descriptio': 'TextEdit', 'Start': 'TextEdit', 'End': 'TextEdit', 'Notes': 'TextEdit', 'Stage': 'TextEdit', 'Estm Recov': 'TextEdit', '$ Estm Cos': 'TextEdit', 'Estm Const': 'TextEdit', 'Start Date': 'TextEdit', '% complete': 'TextEdit', 'Completion': 'TextEdit', 'Recovery N': 'TextEdit', 'Event': 'TextEdit', 'Dispatch I': 'TextEdit', 'Structure': 'TextEdit', 'Asset ID': 'TextEdit', 'Project Ma': 'TextEdit', 'Consultant': 'TextEdit', 'Contractor': 'TextEdit', 'WBS': 'TextEdit', 'GPS Coordi': 'TextEdit', 'GPS Coor_1': 'TextEdit', 'value': 'TextEdit', });
lyr_Polygons_2.set('fieldLabels', {'OID': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_site_3.set('fieldLabels', {'Unique ID': 'header label', 'Area': 'inline label', 'Suburb': 'inline label', 'Road Name': 'inline label', 'Road ID': 'inline label', 'Fault RP': 'no label', 'Failure ty': 'no label', 'Road statu': 'no label', 'Descriptio': 'no label', 'Start': 'no label', 'End': 'no label', 'Notes': 'no label', 'Stage': 'no label', 'Estm Recov': 'no label', '$ Estm Cos': 'no label', 'Estm Const': 'no label', 'Start Date': 'no label', '% complete': 'no label', 'Completion': 'no label', 'Recovery N': 'no label', 'Event': 'no label', 'Dispatch I': 'no label', 'Structure': 'no label', 'Asset ID': 'no label', 'Project Ma': 'no label', 'Consultant': 'no label', 'Contractor': 'no label', 'WBS': 'no label', 'GPS Coordi': 'no label', 'GPS Coor_1': 'no label', 'value': 'no label', });
lyr_site_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});