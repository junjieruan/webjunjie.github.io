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


function loginin(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username =="admin" && password =="admin"){
        history.go(-1);
    }else{
        alert("输入错误");
        history.go(0);
    }

}


$(document).ready(function(){
    $(".MyTab #tabfirst li").each(function(index){
        var liNode=$(this);
            $(this).mouseover(function(){
                timeoutid=setTimeout(function(){
                $("div.content").removeClass("content");
                $("li.tabin").removeClass("tabin");
                liNode.addClass("tabin");
                $(".MyTab>div").eq(index).addClass("content")
        },300)
        }).mouseout(function(){
                clearTimeout(timeoutid);
        })
    })
})

$(document).ready(function(){
    var i=0;
    var clone=$(".banner .img li").first().clone();
    $(".banner .img").append(clone);
    var size=$(".banner .img li").length;
    $(".banner .num li").first().addClass("on");
    $(".btn_l").click(function(){
        i++;
        if(i==size){
            $(".banner .img").css({left:0});
            i=1;
        }
        $(".banner .img").first().animate({left:-i*300},500);
        $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
    })
    $(".btn_r").click(function(){
        i--;
        if(i==-1){
            $(".banner .img").css({left:-(size-1)*300});
            i=size-2;
        }
        $(".banner .img").first().animate({left:-i*300},500);
        $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
    })
})