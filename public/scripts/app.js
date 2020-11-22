'use strict';

// arguments object - no longer bound with arrow functions
// this keyword
var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1, 1, 1, 10001));

var user = {
    name: 'Michael',
    cities: ['philli', 'new york', 'dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        // const that = this
        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

console.log(user.printPlacesLived());

// Challenge area

var multiplier = {
    // array of numbers, that we want to multiply
    numbers: [2, 4, 6],
    // multiply by, is a single number
    multiplyBy: 3,
    // multiply - return a new array where the numbers have been multiplied
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
