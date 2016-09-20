var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var typescript;
(function (typescript) {
    function sumMatrix(matrix) {
        var sum = 0;
        for (var i = 0; i < matrix.length; i += 2) {
            var currentRow = matrix[i];
            for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
                sum += currentRow[i_1];
            }
        }
        return sum;
    }
    console.log(sumMatrix([[1, 9, 4], [1, 9, 5, 7], [1, 3, 5, 6]]));
    var _loop_1 = function(i) {
        setTimeout(function () { console.log(i); }, 100 * i);
    };
    for (var i = 0; i < 10; i++) {
        _loop_1(i);
    }
    function createSquare(config) {
        // ...
        return null;
    }
    var mySquare = createSquare({ color: "red" });
    var Animal = (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Dog = (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            _super.apply(this, arguments);
        }
        return Dog;
    }(Animal));
    var colorList = ["red", "blue", "green", "yellow"];
    function testArray() {
        $.each(colorList, function (key, val) { console.log(key + "=" + val); });
        $(colorList).each(function (key, val) { console.log(key + "=" + val); });
    }
    testArray();
    var Creature = (function () {
        function Creature(theName) {
            this.name = theName;
        }
        Creature.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 0; }
            console.log(this.name + " moved " + distanceInMeters + "m.");
        };
        return Creature;
    }());
    var Snake = (function (_super) {
        __extends(Snake, _super);
        function Snake() {
            _super.apply(this, arguments);
        }
        return Snake;
    }(Creature));
    var Horse = (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            _super.call(this, name);
        }
        Horse.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 45; }
            console.log("Galloping...");
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Horse;
    }(Creature));
    var sam = new Snake("Sammy the Python");
    var tom = new Horse("Tommy the Palomino");
    var hh = new Creature("John");
    sam.move(21);
    tom.move(34);
    var passcode = "secret passcode";
    var Employee = (function () {
        function Employee() {
        }
        Object.defineProperty(Employee.prototype, "fullName", {
            get: function () {
                return this._fullName;
            },
            set: function (newName) {
                if (passcode && passcode == "secret passcode") {
                    this._fullName = newName;
                }
                else {
                    console.log("Error: Unauthorized update of employee!");
                }
            },
            enumerable: true,
            configurable: true
        });
        return Employee;
    }());
    var employee = new Employee();
    employee.fullName = "Bob Smith";
    var fullName = employee.fullName;
    if (employee.fullName) {
        alert(employee.fullName);
    }
    var Grid = (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDist = (point.x - Grid.origin.x);
            var yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        };
        Grid.origin = { x: 0, y: 0 };
        return Grid;
    }());
    var grid1 = new Grid(1.0); // 1x scale
    var grid2 = new Grid(5.0); // 5x scale
    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    var deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            }.bind(this);
        }
    };
    var cardPicker = deck.createCardPicker();
    var pickedCard = cardPicker();
    alert("card: " + pickedCard.card + " of " + pickedCard.suit);
    var Status;
    (function (Status) {
        Status[Status["Ready"] = 0] = "Ready";
        Status[Status["Waiting"] = 1] = "Waiting";
    })(Status || (Status = {}));
    ;
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Blue"] = 1] = "Blue";
        Color[Color["Green"] = 2] = "Green";
    })(Color || (Color = {}));
    ;
    var status = Status.Waiting;
    alert(status);
})(typescript || (typescript = {}));
