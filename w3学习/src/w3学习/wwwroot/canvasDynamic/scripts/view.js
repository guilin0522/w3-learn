var element = document.getElementById("canvas");
var ctx = element.getContext("2d");
element.width = innerWidth;
element.height = innerHeight;
var startTime = new Date().getTime();
var rect = {
    x: 200,
    y: 200,
    angle: 0,
    speed: 0.1,
    color: "hsl(" + 120 + ", " + 100 + "%, " + 50 + "%)"
};
var sticks = [rect];
function render() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (var _i = 0, sticks_1 = sticks; _i < sticks_1.length; _i++) {
        var stick = sticks_1[_i];
        stick.angle += 0.1;
        ctx.save();
        ctx.translate(stick.x, stick.y);
        ctx.rotate(stick.angle);
        ctx.translate(-25, -25);
        ctx.fillStyle = stick.color;
        ctx.fillRect(0, 0, 50, 50);
        ctx.restore();
    }
    requestAnimationFrame(render);
}
function animate(initalValue, finalValue, duration, setter) {
    var startTime = new Date().getTime();
    var ok = $.Deferred();
    function move() {
        var currentTime = new Date().getTime();
        var eslapeTime = currentTime - startTime;
        var distance = finalValue - initalValue;
        var speed = distance / duration;
        //speed > 0 ? speed : speed *= -1;
        var progressRate = eslapeTime / duration;
        var eslapeWay = speed * eslapeTime;
        var currentPosition = initalValue + eslapeWay;
        if (progressRate < 1) {
            setter(currentPosition);
        }
        else {
            setter(finalValue);
        }
        requestAnimationFrame(move);
        ok.resolve();
    }
    move();
    return ok.promise();
}
function animateXY(starX, startY, endX, endY) {
    var parameter1 = animate(starX, endX, 1000, function setter(v) {
        rect.x = v;
    });
    var parameter2 = animate(startY, endY, 1000, function setter(v) {
        rect.y = v;
    });
}
render();
var startX, startY;
document.body.addEventListener("click", function (e) {
    startX = rect.x;
    startY = rect.y;
    animateXY(startX, startY, e.x, e.y);
});
