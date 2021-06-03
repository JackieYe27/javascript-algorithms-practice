class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores=[];
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1
        if(this.tardies >= 3){
            return 'YOU DIE'
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} time(s)`
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }
    calcAvg() {
        let sum = this.scores.reduce(function(a,b){return a+b});
        return sum/this.scores.length;
    }
    static enrollStudents() {
        return 'Enrolling students'
    }
}

let emil = new Student('Emil', 'Katz','3');


////////////////////////////////////////////////////////////////////////////////////////////////
// Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

// Implement the ParkingSystem class:

// ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.
// bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. 
// carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType. 
// If there is no space available, return false, else park the car in that size space and return true.

class ParkingSystem {
    constructor(big, medium, small) {
        this.spots = {
            1:big,
            2:medium,
            3:small
        }
    }
    addCar(carType) {
       if (this.spots[carType] === 0) return false;
        this.spots[carType]--;
        return true; 
    }
}