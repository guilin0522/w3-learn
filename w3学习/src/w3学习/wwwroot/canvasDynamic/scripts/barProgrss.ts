var element = <HTMLCanvasElement>document.getElementById("canvas");
var ctx = element.getContext("2d");
var w = 600, h = 100;
var count = 0;
var parcleNumber = 25;
var parcles = [];

element.width = w;
element.height = h;

function reset() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "#171814";
    ctx.fillRect(25, 80, 350, 25);
};
function progressBar() {
    this.widths = 0;
    this.hue = 0;

    this.draw = function () {
        ctx.fillStyle = 'hsla(' + this.hue + ', 100%, 40%, 1)';
        ctx.fillRect(25, 80, this.widths, 25);
        var grad = ctx.createLinearGradient(0, 0, 0, 0);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(1, "rgba(0,0,0,0.5)");
        ctx.fillStyle = grad;
        ctx.fillRect(25, 80, this.widths, 25);
    }
}

let bar = new progressBar();

function particle() {
    this.x = 23 + bar.widths;
    this.y = 100;
    this.mx = Math.random()+1;
    this.my = 1 + Math.random() * 3;
    this.down = false;
    this.draw = function () {
        ctx.fillStyle = 'hsla(' + (bar.hue + 0.3) + ', 100%, 40%, 1)';
        var size = Math.random() * 5;
        ctx.fillRect(this.x, this.y, size, size);
    }
}

function update() {
    for (var i = 0; i < parcles.length; i++) {
        var p = parcles[i];
        p.x -= p.mx;
        if (p.down == true) {
            p.my += 0.1;
            p.y += p.my;
            
        } else {
            if (p.my < 0) {
                p.down = true;
                p.my += 0.1;
                p.y += p.my;
            } else {
                p.y -= p.my;
                p.my -= 0.1;
            }
        }
        p.draw();
    }
}
function draw() {
    reset();
    
    count++;
    bar.widths += 2;
    bar.hue += 0.8;
    if (bar.widths > 350) {
        if (count > 500) {
            reset();
            bar.widths = 0;
            bar.hue = 0;
            count = 0;
            parcles = []
        } else {
            bar.widths = 351;
            bar.hue = 126;
            bar.draw();
        }
        
    } else{
        bar.draw();
        for (var i = 0; i < parcleNumber; i+=10){
            parcles.push(new particle());
        }
    }
    console.log(parcles);
    update();
  
}

function animloop() {
    draw();
    requestAnimationFrame(animloop);
}

animloop();