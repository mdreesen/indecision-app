// arguments object - no longer bound with arrow functions
// this keyword
const add = function (a, b) {
    console.log(arguments)
    return a+ b
}

console.log(add(55, 1, 1, 1, 1,10001));

const user = {
    name: 'Michael',
    cities: ['philli', 'new york', 'dublin'],
    printPlacesLived() {

        // const that = this
         return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
};

console.log(user.printPlacesLived())

// Challenge area

const multiplier = {
    // array of numbers, that we want to multiply
    numbers: [2, 4, 6],
    // multiply by, is a single number
    multiplyBy: 3,
    // multiply - return a new array where the numbers have been multiplied
    multiply() {
        return this.numbers.map((number) => {
            return number * this.multiplyBy
        })
    }
}

console.log(multiplier.multiply())