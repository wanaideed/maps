export const drawSetting = (editableLayers) => {
    return {
        position: 'topright',
        draw: {
                circle: {
                    shapeOptions: {
                        stroke: true,
                        color: '#3388ff',
                        weight: 4,
                        opacity: 0.5,
                        dashArray: '20, 20', dashOffset: '20'
                    }
                    
                }, // Turns off this drawing tool,
                circlemarker: false,
                polygon: false,
                polyline: false,
                rectangle: false,
                marker: false,
            },
            edit: {
                featureGroup: editableLayers, //REQUIRED!!
                remove: true
            },
        };
    // return {
    //     position: 'topright',
    //     draw: {
    //             circle: {
    //                 shapeOptions: {
    //                     stroke: true,
    //                     color: '#3388ff',
    //                     weight: 4,
    //                     opacity: 0.5,
    //                     dashArray: '20, 20', dashOffset: '20'
    //                 }
                    
    //             }, // Turns off this drawing tool,
    //             circlemarker: false,
    //             polygon: false,
    //             polyline: false,
    //             rectangle: false,
    //             marker: false,
    //         },
    //         edit: {
    //             featureGroup: editableLayers, //REQUIRED!!
    //             remove: true
    //         },
    //     };
}