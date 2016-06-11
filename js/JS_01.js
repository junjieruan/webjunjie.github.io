/**
 * Created by a on 2016/6/10.
 */

window.onload=function() {
    document.getElementById("register").addEventListener("click", function () {
        alert("登陆成功");
    })
};

function startTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("timetxt").innerHTML = h+":"+m+":"+s;
    t = setTimeout(function () {
        startTime();
    },500)
}

function checkTime(i){
    if(i<10){
        i = "0"+i;
    }
    return i;
}
