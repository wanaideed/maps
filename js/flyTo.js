function splitKoma(LatLong){
    latlong = LatLong.trim()
    
    if (latlong.includes(",")){
        coor = latlong.split(",");

        return coor;        //error return 2 size
    }

    return []
}



function toMilisecond() {
    ms_per_minute_5 = 300000;   //minute 5
    return  Date.now() + ms_per_minute_5
}



function hellos(){
    alert("O1K")
}

