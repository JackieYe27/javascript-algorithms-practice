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
}

let emil = new Student('Emil', 'Katz','3');

