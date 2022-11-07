function isIDLocateFreeToPlot1(id, lookup){
    for (var i = 0, l = lookup.length; i < l; i++) {
        if (lookup[i] === id) {
            return false;
        }
    }
    return true
}


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

// new LeafIcon({iconUrl: './dist/leaflet/images/marker-icon.png', shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',});
function checkhostilityAIS1(hostility){
    let iconColor;
    if (hostility == '1'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostility == '2'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostility == '3'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostility == '4'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostility == '5'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostility == '6'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }
    else if(hostility == '7'){
        iconColor = new LeafIcon({
            iconUrl: './dist/leaflet/images/marker-icon-red.png',
            shadowUrl: './dist/leaflet/images/marker-shadow.png'
        })
    }else if(hostility == '8'){
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

function plotMarker(){

}


