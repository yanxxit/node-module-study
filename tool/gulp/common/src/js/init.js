// rem终端适配
var w = window.innerWidth;
    w = (w >= 540)? 540 : w;
    document.documentElement.style.fontSize = (w/720)*100 + "px";
$(window).resize(function(){
    var w = window.innerWidth;
        w = (w >= 540) ? 540 : w;
        document.documentElement.style.fontSize = (w/720)*100 + "px";
    });
// screen旋转reload
window.addEventListener("orientationchange", function() {
    window.location.reload();
}, false);
