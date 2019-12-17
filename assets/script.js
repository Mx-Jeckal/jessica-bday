function bigone() {
    var pickle = prompt("How many pickles have you eaten today?");

    if (pickle != 4) {
        console.log(pickle);
        alert("that's not a healthy amount");
    } else {
        console.log('how bout dat')
    }
};

// psuedo code
// button on page if clicked launch a loop of questions
// if a key is pressed leave the mini game
{
    var btn = document.querySelector('#button3');

    btn.textContent = 'Pickle game';

    btn.addEventListener("click", bigone);
}


{
    var btn1 = document.querySelector('#button1');

    btn1.textContent = 'Car game';

    btn1.addEventListener("click", carGame)
};

function carGame() {
    // VARIABLES
    // ==========================================================================
    var letter;

    var car = {
        make: "Honda",
        model: "Fit",
        color: "Blue Raspberry",
        mileage: 3000,
        isWorking: true,

        driveToWork: function() {
            alert("Old Mileage: " + this.mileage);

            this.mileage = this.mileage + 8;

            alert("New mileage: " + this.mileage);
        },

        driveAroundWorld: function() {
            alert("Old Mileage: " + this.mileage);

            this.mileage = this.mileage + 24000;

            alert("New Mileage: " + this.mileage);
            alert("Car needs a tuneup!");

            this.isWorking = false;
        },

        getTuneUp: function() {
            alert("Car is ready to go!");
            this.isWorking = true;
        },

        honk: function() {
            alert("Honk! Honk!");
        }
    };

    // FUNCTIONS
    // ==============================================================================

    // TO DO: Log all of our car's current stats to the console.
    function reWriteStats() {
        console.log(car.make, car.model, car.color, car.mileage, car.isWorking);
    };
    // MAIN PROCESS
    // ==============================================================================

    // A while loop makes more sense here than a for loop, because we don't know how long the user will want to play the game
    // This loop will end when the user presses Cancel, thus setting the letter variable to "null"
    while (letter !== null) {
        // Prompt user to input a letter
        letter = prompt("Type 'h' to honk, 'd' to drive to work, 'w' to drive around the world, or 't' to get a tuneup.");

        // TO DO: Call the different car methods
        if (letter === 'h') {
            car.honk()
        };
        if (letter === 'd') {
            car.driveToWork()
        };
        if (letter === 'w') {
            car.driveAroundWorld()
        };
        if (letter === 't') {
            car.getTuneUp()
        };
    }
}