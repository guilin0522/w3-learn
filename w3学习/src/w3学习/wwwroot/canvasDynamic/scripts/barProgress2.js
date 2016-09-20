var barProgress;
(function (barProgress) {
    var elm = document.getElementById("canvas");
    var context = elm.getContext("2d");
    var width = 600, height = 100;
    elm.width = width;
    elm.height = height;
    var barModule = { x: 0, hue: 0 };
    var particleModules = Array();
    var counter = 0;
    var particleAmount = 25;
    // moulde 
    function barModules() {
        barModule.x += 2;
        barModule.hue += 0.8;
        for (var j = 0; j < particleAmount; j += 10) {
            var block = { x: 0, y: 100, down: false, moveX: 0, moveY: 0 };
            block.x = 23 + barModule.x;
            block.y = 100;
            block.moveX = Math.random() + 1;
            block.moveY = Math.random() * 3 + 1;
            particleModules.push(block);
        }
    }
    function particleModule() {
        for (var i = 0; i < particleModules.length; i++) {
            var p = particleModules[i];
            p.x -= p.moveX;
            if (p.down == true) {
                p.moveY += 0.1;
                p.y += p.moveY;
            }
            else {
                if (p.moveY < 0) {
                    p.down = true;
                    p.moveY += 0.1;
                    p.y += p.moveY;
                }
                else {
                    p.y -= p.moveY;
                    p.moveY -= 0.1;
                }
            }
        }
    }
    function moudle() {
        initial();
        counter++;
        if (barModule.x > 350) {
            if (counter > 500) {
                initial();
                barModule.x = 0;
                barModule.hue = 0;
                particleModules = [];
                counter = 0;
            }
            else {
                barModule.x = 351;
                barModule.hue = 126;
            }
        }
        else {
            barModules();
        }
        particleModule();
    }
    //view 
    function initial() {
        context.fillStyle = "white";
        context.fillRect(0, 0, width, height);
        context.fillStyle = "black";
        context.fillRect(25, 80, 350, 25);
    }
    function barShow() {
        context.fillStyle = 'hsla(' + barModule.hue + ', 100%, 40%, 1)';
        context.fillRect(25, 80, barModule.x, 25);
        var gradient = context.createLinearGradient(0, 0, 130, 0);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(1, "rgba(0,0,0,0.5)");
        context.fillStyle = gradient;
        context.fillRect(25, 80, barModule.x, 25);
    }
    function particleShow() {
        for (var _i = 0, particleModules_1 = particleModules; _i < particleModules_1.length; _i++) {
            var p = particleModules_1[_i];
            context.fillStyle = 'hsla(' + barModule.hue + ', 100%, 40%, 1)';
            var particleSize = Math.random() * 5;
            context.fillRect(p.x, p.y, particleSize, particleSize);
        }
    }
    function view() {
        barShow();
        particleShow();
    }
    // controller 
    function controller() {
        moudle();
        view();
        requestAnimationFrame(controller);
    }
    controller();
})(barProgress || (barProgress = {}));
