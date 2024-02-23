$(document).ready(function(){

    function playSound() {
        var audio = $("#clickSound")[0];
        audio.play();
    }

    /*
    $(document).mousemove(function(e){
        var x_dir = e.pageX;
        var y_dir = e.pageY;
        var angle = Math.atan2(y_dir - window.innerHeight / 2, x_dir - window.innerWidth / 2) * (180 / Math.PI);

        $(".bulb").css({
            "left": x_dir + "px",
            "top": y_dir + "px",
            "transform": "rotate(" + angle + "deg)"
        });
        
        $(".connection").css({
            "transform": "rotate(" + angle + "deg)"
        })
    })
*/
    $(".btn").click(function(){
        playSound()
        $(".bulb").toggleClass("on");
        $("body").toggleClass("on");
        if ($(".bulb").hasClass("on")) {
            $(".bulb").css("--before-bg-color", "#fff");
        } else {
            $(".bulb").css("--before-bg-color", "");
        }
    });
});
