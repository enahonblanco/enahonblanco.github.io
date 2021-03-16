function Time() {
var d = new Date;
var hr = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();

hr = checkTime(hr);
min = checkTime(min);
sec = checkTime(sec);

var time = hr + ":" + min + ":" + sec
document.getElementById("displaytime").innerHTML = time;
var t = setTimeout(Time, 200);
}

function checkTime(i) {                         // wenn i = beliebige. Zahl > 10, 0+ i
    if (i < 10) {
        i = "0" + i
    };  
    return i;
}
