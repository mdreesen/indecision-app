// car
// make
// model
// vin
// getDescription - method we can have access to on the car




class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return "hi. I am " + this.name;
        return `HI. who I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} years(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        // super calls the parent function
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.location}`
        }

        return greeting;
    }
}

const me = new Traveler('Michael Dreesen', 26, 'Kalispell');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());