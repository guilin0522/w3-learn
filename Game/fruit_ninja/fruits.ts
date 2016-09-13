
let element = <HTMLCanvasElement>document.getElementById("view");
let ctx = element.getContext("2d");
let w = 640;
let h = 480;
element.width = w;
element.height = h;
let counter = 0;
class ImageDesc {
    update() {
    };

    image: HTMLImageElement;
    angle = 0;
    direction = 0;
    center = false;

    constructor(
        imageUrl: string,
        public x: number,
        public y: number,
        public width: number,
        public height: number) {
        this.image = new Image();
        this.image.src = imageUrl;
    }

    static create(url: string, x: number, y: number, width?: number, height?: number) {
        return new ImageDesc(url, x, y, width, height);
    }

    static createWH(url: string, width: number, height: number) {
        return new ImageDesc(url, 0, 0, width, height);
    }
}

class RotateImageDesc extends ImageDesc {
    center = true;
    update() {
        this.angle += 0.01;
    };

    static create(url: string, x: number, y: number, width: number, height: number) {
        return new RotateImageDesc(url, x, y, width, height);
    }
}

class BoomFlame extends ImageDesc {
    angle = Math.random() * 360 / 180;
    center = true;
    direction = Math.random() > 0.5 ? 1 : -1;
    update() {
        
        let b = this.y - Math.tan(this.angle) * this.x;
        this.x = this.x + this.direction*5;
        this.y = Math.tan(this.angle) * this.x + b;

        if (this.x < 550  && this.y < 410 && this.x > 480 && this.y > 340) {
            this.width = this.width -10;
            this.height = this.height - 0.2;
        } else {
            this.width = 0;
            this.height = 0;
            
        }
    };

    static createBoom(x: number, y: number) {
        return new BoomFlame("../images/flash.png", x, y, 50, 8);
    }
}

let imgs = [
    ImageDesc.createWH("../images/background.jpg", 640, 480),
    ImageDesc.create("../images/home-mask.png", 0, 0, 640, 180),
    ImageDesc.create("../images/logo.png", 20, 10, 283, 133),
    ImageDesc.create("../images/ninja.png", 320, 40, 243, 79),
    ImageDesc.create("../images/home-desc.png", 20, 130, 158, 89),
    RotateImageDesc.create("../images/dojo.png", 120, 350, 174, 174),
    RotateImageDesc.create("../images/fruit/peach.png", 120, 350, 60, 54),
    RotateImageDesc.create("../images/new-game.png", 350, 300, 194, 194),
    RotateImageDesc.create("../images/fruit/sandia.png", 350, 300, 98, 82),
    RotateImageDesc.create("../images/quit.png", 550, 400, 138, 138),
    ImageDesc.create("../images/fruit/boom.png", 515, 360, 64, 66),

];
let particles = createArray(5).map(x => BoomFlame.createBoom(520, 370));
console.log(particles);

function createArray(arraySize: number): Array<void> {
    return Array.apply(null, Array(arraySize));
}

let down = false;
addEventListener("mousedown", function (e) {
    let a = e.offsetX;
    console.log("a:"+a);
    down = true;
});
addEventListener("mouseup", function (e) {
    let b = e.offsetX;
    console.log("b:" + b);
    down = false;
})

addEventListener("mousemove", function (e) {
    if (down == false) return;

    console.log(e.offsetX);
})



function drawImage(img: ImageDesc) {
    ctx.save();
    ctx.translate(img.x, img.y);
    ctx.rotate(img.angle);
    if (img.center) {
        ctx.translate(-img.width / 2, -img.height / 2);
    }
    ctx.drawImage(img.image, 0, 0, img.width, img.height);
    ctx.restore();
}

function gameInital() {
    counter += 1;

    if (counter < 5) {
        particles.push(BoomFlame.createBoom(520, 370));
    } else {
        counter = 0;
        particles = [];
    }

    for (let img of imgs) {
        img.update();
        drawImage(img);
    }

    for (let particle of particles) {
        particle.update();
        drawImage(particle);
    }
}

function render() {
    gameInital();
    requestAnimationFrame(() => render());
}
render();
