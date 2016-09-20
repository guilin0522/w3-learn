var element = document.getElementById("canvas");
var ctx = element.getContext("2d");
//Set location coordinates
var Rectangle = function (cfg) {
    //Record the animation running state
    //I use array not a single variable for shapes have "Move","Draw","FadeIn","FadeOut" and so on
    this.animationStatus = new Array();
    //Set default parameters
    this.width = 50;
    this.height = 80;
    this.x = 100;
    this.y = 50;
    this.backColor = "Red";
    this.edgeColor = "Black";
    //Set customize parameters
    this.setArguments(cfg);
};
Rectangle.prototype.setArguments = function (cfg) {
    for (var x in cfg)
        this[x] = cfg[x];
};
Rectangle.prototype.draw = function () {
    ctx.fillStyle = this.backColor; //Set backColor as pen color 
    ctx.fillRect(this.x, this.y, this.width, this.height); //Draws a filled rectangle
    ctx.strokeStyle = this.edgeColor; //Set edgeColor as pen color
    ctx.strokeRect(this.x, this.y, this.width, this.height); //Draws a rectangular outline
};
Rectangle.prototype.nextPosition = function () {
    var x1 = this.x;
    var y1 = this.y;
    var x2 = this.aim_x;
    var y2 = this.aim_y;
    //Calculate the next location coordinates from (x1,y1) to (x2,y2) step by moveSpeed
    if (x1 != x2) {
        var k = (y1 - y2) / (x1 - x2);
        var b = y1 - k * x1;
        x1 += this.moveSpeed * (x2 - x1) / Math.abs(x2 - x1);
        y1 = k * x1 + b;
    }
    else if (y1 != y2)
        y1 += this.moveSpeed * (y2 - y1) / Math.abs(y2 - y1);
    //Determine whether arrives and set the new location coordinates
    if (Math.abs(x1 - x2) < this.moveSpeed && Math.abs(y1 - y2) < this.moveSpeed) {
        this.x = x2;
        this.y = y2;
        this.animationStatus["Move"] = "Stop";
    }
    else {
        this.x = x1;
        this.y = y1;
    }
};
var ShapeOnCanvas = new Array(); //A stack to save shapes that on canvas
var staticShape = Rectangle;
staticShape.draw();
ShapeOnCanvas.push(staticShape); //Push it into the stack after drawing
var moveShape = new Rectangle //Create a rectangle with customize parameters
({
    x: 10,
    y: 10,
    //Moving target location
    aim_x: 400,
    aim_y: 300,
    height: 40,
    backColor: "Yellow",
    moveSpeed: 3,
});
moveShape.draw();
ShapeOnCanvas.push(moveShape); //Push it into the stack after drawing
function move() {
    moveShape.animationStatus["Move"] = "new";
    timer = setInterval(function () {
        if (moveShape.animationStatus["Move"] == "new") {
            ctx.clearRect(0, 0, 600, 400); //Clear the canvas
            moveShape.nextPosition(); //Set new (x,y) 
            for (var i = 0; i < ShapeOnCanvas.length; i++)
                ShapeOnCanvas[i].draw(); //Draw all shapes that on canvas
        }
        else
            clearInterval(timer); //Stop setInterval() when it arrives
    }, 24);
}
