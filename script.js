let a;
let timeRightNow;
let DateForToday;

setInterval(() => {
    a = new Date();
    timeRightNow = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    // document.write(timeRightNow)
    DateForToday = a.toLocaleDateString();
    document.getElementById("time").innerHTML = timeRightNow + " & Date :" + DateForToday;
}, 1000);