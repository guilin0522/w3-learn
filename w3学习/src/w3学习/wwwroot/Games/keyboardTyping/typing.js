var allNum = $("#allNum").val();
var errNum = 0;
var typingCount = 0;
var specialSymbol = "";
var str = "~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-=[];'\\<>?".split("");
var RandomValue = [];
var uTime = 0;
var statusCountTime = false;
$("#allNum").blur(function () {
    allNum = $("#allNum").val();
    console.log(allNum);
});
function initRandomValue(count) {
    specialSymbol = "";
    RandomValue = ["","","",""];
    for (var i = 4; i < count; i++) {
        var index = Math.floor(Math.random() * 45);
        RandomValue.push(str[index]);
    }
}
function changeRandomValue() {
    var index = Math.floor(Math.random() * 45);
    var len = RandomValue.length;
    for (var i = 0; i < len - 1; i++) {
        RandomValue[i] = RandomValue[i + 1];
    }
    RandomValue[len - 1] = str[index];
}
function startCountTime() {
    $("#result").text("结果：0");
    $("#allNum").val(allNum);
    $("#state").text("停止(space)");
    initRandomValue(10);
    timer = setInterval(function () {
        uTime += 0.1;
        $("#uTime").text("时间：" + uTime.toFixed(1) + "秒");
    }, 100);
 
}
function endCountTime() {
    clearInterval(timer);
    $("#state").text("开始(space)");
    var speed = (typingCount /uTime).toFixed(2);
    if (allNum-typingCount >=0) {
        $("#result").text("未完成：每秒" +speed +"个错误"+errNum+"个");
    }else{
        $("#result").text("完成：每秒" +speed +"个错误"+errNum+"个");
    }
    uTime = 0;
    typingCount = 0;
    errNum = 0;

}
function isSpecialSymbol(symbol){
    switch (symbol){
        case "~":
            specialSymbol = "À";
            break;
        case "-":
            specialSymbol = "½";
            break;
        case "=":
            specialSymbol = "»";
            break;
        case "[":
            specialSymbol = "Û";
            break;
        case "]":
            specialSymbol = "Ý";
            break;
        case ";":
            specialSymbol = "º";
            break;
        case "'":
            specialSymbol = "Þ";
            break;
        case "\\":
            specialSymbol = "Ü";
            break;
        case "<":
            specialSymbol = "¼";
            break;
        case ">":
            specialSymbol = "¾";
            break;
        case "?":
            specialSymbol = "¿";
            break;
        default:
            specialSymbol = symbol;
            break;
    }
}
function render(value) {
    $(".keyCont a").css('background-color', '#fff').css('color', '#8DE2F0');
    var shouldTyping = $(".showCont ul li").eq(4).text();
    isSpecialSymbol(shouldTyping);
    var valueId = "#k" + value;
    if (value === specialSymbol) {
        $(valueId).css('background-color', '#65e2a9').css('color', '#fff');
        changeRandomValue();
        typingCount += 1;
        $("#allNum").val(allNum-typingCount);

    } else {
        $(valueId).css('background-color', '#ff5d5d').css('color', '#fff');
        if(value.charCodeAt(0) !=32){
            errNum +=1;
        }
    }
    $(".showCont ul").find("li").remove();
    RandomValue.forEach(function (e, i) {
        $(".showCont ul").append("<li>" + e + "</li>");
    });
}
document.body.addEventListener("keydown", function (e) {
    if (e.keyCode == 32) {
        statusCountTime = !statusCountTime;
        if (statusCountTime) {
            startCountTime();
        } else {
            endCountTime();
        }
    }
    if(allNum - typingCount > 0){
        if (statusCountTime) {
            render(String.fromCharCode(e.keyCode));
        }
    }else{
        endCountTime();
        alert("恭喜，已完成");
        statusCountTime = !statusCountTime;
    }
});