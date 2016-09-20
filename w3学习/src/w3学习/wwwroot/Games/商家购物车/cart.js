$(".quick_links_panel li").mouseover(function(){
        $(this).find("div").css("visibility","visible");
        $(this).find("div.mp_tooltip").stop().animate({"left":-92},300);
    })
    .mouseout(function(){
        $(this).find("div:not('.span')").css("visibility","hidden");
        $(this).find("div.mp_tooltip").stop().animate({"left":-121},300);
    });
var cartNum = 0;
var flyFinish = false;
var element = $(".quick_links_pop");
var popDisplay = false;
var type="";
$(".add_cart_large").click(function(){
    if(flyFinish) return;
    flyFinish = !flyFinish;
    cartNum += 1;
    var x = $(this).offset().left;
    var y = $(this).offset().top;
    var cartX = $(".span").offset().left;
    var cartY = $(".span").offset().top;
    $(".fly_item").css({"left":x,"top":y,"visibility":"visible"})
                .stop().animate({
                                    "left":cartX,"top":cartY},
                                {
                                    duration:1000,
                                    complete:function(){
                                        $(".cart_num").text(cartNum);
                                        $(".fly_item").css("visibility","hidden");
                                        flyFinish = !flyFinish;
                                        $(".myContent").remove();
                                        element.append("<div class='myContent'></div>");
                                        addPopContent("message_list");
                                    }
                                });
});

document.getElementById("quick_links").addEventListener("click",function(e){
    var prevClass = type;
    type = $(e.path[1]).attr("class")||$(e.path[0]).attr("class");
    if(prevClass === type|| prevClass ===""){
        popDisplay = !popDisplay;
    }else{
        popDisplay = true;
    }
    $(".myContent").remove();
    console.log(type);
    element.append("<div class='myContent'></div>");
    if(popDisplay){
        if(type==="my_qlinks" || type ==="login_btnbox") return;
        element.show()
            .animate({"left":0},400)
            .removeClass()
            .addClass("quick_links_pop quick_"+type);
        addPopContent(type);
        if(cartNum ==0){
            $(".cart_handler").hide();
        }else{
            $(".cart_handler").show();
        }
    }else{
        element.animate({"left":"280px"},400)
            .hide();
    }
});

element.delegate("a.ibar_closebtn","click",function(){
    popDisplay = !popDisplay;
    element.hide();
});

