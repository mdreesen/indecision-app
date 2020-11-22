var nameVar = 'Michael';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Michael';
nameLet = 'julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName
}

const petName = getPetName();

console.log(petName)

// block scoping
// bound to code blocks
const fullName = 'Michael Dreesen';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName);