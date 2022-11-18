import { set_hostility } from './hostility.js';

const LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize:     [38, 95],
        shadowSize:   [0, 0],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});




export const isIDLocateFreeToPlot = (id, lookup) => {
    for (var i = 0, l = lookup.length; i < l; i++) {
        if (lookup[i] === id) {
            return false;
        }
    }
    return true
}

const toMilisecond = () => {
    let ms_per_minute_5 = 300000;   //minute 5
    return  Date.now() + ms_per_minute_5
}

export const newPointMarkerAIS = (coor, infos) => {
    let boolFlag = false
    // return L.circle([infos['latitude'], infos['longitu']], {radius: 200})

    return L.marker(coor, {
        id: infos['id'],
        rotationAngle: infos['heading'],
        datetimePlot: toMilisecond(),
        icon: checkhostilityAISandGetMarker(infos['hostility']),
        contextmenu: true,
        contextmenuWidth: 200,
        contextmenuItems: [{
            text: 'Friendly', callback:function() {
                set_hostility(infos['id'], "2", infos['sensor'])
            },
        },{
            text: 'Assumed Friendly', callback:function() {
                set_hostility(infos['id'], "2", infos['sensor'])
            },
        },{
            text: 'Neutral', callback:function() {
                set_hostility(infos['id'], "3", infos['sensor'])
            },
        },{
            text: 'Hostile', callback:function() {
                set_hostility(infos['id'], "4", infos['sensor'])
            },
        },{
            text: 'Assumed Enemy', callback:function() {
                set_hostility(infos['id'], "4", infos['sensor'])
            },
        },{
            text: 'Pretender', callback:function() {
                set_hostility(infos['id'], "5", infos['sensor'])
            },
        },{
            text: 'Unknown', callback:function() {
                set_hostility(infos['id'], "6", infos['sensor']);
            },
        },{
            text: 'Null',  callback:function() {
                set_hostility(infos['id'], "1", infos['sensor']);
            },
        },{
            separator: true,
            
        },{
            text: 'EOTS Focus',  callback:function() {
                console.log("Track")
            },
        },{
           
            text: 'Show/Hide Trail',  callback:function(e) {
                boolFlag = !boolFlag
                showTails(infos['id'], boolFlag)
            },
        }]
    })
    .bindPopup('ID: ' + infos['id'] + " AIS")
}

// function onClickOo(e){
//     // e.isVisible()
//     // console.log("##",e)
// }

export const addlabelMarkerAIS = ( infos) => {
     return L.tooltip({
        permanent: true,
        direction: 'top',
        className: "label-ais",
        // offset: L.point({x: 0, y: 0})
        offset: L.point({x: 1, y: -3})
    })
    .setContent(infos['id'])
    .setLatLng([infos['latitude'], infos['longitude']])
}

export const newPointMarkerAMS_TEDUNG = (lat, long, infos) => {
    let boolFlag = false
    
    return L.marker(new L.LatLng(lat, long), {
        rotationAngle: infos['heading'],
        datetimePlot: toMilisecond(),
        icon: checkhostilityTEDUNG_AMSandGetMarker(infos['hostility']),
        contextmenu: true,
        contextmenuWidth: 200,
        contextmenuItems: [{
            text: 'Friendly', callback:function() {
                set_hostility(infos['id'], "2", infos['sensor'])
            }
        },{
            text: 'Assumed Friendly', callback:function() {
                set_hostility(infos['id'], "2", infos['sensor'])
            }
        },{
            text: 'Neutral', callback:function() {
                set_hostility(infos['id'], "3", infos['sensor'])
            }
        },{
            text: 'Hostile', callback:function() {
                set_hostility(infos['id'], "4", infos['sensor'])
            }
        },{
            text: 'Assumed Enemy', callback:function() {
                set_hostility(infos['id'], "4", infos['sensor'])
            }
        },{
            text: 'Pretender', callback:function() {
                set_hostility(infos['id'], "5", infos['sensor'])
            }
        },{
            text: 'Unknown', callback:function() {
                set_hostility(infos['id'], "6", infos['sensor']);
            }
        },{
            text: 'Null',  callback:function() {
                set_hostility(infos['id'], "1", infos['sensor']);
            }
        },{
            separator: true,
        },{
            text: 'EOTS Focus',  callback:function() {
                console.log("Track")
            }
        },{
            text: 'Show/Hide Trail',  callback:function(e) {
                boolFlag = !boolFlag
                showTailsAMS(infos['id'], boolFlag)
            }
        }]
    })
    .bindPopup('ID: ' + infos['id'] + " TEDUNG")
}

export const addlabelMarkerTedung = ( infos) => {
    return L.tooltip({
       permanent: true,
       direction: 'top',
       className: "label-ais",
       offset: L.point({x: 1, y: -3})
   })
   .setContent(infos['id'])
   .setLatLng([infos['latitude'], infos['longitude']])
}

export const newPointMarkerKurita = (coor, infos) => {

    return L.marker(coor, {
        rotationAngle: 0,
        datetimePlot: toMilisecond(),
        icon: checkhostilityKuritaSandGetMarker(infos['hostility']),
        contextmenu: true,
        contextmenuWidth: 200,
        contextmenuItems: [{
            text: 'Hostility 1', callback:function() {
                set_hostility(infos['id'], "1", infos['sensor'])
            }
        },{
            text: 'Hostility 2', callback:function() {
                set_hostility(infos['id'], "2", infos['sensor']);
            }
        },{
            text: 'Hostility 3',  callback:function() {
                set_hostility(infos['id'], "3", infos['sensor']);
            }
        }]
    })
    .bindPopup('ID: ' + infos['id'] + " Kurita")
}

export const isMinuteAgo = (dateTimePlot) => {
    if (Date.now() > new Date(dateTimePlot)){
        return true
    }

    return false
}

export const checkhostilityAISandGetMarker = (hostilityValue) => {
    //1 - default
    const LeafIcon = L.Icon.extend({
        options: {
            shadowUrl: 'leaf-shadow.png',
            iconSize:     [18,  18],
            shadowSize:   [0, 0],
            iconAnchor:   [9, 16],
            // iconAnchor:   [22, 94],
            // shadowAnchor: [4, 62],
            // popupAnchor:  [-3, -76]
        }
    });

    let iconColor ;
    if (hostilityValue == '1'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/AIS/ais_black.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '2'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/AIS/ais_cyan_blue.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '3'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/AIS/ais_green.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '4'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/AIS/ais_red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '5'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/AIS/ais_pink_grey.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '6'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/AIS/ais_orange.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
   else{
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/AIS/ais_black.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }

    return iconColor;
}


export const checkhostilityTEDUNG_AMSandGetMarker = (hostilityValue) => {
    let LeafIcon = L.Icon.extend({
        options: {
            shadowUrl: 'leaf-shadow.png',
            iconSize:     [25, 30],
            shadowSize:   [0, 0],
            iconAnchor:   [12, 16],
        // shadowAnchor: [4, 62],
        // popupAnchor:  [-3, -76]
        }
    });
    let iconColor;
    if (hostilityValue == '1'){  
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/tedung_ais/tedung_black.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '2'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/tedung_ais/tedung_cyan_blue.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '3'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/tedung_ais/tedung_green.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '4'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/tedung_ais/tedung_red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '5'){
        iconColor = new LeafIcon({
            iconUrl:'./dist/leaflet/images/marker/tedung_ais/tedung_pink_grey.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '6'){
        iconColor = new LeafIcon({
            iconUrl:'./dist/leaflet/images/marker/tedung_ais/tedung_orange.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
   else{
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/tedung_ais/tedung_black.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }

    return iconColor;
}

export const checkhostilityKuritaSandGetMarker = (hostilityValue) => {

    let iconColor;
    if (hostilityValue == '1'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/kurita/kurita_blue.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '2'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/kurita/kurita_green.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '3'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/kurita/kurita_red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '4'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/kurita/kurita_yellow.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '5'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '6'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '7'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }else if(hostilityValue == '8'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }else{
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/kurita/kurita_blue.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }


    //      iconColor = L.icon({
    //      iconUrl: './dist/leaflet/images/marker-icon-green.png',
    //      shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png'
    //     })

    return iconColor;
}

export const checkhostilityBFTandGetMarker = (hostilityValue) => {

    let iconColor;
    if (hostilityValue == '1'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '2'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '3'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '4'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '5'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '6'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '7'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }else if(hostilityValue == '8'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }else{
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }


    //      iconColor = L.icon({
    //      iconUrl: './dist/leaflet/images/marker-icon-green.png',
    //      shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png'
    //     })

    return iconColor;
}

export const checkhostilityBOATTRACKERandGetMarker = (hostilityValue) => {

    let iconColor;
    if (hostilityValue == '1'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '2'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '3'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '4'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '5'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '6'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '7'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }else if(hostilityValue == '8'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }else{
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }


    //      iconColor = L.icon({
    //      iconUrl: './dist/leaflet/images/marker-icon-green.png',
    //      shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png'
    //     })

    return iconColor;
}

export const checkhostilityIMSIandGetMarker = (hostilityValue) => {

    let iconColor;
    if (hostilityValue == '1'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '2'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '3'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '4'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '5'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '6'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '7'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }else if(hostilityValue == '8'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }else{
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }


    //      iconColor = L.icon({
    //      iconUrl: './dist/leaflet/images/marker-icon-green.png',
    //      shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png'
    //     })

    return iconColor;
}

export const checkMarkerHostility = (raw) => {
    if (raw['sensor'] == 'AIS'){
        return checkhostilityAISandGetMarker(raw['value'])
    }else if(raw['sensor'] == 'AMS'){
        return checkhostilityTEDUNG_AMSandGetMarker(raw['value'])
    }
}


export const plotBase = (hostilityValue) => {
    let LeafIcon = L.Icon.extend({
        options: {
            shadowUrl: 'leaf-shadow.png',
            iconSize:     [25, 25],
            shadowSize:   [0, 0],
        }
    });

     return new LeafIcon({
            iconUrl: './dist/leaflet/images/base.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    
}




