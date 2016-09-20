
namespace typescript {

    
    function sumMatrix(matrix: number[][]) {
        let sum = 0;
        for (let i = 0; i < matrix.length; i += 2) {
            var currentRow = matrix[i];
            for (let i = 0; i < currentRow.length; i++) {
                sum += currentRow[i];
            }
        }

        return sum;
    }
    console.log(sumMatrix([[1, 9, 4], [1, 9, 5, 7], [1, 3, 5, 6]]));

    for (let i = 0; i < 10; i++) {
        setTimeout(function () { console.log(i); }, 100 * i);
    }


    interface SquareConfig {
        color?: string;
        width?: number;
    }

    function createSquare(config: SquareConfig): { color: string; area: number } {
        // ...
        return null

    }

    let mySquare = createSquare({ color: "red" });


    class Animal {
        name: string;
    }
    class Dog extends Animal {
        breed: string;
    }

    // Error: indexing with a 'string' will sometimes get you a Dog!
    interface NotOkay {
        [x: string]: Animal;
        [y: number]: Dog;
    }
    let colorList: Array<any> = ["red", "blue", "green", "yellow"];
    function testArray(): void {
        $.each(colorList, function (key, val) { console.log(key + "=" + val); });
        $(colorList).each(function (key, val) { console.log(key + "=" + val); });
    } 

    testArray();

    class Creature {
        name: string;
        constructor(theName: string) { this.name = theName }
        move(distanceInMeters: number = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    class Snake extends Creature {
        
    }

    class Horse extends Creature {
        constructor( name: string) { super(name); }
        move(distanceInMeters = 45) {
            console.log("Galloping...");
            super.move(distanceInMeters);
        }
    }

    let sam = new Snake("Sammy the Python");
    let tom = new Horse("Tommy the Palomino");
    let hh = new Creature("John");
    sam.move(21);
    tom.move(34);


    let passcode = "secret passcode";

    class Employee {
        private _fullName: string;

        get fullName(): string {
            return this._fullName;
        }

        set fullName(newName: string) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        }
    }

    let employee = new Employee();
    employee.fullName = "Bob Smith";
    let fullName = employee.fullName;
    if (employee.fullName) {
        alert(employee.fullName);
    }


    class Grid {
        static origin = { x: 0, y: 0 };
        calculateDistanceFromOrigin(point: { x: number; y: number; }) {
            let xDist = (point.x - Grid.origin.x);
            let yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
        constructor(public scale: number) { }
    }

    let grid1 = new Grid(1.0);  // 1x scale
    let grid2 = new Grid(5.0);  // 5x scale

    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));


    let deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            return function () {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            }.bind(this);
        }
    }

    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();

    alert("card: " + pickedCard.card + " of " + pickedCard.suit);


    enum Status { Ready, Waiting };
    enum Color { Red, Blue, Green };

    let status = Status.Waiting;
    alert(status);

}