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
        console.log(this.name);
        console.log(this.cities);

        // arrow function does not bind "this"
        this.cities.forEach(function (city) {
            console.log(_this.name + ' has lived in ' + city);
        });
    }
};

user.printPlacesLived();
