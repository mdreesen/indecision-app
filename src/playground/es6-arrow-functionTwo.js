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
    printPlacesLived: function () {

        // const that = this
        console.log(this.name)
        console.log(this.cities);

        // arrow function does not bind "this"
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city)
        })
    }
};

user.printPlacesLived()