function addPopContent(type){
    var title;
    switch (type){
        case "message_list":
            title ="我的购物车";
            break;
        case "history_list":
            title ="我的资产";
            break;
        case "mpbtn_histroy":
            title ="我的足迹";
            break;
        case "mpbtn_wdsc":
            title ="收藏的产品";
            break;
        case "mpbtn_recharge":
            title ="手机充值";
            break;
        default:
            title = "";
            break;
    }
    var pluginTitle = $(".ibar_plugin_title")|| "";
    var closeBtn = $(".ibar_closebtn") || "";
    pluginTitle.remove();
    closeBtn.remove();
    var popContent = $(".myContent");
    var contentTitle = '<a href="javascript:;" class="ibar_closebtn" title="关闭"></a>' +
        '<div class="ibar_plugin_title"><h3>'+title+'</h3></div>';
    popContent.append(contentTitle);
    if(type ==="message_list"){
        var ibarHead = '<div class="ibar-history-head">共'+cartNum+'件产品<a href="#">清空</a></div>';
        popContent.append(ibarHead);
        var myGoods = '<li class="imp_item"><div class="cart_item_pic"><a href="#"><img src=' +
            '"images/xiez.jpg' +
            '"></a></div><div class="cart_item_desc"><a href="#" class="cart_item_name">夏季透气真皮豆豆鞋反绒男士休闲鞋韩版磨砂驾车鞋英伦船鞋男鞋子</a>' +
            '<div class="cart_item_sku"><span>尺码：38码（精工限量版）</span></div><div class="cart_item_price">' +
            '<span class="cart_price">￥700.00</span></div></div></li>';
        for(var i = 0;i <cartNum;i++){
            popContent.append(myGoods);
        }
        var car_handler = '<div class="cart_handler"><div class="cart_handler_header">' +
            '<span class="cart_handler_right">总价钱为:￥569.00</span></div>' +
            '<a href="#" class="cart_go_btn" target="_blank">去购物车结算</a></div>';
        popContent.append(car_handler);
    }
    if(type ==="history_list"){
        var myProperty = '<div class="pop_panel">' +
            '<div class="ibar_plugin_content">' +
            '<div class="ia-head-list">' +
            '<a href="#" target="_blank" class="pl">' +
            '<div class="num">0</div>' +
            '<div class="text">优惠券</div></a>' +
            '<a href="#" target="_blank" class="pl">' +
            '<div class="num">0</div>' +
            '<div class="text">红包</div></a>' +
            '<a href="#" target="_blank" class="pl money">' +
            '<div class="num">￥0</div>' +
            '<div class="text">余额</div></a></div>' +
            '<div class="ga-expiredsoon">' +
            '<div class="es-head">即将过期优惠券</div>' +
            '<div class="ia-none">您还没有可用的现金券哦！</div></div>' +
            '<div class="ga-expiredsoon">' +
            '<div class="es-head">即将过期红包</div>' +
            '<div class="ia-none">您还没有可用的红包哦！</div></div></div></div>';
        popContent.append(myProperty);

    }
    if(type ==="mpbtn_histroy"){
        var myFoots = '<div class="pop_panel">' +
            '<div class="ibar_plugin_content">' +
            '<div class="ibar-history-head">共3件产品<a href="#">清空</a></div' +
            '><div class="ibar-moudle-product">' +
            '<div class="imp_item">' +
            '<a href="#" class="pic">' +
            '<img src="images/xiez.jpg" width="100" height="100"></a>' +
            '<p class="tit"><a href="#">夏季透气真皮豆豆鞋反绒男士休闲鞋韩</a></p>' +
            '<p class="price"><em>￥</em>649.00</p>' +
            '<a href="#" class="imp-addCart">加入购物车</a></div>' +
            '<div class="imp_item">' +
            '<a href="#" class="pic">' +
            '<img src="images/xiez.jpg" width="100" height="100"></a>' +
            '<p class="tit"><a href="#">夏季透气真皮豆豆鞋反绒男士休闲鞋韩</a></p>' +
            '<p class="price"><em>￥</em>649.00</p><a href="#" class="imp-addCart">加入购物车</a></div>' +
            '<div class="imp_item"><a href="#" class="pic"' +
            '><img src="images/xiez.jpg" width="100" height="100"></a><p class="tit">' +
            '<a href="#">夏季透气真皮豆豆鞋反绒男士休闲鞋韩</a></p>' +
            '<p class="price"><em>￥</em>649.00</p>' +
            '<a href="#" class="imp-addCart">加入购物车</a></div></div></div></div>';
        popContent.append(myFoots);
    }
    if(type ==="mpbtn_wdsc"){
        var myCollect = '<div class="pop_panel">' +
            '<div class="ibar_plugin_content">' +
            '<div class="ibar-history-head">共3件产品<a href="#">清空</a></div' +
            '><div class="ibar-moudle-product">' +
            '<div class="imp_item">' +
            '<a href="#" class="pic">' +
            '<img src="images/xiez.jpg" width="100" height="100"></a>' +
            '<p class="tit"><a href="#">夏季透气真皮豆豆鞋反绒男士休闲鞋韩</a></p>' +
            '<p class="price"><em>￥</em>649.00</p>' +
            '<a href="#" class="imp-addCart">加入购物车</a></div>' +
            '<div class="imp_item">' +
            '<a href="#" class="pic">' +
            '<img src="images/xiez.jpg" width="100" height="100"></a>' +
            '<p class="tit"><a href="#">夏季透气真皮豆豆鞋反绒男士休闲鞋韩</a></p>' +
            '<p class="price"><em>￥</em>649.00</p><a href="#" class="imp-addCart">加入购物车</a></div>' +
            '<div class="imp_item"><a href="#" class="pic"' +
            '><img src="images/xiez.jpg" width="100" height="100"></a><p class="tit">' +
            '<a href="#">夏季透气真皮豆豆鞋反绒男士休闲鞋韩</a></p>' +
            '<p class="price"><em>￥</em>649.00</p>' +
            '<a href="#" class="imp-addCart">加入购物车</a></div></div></div></div>';
        popContent.append(myCollect);
    }
    if(type==="mpbtn_recharge"){
        var myRecharge = '<div class="pop_panel">' +
            '<div class="ibar_plugin_content">' +
            '<form target="_blank" class="ibar_recharge_form">' +
            '<div class="ibar_recharge-field"><label>号码</label>' +
            '<div class="ibar_recharge-fl">' +
            '<div class="ibar_recharge-iwrapper">' +
            '<input type="text" name="19" placeholder="手机号码"></div></div></div>' +
            '<div class="ibar_recharge-field"><label>面值</label>' +
            '<div class="ibar_recharge-fl"><p class="ibar_recharge-mod">' +
            '<span class="ibar_recharge-val">100</span>元</p>' +
            '<div class="ibar_recharge-vbox"><ul style="display:none;">' +
            '<li><span>10</span>元</li>' +
            '<li class="sanwe selected"><span>100</span>元</li>' +
            '<li><span>20</span>元</li>' +
            '<li class="sanwe"><span>200</span>元</li>' +
            '<li><span>30</span>元</li>' +
            '<li class="sanwe"><span>300</span>元</li>' +
            '<li><span>50</span>元</li>' +
            '<li class="sanwe"><span>500</span>元</li>' +
            '</ul></div></div></div>' +
            '<div class="ibar_recharge-btn"><input type="submit" value="立即充值"></div></form></div></div>';
        popContent.append(myRecharge);
    }
}

element.delegate(".ibar_recharge-mod","click",function(){
    $(this).next().children("ul").show();
});
element.delegate(".ibar_recharge-vbox li","click",function(){
    $(this).siblings(".selected").removeClass("selected");
    $(this).addClass("selected");
    var price = $(this).children("span").text();
    $(".ibar_recharge-val").text(price);
    $(this).parent("ul").hide();
});