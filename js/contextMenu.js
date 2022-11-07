function contextMenu1(idMaker) {
    console.log(idMaker)
    let fd = new FormData();
    fd.append("data", JSON.stringify({"id": idMaker, "key": "hostility", "value": "1"}));

    const http = new XMLHttpRequest();
    http.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
    };
    http.open("POST", "http://192.168.0.114:8081/sse_event/set_track");
    http.send(fd);
}

function contextMenu2(idMaker) {
    let fd = new FormData();
    fd.append("data", JSON.stringify({"id": idMaker, "key": "hostility", "value": "2"}));

    const http = new XMLHttpRequest();
    http.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
    };
    http.open("POST", "http://192.168.0.114:8081/sse_event/set_track");
    http.send(fd);
}

function contextMenu3(idMaker) {
    let fd = new FormData();
    fd.append("data", JSON.stringify({"id": idMaker, "key": "hostility", "value": "3"}));

    const http = new XMLHttpRequest();
    http.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
    };
    http.open("POST", "http://192.168.0.114:8081/sse_event/set_track");
    http.send(fd);
}

