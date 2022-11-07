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

    return L.marker(coor, {
        rotationAngle: 0,
        datetimePlot: toMilisecond(),
        icon: checkhostilityAISandGetMarker(infos['hostility']),
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
    .bindPopup('ID: ' + infos['id'] + " AIS")
}

export const newPointMarkerAMS_TEDUNG = (lat, long, infos) => {

    return L.marker(new L.LatLng(lat, long), {
        rotationAngle: 0,
        datetimePlot: toMilisecond(),
        icon: checkhostilityTEDUNG_AMSandGetMarker(infos['hostility']),
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
    .bindPopup('ID: ' + infos['id'] + " TEDUNG")
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
    // const LeafIcon = L.Icon.extend({
    //     options: {
    //         shadowUrl: 'leaf-shadow.png',
    //         iconSize:     [38, 95],
    //         shadowSize:   [0, 0],
    //         iconAnchor:   [22, 94],
    //         shadowAnchor: [4, 62],
    //         popupAnchor:  [-3, -76]
    //     }
    // });

    let iconColor;
    if (hostilityValue == '1'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/AIS/ais_blue.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '2'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/AIS/ais_green.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '3'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/AIS/ais_red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '4'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/AIS/ais_yellow.png',
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
            iconUrl: './dist/leaflet/images/marker/AIS/ais_blue.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }


    //      iconColor = L.icon({
    //      iconUrl: './dist/leaflet/images/marker-icon-green.png',
    //      shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png'
    //     })

    return iconColor;
}


export const checkhostilityTEDUNG_AMSandGetMarker = (hostilityValue) => {

    let iconColor;
    if (hostilityValue == '1'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/tedung_ais/tedung_blue.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '2'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/tedung_ais/tedung_green.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '3'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/tedung_ais/tedung_red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostilityValue == '4'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker/tedung_ais/tedung_yellow.png',
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




