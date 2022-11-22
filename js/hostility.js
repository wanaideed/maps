

export const set_hostility = (idMaker, value, sensorType) => {
    console.log(idMaker, "idMaker")
    console.log(value, "xxx")
    let fd = new FormData();
    fd.append("data", JSON.stringify({"id": idMaker, "key": "hostility", "value": value, "sensor": sensorType}));

    const http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);
        }
    };
    // http.open("POST", "http://192.168.5.192:8081/sse_event/set_track");
    http.open("POST", "http://192.168.0.107:8081/sse_event/set_track");
    http.send(fd);
}
