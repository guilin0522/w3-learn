/**
 * Created by liguilin on 2016/9/1.
 */
$(".quick_links_panel li").mouseover(function(){
        $(this).find("div:not('.span')").css("visibility","visible")
        .find(".mp_tooltip").stop().animate({"left":-92},400);
    })
    .mouseout(function(){
        $(this).find("div:not('.span')").css("visibility","hidden")
        .find(".mp_tooltip").stop().animate({"left":-121},400);
    });






var cartNum = 0;
$(".add_cart_large").click(function(){
    cartNum += 1;
     var x = $(this).offset().left;
     var y = $(this).offset().top;
    $(".fly_item").css({"left":x,"top":y,"visibility":"visible"})
                .stop().animate({
                                    "left":1103,"top":360},
                                {
                                    duration:1000,
                                    complete:function(){
                                        $(".cart_num").text(cartNum);
                                    }
                                });
});

document.getElementById("quick_links").addEventListener("click",function(e){
    console.log(e.path[1]);
});


