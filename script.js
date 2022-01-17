a = new Date();
let timeRightNow;
timeRightNow = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
// document.write(timeRightNow)
DateForToday = a.toLocaleDateString();
document.getElementById("time").innerHTML = timeRightNow + " & Date :" + DateForToday;